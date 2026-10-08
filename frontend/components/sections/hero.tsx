"use client";

import { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2, CircleDollarSign, RefreshCw, ShieldCheck, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { homePills, homeSteps } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const rotatingTitles = ["Work.ink", "Platoboost", "Linkvertise", "Lootlabs", "Admaven", "Sub4Unlock"];

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTitleIndex((current) => (current + 1) % rotatingTitles.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="mx-auto w-[min(1180px,calc(100%-24px))] pb-16 pt-14 md:pt-24">
      <div className="relative overflow-hidden rounded-[44px] border border-emerald-300/20 bg-[linear-gradient(180deg,rgba(5,20,11,0.97),rgba(4,14,9,0.98))] px-5 py-8 shadow-[0_30px_120px_rgba(0,0,0,0.4)] md:px-8 md:py-10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(53,242,161,0.18),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(34,197,94,0.12),transparent_24%),linear-gradient(135deg,rgba(255,255,255,0.02),transparent_46%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(134,239,172,0.9),transparent)]" />

        <div className="relative grid gap-10 xl:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] xl:items-center">
          <div>
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-[rgba(7,20,41,0.88)] px-4 py-2 text-xs uppercase tracking-[0.34em] text-cyan-200"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Live Bypass Matrix
            </motion.div>

            <motion.h1
              className="mt-8 text-5xl font-bold leading-[0.95] tracking-[0.04em] text-white md:text-7xl xl:text-[5.6rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="block text-[#9dcfff]">Instant</span>
              <span className="block min-h-[1.2em] bg-[linear-gradient(90deg,#8bf6ff,#5da8ff,#bb86ff)] bg-clip-text text-transparent">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={rotatingTitles[titleIndex]}
                    className="inline-block"
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                    transition={{ duration: 0.32 }}
                  >
                    {rotatingTitles[titleIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="block text-white">Bypass Engine</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-[color:var(--text-muted)] md:text-[1.35rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              Cyber-styled bypass UI for Work.ink, Platoboost, Lootlabs, Admaven, Linkvertise and more, with fast
              output and a cleaner flow than the old layout.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.08 }}
            >
              <Button className="border-cyan-300/20 bg-[linear-gradient(135deg,#0ac5ff,#345cff)] text-white shadow-[0_16px_36px_rgba(10,197,255,0.2)]">
                Bypass Now
              </Button>
              <Button href="/supported" variant="secondary" className="border-cyan-400/20 bg-[rgba(8,15,32,0.86)]">
                View Supported <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                href="https://urpy.link/gkLVl4"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                className="border-fuchsia-400/25 bg-[linear-gradient(135deg,rgba(130,63,255,0.18),rgba(15,210,255,0.12))] text-white"
              >
                Donate Us <CircleDollarSign className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>

            <div className="mt-8 flex flex-wrap gap-3">
              {homePills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-[rgba(7,20,41,0.82)] px-4 py-2 text-sm text-[#b8d3ef]"
                >
                  <CheckCircle2 className="h-4 w-4 text-[#2df1a1]" />
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            <div className="absolute -inset-5 rounded-[38px] bg-[radial-gradient(circle,rgba(10,197,255,0.18),transparent_64%)] blur-3xl" />
            <div className="relative overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[linear-gradient(180deg,rgba(7,13,29,0.97),rgba(8,17,39,0.94))] p-3 shadow-[0_30px_90px_rgba(0,0,0,0.52),inset_0_1px_0_rgba(255,255,255,0.06)] sm:p-4">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(113,241,255,0.12),transparent_28%),linear-gradient(145deg,rgba(255,255,255,0.04),transparent_36%)]" />
              <div className="relative flex items-center justify-between rounded-[22px] border border-cyan-400/15 bg-[rgba(10,18,40,0.88)] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5d7a]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc66]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2df1a1]" />
                </div>
                <span className="font-display text-[10px] uppercase tracking-[0.3em] text-cyan-200 sm:text-xs">
                  Bypass Console
                </span>
              </div>

              <div className="relative mt-3 rounded-[26px] border border-cyan-400/15 bg-[rgba(5,11,26,0.9)] p-3 sm:p-4">
                <div className="flex flex-col gap-3 rounded-[22px] border border-cyan-400/10 bg-[rgba(8,17,39,0.8)] p-4 sm:p-5">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.26em] text-[#79b7d9]">Paste Your Link</p>
                      <p className="mt-2 max-w-xs text-sm leading-6 text-[#bdd8f4] sm:text-[15px]">
                        Drop any supported URL and route it through the instant bypass engine.
                      </p>
                    </div>
                    <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-[11px] uppercase tracking-[0.24em] text-emerald-300">
                      <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
                      Live Route
                    </div>
                  </div>

                  <div className="rounded-[22px] border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(14,26,56,0.96),rgba(10,20,42,0.92))] p-3 sm:p-4">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#79b7d9] sm:text-[11px]">
                      <Sparkles className="h-3.5 w-3.5" />
                      URL Input
                    </div>
                    <input
                      className="mt-3 h-14 w-full rounded-[18px] border border-cyan-400/15 bg-[rgba(5,11,26,0.92)] px-4 text-sm text-white outline-none transition focus:border-cyan-300/40 focus:shadow-[0_0_0_1px_rgba(103,232,249,0.2),0_0_24px_rgba(10,197,255,0.12)] sm:h-16 sm:px-5 sm:text-base"
                      placeholder="https://work.ink/abc123"
                    />
                  </div>

                  <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_76px]">
                    <div className="flex items-center justify-between rounded-[20px] border border-cyan-400/15 bg-[rgba(10,18,40,0.92)] px-4 py-4 sm:px-5">
                      <div className="flex min-w-0 items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/35 bg-[rgba(16,32,70,0.78)] text-cyan-200">
                          <ShieldCheck className="h-5 w-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="truncate text-sm text-white sm:text-[15px]">Human verification active</p>
                          <p className="text-xs text-[#79b7d9]">Privacy / Terms protected</p>
                        </div>
                      </div>
                      <div className="ml-4 h-5 w-9 rounded-full bg-[linear-gradient(90deg,#19e6a9,#0ac5ff)] p-[2px] shadow-[0_0_18px_rgba(45,241,161,0.28)]">
                        <div className="ml-auto h-full w-4 rounded-full bg-white" />
                      </div>
                    </div>
                    <button className="inline-flex h-14 items-center justify-center rounded-[20px] border border-cyan-400/15 bg-[rgba(10,18,40,0.92)] text-cyan-200 transition hover:border-cyan-300/30 hover:bg-[rgba(14,26,56,0.92)] md:h-full">
                      <RefreshCw className="h-5 w-5" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["Work.ink", "Linkvertise", "Lootlabs", "Platoboost"].map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-cyan-400/15 bg-[rgba(10,18,40,0.72)] px-3 py-2 text-[11px] uppercase tracking-[0.2em] text-[#9ec6e4] sm:text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[20px] border border-cyan-400/10 bg-[rgba(8,17,39,0.72)] px-4 py-3.5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#79b7d9]">Latency</p>
                      <p className="mt-2 text-2xl font-semibold text-white">0.42s</p>
                    </div>
                    <div className="rounded-[20px] border border-cyan-400/10 bg-[rgba(8,17,39,0.72)] px-4 py-3.5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#79b7d9]">Coverage</p>
                      <p className="mt-2 text-2xl font-semibold text-white">50+</p>
                    </div>
                    <div className="rounded-[20px] border border-cyan-400/10 bg-[rgba(8,17,39,0.72)] px-4 py-3.5">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-[#79b7d9]">Status</p>
                      <p className="mt-2 text-2xl font-semibold text-[#2df1a1]">Live</p>
                    </div>
                  </div>

                  <Button className="w-full justify-center border-cyan-300/20 bg-[linear-gradient(135deg,#0ac5ff,#345cff)] text-white shadow-[0_16px_36px_rgba(10,197,255,0.2)]">
                    Launch Bypass
                  </Button>
                </div>

                <div className="mt-3 rounded-[22px] border border-cyan-400/12 bg-[rgba(8,14,31,0.86)] p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.26em] text-[#79b7d9]">Result Preview</p>
                      <p className="mt-1 text-sm text-white">Resolved Work.ink payload</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-emerald-300">
                      Delivered
                    </span>
                  </div>
                  <div className="mt-4 rounded-[18px] border border-cyan-400/10 bg-[rgba(4,8,18,0.9)] p-4 font-mono text-xs leading-6 text-[#97cdf1]">
                    <p>{">"} service: Work.ink</p>
                    <p>{">"} key: FREE_58fc1bc4ef91e8ad</p>
                    <p>{">"} response: bypass complete</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-5xl text-center">
        <p className="text-xs uppercase tracking-[0.35em] text-[color:var(--text-muted)]">Getting Started</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-tight text-[color:var(--text-primary)]">How It Works</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {homeSteps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-[24px] border border-cyan-400/12 bg-[rgba(8,15,32,0.74)] px-5 py-7 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(180deg,#0ac5ff,#6d4bff)] text-xl font-semibold text-white shadow-[0_14px_24px_rgba(20,184,166,0.24)]">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold text-[color:var(--text-primary)]">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{step.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Button href={siteConfig.discordInviteUrl} target="_blank" rel="noreferrer">
            Add to Server
          </Button>
          <Button
            href="https://urpy.link/gkLVl4"
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            className="border-fuchsia-400/25 bg-[linear-gradient(135deg,rgba(130,63,255,0.18),rgba(15,210,255,0.12))] text-white"
          >
            Donate Us <CircleDollarSign className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
