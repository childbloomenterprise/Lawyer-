"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

/**
 * Gold curtain that lifts away on every route change — makes navigation
 * feel like a film cut rather than a reload. Skips the very first load
 * (the preloader owns that moment).
 */
export default function PageTransition() {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const first = useRef(true);
  const [play, setPlay] = useState(0);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setPlay((n) => n + 1);
  }, [pathname]);

  if (reduce || play === 0) return null;

  return (
    <motion.div
      key={play}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[150] origin-top"
      initial={{ scaleY: 1 }}
      animate={{ scaleY: 0 }}
      transition={{ duration: 0.7, ease: EASE_LUXE }}
      style={{ transformOrigin: "top" }}
    >
      <div className="relative h-full w-full overflow-hidden bg-ink">
        <div className="absolute inset-0 bg-gradient-to-b from-gold-deep/30 via-ink to-ink" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="font-grotesk text-sm font-bold uppercase tracking-kicker text-gold/70">
            TLP
          </span>
        </div>
      </div>
    </motion.div>
  );
}
