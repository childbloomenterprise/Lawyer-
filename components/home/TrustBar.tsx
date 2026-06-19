"use client";

import AnimatedCounter from "@/components/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { STATS } from "@/lib/site";

const CLIENTS = [
  "Seed Ventures",
  "Helix Capital",
  "Northstar AI",
  "Meridian SaaS",
  "Kairos Fintech",
  "Aurora Health",
  "Vantage Web3",
  "Cobalt Media",
];

export default function TrustBar() {
  return (
    <section className="relative border-y border-ink/10 bg-paper">
      {/* counters */}
      <div className="container-wide py-16 md:py-20">
        <RevealGroup className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
          {STATS.map((s) => (
            <RevealItem key={s.label}>
              <div className="group relative text-center md:text-left">
                <div className="font-grotesk text-5xl font-semibold tracking-tightest text-ink md:text-6xl lg:text-7xl">
                  <span className="text-gold-gradient">
                    <AnimatedCounter
                      value={s.value}
                      prefix={s.prefix}
                      suffix={s.suffix}
                    />
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-ink/55">{s.label}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      {/* logo marquee */}
      <div className="border-t border-ink/10 py-9">
        <p className="container-x text-center text-[11px] font-medium uppercase tracking-kicker text-ink/35">
          Trusted by founders, funds & enterprises
        </p>
        <div className="mask-fade-x mt-7 flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
            {[...CLIENTS, ...CLIENTS].map((c, i) => (
              <span
                key={c + i}
                className="whitespace-nowrap font-grotesk text-xl font-semibold text-ink/25 transition-colors hover:text-ink/60"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
