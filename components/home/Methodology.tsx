"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { SectionHeading } from "@/components/Section";
import SectionBackground from "@/components/SectionBackground";
import { METHOD } from "@/lib/site";

export default function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 75%"],
  });
  const fill = useSpring(useTransform(scrollYProgress, [0, 1], ["0%", "100%"]), {
    stiffness: 70,
    damping: 28,
  });

  return (
    <section
      id="method"
      className="relative overflow-hidden bg-ink py-20 text-paper sm:py-24 md:py-32"
    >
      <SectionBackground variant="split" />

      <div className="container-x relative">
        <SectionHeading
          light
          kicker="The Triage Method"
          title={
            <>
              We diagnose before{" "}
              <span className="text-sheen">we prescribe.</span>
            </>
          }
          intro="Triage is borrowed from medicine for a reason. Every matter is assessed, prioritised by impact, and executed cleanly — never billed by the hour for its own sake."
        />

        <div ref={ref} className="relative mt-14 md:mt-20">
          {/* rail */}
          <div className="absolute bottom-0 left-[19px] top-0 w-px bg-white/10 md:left-1/2 md:-translate-x-1/2" />
          <motion.div
            style={{ height: reduce ? "100%" : fill }}
            className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-gold-light via-gold to-royal md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-7 md:space-y-0">
            {METHOD.map((m, i) => {
              const right = i % 2 === 1;
              return (
                <div
                  key={m.step}
                  className="relative md:grid md:grid-cols-2 md:gap-16"
                >
                  {/* node */}
                  <span className="absolute left-[12px] top-6 z-10 grid h-4 w-4 place-items-center rounded-full border border-gold/60 bg-ink md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                    <span className="absolute inset-0 animate-ping rounded-full border border-gold/40" />
                  </span>

                  <motion.div
                    initial={{
                      opacity: 0,
                      x: reduce ? 0 : right ? 40 : -40,
                      y: reduce ? 0 : 16,
                    }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-90px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className={`py-3 pl-12 md:py-8 md:pl-0 ${
                      right
                        ? "md:col-start-2"
                        : "md:col-start-1 md:text-right"
                    }`}
                  >
                    <div
                      className={`group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.07] md:p-7 ${
                        right ? "" : "md:ml-auto"
                      }`}
                    >
                      {/* hover wash */}
                      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gold/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative">
                        <div
                          className={`flex items-center gap-3 ${
                            right ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <span className="font-grotesk text-3xl font-semibold tracking-tightest text-gold/90 transition-transform duration-500 group-hover:scale-110">
                            {m.step}
                          </span>
                          <span className="h-px flex-1 bg-gradient-to-r from-gold/40 to-transparent" />
                        </div>
                        <h3 className="mt-3 font-grotesk text-2xl font-semibold tracking-tight">
                          {m.title}
                        </h3>
                        <p className="mt-2.5 text-sm leading-relaxed text-paper/55">
                          {m.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
