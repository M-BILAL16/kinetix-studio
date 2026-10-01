"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bot, ArrowDown } from "lucide-react";
import AiSwarmIllustration from "@/components/ai/AiSwarmIllustration";

export default function AiHero() {
  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 site-gutter bg-editorial-grid bg-noise border-b border-black/10 overflow-hidden">
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
            We architect, fine-tune, and deploy bespoke multi-agent AI systems and deterministic
            workflows that replace manual hours with sub-second execution — fully compliant,
            secure, and integrated into your core stack.
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

          {/* Core Trust Badges */}
          <div className="mt-12 pt-8 border-t border-black/8 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                &lt;180ms
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Reasoning Latency
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                99.94%
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Deterministic Accuracy
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                Zero-Retention
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Enterprise Privacy
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: High-Motion 3D Kinetic Neural Swarm Illustration (5 cols) */}
        <div className="lg:col-span-5">
          <AiSwarmIllustration />
        </div>
      </div>
    </section>
  );
}
