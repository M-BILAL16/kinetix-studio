"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { AGENCY_DATA } from "@/lib/data";
import { ArrowRight, Search, Crosshair, Wrench } from "lucide-react";

export default function Philosophy() {
  const flowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(flowRef, { once: true, margin: "-100px" });
  const prefersReducedMotion = useReducedMotion();

  // Walks the leverage map one pair at a time; hovering a row takes over.
  const [activePair, setActivePair] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isInView || isPaused || prefersReducedMotion) return;

    const timer = window.setInterval(() => {
      setActivePair((current) => (current + 1) % AGENCY_DATA.leverageMap.length);
    }, 2400);

    return () => window.clearInterval(timer);
  }, [isInView, isPaused, prefersReducedMotion]);

  const stepIcons = [Search, Crosshair, Wrench];

  const cardBase =
    "h-full rounded-3xl bg-white border border-black/8 shadow-[0_18px_50px_-30px_rgba(0,0,0,0.25)] p-8 sm:p-9";

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: isInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  const [understand, identify, execute] = AGENCY_DATA.philosophy;
  const UnderstandIcon = stepIcons[0];
  const ExecuteIcon = stepIcons[2];

  return (
    <section id="philosophy" className="py-28 site-gutter bg-[#FAF9F5] relative overflow-hidden">
      {/* Section Header */}
      <div className="max-w-4xl mb-20">
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
          FIND THE{" "}
          <span className="lowercase text-[#0047FF]">
            leverage
          </span>{" "}
          FIRST.
        </h2>
        <p className="text-base sm:text-xl text-[#6E6E78] mt-6 max-w-2xl font-sans leading-relaxed">
          We see the whole business, find the highest-leverage gap, then apply the right
          solution.
        </p>
      </div>

      {/* Three-Panel Diagnostic Flow */}
      <div ref={flowRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Panel 01 — Understand */}
        <motion.div {...reveal(0)} className="lg:col-span-3">
          <div className={`${cardBase} flex flex-col justify-between gap-12`}>
            <div className="flex items-start justify-between">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${understand.accent}14` }}
              >
                <UnderstandIcon
                  className="w-6 h-6"
                  style={{ color: understand.accent }}
                />
              </div>
              <span className="text-xs font-mono font-black text-[#D8D8DE]">
                {understand.number}
              </span>
            </div>

            <div>
              <span
                className="block text-[11px] font-mono font-bold uppercase tracking-widest mb-3"
                style={{ color: understand.accent }}
              >
                {understand.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-[#0E0E10] leading-tight">
                {understand.subtitle}
              </h3>
              <p className="mt-4 text-sm text-[#6E6E78] leading-relaxed font-sans">
                {understand.lead}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Panel 02 — Identify the opportunity (the leverage map) */}
        <motion.div {...reveal(0.15)} className="lg:col-span-6">
          <div className={`${cardBase} flex flex-col`}>
            <div className="flex justify-center">
              <motion.span
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 320, damping: 22 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F5] border border-black/10 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0E0E10]"
              >
                <motion.span
                  className="inline-flex"
                  animate={prefersReducedMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
                >
                  <Crosshair className="w-3.5 h-3.5" style={{ color: identify.accent }} />
                </motion.span>
                {identify.title} {identify.subtitle}
              </motion.span>
            </div>

            {/* Column captions */}
            <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 px-1">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9EA8]">
                The gap
              </span>
              <span className="w-10 sm:w-16" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#9E9EA8] text-right">
                The fix
              </span>
            </div>

            {/* Gap → Solution rows */}
            <div className="mt-3 space-y-3">
              {AGENCY_DATA.leverageMap.map((pair, idx) => {
                const isActive = activePair === idx;
                const entrance = {
                  duration: 0.6,
                  delay: 0.35 + idx * 0.12,
                  ease: [0.16, 1, 0.3, 1] as const,
                };

                return (
                  <div
                    key={pair.gap}
                    onMouseEnter={() => {
                      setActivePair(idx);
                      setIsPaused(true);
                    }}
                    onMouseLeave={() => setIsPaused(false)}
                    className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-4 cursor-default"
                  >
                    {/* The gap */}
                    <motion.div
                      initial={{ opacity: 0, x: -24 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={entrance}
                    >
                      <div
                        className="rounded-2xl border border-dashed px-4 py-4 text-center transition-all duration-500"
                        style={{
                          borderColor: isActive ? identify.accent : "rgba(0,0,0,0.15)",
                          backgroundColor: isActive ? "#FFFFFF" : "#FAF9F5",
                          transform: isActive ? "scale(1.02)" : "scale(1)",
                        }}
                      >
                        <span
                          className="text-xs sm:text-sm font-mono transition-colors duration-500"
                          style={{ color: isActive ? "#0E0E10" : "#6E6E78" }}
                        >
                          {pair.gap}
                        </span>
                      </div>
                    </motion.div>

                    {/* Connector that draws across when the pair is active */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 1 } : {}}
                      transition={entrance}
                      className="relative w-10 sm:w-16 h-5 flex items-center justify-end"
                    >
                      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-black/12" />
                      <motion.div
                        className="absolute left-0 right-1 top-1/2 -translate-y-1/2 h-px origin-left"
                        style={{ backgroundColor: identify.accent }}
                        animate={{ scaleX: isActive ? 1 : 0 }}
                        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
                      />
                      <motion.div
                        animate={
                          isActive && !prefersReducedMotion
                            ? { x: [0, 3, 0] }
                            : { x: 0 }
                        }
                        transition={
                          isActive && !prefersReducedMotion
                            ? { duration: 1.4, repeat: Infinity, ease: "easeInOut" }
                            : { duration: 0.3 }
                        }
                        className="relative"
                      >
                        <ArrowRight
                          className="w-4 h-4 shrink-0 transition-colors duration-500"
                          style={{ color: isActive ? identify.accent : "#C6C6CE" }}
                        />
                      </motion.div>
                    </motion.div>

                    {/* The fix */}
                    <motion.div
                      initial={{ opacity: 0, x: 24 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={entrance}
                    >
                      <div
                        className="rounded-2xl bg-[#0E0E10] px-4 py-4 text-center transition-all duration-500"
                        style={{
                          transform: isActive
                            ? "translateY(-2px) scale(1.02)"
                            : "translateY(0) scale(1)",
                          boxShadow: isActive
                            ? "0 16px 32px -18px rgba(0,0,0,0.65)"
                            : "0 6px 16px -12px rgba(0,0,0,0.4)",
                          opacity: isActive ? 1 : 0.72,
                        }}
                      >
                        <span className="text-xs sm:text-sm font-bold font-sans text-[#FAF9F5]">
                          {pair.fix}
                        </span>
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Cycle indicators */}
            <div className="mt-7 flex items-center justify-center gap-2">
              {AGENCY_DATA.leverageMap.map((pair, idx) => (
                <button
                  key={pair.gap}
                  type="button"
                  aria-label={`Show ${pair.gap}`}
                  onClick={() => setActivePair(idx)}
                  className="h-1.5 rounded-full transition-all duration-500"
                  style={{
                    width: activePair === idx ? 26 : 6,
                    backgroundColor:
                      activePair === idx ? identify.accent : "rgba(0,0,0,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Panel 03 — Execute (mirrored) */}
        <motion.div {...reveal(0.3)} className="lg:col-span-3">
          <div className={`${cardBase} flex flex-col justify-between gap-12`}>
            <div className="flex items-start justify-between lg:flex-row-reverse">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${execute.accent}14` }}
              >
                <ExecuteIcon className="w-6 h-6" style={{ color: execute.accent }} />
              </div>
              <span className="text-xs font-mono font-black text-[#D8D8DE]">
                {execute.number}
              </span>
            </div>

            <div className="lg:text-right">
              <span
                className="block text-[11px] font-mono font-bold uppercase tracking-widest mb-3"
                style={{ color: execute.accent }}
              >
                {execute.title}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-[#0E0E10] leading-tight">
                {execute.subtitle}
              </h3>
              <p className="mt-4 text-sm text-[#6E6E78] leading-relaxed font-sans">
                {execute.lead}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
