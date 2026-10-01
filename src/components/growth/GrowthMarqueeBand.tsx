"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Flame, TrendingUp, Sparkles, Target, ArrowUpRight } from "lucide-react";

export default function GrowthMarqueeBand() {
  const ribbon1 = [
    { text: "ALGORITHMIC PAID ACQUISITION", badge: "META + TIKTOK", icon: Flame },
    { text: "AEO / AI SEARCH CITATIONS", badge: "#1 RECOMMENDED", icon: Sparkles },
    { text: "CAC COMPRESSION ENGINE", badge: "-44% COST", icon: TrendingUp },
    { text: "HIGH-TICKET PIPELINE MESH", badge: "CLOSED-LOOP", icon: Target },
    { text: "SUB-SECOND CVR LANDERS", badge: "NEXT.JS 16", icon: Zap },
  ];

  const ribbon2 = [
    { text: "BLENDED ROAS: 4.8X MEDIAN", color: "#FF3B14" },
    { text: "PERPLEXITY & CHATGPT INDEXED", color: "#00D084" },
    { text: "WHALE RETENTION FLYWHEEL", color: "#0047FF" },
    { text: "$48M+ PIPELINE GENERATED", color: "#FF6B00" },
    { text: "ZERO CREATIVE FATIGUE", color: "#0E0E10" },
  ];

  return (
    <div className="relative py-8 bg-[#0E0E10] text-[#FAF9F5] overflow-hidden -rotate-1 scale-[1.02] border-y-2 border-[#FF3B14]/30 shadow-2xl my-8">
      {/* Top Track (Moving Left) */}
      <div className="flex whitespace-nowrap overflow-hidden select-none mb-3">
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-10 shrink-0"
        >
          {[...ribbon1, ...ribbon1, ...ribbon1].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-4 group cursor-default">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B14] group-hover:scale-150 transition-transform" />
                <span className="font-sans font-black text-sm md:text-base tracking-widest uppercase text-white/90 group-hover:text-[#FF3B14] transition-colors flex items-center gap-2">
                  <Icon className="w-4 h-4 text-[#FF3B14]" />
                  {item.text}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[#FAF9F5] text-[10px] font-mono font-bold tracking-wider">
                  {item.badge}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Track (Moving Right) */}
      <div className="flex whitespace-nowrap overflow-hidden select-none">
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex items-center gap-12 shrink-0"
        >
          {[...ribbon2, ...ribbon2, ...ribbon2].map((item, idx) => (
            <div key={idx} className="flex items-center gap-4">
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B14]" />
              <span
                className="font-mono font-bold text-xs md:text-sm tracking-wider uppercase"
                style={{ color: item.color === "#0E0E10" ? "#FAF9F5" : item.color }}
              >
                {item.text}
              </span>
              <span className="text-white/20 font-sans font-black">/</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
