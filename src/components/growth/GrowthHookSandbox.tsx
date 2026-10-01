"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, Play, Eye, Share2, Sparkles, AlertCircle, ArrowUpRight } from "lucide-react";

interface HookAngle {
  id: string;
  name: string;
  tag: string;
  hookLine: string;
  retentionCurve: number[]; // Points out of 100 for 0s, 3s, 10s, 20s, 30s
  thumbstopRate: string;
  projectedCpa: string;
  fatigueScore: string;
  bestFor: string;
  color: string;
}

const HOOKS: HookAngle[] = [
  {
    id: "contrarian",
    name: "Contrarian Pattern Interrupt",
    tag: "HIGH THUMBSTOP",
    hookLine: '"Stop redesigning your website. It’s not why you’re losing deals..."',
    retentionCurve: [100, 78, 64, 52, 44],
    thumbstopRate: "54.2%",
    projectedCpa: "$22.40",
    fatigueScore: "10+ Weeks Stable",
    bestFor: "High-Ticket B2B & Competitive SaaS",
    color: "#FF3B14",
  },
  {
    id: "data-proof",
    name: "Empirical Proof Teardown",
    tag: "HIGH INTENT",
    hookLine: '"We audited 142 real estate campaigns. Here is the single leak draining 40% of their ad spend..."',
    retentionCurve: [100, 72, 68, 59, 51],
    thumbstopRate: "46.8%",
    projectedCpa: "$19.10",
    fatigueScore: "8 Weeks Stable",
    bestFor: "Real Estate, Clinics & Professional Services",
    color: "#00D084",
  },
  {
    id: "founder-raw",
    name: "Founder Behind-The-Curtain",
    tag: "HIGH TRUST",
    hookLine: '"I fired our traditional marketing agency after 6 months. Here is what we built internally instead..."',
    retentionCurve: [100, 81, 62, 48, 41],
    thumbstopRate: "58.6%",
    projectedCpa: "$26.50",
    fatigueScore: "6 Weeks Stable",
    bestFor: "E-Commerce Brands & Consultancies",
    color: "#0047FF",
  },
  {
    id: "sensory-shock",
    name: "Live Kinetic Demonstration",
    tag: "VIRAL VELOCITY",
    hookLine: '"Watch this AI agent qualify and close a $5,000 lead in under 4 minutes while we sleep..."',
    retentionCurve: [100, 84, 71, 56, 49],
    thumbstopRate: "62.4%",
    projectedCpa: "$17.80",
    fatigueScore: "12 Weeks Stable",
    bestFor: "AI Automations, Apps & Product Launch",
    color: "#FF8A00",
  },
];

