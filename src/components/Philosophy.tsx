"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AGENCY_DATA } from "@/lib/data";
import { ArrowRight, Check, Search, Crosshair, Wrench, TrendingUp } from "lucide-react";

export default function Philosophy() {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [Search, Crosshair, Wrench, TrendingUp];

  const activeData = AGENCY_DATA.philosophy[activeStep];
  const IconComponent = stepIcons[activeStep];

  return (
    <section id="philosophy" className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background Accent Glow */}
      <div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-20 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: activeData.accent }}
      />

      {/* Section Header */}
      <div className="max-w-4xl mb-20">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-mono font-bold text-[#0047FF]">03 //</span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
            OUR OPERATING DOGMA
          </span>
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
          CLARITY BEFORE <br />
          <span className="font-serif italic font-normal lowercase text-[#0047FF]">
            complexity.
          </span>{" "}
          FIND THE LEVERAGE FIRST.
        </h2>
        <p className="text-base sm:text-xl text-[#6E6E78] mt-6 max-w-2xl font-sans leading-relaxed">
          We see the whole business, isolate the single highest-leverage bottleneck,
          and deploy an uncompromising digital solution. No wasted motion.
        </p>
      </div>

      {/* Interactive Sticky Stage & Timeline Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Step Interactive Timeline (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {AGENCY_DATA.philosophy.map((step, idx) => {
            const isActive = activeStep === idx;
            const Icon = stepIcons[idx];

            return (
              <div
                key={step.number}
                onClick={() => setActiveStep(idx)}
                data-cursor="explore"
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 cursor-pointer text-left relative overflow-hidden ${
                  isActive
                    ? "bg-white border-black/15 shadow-xl scale-[1.01]"
                    : "bg-white/40 border-black/6 hover:bg-white/70 hover:border-black/10 opacity-70"
                }`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <motion.div
                    layoutId="activeBar"
                    className="absolute left-0 top-0 bottom-0 w-1.5"
                    style={{ backgroundColor: step.accent }}
                  />
                )}

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-2xl sm:text-3xl font-mono font-black transition-colors ${
                        isActive ? "text-[#0E0E10]" : "text-[#9E9EA8]"
                      }`}
                    >
                      {step.number}
                    </span>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-[#0E0E10]">
                        {step.title}
                      </h3>
                      <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
                        {step.subtitle}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors shrink-0 ${
                      isActive ? "bg-[#0E0E10] text-white" : "bg-black/5 text-[#6E6E78]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Expanded details when active */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-5 text-sm sm:text-base text-[#6E6E78] leading-relaxed font-sans border-t border-black/8 pt-4">
                        {step.description}
                      </p>
                      <div className="mt-4 flex flex-wrap items-center gap-3 pt-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-[#FAF9F5] border border-black/10 text-[#0E0E10] font-semibold">
                          <Check className="w-3.5 h-3.5 text-[#0047FF]" />
                          {step.keyMetric}
                        </span>
                        <span className="text-xs font-mono text-[#6E6E78]">
                          DELIVERABLE: {step.deliverable}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right: Sticky Interactive Visual Stage (5 cols) */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <div className="bg-white rounded-3xl border border-black/10 p-8 shadow-xl relative overflow-hidden">
            {/* Stage Header */}
            <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: activeData.accent }}
                />
                <span className="text-[11px] font-mono tracking-widest uppercase font-bold text-[#0E0E10]">
                  DIAGNOSTIC STAGE // {activeData.number}
                </span>
              </div>
              <span className="text-[10px] font-mono text-[#6E6E78]">
                STATE: SYNCHRONIZED
              </span>
            </div>

            {/* Dynamic Stage Graphic */}
            <div className="relative h-64 sm:h-72 rounded-2xl bg-[#FAF9F5] border border-black/8 p-6 flex flex-col justify-between overflow-hidden">
              {/* Background vector graphics */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <polygon
                    points="50,5 90,25 90,75 50,95 10,75 10,25"
                    fill="none"
                    stroke="#000"
                    strokeWidth="1"
                  />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#000" strokeWidth="1" />
                  <line x1="10" y1="25" x2="90" y2="75" stroke="#000" strokeWidth="1" />
                  <line x1="10" y1="75" x2="90" y2="25" stroke="#000" strokeWidth="1" />
                </svg>
              </div>

              <div className="flex items-center justify-between relative z-10">
                <span className="px-2.5 py-1 rounded-full bg-white text-[10px] font-mono font-bold text-[#0E0E10] border border-black/10">
                  SYSTEM ACTIVE
                </span>
                <span className="text-3xl font-black font-sans" style={{ color: activeData.accent }}>
                  {activeData.number}
                </span>
              </div>

              {/* Center graphic badge */}
              <div className="my-auto text-center relative z-10">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white mb-3 shadow-lg"
                  style={{ backgroundColor: activeData.accent }}
                >
                  <IconComponent className="w-8 h-8" />
                </div>
                <div className="text-lg font-black font-sans tracking-tight text-[#0E0E10]">
                  {activeData.title}
                </div>
                <div className="text-xs font-mono text-[#6E6E78] mt-1">
                  {activeData.subtitle}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="relative z-10 text-[10px] font-mono bg-white/90 p-2.5 rounded-xl border border-black/8 flex items-center justify-between">
                <span className="text-[#6E6E78]">PROTOCOL:</span>
                <span className="font-bold text-[#0E0E10]">{activeData.deliverable}</span>
              </div>
            </div>

            {/* Stage Footer Summary */}
            <div className="mt-6 pt-4 border-t border-black/8 flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78]">ACTIVE PARAMETER:</span>
              <span className="text-[#0047FF] font-bold">{activeData.keyMetric}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
