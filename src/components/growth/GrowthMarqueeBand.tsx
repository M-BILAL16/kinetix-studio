"use client";

import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  "GOOGLE ADS",
  "META ADS",
  "SEO",
  "TECHNICAL FIXES",
  "AEO",
  "EMAIL MARKETING",
  "CONTENT MARKETING",
  "GOOGLE BUSINESS SUITE",
  "COPYWRITING",
  "MONTHLY BLOGS",
  "REPORTING DASHBOARD",
  "GOOGLE ANALYTICS",
];

export default function GrowthMarqueeBand() {
  const track = [...ITEMS, ...ITEMS];

  return (
    <div className="overflow-hidden border-y border-black/10 bg-[#0E0E10] py-5 text-[#FAF9F5]">
      <div className="flex overflow-hidden whitespace-nowrap">
        <motion.div
          animate={{ x: [0, -1400] }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          className="flex shrink-0 items-center gap-8"
        >
          {track.map((item, idx) => (
            <span key={`${item}-${idx}`} className="flex items-center gap-8">
              <span className="font-sans text-sm font-black uppercase tracking-widest">{item}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#CEFF00]" />
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
