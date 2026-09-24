"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Approach", href: "#philosophy" },
    { label: "Toolkit", href: "#services" },
    { label: "Get Started", href: "#start" },
    { label: "Impact", href: "#work" },
    { label: "Process", href: "#process" },
  ];

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
          {/* Brand Mark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            data-cursor="home"
          >
            <div className="w-8 h-8 rounded-full bg-[#0E0E10] flex items-center justify-center text-[#FAF9F5] font-black text-xs group-hover:bg-[#0047FF] transition-colors duration-300">
              <span className="tracking-tighter">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-black tracking-tight text-sm text-[#0E0E10] leading-none">
                KINETIX
              </span>
              <span className="font-mono text-[9px] tracking-widest text-[#6E6E78] uppercase mt-0.5">
                STUDIO 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 bg-black/3 p-1 rounded-full border border-black/5">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-1.5 rounded-full text-xs font-mono font-medium text-[#0E0E10] hover:text-[#0047FF] hover:bg-white/80 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Action */}
          <div className="flex items-center gap-3">
            {/* Live Indicator */}
            <div className="hidden lg:flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-black/4 border border-black/5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-[10px] font-mono text-[#6E6E78] tracking-wider uppercase">
                Q3/Q4 SLOTS OPEN
              </span>
            </div>

            {/* Magnetic CTA */}
            <button
              onClick={onOpenContact}
              data-cursor="open"
              className="relative group overflow-hidden px-5 py-2.5 rounded-full bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95"
            >
              <span>BOOK A CALL</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 rounded-full border border-black/10 flex flex-col items-center justify-center gap-1 bg-white"
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

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-24 left-4 right-4 z-40 md:hidden bg-[#FAF9F5] border border-black/10 rounded-2xl p-6 shadow-xl"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-sans font-bold text-[#0E0E10] py-2 border-b border-black/5 hover:text-[#0047FF]"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="mt-4 w-full py-3.5 bg-[#0047FF] text-white rounded-full text-xs font-mono font-bold tracking-widest uppercase text-center"
            >
              BOOK A FREE CALL ↗
            </button>
          </div>
        </motion.div>
      )}
    </>
  );
}
