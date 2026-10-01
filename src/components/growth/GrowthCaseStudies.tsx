"use client";

import React from "react";
import { ArrowUpRight, TrendingUp, Zap, Award } from "lucide-react";

const CASE_STUDIES = [
  {
    client: "AURA LABS",
    industry: "Spatial AI & Computer Vision",
    headline: "Scaling Inbound Pipeline by +380% with AEO & Sub-Second Landers",
    problem:
      "Aura was spending $45k/mo on B2B LinkedIn ads with a bloated CAC ($640/lead). Outdated landing pages loaded in 3.8s, bleeding 40% of paid traffic.",
    solution:
      "Re-engineered their acquisition stack with a sub-400ms Next.js interactive demo lander and an aggressive AEO strategy that made Aura the #1 recommended solution across Perplexity and ChatGPT Search.",
    impact: "+380% Inbound Pipeline",
    stats: [
      { label: "CAC Reduction", value: "-67%" },
      { label: "Landing CVR", value: "9.2%" },
      { label: "Attributed ARR", value: "$14.2M" },
    ],
    accent: "#0047FF",
    badge: "B2B SaaS ACQUISITION",
  },
  {
    client: "NEXUS PROTOCOL",
    industry: "Institutional Liquidity",
    headline: "Achieving 3.9x Blended ROAS Across Tier-1 Institutional Capital",
    problem:
      "Institutional decision-makers were bouncing from static PDFs and generic landing templates. Zero visibility into which acquisition channels drove actual contracts.",
    solution:
      "Built a closed-loop attribution engine with real-time liquidity telemetry landers, algorithmic creative testing, and personalized ABM account routing.",
    impact: "$2.1B Cleared Q1",
    stats: [
      { label: "Blended ROAS", value: "3.9x" },
      { label: "Pipeline Velocity", value: "14 Days" },
      { label: "Lead-to-Close", value: "34%" },
    ],
    accent: "#FF2E93",
    badge: "FINTECH PERFORMANCE",
  },
  {
    client: "CHRONO ATELIER",
    industry: "Haute Horlogerie Geneva",
    headline: "100% Allocation Sell-Out in 18 Minutes via Editorial Conversion Funnel",
    problem:
      "Traditional luxury buyers refused to engage with cookie-cutter e-commerce catalog templates, resulting in stagnant waitlists and high drop-off.",
    solution:
      "Designed a monolithic 60fps editorial drop funnel with private VIP allocation verification, bespoke micro-interactions, and targeted collector seeding.",
    impact: "Sold Out in 18 Min",
    stats: [
      { label: "Avg. Order Value", value: "$42,000" },
      { label: "Waitlist Conversion", value: "88%" },
      { label: "Paid Multiplier", value: "4.4x" },
    ],
    accent: "#10B981",
    badge: "LUXURY COMMERCE",
  },
];

export default function GrowthCaseStudies() {
  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#FF2E93]">03 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              DOCUMENTED CLIENT TRANSFORMATIONS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            PROVEN PIPELINE <br />
            <span className="font-serif italic font-normal text-[#FF2E93] lowercase">
              breakthroughs.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            DOCUMENTED IMPACT ACROSS HIGH-STAKES ENTERPRISE B2B, FINTECH, AND LUXURY COMMERCE.
          </p>
        </div>
      </div>

      {/* Case studies list */}
      <div className="space-y-12">
        {CASE_STUDIES.map((cs) => (
          <div
            key={cs.client}
            className="bg-white rounded-3xl border border-black/10 p-8 sm:p-12 shadow-xl hover:border-black/30 transition-all duration-300"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column (7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono">
                  <span className="px-3 py-1 rounded-full bg-[#FAF9F5] border border-black/10 font-bold text-[#0E0E10]">
                    {cs.badge}
                  </span>
                  <span className="text-[#6E6E78]">{cs.industry}</span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-black font-sans tracking-tight text-[#0E0E10] leading-tight">
                  {cs.headline}
                </h3>

                <div className="space-y-3 pt-2 text-sm sm:text-base font-sans text-[#6E6E78] leading-relaxed">
                  <p>
                    <strong className="text-[#0E0E10] font-bold font-mono text-xs uppercase block mb-1">
                      THE BOTTLENECK:
                    </strong>
                    {cs.problem}
                  </p>
                  <p>
                    <strong className="text-[#0E0E10] font-bold font-mono text-xs uppercase block mb-1">
                      THE DEMAND ARCHITECTURE:
                    </strong>
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Right Column (5 cols): Metrics & Result Callout */}
              <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-wider block mb-1">
                    VERIFIED CLIENT IMPACT:
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-sans text-[#0E0E10] mb-6">
                    {cs.impact}
                  </div>
                </div>

                {/* 3 Metrics */}
                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-black/8 text-center">
                  {cs.stats.map((st) => (
                    <div key={st.label} className="border-r last:border-none border-black/8 px-1">
                      <div className="text-[9px] font-mono text-[#6E6E78] uppercase">
                        {st.label}
                      </div>
                      <div className="text-lg sm:text-xl font-black font-sans text-[#0E0E10] mt-1">
                        {st.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
