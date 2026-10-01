"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const METRICS = [
  {
    number: "84%",
    label: "Routine Hours Eliminated",
    detail: "Direct operational capacity returned to human teams across client deployments",
    tag: "CAPACITY",
  },
  {
    number: "<180ms",
    label: "Reasoning & Triage Latency",
    detail: "Sub-second task evaluation and schema-validated tool dispatch velocity",
    tag: "VELOCITY",
  },
  {
    number: "99.94%",
    label: "Tool Execution Accuracy",
    detail: "Zero hallucinations on financial, CRM, and mission-critical database operations",
    tag: "PRECISION",
  },
  {
    number: "$1.8M+",
    label: "Avg. Annual Value Created",
    detail: "Documented margin expansion, error elimination, and recovered revenue per deployment",
    tag: "RETURN",
  },
];

export default function AiMetrics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10 overflow-hidden"
    >
      {/* Editorial Marker */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-black/8 gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#0047FF]">04 //</span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
            DOCUMENTED AGENTIC PERFORMANCE
          </span>
        </div>
        <p className="text-xs font-mono text-[#6E6E78] max-w-sm text-left md:text-right">
          RIGOROUSLY MEASURED BENCHMARKS ACROSS ACTIVE HIGH-VOLUME PRODUCTION WORKFLOWS.
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
              <span className="group-hover:text-[#0047FF] font-bold transition-colors">
                [0{idx + 1}]
              </span>
              <span className="px-2 py-0.5 rounded-full bg-black/4 text-[9px] uppercase tracking-wider font-semibold">
                {metric.tag}
              </span>
            </div>

            {/* Oversized Number */}
            <div className="relative mb-6">
              <span className="block text-5xl sm:text-6xl xl:text-7xl font-black tracking-tighter text-[#0E0E10] font-sans group-hover:text-[#0047FF] transition-colors duration-300">
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
