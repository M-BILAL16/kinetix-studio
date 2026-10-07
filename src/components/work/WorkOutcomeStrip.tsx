"use client";

import React from "react";
import { AGENCY_DATA } from "@/lib/data";

export default function WorkOutcomeStrip() {
  const caseCount = AGENCY_DATA.projects.length;

  const stats = [
    { value: "95+", label: "Hours returned / week", hint: "Across ops, partners, and intake" },
    { value: "62%", label: "Peak revenue lift", hint: "Documented on a live platform" },
    { value: "3.2x", label: "Booking growth", hint: "Digital channel lift for local care" },
    {
      value: String(caseCount).padStart(2, "0"),
      label: "Cases in portfolio",
      hint: "Software, growth, automation, and AI agents",
    },
  ];

  return (
    <section className="border-b border-black/10 bg-[#FAF9F5] py-16 md:py-20">
      <div className="site-gutter grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:p-8"
          >
            <p className="font-sans text-4xl font-black tracking-tight text-[#0E0E10] sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-4 font-mono text-[11px] font-bold uppercase tracking-widest text-[#0047FF]">
              {stat.label}
            </p>
            <p className="mt-2 max-w-[14rem] font-sans text-sm leading-relaxed text-[#6E6E78]">
              {stat.hint}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
