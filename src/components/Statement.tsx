"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface WordProps {
  children: React.ReactNode;
  range: [number, number];
  progress: any;
  isSpecial?: boolean;
}

function Word({ children, range, progress, isSpecial }: WordProps) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="relative inline-block mr-3 sm:mr-6 mb-2">
      <motion.span
        style={{ opacity, y }}
        className={`inline-block transition-colors duration-200 ${
          isSpecial
            ? "font-serif italic font-normal text-[#0047FF] lowercase text-6xl sm:text-8xl lg:text-9xl"
            : "text-[#0E0E10]"
        }`}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Statement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });

  const statementWords = [
    { text: "WE", special: false },
    { text: "DON'T", special: false },
    { text: "SELL", special: false },
    { text: "SERVICES.", special: false },
    { text: "WE", special: false },
    { text: "SOLVE", special: false },
    { text: "expensive", special: true },
    { text: "PROBLEMS.", special: false },
  ];

  return (
    <section
      ref={containerRef}
      className="relative min-h-[70vh] lg:min-h-[85vh] py-32 px-4 sm:px-8 lg:px-16 flex flex-col justify-center bg-[#FAF9F5] border-t border-b border-black/10 overflow-hidden"
    >
      {/* Background Subtle Noise & Technical Stamp */}
      <div className="absolute top-12 left-6 sm:left-12 flex items-center gap-3 text-xs font-mono text-[#6E6E78]">
        <span className="w-2 h-2 rounded-full bg-[#FF3B14]" />
        <span>06 // CORE THESIS</span>
      </div>

      <div className="max-w-6xl mx-auto text-left sm:text-center my-auto">
        <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-sans tracking-tight uppercase leading-[1.05] select-none">
          {statementWords.map((word, i) => {
            const start = i / statementWords.length;
            const end = start + 1 / statementWords.length;
            return (
              <Word
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                isSpecial={word.special}
              >
                {word.text}
              </Word>
            );
          })}
        </h2>

        {/* Supporting Editorial Citation */}
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0.6, 1], [0, 1]) }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs font-mono text-[#6E6E78]"
        >
          <span className="px-3 py-1 rounded-full bg-white border border-black/10 text-[#0E0E10] font-semibold">
            PRICING ON VALUE & IMPACT, NEVER BY THE HOUR
          </span>
          <span>ESTABLISHED 2026 // NYC & GENEVA</span>
        </motion.div>
      </div>
    </section>
  );
}
