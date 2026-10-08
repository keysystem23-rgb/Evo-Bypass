import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";

export default function DocsPage() {
  return (
    <PageShell>
      <section className="mx-auto grid w-[min(1180px,calc(100%-24px))] gap-6 py-16 md:py-20 lg:grid-cols-[280px_1fr]">
        <GlassCard className="h-fit rounded-[24px] bg-[color:var(--card-solid)]">
          <p className="text-sm uppercase tracking-[0.35em] text-[color:var(--text-muted)]">API docs</p>
          <div className="mt-6 space-y-2">
            {["Authentication", "API Keys", "Supported Services", "Rate Limits", "Bot Invite", "Status"].map((section) => (
              <div key={section} className="rounded-2xl border border-[color:var(--border-color)] bg-[#f8fafc] px-4 py-3 text-sm text-[color:var(--text-muted)] dark:bg-white/5">
                {section}
              </div>
            ))}
          </div>
        </GlassCard>
        <GlassCard className="rounded-[24px] bg-[color:var(--card-solid)]">
          <p className="text-sm text-[color:var(--text-muted)]">Quickstart</p>
          <h1 className="mt-3 text-4xl font-semibold text-[color:var(--text-primary)]">Authenticate and query supported services</h1>
          <div className="mt-8 rounded-[24px] border border-[color:var(--border-color)] bg-[#f8fafc] p-5 dark:bg-white/5">
            <pre className="overflow-x-auto text-sm leading-7 text-[#0f172a] dark:text-slate-200">
{`GET /api/supported
Authorization: Bearer your_api_key

{
  "category": "ad-link",
  "search": "work.ink"
}`}
            </pre>
          </div>
          <div className="mt-8 space-y-5 text-sm leading-7 text-[color:var(--text-muted)]">
            <p>The API is structured around scoped keys, predictable JSON contracts, and stable service metadata.</p>
            <p>Use the bot invite flow and supported-services endpoints as the first public integration surfaces.</p>
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
