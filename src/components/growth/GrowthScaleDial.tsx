"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gauge, Zap, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Flame } from "lucide-react";

interface ScaleStage {
  id: string;
  name: string;
  monthlyRevenue: string;
  rotation: number;
  adSpend: string;
  expectedRoas: string;
  projectedPipeline: string;
  playbook: string[];
  focusChannels: string[];
  tagColor: string;
}

const STAGES: ScaleStage[] = [
  {
    id: "stage-1",
    name: "IGNITION & CAC COMPRESSION",
    monthlyRevenue: "$10k — $50k/mo",
    rotation: -45,
    adSpend: "$3,000 — $10,000/mo",
    expectedRoas: "3.4x — 4.2x",
    projectedPipeline: "$120,000+",
    playbook: [
      "Rapid creative testing: 15 dynamic video/static hook variants",
      "Sub-second Next.js landing page with high-converting intake quiz",
      "Direct Meta Advantage+ campaign architecture with pixel guardrails",
      "Zero-fluff closed-loop CRM tracking into HubSpot / Slack",
    ],
    focusChannels: ["Meta Advantage+", "Google Search High-Intent", "Next.js CRO"],
    tagColor: "#00D084",
  },
  {
    id: "stage-2",
    name: "HYPER-GROWTH & AEO EXPANSION",
    monthlyRevenue: "$50k — $250k/mo",
    rotation: 0,
    adSpend: "$15,000 — $60,000/mo",
    expectedRoas: "4.5x — 5.8x",
    projectedPipeline: "$650,000+",
    playbook: [
      "Multi-channel scaling: Synchronized Meta, TikTok Pulse & YouTube",
      "AI Search Optimization: #1 recommendation rank in ChatGPT & Perplexity",
      "Dynamic multivariate landing page personalization by ad UTM angle",
      "SMS & Email post-click re-activation engine with 14-touch drip",
    ],
    focusChannels: ["TikTok Pulse", "Meta High-Scale", "AEO / Perplexity", "Lifecycle SMS"],
    tagColor: "#FF3B14",
  },
  {
    id: "stage-3",
    name: "CATEGORY MONOPOLY & LTV FLYWHEEL",
    monthlyRevenue: "$250k — $1M+/mo",
    rotation: 45,
    adSpend: "$80,000 — $300,000+/mo",
    expectedRoas: "5.4x — 7.2x Blended",
    projectedPipeline: "$2,800,000+",
    playbook: [
      "Full programmatic media buying with real-time profit bidding",
      "Predictive high-roller whale modeling & churn intervention loops",
      "Brand narrative authority takeovers & industry benchmark whitepapers",
      "Dedicated growth engineering pod shipping custom micro-tools weekly",
    ],
    focusChannels: ["Omnichannel Programmatic", "AEO Monopoly", "Whale Retention", "Custom Micro-Apps"],
    tagColor: "#0047FF",
  },
];

