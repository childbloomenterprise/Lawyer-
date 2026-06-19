import type { Metadata } from "next";
import { PageHero } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Knowledge Centre",
  description:
    "Practical legal intelligence for founders and investors — DPDP, venture capital, cross-border expansion, AI regulation and dispute resolution.",
};

const CATEGORIES = ["All", ...Array.from(new Set(INSIGHTS.map((i) => i.category)))];

export default function KnowledgePage() {
  const [featured, ...rest] = INSIGHTS;

  return (
    <>
      <PageHero
        kicker="Knowledge Centre"
        title={
          <>
            Legal intelligence,
            <br />
            <span className="text-gold-gradient">in plain language.</span>
          </>
        }
        intro="Field guides, regulatory updates and founder-focused analysis from the desks of Triage Law Partners."
      />

      <section className="bg-paper py-20 md:py-28">
        <div className="container-x">
          {/* category chips (static visual filter) */}
          <div className="flex flex-wrap gap-2.5">
            {CATEGORIES.map((c, i) => (
              <span
                key={c}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  i === 0
                    ? "border-ink bg-ink text-paper"
                    : "border-ink/15 text-ink/70 hover:border-ink/40"
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          {/* featured */}
          <RevealItem className="mt-12">
            <div className="grid gap-8 rounded-4xl border border-ink/10 bg-gradient-to-br from-ink to-ink-700 p-10 text-paper md:grid-cols-2 md:p-14">
              <div className="flex flex-col justify-center">
                <span className="kicker text-gold-light">
                  <span className="h-px w-8 bg-gold-light" /> Featured
                </span>
                <h2 className="mt-5 font-grotesk text-3xl font-semibold tracking-tight md:text-4xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-paper/60">{featured.excerpt}</p>
                <a
                  href={`/insights/${featured.slug}`}
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold-light cursor-pointer"
                >
                  Read the guide →
                </a>
              </div>
              <div className="hidden items-center justify-center md:flex">
                <div className="grid h-full w-full place-items-center rounded-3xl border border-white/10 bg-white/[0.03]">
                  <span className="font-grotesk text-[7rem] font-black leading-none text-white/[0.07]">
                    TLP
                  </span>
                </div>
              </div>
            </div>
          </RevealItem>

          <RevealGroup className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3" stagger={0.06}>
            {rest.map((post) => (
              <RevealItem key={post.slug}>
                <InsightCard post={post} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>
    </>
  );
}
