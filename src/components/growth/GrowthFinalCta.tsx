"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Rocket, ArrowRight, Zap, Shield, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface GrowthFinalCtaProps {
  onOpenContact: () => void;
}

export default function GrowthFinalCta({ onOpenContact }: GrowthFinalCtaProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleIgnite = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#FF3B14", "#FF8A00", "#00D084", "#0E0E10", "#CEFF00"],
      });
    } catch {
      // safe fallback
    }
    onOpenContact();
  };

  return (
    <section className="py-28 md:py-36 bg-[#0E0E10] text-[#FAF9F5] relative overflow-hidden">
      {/* Background Explosive Energy Mesh */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-gradient-to-b from-[#FF3B14]/30 via-[#FF6B00]/20 to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="site-gutter max-w-5xl mx-auto relative z-10 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono font-bold tracking-wider uppercase text-[#FF3B14]">
          <Rocket className="w-4 h-4 animate-bounce" />
          Q4 / 2026 ACQUISITION CAPACITY: 2 SLOTS OPEN
        </div>

        <h2 className="text-4xl sm:text-6xl lg:text-[76px] font-sans font-black tracking-tight leading-[0.92] uppercase max-w-4xl mx-auto">
          READY TO STOP GUESSING AND{" "}
          <span className="text-[#FF3B14] underline decoration-[#FF3B14]/40">
            IGNITE
          </span>{" "}
          YOUR PIPELINE?
        </h2>

        <p className="text-base sm:text-lg text-white/70 font-sans max-w-2xl mx-auto leading-relaxed">
          No 40-page fluff audits. We analyze your customer acquisition economics, pinpoint your
          highest-leverage creative angle, and design a bespoke scaling roadmap in under 48 hours.
        </p>

        {/* Ignition Launchpad Button */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <motion.button
            type="button"
            onClick={handleIgnite}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            className="relative group px-10 py-5 rounded-full bg-[#FF3B14] text-white font-sans font-black text-base uppercase tracking-wider shadow-2xl hover:shadow-[#FF3B14]/50 transition-all flex items-center gap-3 overflow-hidden"
          >
            {/* Shimmer sweep */}
            <motion.div
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none"
            />
            <Zap className="w-5 h-5" />
            <span>CLAIM REVENUE AUDIT</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1.5" />
          </motion.button>
        </div>

        {/* Security / SLAs Badges */}
        <div className="pt-10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-white/50 border-t border-white/10 max-w-2xl mx-auto">
          <span className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#00D084]" />
            Strict Performance Benchmarks
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF3B14]" />
            Full Attribution Transparency
          </span>
          <span className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#0047FF]" />
            14-Day Deployment Speed
          </span>
        </div>
      </div>
    </section>
  );
}
