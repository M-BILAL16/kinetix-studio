"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, Terminal, Cpu, ArrowUpRight } from "lucide-react";

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

  const layer1X = useTransform(smoothX, [-0.5, 0.5], [-24, 24]);
  const layer1Y = useTransform(smoothY, [-0.5, 0.5], [-24, 24]);

  const layer2X = useTransform(smoothX, [-0.5, 0.5], [30, -30]);
  const layer2Y = useTransform(smoothY, [-0.5, 0.5], [30, -30]);

  const layer3X = useTransform(smoothX, [-0.5, 0.5], [-40, 40]);
  const layer3Y = useTransform(smoothY, [-0.5, 0.5], [-40, 40]);

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
      className="relative w-full aspect-square max-w-[540px] mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1200 }}
    >
      {/* Dynamic 3D stage */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Ambient geometric backdrop glow */}
        <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-[#0047FF]/10 via-[#CEFF00]/15 to-transparent blur-3xl pointer-events-none" />

        {/* Central Monolithic Kinetic Element */}
        <motion.div
          style={{ x: layer1X, y: layer1Y }}
          className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl bg-white/90 border border-black/10 shadow-2xl backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden"
        >
          {/* Top Status line */}
          <div className="flex items-center justify-between border-b border-black/6 pb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0047FF] animate-ping" />
              <span className="text-[10px] font-mono tracking-widest text-[#0E0E10] font-bold">
                KINETIX CORE
              </span>
            </div>
            <span className="text-[10px] font-mono text-[#6E6E78]">
              LAT 40.71° N
            </span>
          </div>

          {/* Interactive Graphic: Architectural wireframe torus / curves */}
          <div className="relative my-auto flex items-center justify-center py-4">
            <svg
              viewBox="0 0 200 200"
              className="w-40 h-40 animate-[spin_24s_linear_infinite]"
            >
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#0E0E10"
                strokeWidth="1"
                strokeDasharray="4 8"
                opacity="0.25"
              />
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="#0047FF"
                strokeWidth="1.5"
                strokeDasharray="16 24"
              />
              <path
                d="M 40 100 Q 100 30 160 100 T 40 100"
                fill="none"
                stroke="#0E0E10"
                strokeWidth="1.2"
                opacity="0.4"
              />
              <path
                d="M 100 40 Q 170 100 100 160 T 100 40"
                fill="none"
                stroke="#FF3B14"
                strokeWidth="1.2"
                opacity="0.5"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-black tracking-tight text-[#0E0E10] font-sans">
                12<span className="text-sm font-mono text-[#0047FF]">+</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#6E6E78] uppercase mt-0.5">
                ENTERPRISE CLIENTS
              </span>
            </div>
          </div>

          {/* Bottom Telemetry */}
          <div className="flex items-center justify-between text-[10px] font-mono bg-[#FAF9F5] p-2 rounded-xl border border-black/5">
            <span className="text-[#6E6E78]">CLIENT RETENTION</span>
            <span className="font-bold text-[#0E0E10]">92% AND HOLDING</span>
          </div>
        </motion.div>

        {/* Floating Fragment A: Code & Logic Snippet (Top-Left) */}
        <motion.div
          style={{ x: layer2X, y: layer2Y, z: 60 }}
          className="absolute -top-4 -left-6 sm:-left-10 bg-white/95 border border-black/10 rounded-2xl p-4 shadow-xl backdrop-blur-md w-52 sm:w-56"
        >
          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-2 h-2 rounded-full bg-[#FF3B14]" />
            <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[9px] font-mono text-[#6E6E78] ml-auto">
              strategy.ts
            </span>
          </div>
          <div className="font-mono text-[11px] leading-relaxed text-[#0E0E10] space-y-0.5">
            <p className="text-[#6E6E78]">isolate bottleneck</p>
            <p>
              <span className="text-[#0047FF] font-semibold">const</span> leverage ={" "}
              <span className="text-[#FF3B14]">solveHighValue</span>();
            </p>
            <p className="text-[#10B981] font-semibold">return impact.scale();</p>
          </div>
        </motion.div>

        {/* Floating Fragment B: Rotating Circular Badge (Top-Right) */}
        <motion.div
          style={{ x: layer3X, y: layer3Y, z: 80 }}
          className="absolute -top-6 -right-6 sm:-right-8"
        >
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Spinning Text SVG */}
            <svg
              className="w-full h-full animate-[spin_16s_linear_infinite]"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id="circlePath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                />
              </defs>
              <text className="text-[8.5px] font-mono tracking-widest fill-[#0E0E10] uppercase font-semibold">
                <textPath href="#circlePath">
                  ★ BUILD & AUTOMATE ★ GROW & ACQUIRE ★
                </textPath>
              </text>
            </svg>
            <div className="absolute w-10 h-10 rounded-full bg-[#0E0E10] text-[#FAF9F5] flex items-center justify-center shadow-lg">
              <Sparkles className="w-4 h-4 text-[#CEFF00]" />
            </div>
          </div>
        </motion.div>

        {/* Floating Fragment C: High-Value Metric Pill (Bottom-Left) */}
        <motion.div
          style={{ x: layer3X, y: layer2Y, z: 70 }}
          className="absolute -bottom-6 -left-4 sm:-left-8 bg-[#0E0E10] text-[#FAF9F5] rounded-2xl p-4 shadow-2xl border border-white/10 flex items-center gap-3.5"
        >
          <div className="w-9 h-9 rounded-xl bg-[#0047FF] flex items-center justify-center">
            <Cpu className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-[#9E9EA8] tracking-widest uppercase">
              REVENUE ENABLED
            </div>
            <div className="text-xl font-black font-sans tracking-tight">
              +$300,000
            </div>
          </div>
        </motion.div>

        {/* Floating Fragment D: Editorial Coordinate Tag (Bottom-Right) */}
        <motion.div
          style={{ x: layer2X, y: layer3Y, z: 50 }}
          className="absolute -bottom-4 -right-4 sm:-right-6 bg-white/90 border border-black/10 rounded-xl px-3 py-2 shadow-lg backdrop-blur-md flex items-center gap-2"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
          <span className="text-[10px] font-mono font-bold tracking-widest text-[#0E0E10]">
            EST. 2026, NYC
          </span>
          <ArrowUpRight className="w-3.5 h-3.5 text-[#0047FF]" />
        </motion.div>
      </motion.div>
    </div>
  );
}
