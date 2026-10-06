"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface GrowthFinalCtaProps {
  onOpenContact: () => void;
}

export default function GrowthFinalCta({ onOpenContact }: GrowthFinalCtaProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 180 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.35);
    y.set((e.clientY - centerY) * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <section className="relative overflow-hidden bg-[#0E0E10] py-28 text-[#FAF9F5] site-gutter md:py-36">
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.35 : 0.18,
        }}
        transition={{ duration: 0.6 }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#0047FF] via-[#CEFF00] to-[#CEFF00] blur-3xl"
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="text-xs font-mono font-bold uppercase tracking-widest text-[#CEFF00]">
          Ready to get more customers?
        </p>
        <h2 className="mt-6 font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          LET&apos;S GROW <span className="text-[#0047FF]">your business.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl font-sans text-base leading-relaxed text-white/70 sm:text-lg">
          Tell us what you sell. We will show you which ads, search, email, and content work to
          start with.
        </p>

        <div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative mt-10 inline-block cursor-pointer p-10"
        >
          <motion.button
            type="button"
            style={{ x: smoothX, y: smoothY }}
            onClick={onOpenContact}
            data-cursor="start"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="group flex h-48 w-48 flex-col items-center justify-center gap-3 rounded-full border-4 border-black/10 bg-[#CEFF00] p-6 text-[#0E0E10] shadow-2xl transition-colors duration-300 hover:bg-[#0047FF] hover:text-[#FAF9F5] sm:h-60 sm:w-60"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black/10 transition-all duration-300 group-hover:bg-white group-hover:text-[#0047FF]">
              <ArrowUpRight className="h-6 w-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <span className="text-center text-xs font-mono font-bold uppercase leading-snug tracking-widest sm:text-sm">
              START A<br />PROJECT ↗
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
