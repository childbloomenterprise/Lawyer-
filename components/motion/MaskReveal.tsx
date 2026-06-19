"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

/** Slides its content up out of a mask on scroll-in. Works with any JSX. */
export default function MaskReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <span className={`block ${className ?? ""}`}>{children}</span>;

  return (
    <span
      className="block overflow-hidden"
      style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
    >
      <motion.span
        className={`block ${className ?? ""}`}
        initial={{ y: "115%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay, ease: EASE_LUXE }}
      >
        {children}
      </motion.span>
    </span>
  );
}
