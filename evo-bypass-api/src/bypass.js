import { detectService as detectCatalogService } from "./catalog.js";

const TIMEOUT = 30000;

async function fetchWithTimeout(url, options = {}, timeout = TIMEOUT) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

export class BypassService {
  static isValidUrl(url) {
    try {
      const u = new URL(url);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch {
      return false;
    }
  }

  static detectService(url) {
    const catalogService = detectCatalogService(url);
    const u = url.toLowerCase();
    if (u.includes("linkvertise")) return "Linkvertise";
    if (u.includes("work.ink")) return "Work.ink";
    if (u.includes("lootlabs") || u.includes("loot-labs")) return "Lootlabs";
    if (u.includes("admaven")) return "Admaven";
    if (u.includes("lockr.so")) return "Lockr.so";
    if (u.includes("shortfly") || u.includes("shrtfly")) return "Shrtfly";
    if (u.includes("sub2unlock")) return "Sub2Unlock";
    if (u.includes("rekonise")) return "Rekonise";
    if (u.includes("boost.ink")) return "Boost.ink";
    if (u.includes("mboost")) return "mBoost";
    if (u.includes("platoboost")) return "Platoboost";
    return catalogService.name;
  }

  static extractDestination(html) {
    const patterns = [
      /destination["\s:]+["']([^"']+)["']/i,
      /target["\s:]+["']([^"']+)["']/i,
      /redirect["\s:]+["']([^"']+)["']/i
    ];
    for (const p of patterns) {
      const m = html.match(p);
      if (m && m[1]) return m[1];
    }
    return null;
  }

  static extractLootlabsId(url) {
    const m = url.match(/lootlabs\.gg\/([a-zA-Z0-9]+)/);
    return m ? m[1] : null;
  }

  static async bypass(url) {
    const startTime = Date.now();
    try {
      if (!url || !this.isValidUrl(url)) {
        return {
          success: false,
          service: "Unknown",
          error: "Invalid URL provided",
          processingTime: Date.now() - startTime
        };
      }

      const service = this.detectService(url);
      let result;

      switch (service) {
        case "Linkvertise": result = await this.bypassLinkvertise(url); break;
        case "Work.ink":    result = await this.bypassWorkink(url);    break;
        case "Lootlabs":    result = await this.bypassLootlabs(url);   break;
        case "Rekonise":    result = await this.bypassRekonise(url);   break;
        case "Platoboost":  result = await this.bypassPlatoboost(url); break;
        default:            result = await this.universalBypass(url);
      }

      result.processingTime = Date.now() - startTime;
      result.service = service;
      return result;
    } catch (err) {
      return {
        success: false,
        service: "Unknown",
        error: err.message || "Bypass failed",
        processingTime: Date.now() - startTime
      };
    }
  }

  static async bypassLinkvertise(url) {
    try {
      const res = await fetchWithTimeout("https://api.bypass.vip/bypass", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });
      if (res.ok) {
        const data = await res.json();
        if (data && data.destination) {
          return { success: true, destination: data.destination, service: "Linkvertise", processingTime: 0 };
        }
      }
    } catch {}
    return this.universalBypass(url);
  }

  static async bypassWorkink(url) {
    try {
      const res = await fetchWithTimeout(url, {
        redirect: "manual",
        headers: { "User-Agent": "Mozilla/5.0" }
      });
      const location = res.headers.get("location");
      if (location && this.isValidUrl(location)) {
        return { success: true, destination: location, service: "Work.ink", processingTime: 0 };
      }
      const html = await res.text();
      const destination = this.extractDestination(html);
      if (destination && this.isValidUrl(destination)) {
        return { success: true, destination, service: "Work.ink", processingTime: 0 };
      }
    } catch {}
    return this.universalBypass(url);
  }

  static async bypassLootlabs(url) {
    try {
      const id = this.extractLootlabsId(url);
      if (!id) throw new Error("Invalid Lootlabs URL");
      const res = await fetchWithTimeout(`https://api.lootlabs.gg/api/get-link/${id}`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.url) {
          return { success: true, destination: data.url, service: "Lootlabs", processingTime: 0 };
        }
      }
    } catch {}
    return this.universalBypass(url);
  }

  static async bypassRekonise(url) {
    try {
      const res = await fetchWithTimeout(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
      });
      const html = await res.text();
      const patterns = [
        /destination["\s:]+["']([^"']+)["']/i,
        /target["\s:]+["']([^"']+)["']/i,
        /redirect["\s:]+["']([^"']+)["']/i,
        /url["\s:]+["']([^"']+)["']/i
      ];
      for (const p of patterns) {
        const m = html.match(p);
        if (m && m[1] && this.isValidUrl(m[1])) {
          return { success: true, destination: m[1], service: "Rekonise", processingTime: 0 };
        }
      }
    } catch {}
    return this.universalBypass(url);
  }

  static async bypassPlatoboost(url) {
    return this.universalBypass(url);
  }

  static async universalBypass(url) {
    const apis = [
      { url: "https://api.bypass.vip/bypass", key: "destination" },
      { url: "https://bypass.pm/bypass",       key: "result" },
      { url: "https://api-bypass.vercel.app/bypass", key: "destination" }
    ];

    for (const api of apis) {
      try {
        const res = await fetchWithTimeout(api.url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url })
        }, 10000);
        if (res.ok) {
          const data = await res.json();
          const dest = data[api.key] || data.destination || data.result;
          if (dest && this.isValidUrl(dest)) {
            return { success: true, destination: dest, service: "Universal", processingTime: 0 };
          }
        }
      } catch { continue; }
    }

    try {
      const res = await fetchWithTimeout(url, {
        headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" }
      });
      const html = await res.text();
      const patterns = [
        /destination["\s:]+["']([^"']+)["']/i,
        /target["\s:]+["']([^"']+)["']/i,
        /redirect["\s:]+["']([^"']+)["']/i,
        /url["\s:]+["']([^"']+)["']/i,
        /href=["']([^"']+)["']/i
      ];
      for (const p of patterns) {
        const m = html.match(p);
        if (m && m[1] && this.isValidUrl(m[1])) {
          return { success: true, destination: m[1], service: "Universal", processingTime: 0 };
        }
      }
    } catch {}

    return {
      success: false,
      service: "Universal",
      error: "Unable to bypass this link",
      processingTime: 0
    };
  }
}
