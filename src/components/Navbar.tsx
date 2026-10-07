"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronDown } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

const workLinks = [
  { label: "Stories", href: "/what-we-have-done", hint: "Long-scroll case studies" },
  { label: "Index", href: "/what-we-have-done/grid", hint: "Interactive archive preview" },
];

const flatLinks = [
  { label: "AI & Technology", href: "/ai-technology" },
  { label: "Growth & Marketing", href: "/growth-marketing" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "How We Work", href: "/#philosophy" },
];

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [workOpen, setWorkOpen] = useState(false);
  const [mobileWorkOpen, setMobileWorkOpen] = useState(false);
  const pathname = usePathname();
  const workRef = useRef<HTMLDivElement>(null);
  const workActive = pathname.startsWith("/what-we-have-done");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setWorkOpen(false);
    setMobileMenuOpen(false);
    setMobileWorkOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onPointerDown = (e: MouseEvent) => {
      if (workRef.current && !workRef.current.contains(e.target as Node)) {
        setWorkOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center site-gutter pt-4 sm:pt-6 pointer-events-none">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className={`pointer-events-auto w-full transition-all duration-300 rounded-full border ${
            scrolled
              ? "bg-[#FAF9F5]/85 backdrop-blur-xl border-black/10 py-2.5 px-4 sm:px-6 shadow-sm shadow-black/5"
              : "bg-white/60 backdrop-blur-md border-black/8 py-3.5 px-5 sm:px-8 shadow-sm"
          } flex items-center justify-between`}
        >
          <Link href="/" className="flex items-center gap-2.5 group" data-cursor="home">
            <div className="w-8 h-8 rounded-full bg-[#0E0E10] flex items-center justify-center text-[#FAF9F5] font-black text-xs group-hover:bg-[#0047FF] transition-colors duration-300">
              <span className="tracking-tighter">S</span>
            </div>
            <span className="font-sans font-black tracking-tight text-sm text-[#0E0E10] leading-none">
              Single Solution
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-black/3 p-1 rounded-full border border-black/5">
            {flatLinks.slice(0, 3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#0E0E10] text-white shadow-xs font-bold"
                      : "text-[#0E0E10] hover:text-[#0047FF] hover:bg-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div
              ref={workRef}
              className="relative"
              onMouseEnter={() => setWorkOpen(true)}
              onMouseLeave={() => setWorkOpen(false)}
            >
              <button
                type="button"
                onClick={() => setWorkOpen((open) => !open)}
                className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium transition-all duration-200 whitespace-nowrap inline-flex items-center gap-1 ${
                  workActive
                    ? "bg-[#0E0E10] text-white shadow-xs font-bold"
                    : "text-[#0E0E10] hover:text-[#0047FF] hover:bg-white/80"
                }`}
                aria-expanded={workOpen}
                aria-haspopup="menu"
              >
                What Have We Done
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${workOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {workOpen ? (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.18 }}
                    role="menu"
                    className="absolute left-1/2 top-full z-50 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-black/10 bg-[#FAF9F5] p-2 shadow-xl"
                  >
                    {workLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          role="menuitem"
                          className={`block rounded-xl px-3.5 py-3 transition-colors ${
                            isActive
                              ? "bg-[#0E0E10] text-white"
                              : "text-[#0E0E10] hover:bg-black/5"
                          }`}
                        >
                          <span className="block text-[11px] font-mono font-bold uppercase tracking-widest">
                            {link.label}
                          </span>
                          <span
                            className={`mt-1 block text-[10px] font-mono leading-snug ${
                              isActive ? "text-white/60" : "text-[#6E6E78]"
                            }`}
                          >
                            {link.hint}
                          </span>
                        </Link>
                      );
                    })}
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            {flatLinks.slice(3).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] font-mono font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-[#0E0E10] text-white shadow-xs font-bold"
                      : "text-[#0E0E10] hover:text-[#0047FF] hover:bg-white/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenContact}
              data-cursor="open"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] text-xs font-mono font-bold tracking-wide transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95 whitespace-nowrap"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-9 h-9 rounded-full border border-black/10 flex flex-col items-center justify-center gap-1 bg-white"
              aria-label="Toggle mobile menu"
            >
              <span
                className={`w-4 h-0.5 bg-black transition-transform ${
                  mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-black transition-opacity ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-4 h-0.5 bg-black transition-transform ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </motion.nav>
      </header>

      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-40 lg:hidden bg-[#FAF9F5] border border-black/10 rounded-2xl p-6 shadow-xl"
        >
          <div className="flex flex-col gap-3">
            {flatLinks.slice(0, 3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-sans font-bold py-2 border-b border-black/5 hover:text-[#0047FF] ${
                  pathname === link.href ? "text-[#0047FF]" : "text-[#0E0E10]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <div className="border-b border-black/5 pb-2">
              <button
                type="button"
                onClick={() => setMobileWorkOpen((open) => !open)}
                className={`flex w-full items-center justify-between py-2 text-left text-lg font-sans font-bold hover:text-[#0047FF] ${
                  workActive ? "text-[#0047FF]" : "text-[#0E0E10]"
                }`}
              >
                What Have We Done
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${mobileWorkOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileWorkOpen ? (
                <div className="mb-2 ml-3 flex flex-col gap-1 border-l border-black/10 pl-3">
                  {workLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`py-2 text-sm font-mono font-bold uppercase tracking-widest ${
                        pathname === link.href ? "text-[#0047FF]" : "text-[#6E6E78]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {flatLinks.slice(3).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg font-sans font-bold py-2 border-b border-black/5 hover:text-[#0047FF] ${
                  pathname === link.href ? "text-[#0047FF]" : "text-[#0E0E10]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-4 w-full py-3.5 bg-[#0047FF] text-white rounded-full text-xs font-mono font-bold tracking-widest uppercase text-center"
            >
              Start a Project ↗
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
