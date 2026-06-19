import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Mail, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import { TEAM } from "@/lib/site";

export function generateStaticParams() {
  return TEAM.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const m = TEAM.find((t) => t.slug === params.slug);
  if (!m) return { title: "Partner not found" };
  return { title: m.name, description: `${m.name} — ${m.role}. ${m.bio}` };
}

export default function TeamMemberPage({
  params,
}: {
  params: { slug: string };
}) {
  const member = TEAM.find((t) => t.slug === params.slug);
  if (!member) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-paper md:pt-44 md:pb-28">
        <div className="pointer-events-none absolute -top-32 right-0 h-[400px] w-[600px] rounded-full bg-royal/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[300px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="container-x relative grid items-center gap-12 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="relative aspect-square overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br from-ink-700 to-ink">
              <div className="absolute inset-0 grid place-items-center">
                <span className="font-grotesk text-[10rem] font-black leading-none text-white/[0.07]">
                  {member.initials}
                </span>
              </div>
              <span className="absolute bottom-6 left-6 grid h-16 w-16 place-items-center rounded-2xl bg-gold font-grotesk text-xl font-bold text-ink">
                {member.initials}
              </span>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <Link
                href="/team"
                className="inline-flex items-center gap-2 text-sm text-paper/55 transition-colors hover:text-gold cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" /> All partners
              </Link>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 font-grotesk text-4xl font-semibold tracking-tightest md:text-6xl">
                {member.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-3 font-grotesk text-lg font-medium text-gold">
                {member.role}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${member.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-gold/60 hover:text-gold cursor-pointer"
                >
                  <Mail className="h-4 w-4" /> {member.email}
                </a>
                <a
                  href={`tel:${member.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium transition-colors hover:border-gold/60 hover:text-gold cursor-pointer"
                >
                  <Phone className="h-4 w-4" /> {member.phone}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1.4fr_0.8fr] lg:gap-20">
          <Reveal>
            <div className="space-y-6 text-lg leading-relaxed text-ink/75">
              <h2 className="font-grotesk text-3xl font-semibold tracking-tight text-ink">
                Biography
              </h2>
              <p>{member.bio}</p>
              <p>{member.long}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-4xl border border-ink/10 bg-white p-8">
              <h3 className="text-xs font-semibold uppercase tracking-kicker text-ink/40">
                Focus areas
              </h3>
              <ul className="mt-5 space-y-3">
                {member.focus.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 border-b border-ink/10 pb-3 text-sm font-medium text-ink/80 last:border-0"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-ink-700 cursor-pointer"
              >
                Work with {member.name.split(" ")[0]}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
