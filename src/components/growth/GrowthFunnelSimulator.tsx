"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, ArrowRight, Zap, PieChart } from "lucide-react";

export default function GrowthFunnelSimulator() {
  const [adSpend, setAdSpend] = useState<number>(35000);
  const [currentCvr, setCurrentCvr] = useState<number>(1.6);
  const [averageDealSize, setAverageDealSize] = useState<number>(12000);

  // Estimations
  const trafficEstimate = Math.round((adSpend / 3.8) * 1.4); // paid + organic AI search multiplier
  const optimizedCvr = currentCvr * 1.65; // +65% conversion rate lift
  const baselineLeads = Math.round(trafficEstimate * (currentCvr / 100));
  const optimizedLeads = Math.round(trafficEstimate * (optimizedCvr / 100));
  const newDealsMonthly = Math.round(optimizedLeads * 0.22);
  const projectedMonthlyPipeline = newDealsMonthly * averageDealSize;
  const annualPipelineGain = (optimizedLeads - baselineLeads) * 0.22 * averageDealSize * 12;
  const cacReductionPercent = 42;

  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#FF2E93]">02 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              INTERACTIVE DEMAND MODELING
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            SIMULATE YOUR <br />
            <span className="font-serif italic font-normal text-[#FF2E93] lowercase">
              pipeline yield.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            ADJUST YOUR BUDGET AND METRICS TO PROJECT THE COMPOUNDING VALUE OF AN OPTIMIZED
            AEO + PAID + CONVERSION ARCHITECTURE.
          </p>
        </div>
      </div>

      {/* Grid: Inputs + Dynamic ROI Output */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Sliders (6 cols) */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-black/10 p-6 sm:p-10 shadow-xl space-y-8">
          <div>
            <span className="text-xs font-mono uppercase text-[#6E6E78] tracking-widest block mb-2">
              CONFIGURE GROWTH PARAMETERS:
            </span>
            <h3 className="text-2xl font-black font-sans text-[#0E0E10]">
              Acquisition Inputs
            </h3>
          </div>

          {/* Slider 1: Monthly Growth Budget */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Monthly Paid & Search Budget</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans">${adSpend.toLocaleString()} / mo</span>
            </div>
            <input
              type="range"
              min="5000"
              max="200000"
              step="5000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full accent-[#FF2E93] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>$5,000/mo</span>
              <span>$200,000/mo</span>
            </div>
          </div>

          {/* Slider 2: Current Conversion Rate */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Current Landing Page Conversion (CVR)</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans">{currentCvr.toFixed(1)}%</span>
            </div>
            <input
              type="range"
              min="0.5"
              max="5.0"
              step="0.1"
              value={currentCvr}
              onChange={(e) => setCurrentCvr(Number(e.target.value))}
              className="w-full accent-[#FF2E93] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>0.5% (High friction)</span>
              <span>5.0% (Well-optimized)</span>
            </div>
          </div>

          {/* Slider 3: Average Deal Size / ACV */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Average Customer Deal Size / ACV</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans">${averageDealSize.toLocaleString()}</span>
            </div>
            <input
              type="range"
              min="1000"
              max="80000"
              step="1000"
              value={averageDealSize}
              onChange={(e) => setAverageDealSize(Number(e.target.value))}
              className="w-full accent-[#FF2E93] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>$1,000</span>
              <span>$80,000</span>
            </div>
          </div>

          {/* Mathematical Context */}
          <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/8 text-xs font-mono text-[#6E6E78] leading-relaxed">
            Telemetry incorporates +65% median conversion lift achieved through sub-second Next.js landers and authoritative AEO organic recommendation traffic.
          </div>
        </div>

        {/* Right Column: Dynamic Yield Output Card (6 cols) */}
        <div className="lg:col-span-6 bg-[#0E0E10] text-[#FAF9F5] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[#FF2E93]/20 via-[#0047FF]/15 to-transparent blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E9EA8]">
                  PROJECTED PIPELINE GAIN
                </span>
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-full text-[#CEFF00] font-bold">
                +{cacReductionPercent}% CAC EFFICIENCY
              </span>
            </div>

            {/* Giant Projected Pipeline Output */}
            <div className="mb-8">
              <span className="text-[11px] font-mono text-[#9E9EA8] uppercase tracking-wider block mb-1">
                ADDITIONAL ANNUAL PIPELINE VALUE GENERATED
              </span>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white">
                ${Math.round(annualPipelineGain).toLocaleString()}
                <span className="text-lg font-mono text-[#FF2E93] font-normal"> / year</span>
              </div>
            </div>

            {/* Output Sub-grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[10px] font-mono text-[#9E9EA8] uppercase">
                  Projected Monthly Pipeline
                </div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-white mt-1">
                  ${Math.round(projectedMonthlyPipeline).toLocaleString()}
                </div>
                <div className="text-[10px] font-mono text-[#10B981] mt-1">
                  ~{newDealsMonthly} New Deals / mo
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[10px] font-mono text-[#9E9EA8] uppercase">
                  Conversion Rate Lift
                </div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-white mt-1">
                  {optimizedCvr.toFixed(2)}%
                </div>
                <div className="text-[10px] font-mono text-[#FF2E93] mt-1">
                  +65% Lift Over Baseline
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#9E9EA8]">
              TIRED OF SPENDING ON ADS THAT DON&apos;T CONVERT?
            </div>
            <a
              href="#growth-pillars"
              className="text-xs font-mono font-bold text-[#CEFF00] hover:underline flex items-center gap-1"
            >
              <span>AUDIT YOUR FUNNEL</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
