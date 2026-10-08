import { Bell, Bot, Copy, Link2, ShieldCheck, Webhook } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

const logs = [
  "Auto moderation blocked flagged content in #general.",
  "New API key generated with analytics scope.",
  "Webhook retry succeeded for premium sync event.",
  "Admin updated subscription allocation rules."
];

export function DashboardContent() {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <GlassCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/48">Analytics overview</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">Performance pulse</h2>
            </div>
            <span className="rounded-full border border-cyan-300/25 px-3 py-1 text-xs text-cyan-300">Live</span>
          </div>
          <div className="mt-8 flex h-52 items-end gap-3">
            {[48, 72, 58, 84, 64, 93, 76, 90, 86, 96].map((value, index) => (
              <div key={index} className="flex flex-1 flex-col items-center gap-3">
                <div
                  className="w-full rounded-full bg-[linear-gradient(180deg,rgba(71,245,255,0.95),rgba(124,58,237,0.24))]"
                  style={{ height: `${value}%` }}
                />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/36">0{index + 1}</span>
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/48">API key management</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Active credentials</h2>
          <div className="mt-6 space-y-4">
            {["zen_live_prod_94x", "zen_webhook_sync_2k", "zen_analytics_edge_8p"].map((key) => (
              <div key={key} className="flex items-center justify-between rounded-[20px] border border-white/10 bg-white/5 px-4 py-4">
                <div>
                  <p className="font-medium text-white">{key}</p>
                  <p className="text-sm text-white/45">Scoped access / rotated 2d ago</p>
                </div>
                <button className="rounded-full border border-white/10 p-3 text-white/60 transition hover:text-white">
                  <Copy className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {[
          { title: "Link management", icon: Link2, body: "Track destination performance and route monetized traffic cleanly." },
          { title: "Notifications", icon: Bell, body: "Critical alerts, billing updates, and moderation signals." },
          { title: "Bot sync", icon: Bot, body: "Command health, guild sync state, and premium automation delivery." }
        ].map((item) => (
          <GlassCard key={item.title}>
            <item.icon className="h-5 w-5 text-cyan-300" />
            <h3 className="mt-5 text-lg font-medium text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-7 text-white/62">{item.body}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <GlassCard>
          <p className="text-sm text-white/48">Realtime activity logs</p>
          <div className="mt-5 space-y-4">
            {logs.map((log) => (
              <div key={log} className="rounded-[20px] border border-white/10 bg-white/5 px-4 py-4 text-sm leading-7 text-white/68">
                {log}
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard>
          <p className="text-sm text-white/48">Control modules</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              { label: "Subscription management", icon: ShieldCheck },
              { label: "Admin panel", icon: ShieldCheck },
              { label: "Webhook support", icon: Webhook },
              { label: "User settings", icon: ShieldCheck }
            ].map((item) => (
              <div key={item.label} className="rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(71,245,255,0.08),rgba(124,58,237,0.08))] p-4">
                <item.icon className="h-5 w-5 text-cyan-300" />
                <p className="mt-8 text-sm text-white">{item.label}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
