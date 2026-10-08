import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  target?: string;
  rel?: string;
};

export function Button({
  href,
  children,
  className,
  variant = "primary",
  target,
  rel
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold transition duration-200",
    variant === "primary" &&
      "border-emerald-300/20 bg-[linear-gradient(135deg,#1faa67,#35f2a1)] text-[#04210f] shadow-[0_12px_28px_rgba(53,242,161,0.22)] hover:-translate-y-0.5 hover:brightness-105 dark:border-emerald-300/20 dark:text-[#04210f]",
    variant === "secondary" &&
      "border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-[color:var(--text-primary)] hover:-translate-y-0.5 hover:bg-white/5 dark:bg-white/5",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href} target={target} rel={rel}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
