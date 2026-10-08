import { CheckCircle2, Clock3, ServerCrash } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function StatusPage() {
  return (
    <PageShell>
      <section className="mx-auto w-[min(1180px,calc(100%-24px))] py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">Status</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[color:var(--text-primary)]">System Status</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-[color:var(--text-muted)]">
          Live health for the API, Discord bot, and operational queue.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {[
            { title: "API", value: "Operational", icon: CheckCircle2 },
            { title: "Discord bot", value: "Operational", icon: CheckCircle2 },
            { title: "Webhook queue", value: "Minor delay", icon: Clock3 }
          ].map((service) => (
            <GlassCard key={service.title} className="rounded-[24px] bg-[color:var(--card-solid)]">
              <service.icon className="h-6 w-6 text-[#14b8a6]" />
              <p className="mt-5 text-sm text-[color:var(--text-muted)]">{service.title}</p>
              <h2 className="mt-2 text-2xl font-semibold text-[color:var(--text-primary)]">{service.value}</h2>
            </GlassCard>
          ))}
        </div>

        <GlassCard className="mt-6 rounded-[24px] bg-[color:var(--card-solid)]">
          <p className="text-sm text-[color:var(--text-muted)]">Incident history</p>
          <div className="mt-5 space-y-4">
            {[
              "May 10 - Webhook retries increased during deployment window.",
              "May 08 - Bot shard rebalanced with zero command loss.",
              "May 06 - Edge analytics cluster upgraded successfully."
            ].map((incident) => (
              <div key={incident} className="flex items-center gap-3 rounded-[20px] border border-[color:var(--border-color)] bg-[#f8fafc] px-4 py-4 dark:bg-white/5">
                <ServerCrash className="h-4 w-4 text-[#14b8a6]" />
                <p className="text-sm text-[color:var(--text-muted)]">{incident}</p>
              </div>
            ))}
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
