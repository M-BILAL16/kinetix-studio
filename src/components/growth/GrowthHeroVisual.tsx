"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Search,
  Mail,
  BarChart3,
  MapPin,
  Target,
  TrendingUp,
  Eye,
} from "lucide-react";

export default function GrowthHeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-lg bg-transparent">
      <div className="pointer-events-none absolute inset-[14%] rounded-full bg-[#0047FF]/12 blur-3xl" />
      <div className="pointer-events-none absolute right-[10%] top-[16%] h-24 w-24 rounded-full bg-[#CEFF00]/25 blur-2xl" />

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 400 300"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M200 150 L95 70"
          stroke="#0047FF"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.25 }}
        />
        <motion.path
          d="M200 150 L310 75"
          stroke="#0047FF"
          strokeWidth="1.5"
          strokeOpacity="0.3"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.35 }}
        />
        <motion.path
          d="M200 150 L90 210"
          stroke="#0E0E10"
          strokeWidth="1.25"
          strokeOpacity="0.18"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.45 }}
        />
        <motion.path
          d="M200 150 L315 215"
          stroke="#0E0E10"
          strokeWidth="1.25"
          strokeOpacity="0.18"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.55 }}
        />
        <circle cx="95" cy="70" r="3" fill="#0047FF" fillOpacity="0.65" />
        <circle cx="310" cy="75" r="3" fill="#CEFF00" />
        <circle cx="90" cy="210" r="3" fill="#0E0E10" fillOpacity="0.3" />
        <circle cx="315" cy="215" r="3" fill="#0047FF" fillOpacity="0.5" />
      </svg>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 z-10 flex h-32 w-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[2rem] border border-black/10 bg-white/70 shadow-[0_20px_50px_-24px_rgba(14,14,16,0.45)] backdrop-blur-md"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0E0E10] text-[#CEFF00]">
          <Target className="h-7 w-7" />
        </div>
        <span className="mt-2 font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
          Growth Hub
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: [0, -6, 0] }}
        transition={{
          opacity: { delay: 0.25, duration: 0.55 },
          y: { delay: 0.9, duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute left-[4%] top-[8%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0047FF]/10 text-[#0047FF]">
          <Megaphone className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Paid
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            Ads
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { delay: 0.35, duration: 0.55 },
          y: { delay: 1.1, duration: 4.4, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute right-[2%] top-[10%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#CEFF00]/40 text-[#0E0E10]">
          <Search className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Organic
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            SEO
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: [0, -5, 0] }}
        transition={{
          opacity: { delay: 0.4, duration: 0.55 },
          y: { delay: 1.25, duration: 3.9, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[16%] left-[2%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 text-[#0E0E10]">
          <Mail className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Nurture
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            Email
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 0.45, duration: 0.55 },
          y: { delay: 1.4, duration: 4.2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="absolute bottom-[12%] right-[2%] flex items-center gap-2.5 rounded-2xl border border-black/10 bg-white/75 px-3.5 py-3 shadow-sm backdrop-blur-md"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0047FF] text-white">
          <BarChart3 className="h-5 w-5" />
        </span>
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-widest text-[#6E6E78]">
            Report
          </p>
          <p className="font-sans text-xs font-black uppercase tracking-tight text-[#0E0E10]">
            Analytics
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55, duration: 0.55 }}
        className="absolute left-[28%] top-[2%] inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#0E0E10] px-3 py-1.5 text-[#FAF9F5] shadow-md"
      >
        <MapPin className="h-3 w-3 text-[#CEFF00]" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Local</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.55 }}
        className="absolute bottom-[1%] left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-[#0047FF]/20 bg-[#0047FF] px-3 py-1.5 text-white shadow-md"
      >
        <Eye className="h-3 w-3" />
        <span className="font-mono text-[9px] font-bold uppercase tracking-widest">Get found</span>
        <TrendingUp className="h-3 w-3 text-[#CEFF00]" />
      </motion.div>
    </div>
  );
}
