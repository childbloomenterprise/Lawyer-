"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/Section";
import { TESTIMONIALS } from "@/lib/site";

export default function Testimonials() {
  return (
    <section className="relative bg-paper py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          kicker="In their words"
          title={<>The work speaks. So do the founders.</>}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (i % 2) * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-4xl border border-ink/10 bg-white p-8 transition-all duration-500 hover:border-gold/40 hover:shadow-[0_30px_70px_-30px_rgba(10,10,11,0.25)] md:p-10"
            >
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gold/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <Quote className="h-8 w-8 text-gold" />
              <blockquote className="mt-6 font-grotesk text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-ink/10 pt-6">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-grotesk text-xs font-bold text-gold">
                  {t.company.split(" ").map((w) => w[0]).slice(0, 2).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.company}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
