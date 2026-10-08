import { cn } from "@/lib/utils";

export function GlassCard({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[26px] border border-[color:var(--border-color)] bg-[color:var(--card-bg)] p-6 shadow-[0_20px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
