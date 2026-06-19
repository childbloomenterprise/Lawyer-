import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import { TEAM } from "@/lib/site";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the partners of Triage Law Partners — senior counsel with courtroom authority and cross-border, technology and fintech depth.",
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="The partners"
        title={
          <>
            Senior counsel you&apos;ll
            <br />
            <span className="text-gold-gradient">actually work with.</span>
          </>
        }
        intro="No rotating junior pool. The partners who advise you are the ones who do the work — and put their names to it."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="container-x">
          <RevealGroup className="grid gap-8 md:grid-cols-2" stagger={0.1}>
            {TEAM.map((member) => (
              <RevealItem key={member.slug}>
                <Link
                  href={`/team/${member.slug}`}
                  className="group block overflow-hidden rounded-4xl border border-ink/10 bg-white transition-all duration-500 hover:border-gold/40 hover:shadow-[0_40px_90px_-40px_rgba(10,10,11,0.3)] cursor-pointer"
                >
                  {/* portrait area — monogram on dark gradient */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-ink to-ink-700">
                    <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-gold/20 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="font-grotesk text-[6rem] font-black leading-none text-white/[0.08] transition-transform duration-700 group-hover:scale-110">
                        {member.initials}
                      </span>
                    </div>
                    <div className="absolute bottom-5 left-6">
                      <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gold font-grotesk text-lg font-bold text-ink">
                        {member.initials}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-ink">
                      {member.name}
                    </h2>
                    <p className="mt-1 text-sm font-medium text-gold-deep">
                      {member.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink/60">
                      {member.bio}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {member.focus.map((f) => (
                        <span
                          key={f}
                          className="rounded-full bg-ink/[0.05] px-3 py-1 text-xs font-medium text-ink/65"
                        >
                          {f}
                        </span>
                      ))}
                    </div>
                    <span className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors group-hover:text-gold-deep">
                      Full biography
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
