"use client";

import Link from "next/link";
import { useRef, ReactNode, MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: ReactNode;
  href?: string;
  variant?: "gold" | "ghost" | "dark";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
};

export default function MagneticButton({
  children,
  href,
  variant = "gold",
  className = "",
  onClick,
  type = "button",
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  const handleMove = (e: MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium tracking-tight transition-colors duration-300 cursor-pointer overflow-hidden";
  const variants: Record<string, string> = {
    gold: "bg-gold text-ink hover:bg-gold-light",
    dark: "bg-ink text-paper hover:bg-ink-700",
    ghost:
      "border border-ink/15 text-ink hover:border-ink/40 hover:bg-ink/[0.03]",
  };

  const inner = (
    <span
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-flex items-center gap-2 transition-transform duration-300 ease-luxe"
      style={{ willChange: "transform" }}
    >
      {children}
    </span>
  );

  const content = (
    <motion.span
      whileTap={{ scale: 0.97 }}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {inner}
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex">
        {content}
      </Link>
    );
  }
  return (
    <button type={type} onClick={onClick} className="inline-flex">
      {content}
    </button>
  );
}
