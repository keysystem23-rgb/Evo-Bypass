import { BadgeCheck, Bell, Shield, UserCircle2 } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function ProfilePage() {
  return (
    <PageShell>
      <section className="mx-auto w-[min(1180px,calc(100%-24px))] py-16 md:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <GlassCard className="rounded-[28px] bg-[color:var(--card-solid)]">
            <div className="flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-[28px] bg-[#eef6ff] text-[#3b82f6] dark:bg-white/5">
                <UserCircle2 className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-[color:var(--text-primary)]">Nyx Operator</h1>
                <p className="text-[color:var(--text-muted)]">Founder / Nova Syndicate</p>
              </div>
            </div>
            <div className="mt-8 space-y-3">
              {[
                { label: "Verified profile", icon: BadgeCheck },
                { label: "Security status: strong", icon: Shield },
                { label: "Notifications enabled", icon: Bell }
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-[color:var(--border-color)] bg-[#f8fafc] px-4 py-3 text-sm text-[color:var(--text-muted)] dark:bg-white/5">
                  <item.icon className="h-4 w-4 text-[#14b8a6]" />
                  {item.label}
                </div>
              ))}
            </div>
          </GlassCard>
          <GlassCard className="rounded-[28px] bg-[color:var(--card-solid)]">
            <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">Workspace identity</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Custom domain routing",
                "Role-based dashboard access",
                "Premium billing active",
                "Realtime logs connected"
              ].map((item) => (
                <div key={item} className="rounded-[20px] border border-[color:var(--border-color)] bg-[#f8fafc] p-4 text-sm text-[color:var(--text-muted)] dark:bg-white/5">
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </section>
    </PageShell>
  );
}
