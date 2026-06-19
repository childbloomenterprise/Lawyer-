import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Insight = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  read: string;
};

function fmt(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function InsightCard({ post }: { post: Insight }) {
  return (
    <Link
      href={`/insights/${post.slug}`}
      className="group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-ink/10 bg-white p-7 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(10,10,11,0.25)] cursor-pointer"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
      <div>
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium text-ink/70">
            {post.category}
          </span>
          <span className="text-ink/35">{post.read} read</span>
        </div>
        <h3 className="mt-5 font-grotesk text-xl font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-gold-deep">
          {post.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink/55">
          {post.excerpt}
        </p>
      </div>
      <div className="mt-7 flex items-center justify-between border-t border-ink/10 pt-5">
        <span className="text-xs text-ink/40">{fmt(post.date)}</span>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 text-ink transition-all duration-300 group-hover:border-gold group-hover:bg-gold">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
