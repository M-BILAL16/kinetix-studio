"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface WorkFinalCtaProps {
  onOpenContact: () => void;
}

export default function WorkFinalCta({ onOpenContact }: WorkFinalCtaProps) {
  return (
    <section className="border-t border-black/10 bg-[#FAF9F5] py-16 md:py-24">
      <div className="site-gutter grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm sm:p-10 lg:col-span-7 lg:p-12">
          <div>
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0047FF]">
              Next engagement
            </p>
            <h2 className="mt-6 max-w-3xl font-sans text-4xl font-black uppercase leading-[0.92] tracking-tight text-[#0E0E10] sm:text-6xl">
              YOUR OUTCOME SHOULD LOOK LIKE <span className="text-[#0047FF]">THIS.</span>
            </h2>
            <p className="mt-6 max-w-lg font-sans text-base leading-relaxed text-[#6E6E78] sm:text-lg">
              Tell us where hours disappear and where revenue stalls. We will map the gap and ship the
              system that closes it.
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenContact}
            className="group mt-12 inline-flex w-fit items-center gap-4 rounded-full bg-[#0E0E10] px-8 py-5 text-xs font-mono font-bold uppercase tracking-widest text-[#FAF9F5] transition-colors hover:bg-[#0047FF]"
          >
            <span>Start a project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-[#0E0E10] p-8 text-[#FAF9F5] shadow-xl sm:p-10 lg:col-span-5 lg:p-12">
          <motion.div
            animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.08, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-10 top-10 h-56 w-56 rounded-full bg-[#0047FF] blur-[90px]"
          />
          <div className="relative space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Typical return
              </p>
              <p className="mt-3 font-sans text-5xl font-black tracking-tight sm:text-6xl">95+</p>
              <p className="mt-2 font-sans text-sm text-white/55">Hours given back each week</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                Documented peak
              </p>
              <p className="mt-3 font-sans text-5xl font-black tracking-tight text-[#CEFF00] sm:text-6xl">
                +62%
              </p>
              <p className="mt-2 font-sans text-sm text-white/55">Revenue lift on a shipped platform</p>
            </div>
          </div>
          <p className="relative mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-white/35">
            Results vary by market. We confirm the math before we build.
          </p>
        </div>
      </div>
    </section>
  );
}
