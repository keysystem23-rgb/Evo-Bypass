import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { GlassCard } from "@/components/ui/glass-card";

const posts = [
  {
    title: "Infrastructure update",
    body: "A summary of uptime work, provider coverage changes, and latency improvements across the pipeline.",
    tag: "Status"
  },
  {
    title: "Bot improvements",
    body: "Changes to the Discord onboarding flow, command execution pipeline, and support tooling.",
    tag: "Bot"
  },
  {
    title: "API notes",
    body: "Guidance for integrating the API into your own website, bot, or automation workflow.",
    tag: "API"
  }
];

export default function BlogPage() {
  return (
    <PageShell>
      <section className="mx-auto w-[min(1180px,calc(100%-24px))] py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">Blog</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[color:var(--text-primary)]">Updates</h1>
        <p className="mt-5 max-w-3xl text-lg leading-9 text-[color:var(--text-muted)]">
          News, operational updates, product changes, and integration guidance.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {posts.map((post) => (
            <GlassCard key={post.title} className="rounded-[24px] bg-[color:var(--card-solid)]">
              <p className="text-xs uppercase tracking-[0.24em] text-[color:var(--text-muted)]">{post.tag}</p>
              <h2 className="mt-4 text-2xl font-semibold text-[color:var(--text-primary)]">{post.title}</h2>
              <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)]">{post.body}</p>
              <a className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--text-muted)]" href="/">
                Read more <ArrowUpRight className="h-4 w-4" />
              </a>
            </GlassCard>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
