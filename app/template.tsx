"use client";

import { motion } from "framer-motion";
import { EASE_LUXE } from "@/lib/motion";

// template.tsx re-mounts on every navigation → clean page-enter animation.
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_LUXE, delay: 0.1 }}
    >
      {children}
    </motion.div>
  );
}
