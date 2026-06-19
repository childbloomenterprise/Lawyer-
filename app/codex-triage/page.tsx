import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import CodexSection from "@/components/home/CodexSection";
import { CODEX_FEATURES, ENGAGEMENT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Codex Triage — Virtual Legal Officer",
  description:
    "Codex Triage is a Virtual Legal Officer on subscription: dedicated senior counsel, fixed monthly retainer, unlimited strategy calls and contract reviews across India and the UAE.",
};

const FAQ = [
  {
    q: "Who is Codex Triage for?",
    a: "Founders and growth-stage companies that need senior legal counsel on tap — without the unpredictability of hourly billing or the cost of an in-house general counsel.",
  },
  {
    q: "What's the response time?",
    a: "9×5 direct access with an average first-response time measured in minutes, not days. Urgent matters are triaged immediately.",
  },
  {
    q: "Does it cover both India and the UAE?",
    a: "Yes. One retainer covers counsel across both jurisdictions — ideal for companies expanding across the India–UAE corridor.",
  },
  {
    q: "Can I scale up or down?",
    a: "The retainer scales with your stage. As your legal needs grow, the engagement grows with you — and litigation or large transactions can be scoped separately.",
  },
];

export default function CodexTriagePage() {
  const vlo = ENGAGEMENT.find((e) => e.featured)!;

  return (
    <>
      <PageHero
        kicker="Codex Triage · VLO"
        title={
          <>
            A Virtual Legal Officer,
            <br />
            <span className="text-gold-gradient">on subscription.</span>
          </>
        }
        intro="The legal backbone of a high-growth company — dedicated senior counsel, a fixed monthly retainer, and proactive guidance from Day 1. Built like a product, priced like software."
      />

      {/* Reuse the product showcase */}
      <CodexSection />

      {/* What's included */}
      <section className="bg-paper py-20 sm:py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            center
            kicker="What's included"
            title={<>Everything an in-house GC would do.</>}
            intro="Without the headcount, the equity, or the six-figure salary."
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CODEX_FEATURES.map((f) => (
              <RevealItem key={f.title}>
                <div className="group h-full rounded-4xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(10,10,11,0.2)]">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold-deep">
                    <Check className="h-5 w-5" strokeWidth={2.5} />
                  </span>
                  <h3 className="mt-5 font-grotesk text-lg font-semibold tracking-tight text-ink">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {f.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Pricing highlight */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-royal/25 blur-[150px]" />
        <div className="container-x relative">
          <div className="mx-auto max-w-xl">
            <Reveal>
              <div className="gradient-border rounded-4xl p-10 text-center shadow-[0_40px_120px_-30px_rgba(109,74,255,0.4)]">
                <p className="text-xs font-medium uppercase tracking-kicker text-gold">
                  {vlo.tagline}
                </p>
                <h3 className="mt-3 font-grotesk text-3xl font-semibold tracking-tight">
                  {vlo.name}
                </h3>
                <p className="mt-2 font-grotesk text-2xl font-medium text-paper/80">
                  {vlo.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-paper/55">
                  {vlo.desc}
                </p>
                <ul className="mx-auto mt-7 max-w-xs space-y-3 text-left">
                  {vlo.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-3 text-sm text-paper/80"
                    >
                      <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-gold-light cursor-pointer"
                >
                  Request pricing
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <p className="mt-4 text-xs text-paper/40">
                  Custom retainers scoped to your stage. No lock-in.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-paper py-20 sm:py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading kicker="FAQ" title={<>Questions, answered.</>} />
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {FAQ.map((item, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <details className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-grotesk text-lg font-medium tracking-tight text-ink">
                    {item.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/60">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
