"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import WorkHeroVisual from "@/components/work/WorkHeroVisual";

interface WorkHeroProps {
  onOpenContact: () => void;
}

export default function WorkHero({ onOpenContact }: WorkHeroProps) {
  return (
    <section className="relative flex min-h-[min(88vh,920px)] flex-col overflow-hidden border-b border-black/10 bg-[#FAF9F5] pt-40 pb-28 md:pt-44">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-24 h-[22rem] w-[22rem] rounded-full bg-[#0047FF]/10 blur-[100px]" />
        <div className="absolute -right-16 bottom-10 h-[18rem] w-[18rem] rounded-full bg-[#CEFF00]/20 blur-[90px]" />
      </div>

      <div className="site-gutter relative z-10 w-full">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-mono font-semibold text-[#0E0E10] shadow-xs">
              <Briefcase className="h-3.5 w-3.5 text-[#0047FF]" />
              <span>PORTFOLIO & CASE STUDIES</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#0E0E10] sm:text-7xl xl:text-8xl"
            >
              WHAT WE
              <br />
              HAVE <span className="text-[#0047FF]">DONE.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-8 max-w-xl font-sans text-base leading-relaxed text-[#6E6E78] sm:text-xl"
            >
              Browse the portfolio, then dig into each case. Every engagement shows the hours returned
              and the revenue that moved.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-10 flex flex-wrap items-center gap-6"
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

          <div className="lg:col-span-5">
            <WorkHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

