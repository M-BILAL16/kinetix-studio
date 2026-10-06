"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, CheckCircle2, DollarSign, Award, Sparkles } from "lucide-react";

interface CaseStudy {
  id: string;
  client: string;
  category: string;
  heroStat: string;
  heroStatLabel: string;
  before: { revenue: string; cac: string; cvr: string };
  after: { revenue: string; cac: string; cvr: string };
  summary: string;
  tags: string[];
  gradient: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    id: "aura-labs",
    client: "Aura Labs",
    category: "ENTERPRISE B2B SAAS",
    heroStat: "+380%",
    heroStatLabel: "ARR PIPELINE SURGE",
    before: { revenue: "$42k/mo", cac: "$1,480", cvr: "1.9%" },
    after: { revenue: "$295k/mo", cac: "$620", cvr: "7.8%" },
    summary:
      "Replaced flat Google ads with multivariate contrarian video hooks and deployed semantic knowledge graphs for #1 recommendation across Perplexity and ChatGPT.",
    tags: ["AEO Domination", "Next.js Landers", "Meta Advantage+"],
    gradient: "from-[#FF3B14]/10 via-transparent to-transparent",
  },
  {
    id: "nexus-protocol",
    client: "Nexus Protocol",
    category: "FINTECH & ALGORITHMIC ASSETS",
    heroStat: "$2.1B+",
    heroStatLabel: "TRANSACTION VOLUME CLEARED",
    before: { revenue: "$120k/mo", cac: "$340", cvr: "2.4%" },
    after: { revenue: "$840k/mo", cac: "$118", cvr: "9.2%" },
    summary:
      "Engineered real-time behavioral attribution across TikTok Pulse and high-converting 60fps onboarding calculators, cutting CAC by 65%.",
    tags: ["TikTok Pulse", "Closed-Loop Attribution", "Interactive Calculators"],
    gradient: "from-[#00D084]/10 via-transparent to-transparent",
  },
  {
    id: "chrono-atelier",
    client: "Chrono Atelier",
    category: "LUXURY DIRECT-TO-CONSUMER",
    heroStat: "5.4x",
    heroStatLabel: "BLENDED SUSTAINED ROAS",
    before: { revenue: "$65k/mo", cac: "$180", cvr: "2.1%" },
    after: { revenue: "$410k/mo", cac: "$82", cvr: "6.9%" },
    summary:
      "Built cinematic sensory ad angles coupled with automated VIP SMS concierge flows that pushed repeat purchase rate to 44.6%.",
    tags: ["Whale Retention", "Cinematic Studio Hooks", "VIP Concierge"],
    gradient: "from-[#0047FF]/10 via-transparent to-transparent",
  },
];

export default function GrowthTiltWinsWall() {
  const [viewMode, setViewMode] = useState<"after" | "before">("after");

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F5] border-b border-black/10 overflow-hidden relative">
      <div className="site-gutter">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0047FF] font-bold mb-3 flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              VERIFIED ENTERPRISE TRANSFORMATIONS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.95]">
              PROVEN RESULTS. <br />
              <span className="font-serif italic font-normal text-[#0047FF] tracking-normal">
                documented
              </span>{" "}
              IMPACT.
            </h2>
          </div>

          {/* Interactive Before / After Toggle */}
          <div className="flex items-center gap-2 p-1.5 rounded-full bg-white border border-black/10 shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("before")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 ${
                viewMode === "before"
                  ? "bg-red-500 text-white shadow-sm"
                  : "text-[#6E6E78] hover:text-[#0E0E10]"
              }`}
            >
              Before Kinetix
            </button>
            <button
              type="button"
              onClick={() => setViewMode("after")}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase transition-all duration-300 ${
                viewMode === "after"
                  ? "bg-[#0E0E10] text-[#FAF9F5] shadow-sm"
                  : "text-[#6E6E78] hover:text-[#0E0E10]"
              }`}
            >
              ⚡ With Kinetix Engine
            </button>
          </div>
        </div>

        {/* 3 Staggered Tilt Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 my-12 items-stretch">
          {CASE_STUDIES.map((study, idx) => (
            <motion.div
              key={study.id}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`rounded-3xl p-8 bg-white border border-black/10 shadow-lg flex flex-col justify-between relative overflow-hidden bg-gradient-to-b ${study.gradient}`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/8">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6E6E78]">
                      {study.category}
                    </span>
                    <h3 className="text-2xl font-sans font-black text-[#0E0E10] mt-0.5">
                      {study.client}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#FAF9F5] border border-black/8 flex items-center justify-center text-xs font-mono font-bold text-[#0E0E10]">
                    0{idx + 1}
                  </div>
                </div>

                {/* Hero Stat Banner */}
                <div className="my-6 p-4 rounded-2xl bg-[#FAF9F5] border border-black/8">
                  <div className="text-4xl sm:text-5xl font-mono font-black text-[#0E0E10] tracking-tight">
                    {study.heroStat}
                  </div>
                  <div className="text-[10px] font-mono text-[#0047FF] font-bold uppercase mt-1 tracking-wider">
                    {study.heroStatLabel}
                  </div>
                </div>

                {/* Dynamic Metric Comparison Box */}
                <div className="p-4 rounded-2xl bg-[#0E0E10] text-[#FAF9F5] mb-6">
                  <div className="text-[10px] font-mono text-white/50 uppercase pb-2 border-b border-white/10 flex justify-between">
                    <span>STATUS:</span>
                    <span className={viewMode === "after" ? "text-[#00D084]" : "text-red-400"}>
                      {viewMode === "after" ? "● OPTIMIZED ENGINE" : "○ BOTTLENECKED"}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-3 text-center">
                    <div>
                      <div className="text-[9px] font-mono text-white/50">MONTHLY REV</div>
                      <div className="text-xs font-mono font-bold mt-0.5">
                        {viewMode === "after" ? study.after.revenue : study.before.revenue}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/50">ACQUISITION CAC</div>
                      <div className="text-xs font-mono font-bold mt-0.5 text-[#00D084]">
                        {viewMode === "after" ? study.after.cac : study.before.cac}
                      </div>
                    </div>
                    <div>
                      <div className="text-[9px] font-mono text-white/50">FUNNEL CVR</div>
                      <div className="text-xs font-mono font-bold mt-0.5 text-[#0047FF]">
                        {viewMode === "after" ? study.after.cvr : study.before.cvr}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-sm text-[#6E6E78] font-sans leading-relaxed mb-6">
                  {study.summary}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-black/8">
                {study.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-black/6 text-[#0E0E10]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
