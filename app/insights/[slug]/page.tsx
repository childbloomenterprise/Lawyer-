import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { INSIGHTS } from "@/lib/site";

export function generateStaticParams() {
  return INSIGHTS.map((i) => ({ slug: i.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = INSIGHTS.find((i) => i.slug === params.slug);
  if (!post) return { title: "Insight not found" };
  return { title: post.title, description: post.excerpt };
}

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function InsightPage({ params }: { params: { slug: string } }) {
  const post = INSIGHTS.find((i) => i.slug === params.slug);
  if (!post) notFound();

  const related = INSIGHTS.filter((i) => i.slug !== post.slug).slice(0, 2);

  return (
    <article>
      <header className="relative overflow-hidden bg-ink pt-36 pb-16 text-paper md:pt-44 md:pb-20">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-royal/15 blur-[140px]" />
        <div className="container-x relative max-w-3xl">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-2 text-sm text-paper/55 transition-colors hover:text-gold cursor-pointer"
          >
            <ArrowLeft className="h-4 w-4" /> Knowledge Centre
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-gold/15 px-3 py-1 font-medium text-gold">
              {post.category}
            </span>
            <span className="text-paper/45">
              {fmt(post.date)} · {post.read} read
            </span>
          </div>
          <h1 className="mt-5 font-grotesk text-4xl font-semibold tracking-tightest md:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-paper/60">
            {post.excerpt}
          </p>
        </div>
      </header>

      <div className="bg-paper py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <Reveal>
            <div className="prose-tlp space-y-6 text-lg leading-relaxed text-ink/75">
              <p>
                This is a sample article body. In production, the Knowledge
                Centre is wired to a headless CMS so the team can publish without
                touching code — the layout, typography and reading experience you
                see here render any article cleanly.
              </p>
              <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-ink">
                Why this matters now
              </h2>
              <p>
                Founders rarely have a legal problem in isolation — they have a
                business decision with legal consequences. Our writing reflects
                that: practical, prioritised by impact, and free of jargon.
              </p>
              <blockquote className="border-l-2 border-gold pl-6 font-grotesk text-xl font-medium not-italic text-ink">
                The first 48 hours of any legal event determine the next two
                years. Move calmly, but move.
              </blockquote>
              <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-ink">
                What to do next
              </h2>
              <p>
                If this raises a question for your business, a strategy call is
                the fastest way to get a clear-eyed read on your position — no
                obligation, no billable-hour clock.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 rounded-4xl border border-ink/10 bg-white p-8 md:p-10">
            <h3 className="font-grotesk text-2xl font-semibold tracking-tight text-ink">
              Have a question on this?
            </h3>
            <p className="mt-2 text-ink/60">
              Book a focused call with senior counsel.
            </p>
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-ink-700 cursor-pointer"
            >
              Book a Strategy Call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* related */}
      <section className="bg-mist py-20">
        <div className="container-x">
          <h2 className="font-grotesk text-2xl font-semibold tracking-tight text-ink">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/insights/${r.slug}`}
                className="group rounded-4xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_24px_60px_-30px_rgba(10,10,11,0.2)] cursor-pointer"
              >
                <span className="text-xs font-medium text-gold-deep">
                  {r.category}
                </span>
                <h3 className="mt-3 font-grotesk text-xl font-semibold tracking-tight text-ink transition-colors group-hover:text-gold-deep">
                  {r.title}
                </h3>
                <p className="mt-2 text-sm text-ink/55">{r.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
