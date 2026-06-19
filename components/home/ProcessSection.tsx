"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/Section";
import { PROCESS } from "@/lib/site";

export default function ProcessSection() {
  return (
    <section className="relative bg-paper py-20 sm:py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="How we work"
          title={<>From first call to growth partnership.</>}
          intro="A clear, repeatable path. No mystery, no surprise invoices — just a method that compounds in your favour."
        />

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="group relative"
            >
              <div className="flex items-center gap-4">
                <span className="font-grotesk text-5xl font-semibold tracking-tightest text-ink/[0.12] transition-colors duration-300 group-hover:text-gold/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-ink/15 to-transparent" />
              </div>
              <h3 className="mt-5 font-grotesk text-xl font-semibold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
