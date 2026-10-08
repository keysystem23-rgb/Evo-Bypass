import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { siteConfig } from "@/lib/site";

export default function AuthPage() {
  return (
    <PageShell>
      <section className="mx-auto flex min-h-[80vh] w-[min(1080px,calc(100%-24px))] items-center justify-center py-16 md:py-20">
        <GlassCard className="grid w-full max-w-5xl gap-6 p-5 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[color:var(--border-color)] bg-[color:var(--card-solid)] p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">Access platform</p>
            <h1 className="mt-4 text-4xl font-semibold text-[color:var(--text-primary)]">Login or create your workspace</h1>
            <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)]">
              Secure entry for API keys, payment history, user settings, and bot onboarding.
            </p>
          </div>
          <div className="rounded-[28px] border border-[color:var(--border-color)] bg-[color:var(--card-solid)] p-8">
            <div className="space-y-4">
              {["Email address", "Password"].map((label) => (
                <label key={label} className="block">
                  <span className="mb-2 block text-sm text-[color:var(--text-muted)]">{label}</span>
                  <input
                    className="w-full rounded-2xl border border-[color:var(--border-color)] bg-[#f8fafc] px-4 py-3 text-[color:var(--text-primary)] outline-none transition dark:bg-white/5"
                    placeholder={`Enter ${label.toLowerCase()}`}
                  />
                </label>
              ))}
            </div>
            <Button className="mt-6 w-full justify-center">Login</Button>
            <Button variant="secondary" className="mt-3 w-full justify-center">Create account</Button>
            <Button href={siteConfig.discordInviteUrl} variant="secondary" className="mt-3 w-full justify-center">
              Add bot with Discord OAuth
            </Button>
          </div>
        </GlassCard>
      </section>
    </PageShell>
  );
}
