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

export default function WorkHeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg bg-transparent">
      <div className="pointer-events-none absolute inset-[12%] rounded-full bg-[#0047FF]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-[8%] top-[18%] h-28 w-28 rounded-full bg-[#CEFF00]/25 blur-2xl" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M110 90 C160 70, 240 80, 290 110"
          stroke="#0047FF"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          strokeDasharray="6 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        />
        <motion.path
          d="M100 200 C170 160, 230 170, 300 200"
          stroke="#0E0E10"
          strokeWidth="1.25"
          strokeOpacity="0.2"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.5 }}
        />
        <circle cx="110" cy="90" r="3.5" fill="#0047FF" fillOpacity="0.7" />
        <circle cx="290" cy="110" r="3.5" fill="#CEFF00" />
        <circle cx="100" cy="200" r="3" fill="#0E0E10" fillOpacity="0.35" />
        <circle cx="300" cy="200" r="3.5" fill="#0047FF" fillOpacity="0.55" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.75rem] border border-black/10 bg-white/70 shadow-[0_20px_50px_-24px_rgba(14,14,16,0.45)] backdrop-blur-md"
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0E0E10] text-[#CEFF00]">
          <Layers className="h-6 w-6" />
        </div>
        <span className="mt-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
          Portfolio
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 0.25, duration: 0.6 },
          y: { delay: 0.8, duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-[6%] top-[12%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { delay: 0.35, duration: 0.6 },
          y: { delay: 1, duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-[2%] top-[8%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { delay: 0.4, duration: 0.6 },
          y: { delay: 1.2, duration: 3.8, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[18%] left-[4%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
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
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 0.45, duration: 0.6 },
          y: { delay: 1.4, duration: 4.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[14%] right-[4%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
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
        transition={{ delay: 0.55, duration: 0.6 }}
        className="absolute left-[28%] top-[4%] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#0E0E10] px-3 py-1.5 text-[#FAF9F5] shadow-md"
      >
        <Clock className="h-3 w-3 text-[#CEFF00]" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">95+ hrs</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="absolute bottom-[2%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#0047FF]/20 bg-[#0047FF] px-3 py-1.5 text-white shadow-md"
      >
        <TrendingUp className="h-3 w-3" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">+62% lift</span>
        <ArrowUpRight className="h-3 w-3" />
      </motion.div>
    </div>
  );
}