export default function GrowthHookSandbox() {
  const [selectedHook, setSelectedHook] = useState<HookAngle>(HOOKS[0]);

  // Construct SVG path for retention curve
  const points = selectedHook.retentionCurve.map((val, idx) => {
    const x = (idx / (selectedHook.retentionCurve.length - 1)) * 360 + 20;
    const y = 140 - (val / 100) * 110;
    return `${x},${y}`;
  });
  const pathD = `M ${points.join(" L ")}`;

  return (
    <section className="py-24 md:py-32 bg-[#FAF9F5] border-b border-black/10 overflow-hidden relative">
      <div className="site-gutter">
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0047FF] font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              CREATIVE HOOK LAB ALGORITHM TESTER
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.95]">
              TEST OUR CREATIVE <br />
              <span className="font-serif italic font-normal text-[#0047FF] lowercase tracking-normal">
                angles
              </span>{" "}
              IN REAL TIME.
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6E6E78] font-sans max-w-md">
            The algorithm rewards emotional resonance, not production bloat. Select a hook archetype
            to visualize its simulated 30-second retention curve, thumbstop rate, and projected CPA.
          </p>
        </div>

        {/* 2-Column Interactive Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-10 items-stretch">
          {/* Left: Hook Selector Tabs */}
          <div className="lg:col-span-5 h-full flex flex-col gap-3">
            {HOOKS.map((hook) => {
              const isSelected = selectedHook.id === hook.id;
              return (
                <button
                  key={hook.id}
                  type="button"
                  onClick={() => setSelectedHook(hook)}
                  className={`w-full flex-1 text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col justify-center ${
                    isSelected
                      ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-lg scale-[1.01]"
                      : "bg-white hover:bg-[#F4F1EA] text-[#0E0E10] border-black/10"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                      style={{
                        backgroundColor: isSelected ? `${hook.color}30` : `${hook.color}15`,
                        color: hook.color,
                      }}
                    >
                      {hook.tag}
                    </span>
                    <span className="text-xs font-mono font-bold" style={{ color: hook.color }}>
                      Thumbstop: {hook.thumbstopRate}
                    </span>
                  </div>
                  <div className="text-base font-sans font-bold leading-tight">{hook.name}</div>
                  <div className="text-xs font-sans text-[#6E6E78] mt-1 line-clamp-1 italic">
                    {hook.hookLine}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Real-Time Retention Visualizer Stage */}
          <div className="lg:col-span-7 h-full bg-white rounded-3xl p-8 border border-black/10 shadow-xl flex flex-col justify-between">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHook.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {/* Active Hook Banner */}
                <div className="p-4 rounded-2xl bg-[#FAF9F5] border border-black/8 space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#6E6E78]">
                    OPENING 3-SECOND SCRIPT HOOK:
                  </div>
                  <div className="text-base sm:text-lg font-serif italic text-[#0E0E10]">
                    {selectedHook.hookLine}
                  </div>
                </div>

                {/* SVG Retention Graph */}
                <div className="p-5 rounded-2xl bg-[#0E0E10] text-white border border-black/10">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                    <span className="text-white/60">30-SECOND RETENTION DECAY CURVE</span>
                    <span className="text-[#00D084] font-bold">ALGO BENCHMARK: EXCELLENT</span>
                  </div>

                  {/* SVG Chart */}
                  <div className="relative h-44 w-full flex items-center justify-center my-2">
                    <svg viewBox="0 0 400 160" className="w-full h-full overflow-visible">
                      {/* Grid Lines */}
                      <line x1="20" y1="30" x2="380" y2="30" stroke="#ffffff15" strokeDasharray="4" />
                      <line x1="20" y1="80" x2="380" y2="80" stroke="#ffffff15" strokeDasharray="4" />
                      <line x1="20" y1="130" x2="380" y2="130" stroke="#ffffff15" strokeDasharray="4" />

                      {/* Animated Path */}
                      <motion.path
                        d={pathD}
                        fill="none"
                        stroke={selectedHook.color}
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                      />

                      {/* Data Points */}
                      {selectedHook.retentionCurve.map((val, idx) => {
                        const x = (idx / (selectedHook.retentionCurve.length - 1)) * 360 + 20;
                        const y = 140 - (val / 100) * 110;
                        return (
                          <g key={idx}>
                            <circle cx={x} cy={y} r="5" fill="#FAF9F5" stroke={selectedHook.color} strokeWidth="3" />
                            <text
                              x={x}
                              y={y - 10}
                              fill="#FAF9F5"
                              fontSize="10"
                              fontFamily="monospace"
                              textAnchor="middle"
                            >
                              {val}%
                            </text>
                          </g>
                        );
                      })}
                    </svg>
                  </div>

                  {/* Graph X Axis Timestamps */}
                  <div className="flex justify-between text-[10px] font-mono text-white/50 pt-2 px-4 border-t border-white/10">
                    <span>0s (Hook)</span>
                    <span>3s (Thumbstop)</span>
                    <span>10s (Value)</span>
                    <span>20s (Proof)</span>
                    <span>30s (CTA)</span>
                  </div>
                </div>

                {/* 3 Telemetry Metrics */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                    <div className="text-[10px] font-mono text-[#6E6E78] uppercase">THUMBSTOP RATE</div>
                    <div className="text-lg font-mono font-black text-[#0E0E10] mt-0.5">
                      {selectedHook.thumbstopRate}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                    <div className="text-[10px] font-mono text-[#6E6E78] uppercase">PROJECTED CPA</div>
                    <div className="text-lg font-mono font-black text-[#00D084] mt-0.5">
                      {selectedHook.projectedCpa}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8">
                    <div className="text-[10px] font-mono text-[#6E6E78] uppercase">FATIGUE RESISTANCE</div>
                    <div className="text-xs font-mono font-bold text-[#0047FF] mt-1 truncate">
                      {selectedHook.fatigueScore}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
