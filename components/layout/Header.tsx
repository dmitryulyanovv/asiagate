"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О компании" },
  { href: "/career", label: "Карьера" },
  { href: "/contacts", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/[0.06] bg-[#0A0A0A]/80 backdrop-blur-xl py-3"
          : "border-b border-transparent bg-transparent py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#00D4A5] to-[#00A67D] font-display text-base font-extrabold text-[#0A0A0A] transition-transform duration-300 group-hover:scale-105">
            AG
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Asia Gate
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300",
                  active
                    ? "text-white"
                    : "text-[#A3A3A3] hover:text-white"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.06]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:+78001234567"
            className="text-sm font-medium text-[#E5E5E5] transition-colors hover:text-white"
          >
            8 800 123-45-67
          </a>
          <Link
            href="/contacts"
            className="group inline-flex items-center gap-1.5 rounded-full bg-[#00D4A5] px-5 py-2.5 text-sm font-semibold text-[#0A0A0A] transition-all duration-300 hover:bg-[#00F5C4] hover:shadow-[0_0_30px_-5px_rgba(0,212,165,0.6)]"
          >
            Рассчитать доставку
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          aria-label="Открыть меню"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/[0.06] bg-[#0A0A0A]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-white/[0.06] text-white"
                        : "text-[#A3A3A3]"
                    )}
                  >
                    {link.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex flex-col gap-3 px-4">
                <a href="tel:+78001234567" className="text-sm font-medium text-[#E5E5E5]">
                  8 800 123-45-67
                </a>
                <Link
                  href="/contacts"
                  className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#00D4A5] px-5 py-3 text-sm font-semibold text-[#0A0A0A]"
                >
                  Рассчитать доставку
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
