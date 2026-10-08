import { ArrowUpRight, Bot, CheckCircle2, Globe, Monitor, Server, Zap } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { botFeatures, botSteps } from "@/lib/data";
import { siteConfig } from "@/lib/site";

const resultValue = "FREE_24f6950c979c1cd15eb20f1aa6259c43";

const quickLinks = [
  { label: "Result", icon: "📋", active: true },
  { label: "Server", icon: Server },
  { label: "Bot", icon: Bot },
  { label: "Website", icon: Monitor },
  { label: "API", icon: Zap }
] as const;

export default function BotPage() {
  return (
    <PageShell>
      <section className="mx-auto w-[min(1180px,calc(100%-24px))] py-16 md:py-20">
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] xl:items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">Discord</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[color:var(--text-primary)] md:text-6xl">
              Discord Bot
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-9 text-[color:var(--text-muted)]">
              The bot response will look like this: a clean Discord-style success card with the retrieved key,
              a copy-ready result field, and quick links for server, bot, website, and API access.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.discordInviteUrl} target="_blank" rel="noreferrer">
                Add to Server
              </Button>
              <Button href={siteConfig.supportServerUrl} target="_blank" rel="noreferrer" variant="secondary">
                Join Support Server <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <GlassCard className="rounded-[30px] border-white/10 bg-[#111318] p-5 text-white shadow-[0_32px_80px_rgba(0,0,0,0.36)]">
            <div className="flex items-center justify-between text-sm text-[#9097a7]">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f59e0b] text-xs font-bold text-[#141414]">
                  ∞
                </div>
                <span className="font-semibold text-[#d8dce5]">LYNX</span>
                <span>used</span>
                <span className="rounded-md bg-[#2a3352] px-2 py-1 text-[#8eb4ff]">bypass</span>
              </div>
              <span>10 May 2026</span>
            </div>

            <div className="mt-4 flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[radial-gradient(circle_at_35%_30%,#ffffff,#aab3c7_18%,#0f1117_55%)]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0a0c10] text-white shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
                  ✦
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h2 className="text-[30px] font-semibold tracking-tight text-white">Zen Bypass</h2>
                  <span className="rounded-md bg-[#5865f2] px-2 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-white">
                    App
                  </span>
                  <span className="text-sm text-[#8c93a5]">5:18</span>
                </div>

                <div className="mt-3 rounded-[18px] border border-white/10 bg-[#202229] px-5 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                  <div className="flex items-center gap-3 text-xl font-semibold text-white">
                    <CheckCircle2 className="h-6 w-6 text-[#3ad674]" />
                    <span>Bypass Success</span>
                  </div>

                  <div className="mt-4 h-px bg-white/10" />
                  <p className="mt-4 text-base leading-7 text-[#bcc2d0]">
                    Your key has been retrieved. Copy it and input it into the application.
                  </p>

                  <div className="mt-3 inline-flex rounded-md border border-[#697087] bg-[#2a2d3a] px-2 py-1 font-mono text-sm text-[#eef2ff]">
                    {resultValue}
                  </div>

                  <div className="mt-4 h-px bg-white/10" />
                  <div className="mt-4 rounded-md border border-[#454b67] bg-[#282b43] px-4 py-3 font-mono text-[15px] text-[#eef2ff]">
                    {resultValue}
                  </div>

                  <div className="mt-4 h-px bg-white/10" />
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#9ca3b5]">
                    <span>Requested by xlr8_exe_474_45833</span>
                    <span>•</span>
                    <span>⏱ 7.08s</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  {quickLinks.map((item) => {
                    if (typeof item.icon === "string") {
                      return (
                        <button
                          key={item.label}
                          type="button"
                          className="inline-flex items-center gap-2 rounded-2xl border border-transparent bg-[#4b52d4] px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(88,101,242,0.28)]"
                        >
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </button>
                      );
                    }

                    const Icon = item.icon;

                    return (
                      <button
                        key={item.label}
                        type="button"
                        className="inline-flex items-center gap-2 rounded-2xl border border-white/8 bg-[#1b1d23] px-4 py-2.5 text-sm font-semibold text-[#f3f4f6] transition hover:bg-[#22252d]"
                      >
                        <Icon className="h-4 w-4 text-[#6bb7ff]" />
                        <span>{item.label}</span>
                        <ArrowUpRight className="h-4 w-4 text-[#b7becd]" />
                      </button>
                    );
                  })}
                </div>

                <p className="mt-3 text-sm text-[#7f8798]">(edited)</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="mt-12 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">What the bot shows</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {botFeatures.map((feature) => (
              <GlassCard key={feature.title} className="rounded-[24px] bg-[color:var(--card-solid)]">
                <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">{feature.title}</h3>
                <p className="mt-4 text-base leading-8 text-[color:var(--text-muted)]">{feature.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">Getting Started</h2>
          <div className="mt-8 space-y-6">
            {botSteps.map((step, index) => (
              <div key={step} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--border-color)] bg-[color:var(--card-solid)] text-sm font-semibold text-[color:var(--text-primary)]">
                  {index + 1}
                </span>
                <p className="pt-1 text-lg leading-8 text-[color:var(--text-muted)]">{step}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-[28px] border border-[color:var(--border-color)] bg-[linear-gradient(135deg,rgba(88,101,242,0.1),rgba(59,130,246,0.04))] p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#5865f2] text-white shadow-[0_14px_30px_rgba(88,101,242,0.24)]">
                  <Globe className="h-5 w-5" />
                </div>
                <h2 className="text-2xl font-semibold text-[color:var(--text-primary)]">Need help?</h2>
              </div>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[color:var(--text-muted)]">
                Join the support server if you want this exact message style connected to your real command flow.
              </p>
            </div>
            <Button href={siteConfig.supportServerUrl} target="_blank" rel="noreferrer" variant="secondary">
              Join Support Server <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
