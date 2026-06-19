import { ReactNode } from "react";
import Reveal from "./Reveal";

export function Kicker({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <span className={`kicker ${light ? "text-gold-light" : "text-gold-deep"}`}>
      <span
        className={`h-px w-8 ${light ? "bg-gold-light" : "bg-gold-deep"}`}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  kicker,
  title,
  intro,
  light = false,
  center = false,
  className = "",
}: {
  kicker?: string;
  title: ReactNode;
  intro?: ReactNode;
  light?: boolean;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal
      className={`${center ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {kicker && (
        <div className={center ? "flex justify-center" : ""}>
          <Kicker light={light}>{kicker}</Kicker>
        </div>
      )}
      <h2
        className={`mt-5 font-grotesk text-4xl font-semibold tracking-tightest md:text-5xl lg:text-[3.4rem] lg:leading-[1.02] ${
          light ? "text-paper" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-6 text-lg leading-relaxed ${
            light ? "text-paper/60" : "text-ink/60"
          }`}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}

export function PageHero({
  kicker,
  title,
  intro,
}: {
  kicker: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-36 pb-20 text-paper md:pt-44 md:pb-28">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-royal/15 blur-[140px]" />
      <div className="animate-float-y pointer-events-none absolute right-[4%] top-1/2 h-[400px] w-[400px] rounded-full bg-gold/10 blur-[120px]" />
      <div className="animate-drift-slow pointer-events-none absolute left-[6%] top-10 h-[260px] w-[260px] rounded-full bg-royal/10 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 0%, black, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 0%, black, transparent 70%)",
        }}
      />
      <div className="container-x relative">
        <Reveal>
          <Kicker light>{kicker}</Kicker>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-4xl font-grotesk text-5xl font-semibold tracking-tightest md:text-7xl lg:text-[5rem] lg:leading-[0.98]">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/60 md:text-xl">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
}
