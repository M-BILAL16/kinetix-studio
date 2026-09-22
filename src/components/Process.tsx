"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AGENCY_DATA, ProcessStage } from "@/lib/data";
import { ArrowRight, Terminal, CheckCircle } from "lucide-react";

export default function Process() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  const activeStage = AGENCY_DATA.process[selectedPhase];

  return (
    <section id="process" className="py-32 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] relative overflow-hidden">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#0047FF]">07 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              SYSTEM DEPLOYMENT CYCLE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            FROM DIAGNOSTIC <br />
            <span className="font-serif italic font-normal text-[#0047FF] lowercase">
              to dominance.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            RAPID, SURGICAL SPRINTS. NO COMMITTEES, NO BLOAT, JUST SYSTEMATIC ENGINEERING
            EXECUTION.
          </p>
        </div>
      </div>

      {/* Horizontal Phase Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-4 mb-12">
        {AGENCY_DATA.process.map((stage: ProcessStage, idx: number) => {
          const isActive = selectedPhase === idx;

          return (
            <button
              key={stage.phase}
              onClick={() => setSelectedPhase(idx)}
              data-cursor="open"
              className={`p-5 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-lg scale-[1.02]"
                  : "bg-white/70 text-[#0E0E10] border-black/10 hover:border-black/30 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className={isActive ? "text-[#CEFF00]" : "text-[#0047FF]"}>
                  [0{idx + 1}]
                </span>
                <span className="text-[10px] opacity-70">{stage.timeline}</span>
              </div>
              <div className="text-lg sm:text-xl font-black font-sans tracking-tight">
                {stage.phase}
              </div>
              <div className="text-[11px] font-mono opacity-80 mt-1 truncate">
                {stage.focus}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Box */}
      <div className="bg-white rounded-3xl border border-black/10 p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Narrative (7 cols) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 text-xs font-mono text-[#6E6E78] mb-4">
              <span className="text-[#0047FF] font-bold">PHASE 0{selectedPhase + 1}</span>
              <span>//</span>
              <span className="uppercase">{activeStage.timeline}</span>
              <span>//</span>
              <span className="px-2 py-0.5 rounded-full bg-black/5 text-[#0E0E10] font-semibold">
                {activeStage.focus}
              </span>
            </div>

            <h3 className="text-3xl sm:text-5xl font-black font-sans tracking-tight text-[#0E0E10] mb-6">
              {activeStage.phase}: {activeStage.focus}
            </h3>

            <p className="text-base sm:text-lg text-[#6E6E78] leading-relaxed font-sans mb-8">
              {activeStage.description}
            </p>

            {/* Deliverables List */}
            <div className="space-y-3 pt-4 border-t border-black/8">
              <span className="block text-[11px] font-mono tracking-widest uppercase text-[#6E6E78]">
                KEY TACTICAL DELIVERABLES:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeStage.deliverables.map((del) => (
                  <span
                    key={del}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#FAF9F5] border border-black/10 text-xs font-mono text-[#0E0E10] font-medium"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-[#0047FF]" />
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Blueprint Visualizer (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[280px]">
            <div className="flex items-center justify-between border-b border-black/8 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#0047FF]" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#0E0E10]">
                  SYS_SPECIFICATION
                </span>
              </div>
              <span className="text-[9px] font-mono bg-black/5 px-2 py-0.5 rounded-full text-[#6E6E78]">
                LIVE
              </span>
            </div>

            {/* Terminal simulation code */}
            <div className="my-6 font-mono text-xs text-[#0E0E10] space-y-2">
              <div className="text-[#6E6E78]">// Pipeline Telemetry Protocol</div>
              <div className="p-3 bg-white rounded-xl border border-black/5 font-mono text-[11px] text-[#0047FF]">
                {activeStage.techSpec}
              </div>
              <div className="text-[11px] text-[#6E6E78]">
                STATUS: &gt; ALL ASSETS VALIDATED // 0 ERRORS
              </div>
            </div>

            <div className="pt-3 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
              <span>KINETIX EXECUTION RIG</span>
              <span className="text-[#10B981] font-bold">READY TO SCALE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
