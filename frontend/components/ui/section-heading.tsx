export function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs uppercase tracking-[0.4em] text-[color:var(--text-muted)]">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-[color:var(--text-muted)] md:text-base">{body}</p>
    </div>
  );
}
