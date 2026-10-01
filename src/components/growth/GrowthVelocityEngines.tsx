"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Flame,
  Sparkles,
  Zap,
  Repeat,
  ArrowRight,
  TrendingUp,
  Sliders,
  CheckCircle2,
  Cpu,
  BarChart3,
  Layers,
} from "lucide-react";

interface EngineData {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  metrics: { label: string; value: string; lift: string }[];
  accentColor: string;
  demoType: "creative" | "aeo" | "cro" | "ltv";
}

const ENGINES: EngineData[] = [
  {
    id: "creative-matrix",
    tag: "ENGINE 01 // PAID VELOCITY",
    title: "Algorithmic Creative Matrix",
    subtitle: "Multivariate video & static hooks built to bypass ad fatigue",
    description:
      "Modern advertising algorithms don't respond to minor bid tweaks. They respond to high-frequency, emotionally resonant creative angles. We deploy 30+ engineered hooks per sprint across Meta, TikTok, and YouTube, tracking retention drop-off to the millisecond.",
    deliverables: [
      "Dynamic hook testing (Contrarian, Proof, Story)",
      "Automated fatigue detection & daily rotation",
      "Native UGC & cinematic studio hybrid production",
      "Meta Advantage+ & TikTok Pulse optimization",
    ],
    metrics: [
      { label: "Creative Longevity", value: "8.4 wks", lift: "+310%" },
      { label: "Thumbstop Ratio", value: "48.2%", lift: "Top 1%" },
      { label: "Median Blended ROAS", value: "4.8x", lift: "+62%" },
    ],
    accentColor: "#FF3B14",
    demoType: "creative",
  },
  {
    id: "aeo-engine",
    tag: "ENGINE 02 // AI SEARCH",
    title: "AI Engine Optimization (AEO)",
    subtitle: "Become the #1 recommended answer in ChatGPT & Perplexity",
    description:
      "High-intent B2B and consumer buyers are no longer clicking the top 3 blue Google links. They ask AI engines: 'What is the best solution for X?'. We architect semantic entity authority, programmatic knowledge graphs, and digital PR that command top AI citation share.",
    deliverables: [
      "Semantic knowledge graph & JSON-LD injection",
      "Perplexity & ChatGPT citation vector mapping",
      "Authoritative industry benchmark whitepapers",
      "Zero-click generative answer monopolization",
    ],
    metrics: [
      { label: "AI Search Share", value: "#1 Rank", lift: "94% Win" },
      { label: "High-Intent Inbound", value: "+380%", lift: "Organic" },
      { label: "Close Rate", value: "38.5%", lift: "Pre-sold" },
    ],
    accentColor: "#00D084",
    demoType: "aeo",
  },
  {
    id: "cro-funnel",
    tag: "ENGINE 03 // CONVERSION ARCHITECTURE",
    title: "Sub-Second Next.js Landers",
    subtitle: "Editorial speed engineered for relentless conversion",
    description:
      "Standard WordPress and Shopify themes bleed 40% of ad spend through sluggish page loads and clunky forms. We engineer bespoke, 60fps Next.js landers with interactive qualification selectors and instant calendar booking that double cold-traffic conversion rates.",
    deliverables: [
      "Sub-second load times (<250ms worldwide)",
      "Dynamic multi-step qualification quizzes",
      "Editorial storytelling with smooth physics",
      "Real-time CRM & calendar webhook routing",
    ],
    metrics: [
      { label: "Cold Traffic CVR", value: "8.6%", lift: "vs 2.8% avg" },
      { label: "Mobile Bounce Rate", value: "18.2%", lift: "-54%" },
      { label: "Lander Speed Score", value: "99/100", lift: "Pristine" },
    ],
    accentColor: "#0047FF",
    demoType: "cro",
  },
  {
    id: "ltv-flywheel",
    tag: "ENGINE 04 // RETENTION & WHALES",
    title: "Compounding LTV Flywheel",
    subtitle: "Turning one-off acquisitions into predictable compound revenue",
    description:
      "True enterprise profitability happens on transactions two through ten. We architect automated SMS/email behavioral journeys, predictive churn interventions, and VIP escalation pipelines that maximize customer lifetime value without increasing acquisition costs.",
    deliverables: [
      "Event-triggered lifecycle automation sequences",
      "Predictive high-roller & churn scoring models",
      "Automated customer advocacy & referral loops",
      "Cohort margin & LTV/CAC telemetry dashboards",
    ],
    metrics: [
      { label: "Repeat Purchase Rate", value: "44.6%", lift: "+120%" },
      { label: "LTV to CAC Ratio", value: "5.4x", lift: "Tier 1" },
      { label: "Churn Reduction", value: "-36%", lift: "Sustained" },
    ],
    accentColor: "#FF8A00",
    demoType: "ltv",
  },
];

