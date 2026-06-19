import type { Metadata } from "next";
import { ArrowUpRight, Mail } from "lucide-react";
import { PageHero, SectionHeading } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Build the McKinsey of legal. Triage Law Partners hires lawyers who think like strategists and operate at founder speed.",
};

const ROLES = [
  {
    title: "Corporate & VC Associate",
    location: "Kochi · Hybrid",
    type: "Full-time",
    desc: "Run point on fundraising, M&A and commercial transactions for high-growth clients.",
  },
  {
    title: "Disputes & Regulatory Associate",
    location: "Kochi · On-site",
    type: "Full-time",
    desc: "Support constitutional, arbitration and regulatory-defence matters with the partners.",
  },
  {
    title: "Cross-Border Counsel (UAE)",
    location: "Dubai · Hybrid",
    type: "Full-time",
    desc: "Lead India–UAE structuring and GCC market-entry work from the cross-border desk.",
  },
  {
    title: "Legal Operations & Knowledge",
    location: "Remote · India",
    type: "Full-time",
    desc: "Build the systems, playbooks and Knowledge Centre that make the firm scale.",
  },
];

const PERKS = [
  { title: "Senior-led from day one", desc: "Real responsibility, real mentorship — no document-review purgatory." },
  { title: "Founder-speed culture", desc: "We move fast and decisively. Bureaucracy is the enemy." },
  { title: "Cross-border exposure", desc: "Work across India and the UAE on genuinely complex matters." },
  { title: "Build, don't just bill", desc: "Help design the systems and product that define a new-age firm." },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        kicker="Careers"
        title={
          <>
            Help build the
            <br />
            <span className="text-gold-gradient">McKinsey of legal.</span>
          </>
        }
        intro="We hire lawyers who think like strategists, write like editors and operate at founder speed. If that's you, we should talk."
      />

      {/* perks */}
      <section className="bg-paper py-20 md:py-28">
        <div className="container-x">
          <SectionHeading
            kicker="Why TLP"
            title={<>A different kind of firm to grow in.</>}
          />
          <RevealGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((p) => (
              <RevealItem key={p.title}>
                <div className="h-full rounded-4xl border border-ink/10 bg-white p-7">
                  <span className="block h-1 w-10 rounded-full bg-gradient-to-r from-gold-light to-gold" />
                  <h3 className="mt-5 font-grotesk text-lg font-semibold tracking-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/55">
                    {p.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* roles */}
      <section className="bg-mist py-20 md:py-28">
        <div className="container-x">
          <SectionHeading kicker="Open roles" title={<>Where we&apos;re hiring.</>} />
          <RevealGroup className="mt-12 space-y-4" stagger={0.06}>
            {ROLES.map((r) => (
              <RevealItem key={r.title}>
                <a
                  href={`mailto:${CONTACT.general}?subject=Application: ${encodeURIComponent(
                    r.title
                  )}`}
                  className="group flex flex-col gap-4 rounded-3xl border border-ink/10 bg-white p-7 transition-all duration-400 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(10,10,11,0.2)] md:flex-row md:items-center md:justify-between md:p-8 cursor-pointer"
                >
                  <div>
                    <h3 className="font-grotesk text-xl font-semibold tracking-tight text-ink">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-ink/55">{r.desc}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right text-xs text-ink/50">
                      <p className="font-medium text-ink/70">{r.location}</p>
                      <p>{r.type}</p>
                    </div>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-ink/10 text-ink transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </a>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="mt-10 flex items-center gap-3 text-sm text-ink/60">
            <Mail className="h-4 w-4 text-gold-deep" />
            Don&apos;t see your role? Write to us at{" "}
            <a
              href={`mailto:${CONTACT.general}`}
              className="font-medium text-ink underline-offset-4 hover:underline"
            >
              {CONTACT.general}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
