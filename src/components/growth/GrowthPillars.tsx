"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Zap, Activity, TrendingUp, Check, ArrowRight, Layers, BarChart2 } from "lucide-react";

interface Pillar {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  tactics: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
}

const PILLARS: Pillar[] = [
  {
    id: "aeo",
    number: "01",
    title: "AI Search & Generative Engine Optimization (AEO/GEO)",
    badge: "SEARCH PARADIGM SHIFT",
    tagline: "Be the authoritative source recommended by ChatGPT, Perplexity, and Claude.",
    overview:
      "Modern buyers don't click 10 blue links on Google; they ask AI engines for direct vendor recommendations. We architect semantic entity schemas, authoritative knowledge graph citations, and data feeds that ensure your solution is the default answer returned by generative search engines.",
    tactics: [
      "Perplexity & ChatGPT Citation Seeding",
      "Semantic Entity Schema Architecture",
      "Competitive Void & Prompt Auditing",
      "Authoritative Knowledge Graph Ingestion",
    ],
    metrics: [
      { label: "AI Citation Share", value: "#1 Rank" },
      { label: "Organic Inbound Lift", value: "+340%" },
      { label: "Zero-Click Authority", value: "98.4%" },
    ],
    accentColor: "#0047FF",
  },
  {
    id: "paid",
    number: "02",
    title: "Algorithmic Precision Paid Acquisition",
    badge: "HIGH-INTENT TRAFFIC",
    tagline: "High-velocity creative testing engineered for pipeline, not hollow impressions.",
    overview:
      "We replace bloated agency retainers with scientific multivariate creative testing. We launch dozens of modular visual hooks, test micro-angles across Meta, LinkedIn, and Google Ads, and use automated bid rules to aggressively funnel budget into whatever lowers your blended CAC.",
    tactics: [
      "Algorithmic Creative Split-Testing",
      "LinkedIn B2B Account-Based Retargeting",
      "Google Search High-Intent Intent Mining",
      "Closed-Loop Revenue Attribution Tracking",
    ],
    metrics: [
      { label: "Median CAC Reduction", value: "-44%" },
      { label: "Blended Paid ROAS", value: "3.9x" },
      { label: "Creative Fatigue Cycle", value: "0 Days" },
    ],
    accentColor: "#FF2E93",
  },
  {
    id: "cro",
    number: "03",
    title: "Conversion Rate Architecture (CRO)",
    badge: "FRICTIONLESS FLOWS",
    tagline: "Editorial Next.js landing experiences engineered with sub-second execution.",
    overview:
      "A 1-second delay in page load cuts conversions by 20%. We engineer custom, award-winning editorial landing experiences in Next.js that load in under 400ms, incorporate dynamic personalization based on the visitor's firmographics, and guide prospects through an irresistible momentum funnel.",
    tactics: [
      "Sub-400ms Next.js Edge Landers",
      "Dynamic Firmographic Personalization",
      "Micro-Friction Funnel Elimination",
      "Continuous Multivariate Split Testing",
    ],
    metrics: [
      { label: "Median Landing CVR", value: "8.4%" },
      { label: "Form Drop-off Reduction", value: "-52%" },
      { label: "Runtime Interaction", value: "60 FPS" },
    ],
    accentColor: "#10B981",
  },
  {
    id: "retention",
    number: "04",
    title: "Compounding LTV & Expansion Loops",
    badge: "COMPOUNDING REVENUE",
    tagline: "Turn single purchases and closed deals into expanding multi-year customer value.",
    overview:
      "Acquisition without retention is burning capital. We build automated product telemetry triggers that identify when an account is ready for an upsell, deploy automated customer onboarding pipelines that eliminate buyer remorse, and engineer viral referral incentives.",
    tactics: [
      "Telemetry-Driven Expansion Triggers",
      "Zero-Drop Customer Onboarding Loops",
      "Early Churn Risk Sentry Alerts",
      "Automated Advocacy & Referral Engines",
    ],
    metrics: [
      { label: "Net Revenue Retention", value: "128%" },
      { label: "Customer LTV Uplift", value: "+46%" },
      { label: "Onboarding Drop-off", value: "<4%" },
    ],
    accentColor: "#7C3AED",
  },
];

