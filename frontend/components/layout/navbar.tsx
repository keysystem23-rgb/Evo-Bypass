"use client";

import { Activity, Bot, CircleDollarSign, Home, Link2, LockKeyhole, Moon, Newspaper, Sun, Tag } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/components/providers/theme-provider";
import { navItems } from "@/lib/data";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

const iconMap = {
  "/": Home,
  "/supported": Link2,
  "/pricing": Tag,
  "/bot": Bot,
  "/blog": Newspaper
};

export function Navbar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[color:var(--border-color)] bg-[rgba(3,15,9,0.72)] backdrop-blur-xl"
      initial={{ y: -18, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35 }}
    >
      <div className="mx-auto flex w-[min(1180px,calc(100%-24px))] items-center justify-between gap-4 py-4">
        <Link className="flex items-center gap-3 text-sm font-semibold text-[color:var(--text-primary)]" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-emerald-300/30 bg-[linear-gradient(180deg,rgba(15,45,25,0.96),rgba(7,20,12,0.96))] shadow-[0_0_20px_rgba(53,242,161,0.12)]">
            <Link2 className="h-4 w-4 text-emerald-300" />
          </span>
          <span className="font-display text-base tracking-[0.24em]">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = iconMap[item.href as keyof typeof iconMap];

            return (
              <Link
                key={item.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition",
                  pathname === item.href
                    ? "bg-[linear-gradient(135deg,#157347,#35f2a1)] text-[#04210f] shadow-[0_10px_28px_rgba(53,242,161,0.18)]"
                    : "text-[color:var(--text-muted)] hover:bg-[rgba(10,31,18,0.96)] hover:text-[color:var(--text-primary)]"
                )}
                href={item.href}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            className="hidden items-center gap-2 rounded-full border border-emerald-300/30 bg-[linear-gradient(135deg,rgba(31,170,103,0.28),rgba(53,242,161,0.16))] px-4 py-3 text-sm font-semibold text-white shadow-[0_0_24px_rgba(53,242,161,0.14)] md:inline-flex"
            href="https://urpy.link/gkLVl4"
            target="_blank"
            rel="noreferrer"
          >
            <CircleDollarSign className="h-4 w-4" />
            Donate Us
          </Link>
          <Link
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-[color:var(--text-primary)] transition hover:-translate-y-0.5"
            href="/auth"
          >
            <LockKeyhole className="h-4 w-4" />
          </Link>
          <Link
            className="hidden items-center justify-center rounded-full p-3 text-[color:var(--text-muted)] transition hover:text-[color:var(--text-primary)] sm:inline-flex"
            href="/status"
          >
            <Activity className="h-5 w-5" />
          </Link>
          <Link
            className="hidden items-center justify-center rounded-full p-3 text-emerald-300 transition hover:opacity-80 sm:inline-flex"
            href={siteConfig.supportServerUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Bot className="h-5 w-5" />
          </Link>
          <button
            aria-label="Toggle theme"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-[color:var(--text-primary)] transition hover:bg-[color:var(--card-solid)]"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="mx-auto flex w-[min(1180px,calc(100%-24px))] gap-2 overflow-x-auto pb-4 md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            className={cn(
              "whitespace-nowrap rounded-full px-4 py-3 text-sm font-medium transition",
              pathname === item.href
                ? "bg-[linear-gradient(135deg,#157347,#35f2a1)] text-[#04210f] shadow-[0_10px_28px_rgba(53,242,161,0.18)]"
                : "border border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-[color:var(--text-muted)]"
            )}
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
        <Link
          className="whitespace-nowrap rounded-full border border-emerald-300/30 bg-[rgba(31,170,103,0.16)] px-4 py-3 text-sm font-semibold text-white md:hidden"
          href="https://urpy.link/gkLVl4"
          target="_blank"
          rel="noreferrer"
        >
          Donate Us
        </Link>
      </div>
    </motion.header>
  );
}
