import { Bot, Link2, Mail, Send } from "lucide-react";
import Link from "next/link";
import { footerColumns } from "@/lib/data";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[color:var(--border-color)]">
      <div className="mx-auto grid w-[min(1180px,calc(100%-24px))] gap-10 py-12 md:grid-cols-[1.3fr_repeat(3,0.7fr)]">
        <div>
          <div className="flex items-center gap-3 text-lg font-semibold text-[color:var(--text-primary)]">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--card-solid)]">
              <Link2 className="h-4 w-4" />
            </span>
            {siteConfig.name}
          </div>
          <p className="mt-5 max-w-sm text-sm leading-8 text-[color:var(--text-muted)]">
            Free instant bypasser for Linkvertise, Work.ink, Lootlabs, Admaven and key systems - no surveys, no downloads.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-[#5865f2]"
              href={siteConfig.supportServerUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Bot className="h-5 w-5" />
            </Link>
            <Link
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-[color:var(--text-muted)]"
              href="/"
            >
              <Send className="h-5 w-5" />
            </Link>
            <Link
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-[color:var(--text-muted)]"
              href="/"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold uppercase tracking-[0.08em] text-[color:var(--text-primary)]">{column.title}</p>
            <div className="mt-6 space-y-4">
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  className="block text-sm text-[color:var(--text-muted)] transition hover:text-[color:var(--text-primary)]"
                  href={link.label === "Discord" ? siteConfig.supportServerUrl : link.href}
                  target={link.label === "Discord" ? "_blank" : undefined}
                  rel={link.label === "Discord" ? "noreferrer" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto flex w-[min(1180px,calc(100%-24px))] items-center justify-between border-t border-[color:var(--border-color)] py-6 text-sm text-[color:var(--text-muted)]">
        <p>{siteConfig.name} (c) 2025-2026</p>
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--status)]" />
          Operational
        </div>
      </div>
    </footer>
  );
}