export default function GrowthScaleDial() {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(1);
  const currentStage = STAGES[activeStageIndex];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F5] border-b border-black/10 overflow-hidden relative">
      <div className="site-gutter">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF3B14]/10 text-[#0047FF] text-xs font-mono font-bold uppercase tracking-wider">
            <Gauge className="w-3.5 h-3.5" />
            THE VELOCITY SCALE DIAL
          </div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.95]">
            REV THE DIAL TO YOUR{" "}
            <span className="font-serif italic font-normal text-[#0047FF] tracking-normal">
              target
            </span>{" "}
            TIER.
          </h2>
          <p className="text-base text-[#6E6E78] font-sans">
            Scale isn&apos;t just spending more on the same ad. Rotate between velocity tiers to
            inspect the exact infrastructure, expected yields, and channel playbooks we deploy.
          </p>
        </div>

        {/* Tachometer / Speedometer Dial Stage */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-black/10 shadow-xl">
          {/* Top Dial Selector Controls */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {STAGES.map((stage, idx) => (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStageIndex(idx)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 border ${
                  activeStageIndex === idx
                    ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-md scale-105"
                    : "bg-[#FAF9F5] hover:bg-black/5 text-[#6E6E78] border-black/10"
                }`}
              >
                {stage.name.split("&")[0]}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: The Visual Tachometer Gauge */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full bg-[#FAF9F5] border-4 border-black/8 shadow-inner flex items-center justify-center">
                {/* Speedometer Tick Marks */}
                <div className="absolute inset-4 rounded-full border border-dashed border-black/15" />

                {/* Dial Range Indicator Marks */}
                <div className="absolute top-6 text-[10px] font-mono font-bold text-[#0047FF]">
                  OVERDRIVE (1M+)
                </div>
                <div className="absolute left-6 text-[10px] font-mono font-bold text-[#00D084]">
                  IGNITION (10K)
                </div>
                <div className="absolute right-6 text-[10px] font-mono font-bold text-[#0047FF]">
                  SCALE (250K)
                </div>

                {/* Animated Rotating Needle */}
                <motion.div
                  animate={{ rotate: currentStage.rotation }}
                  transition={{ type: "spring", stiffness: 120, damping: 14 }}
                  className="absolute inset-0 flex items-center justify-center origin-center pointer-events-none"
                >
                  <div className="w-1.5 h-28 bg-[#FF3B14] rounded-t-full shadow-lg relative -top-14">
                    <div className="w-3 h-3 rounded-full bg-[#FF3B14] -ml-[3px] -mt-1 shadow-md" />
                  </div>
                </motion.div>

                {/* Center Hub */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-[#0E0E10] text-[#FAF9F5] border-4 border-white shadow-xl flex flex-col items-center justify-center">
                  <Flame className="w-5 h-5 text-[#0047FF] animate-pulse" />
                  <span className="text-[9px] font-mono font-bold uppercase mt-0.5 text-white/70">
                    TIER 0{activeStageIndex + 1}
                  </span>
                </div>
              </div>

              {/* Digital Rev Display Under Gauge */}
              <div className="text-center mt-6">
                <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest">
                  CURRENT VELOCITY BAND
                </div>
                <div className="text-2xl font-black font-sans text-[#0E0E10] tracking-tight mt-0.5">
                  {currentStage.monthlyRevenue}
                </div>
              </div>
            </div>

            {/* Right: Dynamic Operational Spec Board */}
            <div className="lg:col-span-7 space-y-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStage.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <div>
                    <div
                      className="inline-block text-[10px] font-mono uppercase tracking-widest font-black px-3 py-1 rounded-full mb-2"
                      style={{
                        backgroundColor: `${currentStage.tagColor}15`,
                        color: currentStage.tagColor,
                      }}
                    >
                      {currentStage.name}
                    </div>
                    <div className="text-2xl sm:text-3xl font-sans font-black text-[#0E0E10]">
                      Expected ROI & Infrastructure
                    </div>
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                      <div className="text-[10px] font-mono text-[#6E6E78] uppercase">REC AD SPEND</div>
                      <div className="text-sm sm:text-base font-mono font-black text-[#0E0E10] mt-1 truncate">
                        {currentStage.adSpend}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                      <div className="text-[10px] font-mono text-[#6E6E78] uppercase">TARGET ROAS</div>
                      <div className="text-sm sm:text-base font-mono font-black text-[#00D084] mt-1">
                        {currentStage.expectedRoas}
                      </div>
                    </div>
                    <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                      <div className="text-[10px] font-mono text-[#6E6E78] uppercase">90D PIPELINE</div>
                      <div className="text-sm sm:text-base font-mono font-black text-[#0047FF] mt-1">
                        {currentStage.projectedPipeline}
                      </div>
                    </div>
                  </div>

                  {/* Operational Playbook */}
                  <div className="space-y-2.5">
                    <div className="text-xs font-mono font-bold uppercase text-[#0E0E10] tracking-wider">
                      DEPLOYMENT SPRINT INCLUDES:
                    </div>
                    {currentStage.playbook.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-[#0E0E10] font-sans">
                        <CheckCircle className="w-4 h-4 text-[#00D084] shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>

                  {/* Recommended Channel Stack Chips */}
                  <div className="pt-2">
                    <div className="text-[10px] font-mono uppercase text-[#6E6E78] mb-2">
                      ACTIVE CHANNELS IN THIS TIER:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentStage.focusChannels.map((ch, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-full bg-black/5 text-[#0E0E10] text-xs font-mono font-bold"
                        >
                          ⚡ {ch}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
