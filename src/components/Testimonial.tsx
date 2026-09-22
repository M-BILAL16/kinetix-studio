"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AGENCY_DATA } from "@/lib/data";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export default function Testimonial() {
  const [currentIdx, setCurrentIdx] = useState(0);

  const testimonials = AGENCY_DATA.testimonials;
  const current = testimonials[currentIdx];

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-32 px-4 sm:px-8 lg:px-16 bg-[#FAF9F5] border-t border-b border-black/10 relative overflow-hidden"
    >
      {/* Editorial Marker */}
      <div className="flex items-center justify-between mb-16 pb-6 border-b border-black/8">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono font-bold text-[#0047FF]">08 //</span>
          <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
            EXECUTIVE TESTIMONIALS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono text-[#0E0E10] font-bold">
            0{currentIdx + 1}
          </span>
          <span className="text-xs font-mono text-[#9E9EA8]">/ 0{testimonials.length}</span>
        </div>
      </div>

      {/* Giant Editorial Magazine Quote Container */}
      <div className="max-w-5xl mx-auto min-h-[380px] flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
          >
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full bg-black/4 flex items-center justify-center mb-8 text-[#0047FF]">
              <Quote className="w-6 h-6" />
            </div>

            {/* Giant Typography Quote */}
            <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight text-[#0E0E10] leading-snug sm:leading-tight mb-12">
              &ldquo;{current.quote}&rdquo;
            </blockquote>

            {/* Author Attribution & Verified Impact Pill */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-end pt-8 border-t border-black/8">
              <div className="sm:col-span-8">
                <div className="text-xl sm:text-2xl font-black font-sans text-[#0E0E10]">
                  {current.author}
                </div>
                <div className="text-xs font-mono text-[#6E6E78] uppercase mt-1">
                  {current.role} — <span className="text-[#0E0E10] font-semibold">{current.company}</span>
                </div>
                <div className="text-[11px] font-mono text-[#9E9EA8] mt-0.5">
                  {current.location}
                </div>
              </div>

              <div className="sm:col-span-4 sm:text-right">
                <span className="inline-block px-3.5 py-1.5 rounded-full bg-[#CEFF00] border border-black/10 text-xs font-mono font-bold text-black uppercase">
                  ★ {current.metric}
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Arrow Navigation */}
        <div className="flex items-center gap-3 mt-12 pt-8 border-t border-black/8">
          <button
            onClick={handlePrev}
            aria-label="Previous quote"
            className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center hover:bg-[#0E0E10] hover:text-white transition-all duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next quote"
            className="w-12 h-12 rounded-full border border-black/15 flex items-center justify-center hover:bg-[#0E0E10] hover:text-white transition-all duration-200"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
          <span className="text-xs font-mono text-[#6E6E78] ml-4">
            NEXT EXECUTIVE STATEMENT
          </span>
        </div>
      </div>
    </section>
  );
}