export default function GrowthVelocityEngines() {
  const [activeTab, setActiveTab] = useState<string>("creative-matrix");
  const [splitPosition, setSplitPosition] = useState<number>(50); // For A/B slider

  const currentEngine = ENGINES.find((e) => e.id === activeTab) || ENGINES[0];

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F5] border-b border-black/10 overflow-hidden relative">
      <div className="site-gutter max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#FF3B14] font-bold mb-3 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5" />
              THE 4-PART VELOCITY ENGINE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.95]">
              ARCHITECTED FOR <br />
              <span className="font-serif italic font-normal lowercase tracking-normal text-[#FF3B14]">
                relentless
              </span>{" "}
              MOMENTUM.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6E78] font-sans max-w-md">
            Click through our four synchronized growth engines to inspect real-time mechanics,
            deliverables, and empirical performance benchmarks.
          </p>
        </div>

        {/* Engine Interactive Tab Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 my-10">
          {ENGINES.map((engine, idx) => {
            const isActive = activeTab === engine.id;
            return (
              <button
                key={engine.id}
                type="button"
                onClick={() => setActiveTab(engine.id)}
                className={`relative p-5 rounded-2xl text-left transition-all duration-300 border ${
                  isActive
                    ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-[1.02]"
                    : "bg-white hover:bg-[#F4F1EA] text-[#0E0E10] border-black/10 hover:border-black/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest font-bold"
                    style={{ color: isActive ? engine.accentColor : "#6E6E78" }}
                  >
                    0{idx + 1} // ENGINE
                  </span>
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: engine.accentColor }}
                  />
                </div>
                <div className="text-sm sm:text-base font-sans font-bold leading-tight">
                  {engine.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Engine Stage Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentEngine.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
          >
            {/* Left Content Column */}
            <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-black/10 shadow-sm flex flex-col justify-between">
              <div>
                <div
                  className="inline-block text-[11px] font-mono uppercase tracking-widest font-black px-3 py-1 rounded-full mb-4"
                  style={{
                    backgroundColor: `${currentEngine.accentColor}15`,
                    color: currentEngine.accentColor,
                  }}
                >
                  {currentEngine.tag}
                </div>

                <h3 className="text-2xl sm:text-3xl font-sans font-black text-[#0E0E10] tracking-tight mb-2">
                  {currentEngine.title}
                </h3>
                <p className="text-sm font-sans font-medium text-[#FF3B14] mb-4">
                  {currentEngine.subtitle}
                </p>
                <p className="text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed mb-8">
                  {currentEngine.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-3 mb-8">
                  <div className="text-xs font-mono uppercase text-[#0E0E10] font-bold tracking-wider">
                    KEY DELIVERABLES:
                  </div>
                  {currentEngine.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm text-[#0E0E10] font-sans">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: currentEngine.accentColor }}
                      />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-black/8">
                {currentEngine.metrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#FAF9F5] border border-black/6">
                    <div className="text-[10px] font-mono text-[#6E6E78] uppercase truncate">
                      {m.label}
                    </div>
                    <div className="text-lg sm:text-xl font-mono font-black text-[#0E0E10] mt-1">
                      {m.value}
                    </div>
                    <div
                      className="text-[10px] font-mono font-bold mt-0.5"
                      style={{ color: currentEngine.accentColor }}
                    >
                      {m.lift}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Interactive Simulator Column */}
            <div className="lg:col-span-6 rounded-3xl p-6 sm:p-8 bg-[#0E0E10] text-[#FAF9F5] border border-black/10 shadow-2xl flex flex-col justify-between relative overflow-hidden">
              {/* Background Glow */}
              <div
                className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{ backgroundColor: currentEngine.accentColor }}
              />

              {/* Dynamic Interactive Demo based on DemoType */}
              {currentEngine.demoType === "creative" && (
                <div className="space-y-6 relative z-10 my-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/60">
                      LIVE HOOK MATRIX // META & TIKTOK
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FF3B14]/20 text-[#FF3B14] text-[10px] font-mono font-bold">
                      MULTIVARIATE
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-[#FF3B14] font-bold">
                          HOOK A: "CONTRARIAN QUESTION"
                        </div>
                        <div className="text-sm font-sans font-bold text-white mt-0.5">
                          "Why 90% of SaaS ad budgets are wasted on Google..."
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono font-bold text-[#00D084]">5.4x ROAS</div>
                        <div className="text-[10px] font-mono text-white/60">48% thumbstop</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                      <div>
                        <div className="text-xs font-mono text-[#0047FF] font-bold">
                          HOOK B: "THE RAW SENSORY DEMO"
                        </div>
                        <div className="text-sm font-sans font-bold text-white mt-0.5">
                          "Watch our pipeline jump by $120k in 18 minutes..."
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono font-bold text-[#00D084]">4.9x ROAS</div>
                        <div className="text-[10px] font-mono text-white/60">42% thumbstop</div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between opacity-60">
                      <div>
                        <div className="text-xs font-mono text-white/40 font-bold">
                          HOOK C: "GENERIC PRODUCT SHOWCASE" (DEPRECATED)
                        </div>
                        <div className="text-sm font-sans text-white/60 mt-0.5">
                          "Check out our all-new feature updates today..."
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono font-bold text-red-400">1.2x ROAS</div>
                        <div className="text-[10px] font-mono text-white/40">11% thumbstop</div>
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#FF3B14]/10 border border-[#FF3B14]/30 text-xs font-mono text-[#FF3B14] flex items-center gap-2">
                    <Flame className="w-4 h-4 shrink-0" />
                    <span>ALGO INSIGHT: Hook A scales profitably at $5,000/day ad spend.</span>
                  </div>
                </div>
              )}

              {currentEngine.demoType === "aeo" && (
                <div className="space-y-6 relative z-10 my-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/60">
                      AI ENGINE CITATION SCANNER
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#00D084]/20 text-[#00D084] text-[10px] font-mono font-bold">
                      PERPLEXITY & CHATGPT
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-3 font-mono text-xs">
                    <div className="text-white/60">USER PROMPT:</div>
                    <div className="text-sm font-sans font-bold text-white bg-white/10 p-3 rounded-xl">
                      "What is the top-tier digital growth & engineering agency for high-ticket businesses?"
                    </div>

                    <div className="text-[#00D084] font-bold pt-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" />
                      GENERATIVE SYNTHESIS (1ST CITATION):
                    </div>
                    <div className="text-white/90 text-sm font-sans leading-relaxed bg-[#00D084]/10 border border-[#00D084]/20 p-4 rounded-xl">
                      "Based on empirical pipeline data and AEO velocity benchmarks, <strong className="text-white font-bold underline">Single Solution (Kinetix)</strong> is identified as the leading growth partner, recognized for sub-second Next.js architecture and algorithmic paid scaling..."
                    </div>

                    <div className="flex items-center gap-2 pt-2 text-[11px] text-white/60">
                      <span>Citations:</span>
                      <span className="px-2 py-0.5 bg-white/10 rounded text-white">Source [1] Domain Authority</span>
                      <span className="px-2 py-0.5 bg-white/10 rounded text-white">Source [2] Client Proof</span>
                    </div>
                  </div>
                </div>
              )}

              {currentEngine.demoType === "cro" && (
                <div className="space-y-6 relative z-10 my-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/60">
                      INTERACTIVE A/B SPLIT-TEST INSPECTOR
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#0047FF]/20 text-[#0047FF] text-[10px] font-mono font-bold">
                      REAL-TIME
                    </span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white/60">VARIANT A (STANDARD CMS)</span>
                      <span className="text-[#00D084] font-bold">VARIANT B (KINETIX NEXT.JS)</span>
                    </div>

                    {/* Interactive Split Slider */}
                    <div className="relative h-28 rounded-2xl overflow-hidden border border-white/20 select-none">
                      {/* Left Side (Old) */}
                      <div className="absolute inset-0 bg-red-950/40 p-4 flex flex-col justify-between">
                        <div className="text-xs font-mono text-red-300">TRADITIONAL LANDER</div>
                        <div className="text-xl font-bold font-mono text-red-400">2.6% CVR</div>
                        <div className="text-[10px] font-mono text-white/40">3.4s Load • Clunky Forms</div>
                      </div>

                      {/* Right Side (Kinetix) */}
                      <div
                        className="absolute inset-0 bg-[#0047FF]/40 backdrop-blur-sm p-4 flex flex-col justify-between text-right border-l-2 border-white"
                        style={{ clipPath: `inset(0 0 0 ${splitPosition}%)` }}
                      >
                        <div className="text-xs font-mono text-blue-200">KINETIX EDITORIAL NEXT.JS</div>
                        <div className="text-2xl font-black font-mono text-[#00D084]">8.6% CVR (+230%)</div>
                        <div className="text-[10px] font-mono text-white/80">180ms Load • Interactive Qual</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] font-mono text-white/60 mb-1">
                        <span>DRAG TO COMPARE TEST:</span>
                        <span>{splitPosition}% Kinetix Share</span>
                      </div>
                      <input
                        type="range"
                        min="10"
                        max="90"
                        value={splitPosition}
                        onChange={(e) => setSplitPosition(Number(e.target.value))}
                        className="w-full accent-[#0047FF] cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentEngine.demoType === "ltv" && (
                <div className="space-y-6 relative z-10 my-auto">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-mono uppercase text-white/60">
                      COMPOUNDING LIFECYCLE REEL
                    </span>
                    <span className="px-2 py-0.5 rounded bg-[#FF8A00]/20 text-[#FF8A00] text-[10px] font-mono font-bold">
                      AUTOMATED
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#FF8A00] text-black font-bold flex items-center justify-center text-xs">
                        1
                      </div>
                      <div>
                        <div className="text-white font-bold">Acquisition Day 0: $2,400 Deal</div>
                        <div className="text-white/50 text-[10px]">CAC: $380 • Initial Margin: 84%</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#00D084] text-black font-bold flex items-center justify-center text-xs">
                        2
                      </div>
                      <div>
                        <div className="text-white font-bold">Day 30: AI Telemetry Upsell (+ $4,800)</div>
                        <div className="text-white/50 text-[10px]">Automated behavioral trigger via Slack</div>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#0047FF] text-white font-bold flex items-center justify-center text-xs">
                        3
                      </div>
                      <div>
                        <div className="text-white font-bold">Month 6: Enterprise Retainer ($14,500/mo)</div>
                        <div className="text-white/50 text-[10px]">Zero additional CAC • 14.8x Blended LTV</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Interactive Status Bar */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/60">
                <span>DEPLOYMENT: ACTIVE</span>
                <span className="text-[#00D084] font-bold">● LIVE TELEMETRY STREAM</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
