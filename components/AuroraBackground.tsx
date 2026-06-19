"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Dark hero backdrop: flowing gold gradient lines + royal-purple glow +
 * a mouse-following light. Pure CSS/canvas-free for performance.
 */
export default function AuroraBackground({
  className = "",
}: {
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      el.style.setProperty("--mx", `${x}%`);
      el.style.setProperty("--my", `${y}%`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "30%" }}
    >
      {/* base */}
      <div className="absolute inset-0 bg-ink" />

      {/* royal purple glow */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-royal/20 blur-[140px]" />

      {/* gold glow */}
      <div className="absolute bottom-[-200px] right-[-100px] h-[500px] w-[600px] rounded-full bg-gold/15 blur-[130px]" />

      {/* mouse-following light */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx) var(--my), rgba(228,201,126,0.12), transparent 45%)",
        }}
      />

      {/* flowing gold hairlines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.5]"
        preserveAspectRatio="none"
        viewBox="0 0 1440 800"
        fill="none"
      >
        <defs>
          <linearGradient id="goldline" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A24B" stopOpacity="0" />
            <stop offset="50%" stopColor="#E4C97E" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C9A24B" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[120, 260, 420, 560, 680].map((y, i) => (
          <path
            key={y}
            d={`M-50 ${y} C 360 ${y - 60}, 1080 ${y + 80}, 1490 ${y - 30}`}
            stroke="url(#goldline)"
            strokeWidth="1"
            className="animate-pulse-glow"
            style={{ animationDelay: `${i * 0.7}s` }}
          />
        ))}
      </svg>

      {/* fine grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(circle at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 30%, black, transparent 75%)",
        }}
      />

      {/* noise + bottom fade */}
      <div className="noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
