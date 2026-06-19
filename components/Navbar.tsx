"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV } from "@/lib/site";
import Logo from "./Logo";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <motion.nav
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`flex w-full max-w-wide items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:px-5 ${
            scrolled
              ? "border border-ink/10 bg-paper/80 shadow-[0_8px_40px_-12px_rgba(10,10,11,0.18)] backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Logo />

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    active
                      ? "text-ink"
                      : "text-ink/60 hover:text-ink"
                  }`}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-ink/[0.06]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <MagneticButton href="/contact" variant="dark">
                Book a Call
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="grid h-11 w-11 place-items-center rounded-full border border-ink/10 text-ink transition-colors hover:bg-ink/[0.05] lg:hidden cursor-pointer"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink text-paper lg:hidden"
          >
            <div className="flex items-center justify-between px-6 pt-6">
              <Logo light />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-paper cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-10 flex flex-col gap-1 px-6">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between border-b border-white/10 py-5 font-grotesk text-3xl font-medium tracking-tight"
                  >
                    {item.label}
                    <ArrowUpRight className="h-6 w-6 text-gold" />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pt-10">
              <MagneticButton href="/contact" variant="gold" className="w-full">
                Book a Strategy Call
                <ArrowUpRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
