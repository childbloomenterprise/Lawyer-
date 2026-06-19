"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AuroraBackground from "@/components/AuroraBackground";

// WebGL canvas is decorative only → never server-render it; aurora covers SSR/SEO.
const LiquidGoldCanvas = dynamic(() => import("./LiquidGoldCanvas"), {
  ssr: false,
  loading: () => <AuroraBackground />,
});

function canUseWebGL() {
  if (typeof window === "undefined") return false;
  // Respect reduced-motion + low-power devices.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const mem = (navigator as Navigator & { deviceMemory?: number }).deviceMemory;
  if (typeof mem === "number" && mem > 0 && mem < 4) return false;
  try {
    const c = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (c.getContext("webgl") || c.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

export default function HeroBackground() {
  const [webgl, setWebgl] = useState(false);

  useEffect(() => {
    setWebgl(canUseWebGL());
  }, []);

  return (
    <div className="absolute inset-0">
      {webgl ? <LiquidGoldCanvas /> : <AuroraBackground />}
      {/* shared overlays so WebGL + fallback feel identical above the fold */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(circle at 50% 35%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(circle at 50% 35%, black, transparent 75%)",
        }}
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
