import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { PageHero, SectionHeading, Kicker } from "@/components/Section";
import Reveal, { RevealGroup, RevealItem } from "@/components/Reveal";
import { SERVICE_GROUPS, ENGAGEMENT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service legal counsel: venture capital, M&A, IP, data protection, corporate governance, cross-border advisory, and litigation & dispute resolution across India and the UAE.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Practice areas"
        title={
          <>
            Everything a high-growth
            <br />
            company needs.{" "}
            <span className="text-gold-gradient">In one firm.</span>
          </>
        }
        intro="Two practices, one philosophy. The deal-side advisory team that builds your foundation, and the disputes team that defends it."
      />

      {/* Service groups */}
      {SERVICE_GROUPS.map((group, gi) => (
        <section
          key={group.id}
          className={gi % 2 === 0 ? "bg-paper py-20 sm:py-24 md:py-28" : "bg-mist py-20 sm:py-24 md:py-28"}
        >
          <div className="container-x">
            <SectionHeading
              kicker={`0${gi + 1} — ${group.title}`}
              title={group.title}
              intro={group.blurb}
            />
            <RevealGroup
              className="mt-14 grid gap-5 md:grid-cols-2"
              stagger={0.05}
            >
              {group.services.map((s, i) => (
                <RevealItem key={s.title}>
                  <div className="group flex h-full gap-5 rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(10,10,11,0.2)]">
                    <span className="font-grotesk text-sm font-semibold text-gold-deep">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-grotesk text-lg font-semibold tracking-tight text-ink">
                        {s.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/55">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </section>
      ))}

      {/* Engagement options */}
      <section className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 md:py-32">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-royal/15 blur-[140px]" />
        <div className="container-x relative">
          <div className="flex justify-center">
            <Kicker light>Engagement options</Kicker>
          </div>
          <Reveal>
            <h2 className="mx-auto mt-5 max-w-2xl text-center font-grotesk text-4xl font-semibold tracking-tightest md:text-5xl">
              Choose how you{" "}
              <span className="text-gold-gradient">work with us.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {ENGAGEMENT.map((e, i) => (
              <Reveal key={e.name} delay={i * 0.08}>
                <div
                  className={`relative flex h-full flex-col rounded-4xl p-8 transition-all duration-500 ${
                    e.featured
                      ? "gradient-border shadow-[0_40px_100px_-30px_rgba(109,74,255,0.4)]"
                      : "border border-white/10 bg-white/[0.03] hover:border-white/25"
                  }`}
                >
                  {e.featured && (
                    <span className="absolute -top-3 left-8 rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-ink">
                      Most popular
                    </span>
                  )}
                  <p className="text-xs font-medium uppercase tracking-kicker text-gold">
                    {e.tagline}
                  </p>
                  <h3 className="mt-3 font-grotesk text-2xl font-semibold tracking-tight">
                    {e.name}
                  </h3>
                  <p className="mt-1 font-grotesk text-lg font-medium text-paper/70">
                    {e.price}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-paper/55">
                    {e.desc}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6">
                    {e.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm text-paper/75">
                        <Check className="h-4 w-4 shrink-0 text-gold" strokeWidth={2.5} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={e.featured ? "/codex-triage" : "/contact"}
                    className={`group mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors cursor-pointer ${
                      e.featured
                        ? "bg-gold text-ink hover:bg-gold-light"
                        : "border border-white/20 text-paper hover:border-gold/60 hover:text-gold"
                    }`}
                  >
                    {e.featured ? "Explore Codex Triage" : "Enquire"}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
