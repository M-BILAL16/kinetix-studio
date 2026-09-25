"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Cpu, ArrowUpRight, Smartphone } from "lucide-react";

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

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [26, -26]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [26, -26]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-34, 34]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-34, 34]);

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

          {/* Interactive Floating Badge at bottom of device */}
          <div className="absolute bottom-4 left-4 right-4 z-20 bg-white/95 backdrop-blur-md rounded-2xl p-2.5 border border-black/10 shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Smartphone className="w-3.5 h-3.5 text-[#0047FF]" />
              <span className="text-[10px] font-mono font-bold tracking-wider text-[#0E0E10] uppercase">
                MOBILE ADAPTIVE
              </span>
            </div>
            <span className="text-[9px] font-mono text-[#0047FF] font-bold bg-[#0047FF]/10 px-2 py-0.5 rounded-full">
              60 FPS
            </span>
          </div>
        </motion.div>

        {/* Floating Fragment A: Code & Logic Snippet (Top-Left) */}
        <motion.div
          style={{ x: layer2X, y: layer2Y, z: 60 }}
          className="absolute -top-3 -left-4 sm:-left-8 bg-white/95 border border-black/10 rounded-2xl p-3.5 shadow-xl backdrop-blur-md w-48 sm:w-52"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3B14]" />
            <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[9px] font-mono text-[#6E6E78] ml-auto">
              mobile-core.ts
            </span>
          </div>
          <div className="font-mono text-[10px] leading-relaxed text-[#0E0E10] space-y-0.5">
            <p className="text-[#6E6E78]">// responsive leverage</p>
            <p>
              <span className="text-[#0047FF] font-semibold">const</span> engine ={" "}
              <span className="text-[#FF3B14]">KinetixMobile</span>();
            </p>
            <p className="text-[#10B981] font-semibold">return engine.fluid();</p>
          </div>
        </motion.div>

        {/* Floating Fragment B: Rotating Circular Badge (Top-Right) */}
        <motion.div
          style={{ x: layer3X, y: layer3Y, z: 80 }}
          className="absolute -top-6 -right-4 sm:-right-8"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center">
            {/* Spinning Text SVG */}
            <svg
              className="w-full h-full animate-[spin_16s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePathHero"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[8.5px] font-mono tracking-widest fill-[#0E0E10] uppercase font-semibold">
                <textPath href="#circlePathHero">
                  ★ BESPOKE CRAFT ★ ZERO TEMPLATES ★ 2026 ★
                </textPath>
              </text>
            </svg>
            <div className="absolute w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0E0E10] text-[#FAF9F5] flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-[#CEFF00]" />
            </div>
          </div>
        </motion.div>

        {/* Floating Fragment C: High-Value Metric Pill (Bottom-Left) */}
        <motion.div
          style={{ x: layer3X, y: layer2Y, z: 70 }}
          className="absolute -bottom-4 -left-4 sm:-left-8 bg-[#0E0E10] text-[#FAF9F5] rounded-2xl p-3.5 shadow-2xl border border-white/10 flex items-center gap-3"
        >
          <div className="w-8 h-8 rounded-xl bg-[#0047FF] flex items-center justify-center">
            <Cpu className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-[9px] font-mono text-[#9E9EA8] tracking-widest uppercase">
              REVENUE ENABLED
            </div>
            <div className="text-lg font-black font-sans tracking-tight">
              +$340,000,000
            </div>
          </div>
        </motion.div>

        {/* Floating Fragment D: Editorial Coordinate Tag (Bottom-Right) */}
        <motion.div
          style={{ x: layer2X, y: layer3Y, z: 50 }}
          className="absolute -bottom-2 -right-2 sm:-right-6 bg-white/90 border border-black/10 rounded-xl px-3 py-1.5 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-[9px] font-mono font-bold tracking-widest text-[#0E0E10]">
            LIVE // NYC & GENEVA
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0047FF]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
