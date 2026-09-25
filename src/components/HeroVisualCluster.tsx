"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HeroVisualCluster() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Multi-layered depth transforms
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-12, 12]);

  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-20, 20]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-20, 20]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[500px] mx-auto flex items-center justify-center select-none py-4"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic 3D stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full flex items-center justify-center"
      >
        {/* Ambient geometric backdrop glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#0047FF]/15 via-[#CEFF00]/20 to-[#FF3B14]/10 blur-3xl pointer-events-none" />

        {/* Central Monolithic Mobile Device Showcase */}
        <motion.div
          style={{ x: layer1X, y: layer1Y }}
          className="relative w-64 sm:w-72 rounded-[40px] p-2 bg-[#0E0E10] border-2 border-black/20 shadow-[0_30px_70px_-15px_rgba(0,0,0,0.35)] backdrop-blur-xl overflow-hidden group cursor-pointer"
          data-cursor="explore"
        >
          {/* Dynamic Island / Speaker notch */}
          <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-4.5 bg-black rounded-full z-20 flex items-center justify-between px-3 border border-white/10">
            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[8px] font-mono text-white/70">KINETIX</span>
            <div className="w-2 h-2 rounded-full bg-[#0047FF]" />
          </div>

          {/* Mobile Screen Image */}
          <div className="relative rounded-[32px] overflow-hidden aspect-[9/16] bg-stone-100">
            <img
              src="/images/mobile-showcase.jpg"
              alt="Kinetix High-End Mobile Interface Design"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="eager"
            />

            {/* Subtle gloss reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
