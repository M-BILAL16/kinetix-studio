"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, ArrowDown } from "lucide-react";
import AiHeroImageShowcase from "@/components/ai/AiHeroImageShowcase";

export default function AiHero() {
  return (
    <section className="relative flex min-h-[92vh] items-center py-28 site-gutter bg-editorial-grid bg-noise border-b border-black/10 overflow-hidden">
      {/* Main Grid: Headline + Interactive Agent Mesh */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Monumental Editorial Typography (7 cols) */}
        <div className="lg:col-span-7 flex flex-col z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-[#0E0E10] font-semibold mb-6 w-fit shadow-xs">
            <Bot className="w-3.5 h-3.5 text-[#0047FF]" />
            <span>ENTERPRISE-GRADE AUTONOMOUS RUNTIMES</span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans">
            BUILDING AGENTS <br />
            THAT RUN WORK <br />
            <span className="text-[#0047FF]">
              without
            </span>{" "}
            BOTTLENECKS.
          </h1>

          <p className="mt-8 text-base sm:text-xl text-[#6E6E78] leading-relaxed max-w-2xl font-sans">
            We build secure AI agents that handle repetitive work and connect with your existing
            tools.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#signature-offers"
              className="px-6 py-4 rounded-full bg-white hover:bg-black/5 text-[#0E0E10] border border-black/15 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 flex items-center gap-2"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: 3D AI Agents Swarm Artwork & Interactive Inspector (5 cols) */}
        <div className="lg:col-span-5">
          <AiHeroImageShowcase />
        </div>
      </div>
    </section>
  );
}
