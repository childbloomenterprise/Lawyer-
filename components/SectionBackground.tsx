"use client";

/**
 * Reusable animated backdrop for dark sections.
 * Drifting gold + royal orbs, a slowly moving fine grid, grain and edge fades.
 * Pure CSS animation (respects prefers-reduced-motion via globals.css).
 *
 * variant "gold" | "royal" | "split" controls the dominant glow.
 */
export default function SectionBackground({
  variant = "split",
  fade = true,
  grid = true,
}: {
  variant?: "gold" | "royal" | "split";
  fade?: boolean;
  grid?: boolean;
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* drifting orbs */}
      {(variant === "royal" || variant === "split") && (
        <div className="animate-drift-slow absolute -top-32 left-[8%] h-[420px] w-[420px] rounded-full bg-royal/20 blur-[130px]" />
      )}
      {(variant === "gold" || variant === "split") && (
        <div className="animate-drift absolute bottom-[-120px] right-[6%] h-[460px] w-[460px] rounded-full bg-gold/15 blur-[140px]" />
      )}
      {variant === "split" && (
        <div className="animate-float-y absolute right-1/3 top-1/3 h-[260px] w-[260px] rounded-full bg-royal/10 blur-[120px]" />
      )}

      {/* drifting fine grid */}
      {grid && (
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage:
              "radial-gradient(circle at 50% 40%, black, transparent 78%)",
            WebkitMaskImage:
              "radial-gradient(circle at 50% 40%, black, transparent 78%)",
          }}
        />
      )}

      {/* moving sheen line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      {/* grain */}
      <div className="noise absolute inset-0 opacity-[0.03] mix-blend-overlay" />

      {/* edge fades to neighbouring sections */}
      {fade && (
        <>
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper/0 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        </>
      )}
    </div>
  );
}
