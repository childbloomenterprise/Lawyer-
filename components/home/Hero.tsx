"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import AuroraBackground from "@/components/AuroraBackground";
import MagneticButton from "@/components/MagneticButton";

const line = {
  hidden: { opacity: 0, y: 40 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 text-paper">
      <AuroraBackground />

      <div className="container-x relative w-full">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-paper/80 backdrop-blur-md"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
          New-age full-service law firm · India & UAE
        </motion.div>

        <h1 className="mt-7 max-w-5xl font-grotesk text-[2.5rem] font-semibold leading-[1.01] tracking-tightest xs:text-5xl sm:text-6xl md:text-7xl lg:text-[5.6rem]">
          <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block">
            Legal isn&apos;t paperwork.
          </motion.span>
          <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block">
            It&apos;s your{" "}
            <span className="text-sheen">competitive advantage.</span>
          </motion.span>
        </h1>

        <motion.p
          custom={2}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-8 max-w-xl text-lg leading-relaxed text-paper/65 md:text-xl"
        >
          We help founders, investors and enterprises build confidently across
          India and the UAE — precise assessment, impact-first prioritisation,
          clean execution.
        </motion.p>

        <motion.div
          custom={3}
          variants={line}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <MagneticButton href="/contact" variant="gold">
            Book a Strategy Call
            <ArrowUpRight className="h-4 w-4" />
          </MagneticButton>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-paper transition-colors duration-300 hover:border-gold/60 hover:text-gold cursor-pointer"
          >
            Explore Services
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </motion.div>

        {/* bottom meta row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-20 hidden items-center gap-8 text-xs uppercase tracking-kicker text-paper/40 md:flex"
        >
          <span className="flex items-center gap-2">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce text-gold" /> Scroll
            to explore
          </span>
          <span className="h-px w-16 bg-white/15" />
          <span>Venture · M&amp;A · Cross-Border · Disputes</span>
        </motion.div>
      </div>
    </section>
  );
}
