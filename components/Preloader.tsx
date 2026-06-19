"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

const KEY = "tlp-intro-seen";

export default function Preloader() {
  const reduce = useReducedMotion();
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  // Decide on mount (avoids SSR/client mismatch) — once per session.
  useEffect(() => {
    if (reduce) return;
    const seen = sessionStorage.getItem(KEY);
    if (seen) return;
    setShow(true);
    document.documentElement.style.overflow = "hidden";

    const start = performance.now();
    const DURATION = 1500;
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        sessionStorage.setItem(KEY, "1");
        setTimeout(() => {
          setShow(false);
          document.documentElement.style.overflow = "";
        }, 450);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.style.overflow = "";
    };
  }, [reduce]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-ink text-paper"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_LUXE }}
        >
          {/* logo mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: EASE_LUXE }}
            className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br from-gold-light via-gold to-gold-deep text-ink shadow-[0_0_40px_-6px_rgba(228,201,126,0.7)]"
          >
            <span className="font-grotesk text-xl font-bold tracking-tightest">
              TLP
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-[11px] font-medium uppercase tracking-kicker text-paper/50"
          >
            Triage Law Partners
          </motion.p>

          {/* drawing gold hairline + counter */}
          <div className="mt-8 w-56">
            <div className="h-px w-full overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-gold-light to-gold"
                style={{ width: `${count}%` }}
              />
            </div>
            <div className="mt-3 flex justify-between text-[10px] font-medium uppercase tracking-kicker text-paper/40">
              <span>Legal Intelligence</span>
              <span className="font-grotesk tabular-nums text-gold">{count}</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
