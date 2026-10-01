"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  {
    number: "$48M+",
    label: "Attributed Client Pipeline",
    detail: "Directly tracked and closed sales pipeline originated through our demand systems",
    tag: "PIPELINE",
  },
  {
    number: "-44%",
    label: "Median CAC Reduction",
    detail: "Compressing customer acquisition cost through algorithmic creative and AEO search",
    tag: "EFFICIENCY",
  },
  {
    number: "3.8x",
    label: "Average Paid ROAS",
    detail: "Documented blended return on ad spend across Meta, Google, and LinkedIn channels",
    tag: "MULTIPLIER",
  },
  {
    number: "#1 Rank",
    label: "AI Search Citation Share",
    detail: "Leading generative recommendations across Perplexity, ChatGPT Search, and Claude",
    tag: "AEO LEADERSHIP",
  },
];

export default function GrowthMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={containerRef}
      className="py-24 site-gutter bg-[#FAF9F5] border-b border-black/10 overflow-hidden"
    >
      {/* Editorial Marker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/8 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#FF2E93]">04 //</span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
            DOCUMENTED ACQUISITION PERFORMANCE
          </span>
        </div>
        <p className="text-xs font-mono text-[#6E6E78] max-w-sm text-left md:text-right">
          EVERY DOLLAR AND CONVERSION MEASURED AGAINST CONTRACTED BUSINESS REVENUE.
        </p>
      </div>

      {/* Spanning 4 Column Metric Spread with 1px border lines */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-r border-black/10">
        {METRICS.map((metric, idx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] as const }}
            className={`p-8 sm:p-10 border-b lg:border-b-0 border-black/10 relative group hover:bg-white/60 transition-colors duration-300 ${
              idx !== 3 ? "lg:border-r border-black/10" : ""
            }`}
          >
            {/* Index & Tag */}
            <div className="flex items-center justify-between text-[11px] font-mono mb-8 text-[#6E6E78]">
              <span className="group-hover:text-[#FF2E93] font-bold transition-colors">
                [0{idx + 1}]
              </span>
              <span className="px-2 py-0.5 rounded-full bg-black/4 text-[9px] uppercase tracking-wider font-semibold">
                {metric.tag}
              </span>
            </div>

            {/* Oversized Number */}
            <div className="relative mb-6">
              <span className="block text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-[#0E0E10] font-sans group-hover:text-[#FF2E93] transition-colors duration-300">
                {metric.number}
              </span>
              <div className="w-8 h-1 bg-[#CEFF00] mt-2 group-hover:w-16 transition-all duration-300 rounded-full" />
            </div>

            {/* Label & Detail */}
            <h4 className="text-base sm:text-lg font-bold font-sans tracking-tight text-[#0E0E10] mb-2">
              {metric.label}
            </h4>
            <p className="text-xs text-[#6E6E78] leading-relaxed font-mono">
              {metric.detail}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
