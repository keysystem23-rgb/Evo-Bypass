import Link from 'next/link';

const workflow = [
  'Cut character overlays with the green-screen remover.',
  'Export transparent PNG assets for transitions, shakes, and scene stacks.',
  'Use the chroma green export mode when your editor prefers keyed layers.',
  'Build a repeatable pack for AMV intros, flashes, and outro cards.'
];

const presets = [
  { title: 'Overlay Pack', detail: 'Transparent PNG exports for glows, cutouts, and title cards.' },
  { title: 'Chroma Backdrop', detail: 'Solid green output for editors using fast keying in post.' },
  { title: 'Edit Notes', detail: 'Sensitivity guidance so edge cleanup is easier before export.' }
];

export default function AmvStudioPage() {
  return (
    <div className="mx-auto w-full max-w-6xl space-y-12 px-4 py-12">
      <section className="relative overflow-hidden rounded-[36px] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(5,20,11,0.97),rgba(4,14,9,0.98))] p-8 md:p-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,242,161,0.16),transparent_24%),radial-gradient(circle_at_80%_15%,rgba(34,197,94,0.12),transparent_26%)]" />
        <div className="relative space-y-6">
          <Link href="/tools" className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-color)] bg-white/5 px-4 py-2 text-sm text-[color:var(--text-muted)] transition hover:text-white">
            Back to Tools
          </Link>
          <div className="max-w-3xl space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">AMV Workflow</p>
            <h1 className="text-4xl font-bold text-white md:text-5xl">AMV Studio</h1>
            <p className="text-lg text-[color:var(--text-muted)]">
              This page turns the image tools into an actual edit workflow: remove backgrounds, swap to chroma green,
              and prep reusable overlay assets for anime edits.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/tools/green-screen"
              className="inline-flex items-center justify-center rounded-full border border-emerald-300/20 bg-[linear-gradient(135deg,#1faa67,#35f2a1)] px-5 py-3 text-sm font-semibold text-[#04210f] shadow-[0_12px_28px_rgba(53,242,161,0.22)] transition hover:-translate-y-0.5"
            >
              Open Green Screen Tool
            </Link>
            <span className="inline-flex items-center rounded-full border border-emerald-300/15 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-200">
              Built for overlays, intro cards, and keyed scene edits
            </span>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-7">
          <h2 className="text-2xl font-semibold text-white">Recommended Flow</h2>
          <div className="mt-6 space-y-4">
            {workflow.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[24px] border border-white/8 bg-white/5 p-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-sm font-semibold text-emerald-300">
                  {index + 1}
                </span>
                <p className="text-sm leading-7 text-[color:var(--text-muted)]">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {presets.map((preset) => (
            <div key={preset.title} className="rounded-[32px] border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">{preset.title}</p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{preset.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
