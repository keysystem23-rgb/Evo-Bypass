import { BypassService } from "./bypass.js";
import { services } from "./catalog.js";

const stats = {
  totalBypassed: 23387799,
  successCount: 0,
  failureCount: 0,
  serviceStats: {},
  uptime: Date.now()
};

const requestCounts = new Map();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 200;

function isRateLimited(ip) {
  const now = Date.now();
  const arr = (requestCounts.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (arr.length >= RATE_LIMIT_MAX) return true;
  arr.push(now);
  requestCounts.set(ip, arr);
  return false;
}

function corsHeaders(env) {
  return {
    "Access-Control-Allow-Origin": env.CORS_ORIGIN || "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400"
  };
}

function json(data, status = 200, env) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(env), "Content-Type": "application/json" }
  });
}

async function handleBypass(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ success: false, error: "Invalid JSON body" }, 400, env);
  }

  const { url } = body;
  if (!url) return json({ success: false, error: "URL is required" }, 400, env);

  try { new URL(url); } catch {
    return json({ success: false, error: "Invalid URL format" }, 400, env);
  }

  console.log(`[BYPASS] ${url}`);
  const result = await BypassService.bypass(url);

  if (result.success) {
    stats.totalBypassed++;
    stats.successCount++;
    stats.serviceStats[result.service] = (stats.serviceStats[result.service] || 0) + 1;
    console.log(`[SUCCESS] ${result.service}: ${result.destination}`);
  } else {
    stats.failureCount++;
    console.log(`[FAILURE] ${result.error}`);
  }

  return json(result, 200, env);
}

async function handleBulk(request, env) {
  const { urls, apiKey } = await request.json();

  if (!apiKey || apiKey !== env.API_KEY) {
    return json({ success: false, error: "Invalid or missing API key" }, 401, env);
  }
  if (!Array.isArray(urls) || urls.length === 0) {
    return json({ success: false, error: "URLs array is required" }, 400, env);
  }
  if (urls.length > 100) {
    return json({ success: false, error: "Maximum 100 URLs per request" }, 400, env);
  }

  const results = await Promise.all(urls.map(u => BypassService.bypass(u)));

  results.forEach(r => {
    if (r.success) {
      stats.totalBypassed++;
      stats.successCount++;
      stats.serviceStats[r.service] = (stats.serviceStats[r.service] || 0) + 1;
    } else {
      stats.failureCount++;
    }
  });

  const successful = results.filter(r => r.success).length;
  const failed = results.length - successful;

  return json({
    success: true,
    results,
    total: results.length,
    successful,
    failed,
    successRate: ((successful / results.length) * 100).toFixed(2) + "%"
  }, 200, env);
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const method = request.method;

    if (method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders(env) });
    }

    if (path.startsWith("/api/")) {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";

      if (path === "/api/bypass" && isRateLimited(ip)) {
        return json({ success: false, error: "Too many requests. Please try again later." }, 429, env);
      }

      if (path === "/api/health" && method === "GET") {
        return json({
          status: "operational",
          uptime: Math.floor((Date.now() - stats.uptime) / 1000),
          timestamp: new Date().toISOString(),
          version: "2.0.0"
        }, 200, env);
      }

      if (path === "/api/stats" && method === "GET") {
        const total = stats.successCount + stats.failureCount;
        return json({
          success: true,
          stats: {
            total: stats.totalBypassed,
            success: stats.successCount,
            failure: stats.failureCount,
            successRate: total > 0 ? ((stats.successCount / total) * 100).toFixed(2) + "%" : "0%",
            services: stats.serviceStats,
            uptime: Math.floor((Date.now() - stats.uptime) / 1000)
          }
        }, 200, env);
      }

      if (path === "/api/bypass" && method === "POST") {
        return handleBypass(request, env);
      }

      if (path === "/api/bypass/bulk" && method === "POST") {
        return handleBulk(request, env);
      }

      if (path === "/api/supported" && method === "GET") {
        return json({
          success: true,
          services,
          total: services.length,
          categories: [...new Set(services.map(s => s.category))]
        }, 200, env);
      }

      if (path === "/api/test" && method === "GET") {
        return json({ success: true, message: "API is working!", timestamp: new Date().toISOString() }, 200, env);
      }

      return json({ success: false, error: "Endpoint not found", path }, 404, env);
    }

    return new Response("Not found", { status: 404 });
  }
};
