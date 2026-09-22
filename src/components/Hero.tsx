"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowDown, ArrowRight, CornerDownRight } from "lucide-react";
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
    <section className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 px-4 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden bg-editorial-grid bg-noise">
      {/* Editorial Watermark & Technical Coordinates */}
      <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-8 sm:mb-12">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#0047FF]" />
          <span className="text-[11px] font-mono tracking-widest uppercase text-[#0E0E10] font-semibold">
            VOL. 05 // EXPERIMENTAL DIGITAL ATELIER
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-6 text-[11px] font-mono text-[#6E6E78]">
          <span>INDEX // 001</span>
          <span>LAT 40.7128° N, 74.0060° W</span>
          <span className="text-[#0047FF] font-bold">LIVE STATUS: ONLINE</span>
        </div>
      </div>

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
              ★ AWWWARDS CALIBER
            </motion.span>
          </div>

          <div className="overflow-hidden pb-1 flex items-baseline">
            <motion.span
              variants={lineVariants}
              className="font-serif italic font-normal text-6xl sm:text-8xl xl:text-9xl 2xl:text-[7.25rem] tracking-tight text-[#0047FF] leading-[0.88] lowercase relative pr-4 inline-block"
            >
              impossible
              <span className="absolute bottom-1 left-0 right-4 h-1 bg-[#CEFF00] -z-10 rounded-full" />
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
            <span>DISRUPTIVE DIGITAL ARCHITECTURE & LUXURY EDITORIAL ENGINEERING</span>
          </motion.div>
        </div>

        {/* Right / Kinetic 3D Cluster (5 cols) */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div variants={fadeUp} className="w-full">
            <HeroVisualCluster />
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Asymmetric Bar: Positioned in Lower Right */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="mt-12 pt-8 border-t border-black/8 grid grid-cols-1 md:grid-cols-12 gap-8 items-end"
      >
        {/* Left: Scroll Prompt */}
        <div className="md:col-span-4 flex items-center gap-4">
          <a
            href="#work"
            className="group flex items-center gap-3 text-xs font-mono font-bold tracking-widest text-[#0E0E10] hover:text-[#0047FF] transition-colors"
          >
            <div className="w-9 h-9 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#0047FF] group-hover:translate-y-1 transition-all duration-200">
              <ArrowDown className="w-4 h-4 text-[#0E0E10] group-hover:text-[#0047FF]" />
            </div>
            <span>SEE WHAT WE DO ↓</span>
          </a>
        </div>

        {/* Right: Asymmetrical Value Prop Paragraph & Primary CTA */}
        <div className="md:col-span-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6 md:pl-12">
          <div className="max-w-md">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-[#0047FF] font-bold uppercase tracking-wider mb-1.5">
              <CornerDownRight className="w-3.5 h-3.5" />
              <span>THE VALUE FORMULA</span>
            </div>
            <p className="text-sm sm:text-base text-[#6E6E78] leading-relaxed font-sans">
              We identify the exact part of your business costing you time, margins, and momentum
              — then design and deploy the right digital solution to unlock it.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenContact}
              data-cursor="start"
              className="px-8 py-4 rounded-full bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>START SOMETHING</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
