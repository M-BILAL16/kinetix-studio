"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface WorkHeroProps {
  onOpenContact: () => void;
  variant?: "stories" | "grid";
}

export default function WorkHero({ onOpenContact, variant = "stories" }: WorkHeroProps) {
  const isGrid = variant === "grid";

  return (
    <section className="relative isolate overflow-hidden border-b border-black/10 bg-[#0E0E10] text-[#FAF9F5]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-20 h-[28rem] w-[28rem] rounded-full bg-[#0047FF]/35 blur-[120px]" />
        <div className="absolute -right-16 bottom-0 h-[22rem] w-[22rem] rounded-full bg-[#CEFF00]/20 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="site-gutter relative z-10 flex min-h-[88vh] flex-col justify-end pb-16 pt-36 md:pb-24">
        <div className="mb-10 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/50">
            Archive / 2024 — 2026
          </span>
          <span className="h-px w-8 bg-white/20" />
          <div className="flex gap-2">
            <Link
              href="/what-we-have-done"
              className={`rounded-full px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors ${
                !isGrid
                  ? "bg-[#CEFF00] text-[#0E0E10]"
                  : "border border-white/15 text-white/60 hover:text-white"
              }`}
            >
              Stories
            </Link>
            <Link
              href="/what-we-have-done/grid"
              className={`rounded-full px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-widest transition-colors ${
                isGrid
                  ? "bg-[#CEFF00] text-[#0E0E10]"
                  : "border border-white/15 text-white/60 hover:text-white"
              }`}
            >
              Index
            </Link>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl font-sans text-5xl font-black uppercase leading-[0.88] tracking-tight sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
        >
          WHAT WE
          <br />
          HAVE <span className="text-[#0047FF]">DONE.</span>
        </motion.h1>

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-xl font-sans text-base leading-relaxed text-white/65 sm:text-lg"
          >
            {isGrid
              ? "An interactive archive. Hover a case to preview it. Open it for the full story — time returned and revenue moved."
              : "Real engagements. Clear before-and-after. Time given back to teams, and revenue that shows up in the books."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="flex flex-wrap items-center gap-6"
          >
            <button
              type="button"
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FAF9F5] px-7 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E0E10] transition-colors hover:bg-[#0047FF] hover:text-white"
            >
              <span>Start a project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <div className="hidden items-center gap-8 sm:flex">
              <div>
                <p className="font-sans text-2xl font-black tracking-tight">95+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">hrs / week saved</p>
              </div>
              <div className="h-8 w-px bg-white/15" />
              <div>
                <p className="font-sans text-2xl font-black tracking-tight">62%</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">peak revenue lift</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
