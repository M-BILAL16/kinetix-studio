"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AGENCY_DATA, EngagementTier } from "@/lib/data";
import { ArrowRight, Check, Clock, Star } from "lucide-react";

interface EngagementProps {
  onOpenContact: () => void;
}

export default function Engagement({ onOpenContact }: EngagementProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="start"
      ref={containerRef}
      className="py-32 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-t border-black/10 relative overflow-hidden"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#0047FF]">05 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              GET YOURSELF STARTED
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            THE MAP BEFORE <br />
            THE{" "}
            <span className="font-serif italic font-normal text-[#0047FF] lowercase">
              miles.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            THREE WAYS TO ENGAGE. EACH CARD IS A REAL STARTING POINT THAT CAN TURN YOUR
            IDEA INTO A REALITY WITHIN THE NEXT 60 DAYS.
          </p>
        </div>
      </div>

      {/* Three Engagement Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {AGENCY_DATA.engagement.map((tier: EngagementTier, idx: number) => {
          const isFeatured = tier.recommended;

          return (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: idx * 0.12,
                ease: [0.16, 1, 0.3, 1] as const,
              }}
              className={`relative flex flex-col rounded-3xl border p-8 sm:p-10 transition-all duration-300 group ${
                isFeatured
                  ? "bg-[#0E0E10] border-[#0E0E10] text-[#FAF9F5] shadow-2xl lg:-translate-y-4"
                  : "bg-white border-black/10 text-[#0E0E10] shadow-sm hover:shadow-xl hover:border-black/25"
              }`}
            >
              {/* Recommended Ribbon */}
              {isFeatured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#CEFF00] border border-black/10 text-[10px] font-mono font-bold tracking-widest uppercase text-black shadow-md">
                    <Star className="w-3 h-3 fill-black" />
                    Recommended
                  </span>
                </div>
              )}

              {/* Step + Price */}
              <div
                className={`flex items-center justify-between pb-6 mb-6 border-b ${
                  isFeatured ? "border-white/15" : "border-black/8"
                }`}
              >
                <span
                  className={`text-[11px] font-mono font-bold tracking-widest uppercase ${
                    isFeatured ? "text-[#CEFF00]" : "text-[#0047FF]"
                  }`}
                >
                  {tier.step}
                </span>
                <span className="text-2xl sm:text-3xl font-black font-sans tracking-tight">
                  {tier.price}
                </span>
              </div>

              {/* Title Block */}
              <div className="mb-5">
                <h3 className="text-3xl sm:text-4xl font-black font-sans tracking-tight leading-none mb-2">
                  {tier.title}
                </h3>
                <span
                  className="text-base sm:text-lg font-serif italic"
                  style={{ color: isFeatured ? "#CEFF00" : tier.accent }}
                >
                  {tier.subtitle}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed font-sans mb-8 ${
                  isFeatured ? "text-white/70" : "text-[#6E6E78]"
                }`}
              >
                {tier.description}
              </p>

              {/* Includes Checklist */}
              <ul className="space-y-3 mb-8">
                {tier.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                        isFeatured ? "bg-white/10" : "bg-black/5"
                      }`}
                    >
                      <Check
                        className="w-2.5 h-2.5"
                        style={{ color: isFeatured ? "#CEFF00" : tier.accent }}
                      />
                    </span>
                    <span
                      className={`text-xs font-mono leading-relaxed ${
                        isFeatured ? "text-white/75" : "text-[#6E6E78]"
                      }`}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Duration + CTA pinned to bottom */}
              <div className="mt-auto">
                <div
                  className={`flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider mb-5 pt-5 border-t ${
                    isFeatured
                      ? "border-white/15 text-white/60"
                      : "border-black/8 text-[#6E6E78]"
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Duration — {tier.duration}</span>
                </div>

                <button
                  onClick={onOpenContact}
                  data-cursor="start"
                  className={`w-full py-4 rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
                    isFeatured
                      ? "bg-[#FAF9F5] text-[#0E0E10] hover:bg-[#CEFF00]"
                      : "bg-[#0E0E10] text-[#FAF9F5] hover:bg-[#0047FF]"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom editorial bar */}
      <div className="mt-14 pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6E6E78]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981]" />
          <span>NO OBLIGATION AT ANY STEP // STOP WHENEVER IT STOPS MAKING SENSE</span>
        </div>
        <span className="text-[#0E0E10] font-bold">IDEA TO LIVE SYSTEM: 60 DAYS</span>
      </div>
    </section>
  );
}
