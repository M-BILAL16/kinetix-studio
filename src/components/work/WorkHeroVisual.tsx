"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Clock,
  TrendingUp,
  Layers,
  Bot,
  Megaphone,
  Workflow,
  ArrowUpRight,
} from "lucide-react";

const LINES = [
  { d: "M168 118 L108 72", color: "#0047FF", delay: 0.25 },
  { d: "M232 118 L292 72", color: "#0047FF", delay: 0.35 },
  { d: "M168 182 L108 228", color: "#0E0E10", delay: 0.45 },
  { d: "M232 182 L292 228", color: "#0E0E10", delay: 0.55 },
] as const;

const DOTS = [
  { cx: 108, cy: 72, fill: "#0047FF" },
  { cx: 292, cy: 72, fill: "#CEFF00" },
  { cx: 108, cy: 228, fill: "#0E0E10", opacity: 0.35 },
  { cx: 292, cy: 228, fill: "#0047FF", opacity: 0.55 },
] as const;

export default function WorkHeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg bg-transparent">
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#0047FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-28 w-28 rounded-full bg-[#CEFF00]/25 blur-2xl" />

      <svg
        className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden
      >
        {LINES.map((line) => (
          <motion.path
            key={line.d}
            d={line.d}
            stroke={line.color}
            strokeWidth="1.5"
            strokeOpacity={0.28}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: line.delay, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
        {DOTS.map((dot) => (
          <circle
            key={`${dot.cx}-${dot.cy}`}
            cx={dot.cx}
            cy={dot.cy}
            r="3.5"
            fill={dot.fill}
            fillOpacity={"opacity" in dot ? dot.opacity : 0.75}
          />
        ))}
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.75rem] border border-black/10 bg-white/80 shadow-[0_20px_50px_-24px_rgba(14,14,16,0.45)] backdrop-blur-md"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E0E10] text-[#CEFF00]">
          <Layers className="h-6 w-6" />
        </div>
        <span className="mt-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
          Portfolio
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.55 }}
        className="absolute left-[6%] top-[12%] z-[1] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/80 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0047FF]/10 text-[#0047FF]">
          <Bot className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">AI</p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">Agents</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.55 }}
        className="absolute right-[2%] top-[8%] z-[1] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/80 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#CEFF00]/40 text-[#0E0E10]">
          <Megaphone className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Growth
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            Marketing
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.46, duration: 0.55 }}
        className="absolute bottom-[18%] left-[4%] z-[1] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/80 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 text-[#0E0E10]">
          <Workflow className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Ops
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            Automation
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.54, duration: 0.55 }}
        className="absolute bottom-[14%] right-[4%] z-[1] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/80 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0047FF] text-white">
          <Briefcase className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Software
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            Platforms
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.55 }}
        className="absolute left-[28%] top-[4%] z-[1] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#0E0E10] px-3 py-1.5 text-[#FAF9F5] shadow-md"
      >
        <Clock className="h-3 w-3 text-[#CEFF00]" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">95+ hrs</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.55 }}
        className="absolute bottom-[2%] left-1/2 z-[1] inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#0047FF]/20 bg-[#0047FF] px-3 py-1.5 text-white shadow-md"
      >
        <TrendingUp className="h-3 w-3" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">+62% lift</span>
        <ArrowUpRight className="h-3 w-3" />
      </motion.div>
    </div>
  );
}
