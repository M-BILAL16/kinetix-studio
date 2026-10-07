"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

export default function GrowthSavings() {
  const [leadsPerMonth, setLeadsPerMonth] = useState(40);
  const [costPerLead, setCostPerLead] = useState(40);
  const [roiPerLead, setRoiPerLead] = useState(200);

  const monthlySpend = leadsPerMonth * costPerLead;
  const monthlyReturn = leadsPerMonth * roiPerLead;
  const yearlyProfit = (monthlyReturn - monthlySpend) * 12;

  return (
    <section className="border-b border-black/10 bg-[#FAF9F5] py-28 site-gutter">
      <div className="mb-16 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
        <div>
          <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl lg:text-7xl">
            SEE WHAT YOUR <br />
            <span className="text-[#0047FF]">leads return.</span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="font-mono text-xs leading-relaxed text-[#6E6E78] sm:text-sm">
            MOVE THE SLIDERS TO SEE WHAT YOUR LEADS COST, WHAT THEY RETURN, AND THE PROFIT OVER A
            YEAR.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
        <div className="flex h-full flex-col gap-8 rounded-3xl border border-black/10 bg-white p-6 shadow-xl sm:p-10 lg:col-span-6">
          <div>
            <span className="mb-2 block text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              Your pipeline today
            </span>
            <h3 className="font-sans text-2xl font-black text-[#0E0E10]">Tell us about your leads</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="uppercase text-[#6E6E78]">Number of leads per month</span>
              <span className="shrink-0 font-sans text-base font-bold text-[#0E0E10]">
                {leadsPerMonth} leads
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="500"
              value={leadsPerMonth}
              onChange={(e) => setLeadsPerMonth(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#0047FF]"
            />
            <div className="flex justify-between font-mono text-[10px] text-[#9E9EA8]">
              <span>5 leads</span>
              <span>500 leads</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="uppercase text-[#6E6E78]">Cost per lead</span>
              <span className="shrink-0 font-sans text-base font-bold text-[#0E0E10]">
                ${costPerLead}
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="300"
              step="5"
              value={costPerLead}
              onChange={(e) => setCostPerLead(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#0047FF]"
            />
            <div className="flex justify-between font-mono text-[10px] text-[#9E9EA8]">
              <span>$5</span>
              <span>$300</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 font-mono text-xs">
              <span className="uppercase text-[#6E6E78]">ROI per lead</span>
              <span className="shrink-0 font-sans text-base font-bold text-[#0E0E10]">
                ${roiPerLead}
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="2000"
              step="10"
              value={roiPerLead}
              onChange={(e) => setRoiPerLead(Number(e.target.value))}
              className="w-full cursor-pointer accent-[#0047FF]"
            />
            <div className="flex justify-between font-mono text-[10px] text-[#9E9EA8]">
              <span>$10</span>
              <span>$2,000</span>
            </div>
          </div>

          <div className="mt-auto rounded-xl border border-black/8 bg-[#FAF9F5] p-4 font-mono text-xs leading-relaxed text-[#6E6E78]">
            This is an estimate. ROI per lead is the money you get back from one lead. We confirm
            the numbers with you before we start.
          </div>
        </div>

        <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-[#0E0E10] p-8 text-[#FAF9F5] shadow-2xl sm:p-10 lg:col-span-6">
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-gradient-to-bl from-[#0047FF]/20 via-[#CEFF00]/15 to-transparent blur-3xl" />

          <div className="relative">
            <div className="mb-8 flex items-center gap-2 border-b border-white/10 pb-4">
              <span className="h-2 w-2 rounded-full bg-[#CEFF00]" />
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#9E9EA8]">
                What you could make
              </span>
            </div>

            <div className="mb-8">
              <span className="mb-1 block font-mono text-[11px] uppercase tracking-wider text-[#9E9EA8]">
                Profit per year
              </span>
              <div className="font-sans text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                ${yearlyProfit.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="font-mono text-[10px] uppercase text-[#9E9EA8]">Spend per month</div>
                <div className="mt-1 font-sans text-2xl font-black text-white sm:text-3xl">
                  ${monthlySpend.toLocaleString()}
                </div>
                <div className="mt-1 font-mono text-[10px] text-[#CEFF00]">Leads × cost per lead</div>
              </div>

              <div className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <div className="font-mono text-[10px] uppercase text-[#9E9EA8]">Return per month</div>
                <div className="mt-1 font-sans text-2xl font-black text-white sm:text-3xl">
                  ${monthlyReturn.toLocaleString()}
                </div>
                <div className="mt-1 font-mono text-[10px] text-[#CEFF00]">Leads × ROI per lead</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
            <div className="font-mono text-xs text-[#9E9EA8]">WANT THESE NUMBERS IN YOUR BUSINESS?</div>
            <a
              href="#start"
              className="flex items-center gap-1 font-mono text-xs font-bold text-[#CEFF00] hover:underline"
            >
              <span>SEE HOW TO START</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
