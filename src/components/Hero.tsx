"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import HeroVisualCluster from "./HeroVisualCluster";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 site-gutter flex flex-col overflow-hidden bg-editorial-grid bg-noise">
      {/* Main Asymmetric Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto"
      >
        {/* Left / Center Headline: Massive Typographic Graphic (7 cols) */}
        <div className="lg:col-span-7 flex flex-col z-10">
          {/* Masked Headline Lines */}
          <div className="overflow-hidden pb-1">
            <motion.h1
              variants={lineVariants}
              className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-[5.75rem] font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans"
            >
              MAKING YOUR
            </motion.h1>
          </div>

          <div className="overflow-hidden pb-1 flex items-baseline gap-4 flex-wrap">
            <motion.span
              variants={lineVariants}
              className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-[5.75rem] font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans"
            >
              BRAND
            </motion.span>
            <motion.span
              variants={lineVariants}
              className="inline-block px-3.5 py-1 rounded-full bg-[#CEFF00] border border-black/10 text-xs font-mono font-bold tracking-widest text-black uppercase transform -rotate-2"
            >
              ★ 250+ PROJECTS DELIVERED
            </motion.span>
          </div>

          <div className="overflow-hidden pb-1 flex items-baseline">
            <motion.span
              variants={lineVariants}
              className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-[5.75rem] font-black uppercase tracking-tight text-[#0047FF] leading-[0.92] font-sans"
            >
              IMPOSSIBLE
            </motion.span>
          </div>

          <div className="overflow-hidden pb-2 flex items-baseline gap-4">
            <motion.span
              variants={lineVariants}
              className="text-5xl sm:text-7xl xl:text-8xl 2xl:text-[5.75rem] font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans"
            >
              TO IGNORE.
            </motion.span>
          </div>

          {/* Micro Sub-headline Label */}
          <motion.div
            variants={fadeUp}
            className="mt-6 flex items-center gap-3 text-xs font-mono tracking-wider text-[#6E6E78]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF3B14]" />
            <span>AI AGENTS · AUTOMATION · CUSTOM SOFTWARE · GROWTH & MARKETING</span>
          </motion.div>
        </div>

        {/* Right / Kinetic 3D Cluster (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center">
          <motion.div variants={fadeUp} className="w-full">
            <HeroVisualCluster />
          </motion.div>

          {/* Primary CTAs, anchored directly under the visual */}
          <motion.div
            variants={fadeUp}
            className="w-full max-w-[500px] mx-auto mt-10 flex flex-col sm:flex-row items-stretch gap-3"
          >
            <button
              onClick={onOpenContact}
              data-cursor="start"
              className="flex-1 px-7 py-4 rounded-full bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>BUILD AND AUTOMATE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="#services"
              data-cursor="explore"
              className="flex-1 px-7 py-4 rounded-full border border-black/15 bg-white hover:border-[#0047FF] hover:text-[#0047FF] text-[#0E0E10] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 group"
            >
              <span>GROW AND ACQUIRE</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
