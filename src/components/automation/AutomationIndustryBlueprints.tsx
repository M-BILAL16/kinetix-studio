"use client";

import React from "react";
import { Building2, Stethoscope, ShoppingBag, Briefcase, Scale, type LucideIcon } from "lucide-react";

const INDUSTRIES: { name: string; icon: LucideIcon }[] = [
  { name: "Real Estate & Developers", icon: Building2 },
  { name: "Clinics & Aesthetics", icon: Stethoscope },
  { name: "E-Commerce & Brands", icon: ShoppingBag },
  { name: "Consultants & Agencies", icon: Briefcase },
  { name: "Recruitment & Legal Firms", icon: Scale },
];

export default function AutomationIndustryBlueprints() {
  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            TAILORED FOR YOUR <br />
            <span className="text-[#0047FF]">
              exact industry.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            EACH VERTICAL COMES PRE-CONFIGURED WITH TESTED PROMPTS, COMPLIANT WORKFLOWS, AND
            PROVEN REVENUE LEVERS.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
        {INDUSTRIES.map((industry, idx) => {
          const Icon = industry.icon;

          return (
            <article
              key={industry.name}
              className={`group rounded-3xl bg-white border border-black/10 p-7 sm:p-8 min-h-52 flex flex-col justify-between shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)] hover:-translate-y-1 hover:border-black/20 transition-all duration-300 ${
                idx < 3 ? "lg:col-span-2" : "sm:col-span-1 lg:col-span-3"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#CEFF00] flex items-center justify-center group-hover:bg-[#0E0E10] transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#0E0E10] group-hover:text-[#CEFF00] transition-colors duration-300" />
                </div>
                <span className="text-xs font-mono font-black text-[#D8D8DE]">
                  0{idx + 1}
                </span>
              </div>
              <h3 className="mt-10 text-xl sm:text-2xl font-black font-sans tracking-tight text-[#0E0E10] leading-tight">
                {industry.name}
              </h3>
            </article>
          );
        })}
      </div>
    </section>
  );
}
