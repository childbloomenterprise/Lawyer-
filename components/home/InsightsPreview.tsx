import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/Section";
import { RevealGroup, RevealItem } from "@/components/Reveal";
import InsightCard from "@/components/InsightCard";
import { INSIGHTS } from "@/lib/site";

export default function InsightsPreview() {
  return (
    <section className="relative bg-mist py-20 sm:py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            kicker="Knowledge Centre"
            title={<>Sharp, practical legal intelligence.</>}
          />
          <Link
            href="/knowledge"
            className="group inline-flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink/40 cursor-pointer"
          >
            All insights
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3" stagger={0.08}>
          {INSIGHTS.slice(0, 3).map((post) => (
            <RevealItem key={post.slug}>
              <InsightCard post={post} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
