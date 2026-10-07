"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";

interface WorkHeroProps {
  onOpenContact: () => void;
}

export default function WorkHero({ onOpenContact }: WorkHeroProps) {
  return (
    <section className="relative flex min-h-[min(88vh,820px)] items-end overflow-hidden border-b border-black/10 bg-[#FAF9F5] pb-16 pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-[22rem] w-[22rem] rounded-full bg-[#0047FF]/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-10 h-[18rem] w-[18rem] rounded-full bg-[#CEFF00]/20 blur-[90px]" />
      </div>

      <div className="site-gutter relative z-10 w-full">
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-mono font-semibold text-[#0E0E10] shadow-xs">
            <Briefcase className="h-3.5 w-3.5 text-[#0047FF]" />
            <span>PORTFOLIO & CASE STUDIES</span>
          </div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#6E6E78]">
            Archive / 2024 — 2026
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl font-sans text-5xl font-black uppercase leading-[0.88] tracking-tight text-[#0E0E10] sm:text-7xl lg:text-8xl xl:text-[7.5rem]"
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
            className="max-w-xl font-sans text-base leading-relaxed text-[#6E6E78] sm:text-xl"
          >
            Browse the archive, then dig into each case. Every engagement shows the hours returned
            and the revenue that moved.
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
              className="group inline-flex items-center gap-3 rounded-full bg-[#0E0E10] px-7 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#FAF9F5] transition-colors hover:bg-[#0047FF]"
            >
              <span>Start a project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <div className="hidden items-center gap-8 sm:flex">
              <div>
                <p className="font-sans text-2xl font-black tracking-tight text-[#0E0E10]">95+</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#6E6E78]">
                  hrs / week saved
                </p>
              </div>
              <div className="h-8 w-px bg-black/10" />
              <div>
                <p className="font-sans text-2xl font-black tracking-tight text-[#0E0E10]">62%</p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#6E6E78]">
                  peak revenue lift
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