export default function GrowthPillars() {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("aeo");

  const activePillar = PILLARS.find((p) => p.id === selectedPillarId) || PILLARS[0];

  return (
    <section id="growth-pillars" className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#FF2E93]">01 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              THE 4 CORE PILLARS OF HIGH-VELOCITY GROWTH
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            ENGINEERED TO <br />
            <span className="font-serif italic font-normal text-[#FF2E93] lowercase">
              dominate.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            WE DO NOT RUN ISOLATED CAMPAIGNS. WE ARCHITECT AN INTEGRATED DEMAND ENGINE THAT
            CAPTURES, CONVERTS, AND EXPANDS MARKET SHARE SYSTEMATICALLY.
          </p>
        </div>
      </div>

      {/* 4 Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        {PILLARS.map((pillar) => {
          const isActive = selectedPillarId === pillar.id;

          return (
            <button
              key={pillar.id}
              onClick={() => setSelectedPillarId(pillar.id)}
              data-cursor="open"
              className={`p-6 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-[1.02]"
                  : "bg-white/70 text-[#0E0E10] border-black/10 hover:border-black/30 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className={isActive ? "text-[#CEFF00]" : "text-[#FF2E93] font-bold"}>
                  [{pillar.number}]
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                  {pillar.badge}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black font-sans tracking-tight leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs opacity-70 mt-2 font-mono line-clamp-2">
                {pillar.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Selected Pillar Deep Dive Container */}
      <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 lg:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Narrative, Tactics & Hard Metrics (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#6E6E78] mb-3">
                <span className="text-[#FF2E93] font-bold">[{activePillar.number}]</span>
                <span>//</span>
                <span className="uppercase">{activePillar.badge}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#0E0E10]">
                {activePillar.title}
              </h3>
              <p className="text-lg font-serif italic text-[#FF2E93] mt-2">
                &ldquo;{activePillar.tagline}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed mt-4">
                {activePillar.overview}
              </p>
            </div>

            {/* Tactical Deliverables */}
            <div>
              <span className="block text-[11px] font-mono tracking-widest uppercase text-[#6E6E78] mb-3">
                TACTICAL EXECUTION PROTOCOLS:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePillar.tactics.map((tactic) => (
                  <div
                    key={tactic}
                    className="flex items-center gap-2 p-3 rounded-xl bg-[#FAF9F5] border border-black/5 text-xs font-mono text-[#0E0E10]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{tactic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Metrics */}
            <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-[#FAF9F5] border border-black/8 text-center">
              {activePillar.metrics.map((m) => (
                <div key={m.label} className="border-r last:border-none border-black/8 px-1">
                  <div className="text-[10px] font-mono text-[#6E6E78] uppercase">
                    {m.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-sans text-[#0E0E10] mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Diagnostic Stage (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px]">
            <div className="flex items-center justify-between border-b border-black/8 pb-3">
              <div className="flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-[#FF2E93]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#0E0E10]">
                  DIAGNOSTIC & AUDIT
                </span>
              </div>
              <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded-full text-[#0E0E10] border border-black/10 font-bold">
                PHASE: CONTINUOUS
              </span>
            </div>

            {/* Diagnostic breakdown graphic */}
            <div className="my-6 space-y-4 font-mono text-xs text-[#0E0E10]">
              <div className="p-4 bg-white rounded-xl border border-black/8 space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#6E6E78]">ACQUISITION VELOCITY:</span>
                  <span className="text-[#10B981] font-bold">OPTIMAL</span>
                </div>
                <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#FF2E93] h-full w-[88%] rounded-full" />
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-black/8 space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#6E6E78]">CAC EFFICIENCY INDEX:</span>
                  <span className="text-[#0047FF] font-bold">94.2 / 100</span>
                </div>
                <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#0047FF] h-full w-[94%]" />
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-black/8 space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#6E6E78]">ATTRIBUTION ACCURACY:</span>
                  <span className="text-[#10B981] font-bold">99.8% CLOSED-LOOP</span>
                </div>
                <div className="w-full bg-black/5 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#10B981] h-full w-[99%]" />
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
              <span>KINETIX DEMAND SUITE</span>
              <span className="text-[#0E0E10] font-bold">ZERO AD WASTE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
