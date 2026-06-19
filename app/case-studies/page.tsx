import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Selected outcomes: venture rounds closed, cross-border structures built, and regulatory matters defended for high-growth clients across India and the UAE.",
};

const CASES = [
  {
    sector: "Fintech · Series A",
    title: "Renegotiated a liquidation-preference trap in 48 hours",
    metric: "2×",
    metricLabel: "preference removed",
    desc: "Diligence on a term sheet surfaced a stacked liquidation preference the prior firm had missed. We restructured it before signing — preserving founder economics on exit.",
  },
  {
    sector: "SaaS · Expansion",
    title: "India–UAE structure with zero FEMA flags",
    metric: "3 wks",
    metricLabel: "to operational",
    desc: "Designed the holding structure for a growth-stage SaaS company entering the GCC — clean, tax-efficient, and FEMA-compliant from day one.",
  },
  {
    sector: "Healthcare · Regulatory",
    title: "Defended an enforcement action, calmly",
    metric: "Closed",
    metricLabel: "no charges",
    desc: "When a regulator came knocking, courtroom-grade strategy and a composed first response turned a potential crisis into a closed file.",
  },
  {
    sector: "AI · Seed",
    title: "Data-governance posture ahead of regulation",
    metric: "DPDP",
    metricLabel: "ready",
    desc: "Built training-data provenance and consent architecture for an AI company — getting ahead of the DPDP Act before it became a fire drill.",
  },
  {
    sector: "VC Fund · Formation",
    title: "Fund structure built for cross-border LPs",
    metric: "9",
    metricLabel: "jurisdictions",
    desc: "Stood up a fund vehicle able to accept capital from LPs across nine jurisdictions, with portfolio-support retainers built in.",
  },
  {
    sector: "Web3 · Token",
    title: "Token structuring without the grey zones",
    metric: "Clean",
    metricLabel: "launch",
    desc: "Navigated the cross-border regulatory maze for a Web3 venture — a defensible token structure that could actually go to market.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        kicker="Selected work"
        title={
          <>
            The work behind the
            <br />
            <span className="text-gold-gradient">numbers.</span>
          </>
        }
        intro="A sample of outcomes across venture, cross-border, regulatory and disputes. Client identities are protected; the results are real."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="container-x">
          <RevealGroup className="grid gap-6 md:grid-cols-2" stagger={0.07}>
            {CASES.map((c) => (
              <RevealItem key={c.title}>
                <div className="group flex h-full flex-col rounded-4xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(10,10,11,0.22)] md:p-10">
                  <div className="flex items-start justify-between gap-4">
                    <span className="rounded-full bg-ink/[0.05] px-3 py-1 text-xs font-medium text-ink/65">
                      {c.sector}
                    </span>
                    <div className="text-right">
                      <div className="font-grotesk text-3xl font-semibold tracking-tightest text-gold-deep">
                        {c.metric}
                      </div>
                      <div className="text-[11px] uppercase tracking-wider text-ink/40">
                        {c.metricLabel}
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-6 font-grotesk text-xl font-semibold leading-snug tracking-tight text-ink">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55">
                    {c.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-16 flex flex-col items-center gap-5 rounded-4xl border border-ink/10 bg-mist p-10 text-center md:p-14">
            <h2 className="max-w-xl font-grotesk text-3xl font-semibold tracking-tightest text-ink md:text-4xl">
              Your matter could be the next one here.
            </h2>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink-700 cursor-pointer"
            >
              Book a Strategy Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
