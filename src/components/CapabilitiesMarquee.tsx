"use client";

import React from "react";
import { AGENCY_DATA } from "@/lib/data";

export default function CapabilitiesMarquee() {
  const repeatedA = [...AGENCY_DATA.marqueeTrackA, ...AGENCY_DATA.marqueeTrackA, ...AGENCY_DATA.marqueeTrackA];
  const repeatedB = [...AGENCY_DATA.marqueeTrackB, ...AGENCY_DATA.marqueeTrackB, ...AGENCY_DATA.marqueeTrackB];

  return (
    <section className="py-16 bg-[#FAF9F5] border-b border-black/10 overflow-hidden select-none">
      {/* Track 1: Moving Left */}
      <div className="flex overflow-hidden whitespace-nowrap mb-6">
        <div className="flex animate-marquee gap-8 items-center shrink-0">
          {repeatedA.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl font-black tracking-tight text-[#0E0E10] hover:text-[#0047FF] transition-colors">
                {item}
              </span>
              <span className="text-[#CEFF00] text-2xl font-mono">✦</span>
            </div>
          ))}
        </div>
      </div>

      {/* Track 2: Moving Right */}
      <div className="flex overflow-hidden whitespace-nowrap">
        <div className="flex animate-marquee-reverse gap-8 items-center shrink-0">
          {repeatedB.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="text-3xl sm:text-5xl font-bold tracking-tight text-[#9E9EA8] hover:text-[#0E0E10] transition-colors">
                {item}
              </span>
              <span className="text-[#0047FF] text-2xl font-mono">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
