"use client";

import React from "react";
import { ArrowRight } from "lucide-react";

interface GrowthFinalCtaProps {
  onOpenContact: () => void;
}

export default function GrowthFinalCta({ onOpenContact }: GrowthFinalCtaProps) {
  return (
    <section className="relative overflow-hidden bg-[#0E0E10] py-28 text-[#FAF9F5] site-gutter md:py-36">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#CEFF00]">
          Ready to get more customers?
        </p>
        <h2 className="mt-6 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          LET&apos;S GROW <span className="text-[#0047FF]">your business.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70 sm:text-lg">
          Tell us what you sell. We will show you which ads, search, email, and content work to
          start with.
        </p>
        <button
          type="button"
          onClick={onOpenContact}
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#CEFF00] px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E0E10]"
        >
          <span>Start a project</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
