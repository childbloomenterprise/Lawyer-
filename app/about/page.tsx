import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import Methodology from "@/components/home/Methodology";
import { STATS } from "@/lib/site";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "About",
  description:
    "Triage Law Partners is a new-age, full-service law firm built on precise assessment, impact-first prioritisation and clean execution — for founders, investors and enterprises across India and the UAE.",
};

const VALUES = [
  {
    title: "Client-first, always",
    desc: "A Gandhian, client-first philosophy: counsel that serves your real interest, not the firm's billing cycle.",
  },
  {
    title: "Diagnose before prescribe",
    desc: "Triage is borrowed from medicine. We assess the full picture before recommending a path.",
  },
  {
    title: "Impact over hours",
    desc: "We prioritise by impact and execute cleanly — no billable-hour theatre.",
  },
  {
    title: "Partners, not vendors",
    desc: "We stay as you scale, becoming the legal backbone that grows with the company.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About the firm"
        title={
          <>
            The McKinsey of legal,
            <br />
            <span className="text-gold-gradient">built for founders.</span>
          </>
        }
        intro="Triage Law Partners is a new-age, full-service law firm based in Kochi, Kerala — built on the conviction that every legal problem deserves precise assessment, impact-first prioritisation, and clean execution."
      />

      {/* Narrative */}
      <section className="bg-paper py-24 md:py-32">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHeading
            kicker="Who we are"
            title={<>We don&apos;t do old law.</>}
          />
          <Reveal delay={0.1}>
            <div className="space-y-6 text-lg leading-relaxed text-ink/65">
              <p>
                We serve founders, growth-stage ventures and established
                businesses across India and the UAE. Not as a reactive legal
                service provider — as a long-term strategic partner that
                understands startups, investors and global business.
              </p>
              <p>
                Our practice spans advisory and transactional work — venture
                capital, M&amp;A, IP, data protection, corporate governance and
                cross-border structuring — alongside a litigation spine most
                boutique advisory shops simply don&apos;t have.
              </p>
              <p className="font-grotesk text-xl font-medium text-ink">
                The result is a firm that operates like a strategic growth
                partner. The place serious founders go.
              </p>
            </div>
          </Reveal>
        </div>

        {/* stats */}
        <div className="container-x mt-20">
          <RevealGroup className="grid grid-cols-2 gap-8 rounded-4xl border border-ink/10 bg-white p-10 md:grid-cols-4 md:p-14">
            {STATS.map((s) => (
              <RevealItem key={s.label}>
                <div className="font-grotesk text-4xl font-semibold tracking-tightest md:text-5xl">
                  <span className="text-gold-gradient">
                    <AnimatedCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                  </span>
                </div>
                <p className="mt-2 text-sm text-ink/55">{s.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 md:py-32">
        <div className="container-x">
          <SectionHeading
            center
            kicker="What we believe"
            title={<>Principles, not platitudes.</>}
          />
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <RevealItem key={v.title}>
                <div className="group h-full rounded-4xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(10,10,11,0.2)]">
                  <span className="block h-1 w-10 rounded-full bg-gradient-to-r from-gold-light to-gold" />
                  <h3 className="mt-5 font-grotesk text-lg font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {v.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Methodology reused */}
      <Methodology />

      {/* CTA to team */}
      <section className="bg-paper py-24 md:py-28">
        <div className="container-x">
          <div className="flex flex-col items-start justify-between gap-6 rounded-4xl border border-ink/10 bg-white p-10 md:flex-row md:items-center md:p-14">
            <div>
              <h3 className="font-grotesk text-3xl font-semibold tracking-tightest text-ink md:text-4xl">
                Meet the partners.
              </h3>
              <p className="mt-3 max-w-lg text-ink/60">
                Senior counsel with courtroom authority and cross-border depth —
                the people you&apos;ll actually work with.
              </p>
            </div>
            <Link
              href="/team"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink-700 cursor-pointer"
            >
              View the team
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
