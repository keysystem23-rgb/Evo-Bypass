import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function DashboardPage() {
  return (
    <PageShell>
      <section className="mx-auto w-[min(1180px,calc(100%-24px))] py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">Dashboard</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[color:var(--text-primary)]">Workspace Overview</h1>
        <div className="mt-10 grid gap-6 lg:grid-cols-[260px_1fr]">
          <GlassCard className="rounded-[28px] bg-[color:var(--card-solid)]">
            <div className="space-y-3">
              {["Overview", "API Keys", "Links", "Subscriptions", "Notifications", "Settings"].map((item) => (
                <div key={item} className="rounded-2xl border border-[color:var(--border-color)] bg-[#f8fafc] px-4 py-3 text-sm text-[color:var(--text-muted)] dark:bg-white/5">
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
          <div className="space-y-6">
            <GlassCard className="rounded-[28px] bg-[color:var(--card-solid)]">
              <p className="text-sm text-[color:var(--text-muted)]">Usage</p>
              <h2 className="mt-3 text-3xl font-semibold text-[color:var(--text-primary)]">24,392 requests this month</h2>
              <div className="mt-8 flex h-40 items-end gap-3">
                {[35, 52, 66, 48, 71, 82, 64, 78, 90, 74].map((bar, index) => (
                  <div key={index} className="flex-1 rounded-full bg-[linear-gradient(180deg,#14b8a6,#3b82f6)]" style={{ height: `${bar}%` }} />
                ))}
              </div>
            </GlassCard>
            <div className="grid gap-6 md:grid-cols-2">
              <GlassCard className="rounded-[28px] bg-[color:var(--card-solid)]">
                <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">Recent activity</h3>
                <div className="mt-5 space-y-3 text-sm text-[color:var(--text-muted)]">
                  <p>API key rotated successfully.</p>
                  <p>New bot install from Discord invite.</p>
                  <p>Supported-service metadata refreshed.</p>
                </div>
              </GlassCard>
              <GlassCard className="rounded-[28px] bg-[color:var(--card-solid)]">
                <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">Subscription</h3>
                <p className="mt-5 text-sm leading-7 text-[color:var(--text-muted)]">
                  Monthly plan active. No daily caps. 24/7 API access enabled.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
