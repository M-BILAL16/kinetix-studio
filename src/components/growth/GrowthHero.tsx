"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Megaphone } from "lucide-react";

interface GrowthHeroProps {
  onOpenContact: () => void;
}

export default function GrowthHero({ onOpenContact }: GrowthHeroProps) {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-black/10 bg-[#FAF9F5] py-28">
      <div className="site-gutter relative z-10 w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-mono font-semibold text-[#0E0E10] shadow-xs">
              <Megaphone className="h-3.5 w-3.5 text-[#0047FF]" />
              <span>GROWTH AND MARKETING</span>
            </div>

            <h1 className="font-sans text-5xl font-black uppercase leading-[0.92] tracking-tight text-[#0E0E10] sm:text-7xl xl:text-8xl">
              GET FOUND BY <br />
              THE <span className="text-[#0047FF]">right</span> BUYERS.
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-[#6E6E78] sm:text-xl">
              Ads, search, email, and content run as one system — so people nearby become customers,
              and you see exactly what brought them in.
            </p>

            <div className="mt-10">
              <button
                type="button"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 rounded-full bg-[#0E0E10] px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#FAF9F5] transition-colors hover:bg-[#0047FF]"
              >
                <span>Start a project</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/growth/hero.png"
                alt="Ads, search, email, and reports working together"
                fill
                priority
                unoptimized
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
