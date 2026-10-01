"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  TrendingUp,
  ArrowRight,
  Flame,
  Radio,
  Sparkles,
  BarChart2,
  Sliders,
  Target,
} from "lucide-react";
import confetti from "canvas-confetti";

interface GrowthHeroProps {
  onOpenContact: () => void;
}

export default function GrowthHero({ onOpenContact }: GrowthHeroProps) {
  const [isOverdrive, setIsOverdrive] = useState(false);
  const [activeRadarBlip, setActiveRadarBlip] = useState(0);

  // Auto-pulse radar blips
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveRadarBlip((prev) => (prev + 1) % 4);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const handleSurge = () => {
    setIsOverdrive(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF3B14", "#FF6B00", "#00D084", "#0047FF", "#CEFF00"],
      });
    } catch {
      // fallback safe
    }
    setTimeout(() => setIsOverdrive(false), 3500);
  };

  const radarEvents = [
    { title: "Meta Advantage+ Breakout", stat: "6.2x ROAS", time: "Just now", color: "#FF3B14" },
    { title: "AI Search / ChatGPT Citation #1", stat: "+480% Inbound", time: "12s ago", color: "#00D084" },
    { title: "High-Ticket SaaS Discovery", stat: "$42k Pipeline", time: "34s ago", color: "#0047FF" },
    { title: "TikTok Pulse Scaled", stat: "-52% CAC", time: "1m ago", color: "#FF6B00" },
  ];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#FAF9F5] border-b border-black/10">
      {/* Background kinetic ambient mesh */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            x: [0, 40, 0],
            y: [0, -30, 0],
            opacity: [0.15, 0.28, 0.15],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-[-10%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-[#FF3B14]/20 via-[#FF8A00]/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 40, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-[-15%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-[#00D084]/15 via-[#0047FF]/10 to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="site-gutter relative z-10">
        {/* Main 2-Column Hero Grid with Motion Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Explosive Editorial Typography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF3B14]/10 border border-[#FF3B14]/30 text-[#0047FF] text-xs font-mono font-bold uppercase tracking-wider">
              <Flame className="w-3.5 h-3.5 animate-bounce" />
              Not Vanity Metrics — Pure Pipeline Velocity
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl lg:text-[76px] font-sans font-black tracking-tight leading-[0.92] text-[#0E0E10] uppercase"
            >
              WE TURN COLD TRAFFIC INTO{" "}
              <span className="relative inline-block text-[#0047FF]">
                UNFAIR
                <motion.span
                  className="absolute left-0 bottom-1 w-full h-[6px] bg-[#FF3B14]/25 rounded-full -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />
              </span>{" "}
              <span className="font-serif italic font-normal text-[#0E0E10] lowercase tracking-normal">
                market
              </span>{" "}
              DOMINANCE.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg sm:text-xl text-[#6E6E78] font-sans leading-relaxed max-w-2xl"
            >
              Most marketing agencies burn budgets on vanity clicks and static slides. We engineer{" "}
              <strong className="text-[#0E0E10] font-semibold">
                algorithmic paid acquisition, AI search citations (AEO), and high-converting Next.js funnels
              </strong>{" "}
              that compound your enterprise pipeline month over month.
            </motion.p>

            {/* CTAs + Interactive Overdrive Trigger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <button
                type="button"
                onClick={onOpenContact}
                className="relative group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0E0E10] text-[#FAF9F5] font-sans font-bold text-sm tracking-wide uppercase hover:bg-[#FF3B14] transition-all duration-300 shadow-lg hover:shadow-[#FF3B14]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Scale Your Revenue</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={handleSurge}
                className={`inline-flex items-center gap-2.5 px-6 py-4 rounded-full border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 ${
                  isOverdrive
                    ? "bg-[#FF3B14] text-white border-[#FF3B14] shadow-xl scale-105"
                    : "bg-white/80 hover:bg-white text-[#0E0E10] border-black/15 hover:border-black/30 shadow-sm"
                }`}
              >
                <Zap className={`w-4 h-4 ${isOverdrive ? "animate-spin text-white" : "text-[#0047FF]"}`} />
                <span>{isOverdrive ? "OVERDRIVE ACTIVE!" : "TRIGGER TRAFFIC SURGE"}</span>
              </button>
            </motion.div>

            {/* Quick Proof Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-black/8">
              <div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10] tracking-tight">
                  $48M+
                </div>
                <div className="text-[11px] font-mono text-[#6E6E78] uppercase mt-0.5">
                  Pipeline Generated
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-[#0047FF] tracking-tight">
                  -44%
                </div>
                <div className="text-[11px] font-mono text-[#6E6E78] uppercase mt-0.5">
                  Median CAC Drop
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-[#00D084] tracking-tight">
                  3.9x
                </div>
                <div className="text-[11px] font-mono text-[#6E6E78] uppercase mt-0.5">
                  Blended ROAS
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Live Interactive Growth Cockpit & Radar */}
          <div className="lg:col-span-5 relative">
            {/* Outer Cockpit Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className={`relative rounded-3xl p-6 sm:p-8 bg-white border border-black/10 shadow-2xl transition-all duration-500 overflow-hidden ${
                isOverdrive ? "ring-4 ring-[#FF3B14]/40 shadow-[#FF3B14]/20" : ""
              }`}
            >
              {/* Cockpit Header */}
              <div className="flex items-center justify-between pb-6 border-b border-black/8">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#6E6E78]">
                    LIVE SURGE RADAR
                  </div>
                  <div className="text-sm font-sans font-black text-[#0E0E10] mt-0.5 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-[#0047FF] animate-pulse" />
                    ACQUISITION FLIGHT DECK
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00D084]/10 text-[#00A86B] text-[10px] font-mono font-bold">
                  24/7 AUTONOMOUS
                </div>
              </div>

              {/* Interactive Radar Visualizer */}
              <div className="relative my-6 aspect-square max-h-[260px] mx-auto rounded-full bg-[#FAF9F5] border border-black/10 flex items-center justify-center overflow-hidden">
                {/* Concentric rings */}
                <div className="absolute inset-4 rounded-full border border-black/8" />
                <div className="absolute inset-14 rounded-full border border-black/8" />
                <div className="absolute inset-24 rounded-full border border-black/8" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-[1px] bg-black/6" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-[1px] bg-black/6" />
                </div>

                {/* Rotating Radar Sweep Line */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 origin-center pointer-events-none"
                >
                  <div className="w-1/2 h-1/2 ml-auto bg-gradient-to-bl from-[#FF3B14]/25 via-[#FF3B14]/5 to-transparent rounded-tr-full" />
                </motion.div>

                {/* Radar Center Hub */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-[#0E0E10] text-[#FAF9F5] flex items-center justify-center shadow-lg">
                  <Target className="w-5 h-5 text-[#0047FF]" />
                </div>

                {/* Dynamic Radar Target Pins */}
                <motion.div
                  animate={{ scale: activeRadarBlip === 0 ? [1, 1.4, 1] : 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-12 left-16 z-20"
                >
                  <span className="relative flex h-4 w-4 cursor-pointer">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3B14] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FF3B14] text-[8px] font-mono text-white items-center justify-center font-bold">
                      A
                    </span>
                  </span>
                </motion.div>

                <motion.div
                  animate={{ scale: activeRadarBlip === 1 ? [1, 1.4, 1] : 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute bottom-14 right-14 z-20"
                >
                  <span className="relative flex h-4 w-4 cursor-pointer">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D084] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#00D084] text-[8px] font-mono text-white items-center justify-center font-bold">
                      B
                    </span>
                  </span>
                </motion.div>

                <motion.div
                  animate={{ scale: activeRadarBlip === 2 ? [1, 1.4, 1] : 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute top-16 right-20 z-20"
                >
                  <span className="relative flex h-4 w-4 cursor-pointer">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0047FF] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-[#0047FF] text-[8px] font-mono text-white items-center justify-center font-bold">
                      C
                    </span>
                  </span>
                </motion.div>
              </div>

              {/* Active Radar Feed Event Card */}
              <div className="p-3.5 rounded-2xl bg-[#FAF9F5] border border-black/8 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-[#6E6E78]">SIGNAL INGESTION:</span>
                  <span className="text-[#0047FF] font-bold">{radarEvents[activeRadarBlip].time}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-sans font-bold text-[#0E0E10]">
                    {radarEvents[activeRadarBlip].title}
                  </span>
                  <span
                    className="text-xs font-mono font-extrabold px-2 py-0.5 rounded-full"
                    style={{
                      backgroundColor: `${radarEvents[activeRadarBlip].color}15`,
                      color: radarEvents[activeRadarBlip].color,
                    }}
                  >
                    {radarEvents[activeRadarBlip].stat}
                  </span>
                </div>
              </div>

              {/* Dynamic Telemetry Mini-Cards */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <div className="p-3 rounded-xl bg-white border border-black/8 hover:border-black/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#6E6E78]">ALGO ROAS</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#00D084]" />
                  </div>
                  <div className="text-lg font-mono font-black text-[#0E0E10] mt-1">
                    {isOverdrive ? "6.84x" : "4.92x"}
                  </div>
                  <div className="text-[10px] font-mono text-[#00A86B] font-semibold">
                    ↑ +28% vs standard
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-black/8 hover:border-black/20 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#6E6E78]">CVR VELOCITY</span>
                    <BarChart2 className="w-3.5 h-3.5 text-[#0047FF]" />
                  </div>
                  <div className="text-lg font-mono font-black text-[#0E0E10] mt-1">
                    {isOverdrive ? "11.2%" : "8.6%"}
                  </div>
                  <div className="text-[10px] font-mono text-[#0047FF] font-semibold">
                    Sub-second Next.js
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Kinetic Notification Pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="hidden sm:flex absolute -bottom-6 -left-6 z-30 p-3.5 rounded-2xl bg-[#0E0E10] text-white shadow-xl border border-white/10 items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-[#FF3B14] flex items-center justify-center font-mono font-bold text-xs">
                ⚡
              </div>
              <div className="text-xs font-sans">
                <div className="font-bold text-[#FAF9F5]">High-Value Deal Closed</div>
                <div className="text-[10px] font-mono text-[#FAF9F5]/70">$28,500 via AEO Referral</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
