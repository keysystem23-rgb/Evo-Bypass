import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { paymentMethods, pricingPlans } from "@/lib/data";

export default function PricingPage() {
  return (
    <PageShell>
      <section className="mx-auto w-[min(1180px,calc(100%-24px))] py-16 md:py-20">
        <p className="text-xs uppercase tracking-[0.32em] text-[color:var(--text-muted)]">Pricing</p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight text-[color:var(--text-primary)]">API</h1>
        <p className="mt-5 max-w-4xl text-lg leading-9 text-[color:var(--text-muted)]">
          Are you a developer who wants to integrate this into your website or bot? Don&apos;t worry. Our API service is available 24/7.
        </p>

        <div className="mt-10 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">Supported Services</h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[color:var(--text-muted)]">
            View all supported bypasses at the endpoint below. You may also use an API key to bypass the CAPTCHA on this website.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[color:var(--text-muted)]" href="/supported">
            /supported <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-12 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">Plans</h2>
          <div className="mt-8 space-y-5">
            {pricingPlans.map((plan) => (
              <GlassCard key={plan.name} className="rounded-[28px] bg-[color:var(--card-solid)]">
                <div className="grid gap-6 lg:grid-cols-[1fr_240px] lg:items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-[color:var(--text-primary)]">{plan.name}</h3>
                    <p className="mt-3 text-lg text-[color:var(--text-muted)]">{plan.description}</p>
                    <div className="mt-7 border-t border-[color:var(--border-color)] pt-5">
                      <p className="font-semibold text-[color:var(--text-primary)]">{plan.subtitle}</p>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{plan.bullets[0]}</p>
                      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[color:var(--text-muted)]">
                        {plan.bullets.slice(1).map((bullet) => (
                          <span key={bullet} className="inline-flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                            {bullet}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="lg:text-right">
                    <div className="inline-flex items-end gap-2 rounded-[20px] border border-[color:var(--border-color)] bg-[#f8fafc] px-5 py-4 dark:bg-white/5">
                      <span className="text-5xl font-semibold text-[color:var(--text-primary)]">{plan.price}</span>
                      <span className="pb-2 text-sm text-[color:var(--text-muted)]">{plan.unit}</span>
                    </div>
                    <Button className="mt-6">Buy Now</Button>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">Payment Methods</h2>
          <div className="mt-5 space-y-4 text-lg text-[color:var(--text-muted)]">
            {paymentMethods.map((method) => (
              <div key={method} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-slate-500" />
                <p>{method}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">Custom Plans</h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--text-muted)]">
            High-volume projects may require a custom plan. Contact us to discuss your needs.
          </p>
        </div>

        <div className="mt-10 border-t border-[color:var(--border-color)] pt-10">
          <h2 className="text-3xl font-semibold text-[color:var(--text-primary)]">Terms of Service</h2>
          <p className="mt-4 text-lg leading-8 text-[color:var(--text-muted)]">
            By purchasing access to this API, you agree to our Terms of Service.
          </p>
          <a className="mt-5 inline-flex items-center gap-2 text-base font-semibold text-[color:var(--text-muted)]" href="/">
            View Terms <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </PageShell>
  );
}
