"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Bot, Sparkles } from "lucide-react";

interface AutomationFinalCtaProps {
  onOpenContact: () => void;
}

export default function AutomationFinalCta({ onOpenContact }: AutomationFinalCtaProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Magnetic cursor interaction
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
    const distanceX = (e.clientX - centerX) * 0.35;
    const distanceY = (e.clientY - centerY) * 0.35;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <section className="relative min-h-[80vh] py-32 px-4 sm:px-8 lg:px-16 flex flex-col justify-between bg-[#FAF9F5] overflow-hidden select-none border-b border-black/10">
      {/* Ambient Glow */}
      <motion.div
        animate={{
          scale: isHovered ? 1.3 : 1,
          opacity: isHovered ? 0.35 : 0.18,
        }}
        transition={{ duration: 0.6 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-[#CEFF00] via-[#0047FF] to-[#CEFF00] blur-3xl pointer-events-none -z-0"
      />

      {/* Top Marker */}
      <div className="flex items-center justify-between border-b border-black/8 pb-4 relative z-10">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00]" />
          <span className="text-xs font-mono tracking-widest uppercase text-[#0E0E10] font-semibold">
            07 // TAKE THE NEXT STEP
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono text-[#6E6E78]">
          <Bot className="w-3.5 h-3.5 text-[#CEFF00]" />
          <span>PILOT OPENINGS: 3 AVAILABLE FOR Q3/Q4</span>
        </div>
      </div>

      {/* Headline & Magnetic Circle Button */}
      <div className="my-auto py-12 text-center max-w-5xl mx-auto relative z-10 flex flex-col items-center">
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#6E6E78] uppercase mb-6 block">
          TIRED OF LOSING SALES TO DELAYED MANUAL RESPONSES?
        </span>

        <h2 className="text-4xl sm:text-7xl lg:text-8xl xl:text-9xl font-black font-sans uppercase tracking-tight text-[#0E0E10] leading-[0.9] mb-12">
          LET&apos;S PUT YOUR BUSINESS ON{" "}
          <span className="font-serif italic font-normal text-[#CEFF00] lowercase inline-block">
            autopilot.
          </span>
        </h2>

        {/* Magnetic Giant Circle Button */}
        <div
          ref={buttonRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
          className="relative inline-block p-10 cursor-pointer"
        >
          <motion.button
            style={{ x: smoothX, y: smoothY }}
            onClick={onOpenContact}
            data-cursor="start"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-48 h-48 sm:w-60 sm:h-60 rounded-full bg-[#0E0E10] hover:bg-[#CEFF00] text-[#FAF9F5] p-6 shadow-2xl flex flex-col items-center justify-center gap-3 transition-colors duration-300 group border-4 border-white/40"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#CEFF00] transition-all duration-300">
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
            <span className="text-xs sm:text-sm font-mono font-bold tracking-widest uppercase text-center leading-snug">
              CLAIM FREE<br />AI AUDIT ↗
            </span>
          </motion.button>
        </div>
      </div>

      {/* Bottom Sub-bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-black/8 text-xs font-mono text-[#6E6E78] relative z-10 gap-3">
        <span>AVERAGE AUDIT FINDINGS: 3–7 HIGH-IMPACT REVENUE LEVERS</span>
        <span className="text-[#0E0E10] font-bold">ZERO OBLIGATION // 100% CONFIDENTIAL</span>
      </div>
    </section>
  );
}
