"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Target,
  ArrowRight,
  ArrowDown,
  Sparkles,
  BarChart3,
  Search,
  Zap,
  DollarSign,
  Activity,
} from "lucide-react";

interface GrowthHeroProps {
  onOpenContact: () => void;
}

interface ChannelTelemetry {
  id: string;
  channel: string;
  status: string;
  metric: string;
  lift: string;
  detail: string;
}

const CHANNELS: ChannelTelemetry[] = [
  {
    id: "aeo",
    channel: "AI Search & AEO Domination",
    status: "OPTIMIZED",
    metric: "#1 Citation Share",
    lift: "+410%",
    detail: "Direct recommendations across Perplexity, ChatGPT Search, and Google Gemini.",
  },
  {
    id: "paid",
    channel: "Algorithmic Paid Acquisition",
    status: "SCALING",
    metric: "3.9x Blended ROAS",
    lift: "-42% CAC",
    detail: "High-velocity multivariate ad creative with real-time conversion feedback loops.",
  },
  {
    id: "cro",
    channel: "High-Conversion Landers",
    status: "ACTIVE",
    metric: "8.4% Median CVR",
    lift: "+64% Inbound",
    detail: "Editorial 60fps landing experiences built with Next.js and sub-second load times.",
  },
  {
    id: "lifecycle",
    channel: "Compounding LTV Engine",
    status: "AUTOMATED",
    metric: "92% Retention",
    lift: "+32% Expansion",
    detail: "Automated account expansion signals and automated reactivation sequences.",
  },
];

export default function GrowthHero({ onOpenContact }: GrowthHeroProps) {
  const [activeChannel, setActiveChannel] = useState<ChannelTelemetry>(CHANNELS[0]);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 site-gutter bg-editorial-grid bg-noise border-b border-black/10 overflow-hidden">
      {/* Main Grid: Headline + Interactive Demand Engine */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Monumental Editorial Typography (7 cols) */}
        <div className="lg:col-span-7 flex flex-col z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-[#0E0E10] font-semibold mb-6 w-fit shadow-xs">
            <Target className="w-3.5 h-3.5 text-[#FF2E93]" />
            <span>FULL-FUNNEL HIGH-VELOCITY SCALE</span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans">
            ACQUISITION SYSTEMS <br />
            BUILT FOR <br />
            <span className="font-serif italic font-normal text-[#FF2E93] lowercase text-6xl sm:text-8xl xl:text-9xl pr-2">
              pipeline,
            </span>{" "}
            NOT VANITY.
          </h1>

          <p className="mt-8 text-base sm:text-xl text-[#6E6E78] leading-relaxed max-w-2xl font-sans">
            We engineer high-leverage growth engines combining AI Search Optimization (AEO/GEO),
            precision paid media, and bespoke high-converting Next.js landing experiences — measured
            strictly against qualified pipeline and contracted revenue.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              data-cursor="start"
              className="px-8 py-4 rounded-full bg-[#0E0E10] hover:bg-[#FF2E93] text-[#FAF9F5] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>ENGINEER YOUR GROWTH ENGINE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#growth-pillars"
              className="px-6 py-4 rounded-full bg-white hover:bg-black/5 text-[#0E0E10] border border-black/15 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 flex items-center gap-2"
            >
              <span>EXPLORE PILLARS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Trust Telemetry */}
          <div className="mt-12 pt-8 border-t border-black/8 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                $48M+
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Client Pipeline Generated
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                -44%
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Median CAC Reduction
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                3.8x
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Average Paid ROAS
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Demand Channel Stage (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2E93] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#0E0E10] uppercase">
                  DEMAND ENGINE ATTRIBUTION
                </span>
              </div>
              <span className="text-[10px] font-mono bg-[#FAF9F5] px-2.5 py-1 rounded-full text-[#FF2E93] font-semibold border border-black/5">
                REAL-TIME TELEMETRY
              </span>
            </div>

            {/* Interactive Channel Buttons */}
            <div className="space-y-3 mb-6">
              <div className="text-[10px] font-mono uppercase text-[#6E6E78] tracking-wider mb-2">
                SELECT ACQUISITION CHANNEL TO INSPECT:
              </div>

              {CHANNELS.map((ch) => {
                const isSelected = activeChannel.id === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => setActiveChannel(ch)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-md"
                        : "bg-[#FAF9F5] text-[#0E0E10] border-black/8 hover:border-black/20 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-white/10 text-white" : "bg-black/5 text-[#FF2E93]"
                        }`}
                      >
                        {ch.id === "aeo" && <Search className="w-4 h-4" />}
                        {ch.id === "paid" && <Zap className="w-4 h-4" />}
                        {ch.id === "cro" && <Activity className="w-4 h-4" />}
                        {ch.id === "lifecycle" && <TrendingUp className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold font-sans tracking-tight">
                          {ch.channel}
                        </div>
                        <div
                          className={`text-[10px] font-mono truncate max-w-[190px] sm:max-w-[240px] ${
                            isSelected ? "text-stone-300" : "text-[#6E6E78]"
                          }`}
                        >
                          {ch.detail}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                          isSelected
                            ? "bg-[#FF2E93] text-white"
                            : "bg-black/5 text-[#10B981]"
                        }`}
                      >
                        {ch.lift}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Channel Inspector Console */}
            <div className="bg-[#FAF9F5] rounded-2xl border border-black/8 p-5 font-mono">
              <div className="flex items-center justify-between text-[10px] text-[#6E6E78] pb-2 border-b border-black/6">
                <span>INSPECTOR: {activeChannel.channel.toUpperCase()}</span>
                <span className="text-[#FF2E93] font-bold">METRIC: {activeChannel.metric}</span>
              </div>

              <div className="mt-3 text-xs text-[#0E0E10] space-y-2">
                <div>
                  <span className="text-[#6E6E78]">PERFORMANCE GAIN: </span>
                  <span className="font-bold text-[#10B981]">{activeChannel.lift} vs Baseline</span>
                </div>
                <div className="text-[11px] leading-relaxed text-[#6E6E78]">
                  &gt; {activeChannel.detail}
                </div>
                <div className="flex items-center gap-2 pt-2 text-[10px] text-[#10B981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>CLOSED-LOOP ATTRIBUTION TO CONTRACTED REVENUE</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 pt-3 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
              <span>ZERO CLICKBAIT // ZERO INFLATION</span>
              <span className="text-[#0E0E10] font-bold">100% AUDITABLE ROI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
