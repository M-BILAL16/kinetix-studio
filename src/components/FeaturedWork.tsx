"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGENCY_DATA, Project } from "@/lib/data";
import { ArrowUpRight, Award, Zap } from "lucide-react";

interface FeaturedWorkProps {
  onOpenProject: (project: Project) => void;
}

export default function FeaturedWork({ onOpenProject }: FeaturedWorkProps) {
  return (
    <section id="work" className="py-32 site-gutter bg-[#FAF9F5] border-t border-black/10">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            OUTCOMES THAT MOVED <br />
            THE{" "}
            <span className="font-serif italic font-normal text-[#0047FF] lowercase">
              number.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <span className="text-xs font-mono text-[#6E6E78]">
            A GLIMPSE INTO HOW WE PARTNER WITH OPERATORS TO SHIP MEASURABLE
            TRANSFORMATION.
          </span>
        </div>
      </div>

      {/* Alternating Asymmetric Project Showcases */}
      <div className="space-y-32 sm:space-y-44">
        {AGENCY_DATA.projects.map((project: Project, idx: number) => {
          const isEven = idx % 2 === 0;

          return (
            <div
              key={project.id}
              onClick={() => onOpenProject(project)}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center cursor-pointer group ${
                isEven ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Media / Preview Composition (7 cols on even, 8 on odd) */}
              <div
                className={`relative overflow-hidden rounded-3xl bg-white border border-black/10 shadow-xl ${
                  isEven
                    ? "lg:col-span-7"
                    : "lg:col-span-7 lg:order-2"
                }`}
                data-cursor="view"
              >
                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 z-20 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest text-[#0E0E10] shadow-md border border-black/5 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#0047FF]" />
                    {project.badge}
                  </span>
                </div>

                {/* Year Stamp */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-[#0E0E10]/80 backdrop-blur-md text-[10px] font-mono font-bold tracking-widest text-white">
                    {project.year}
                  </span>
                </div>

                {/* Image Frame with Zoom Easing */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle tint overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Micro Telemetry Bar Below Image */}
                <div className="p-4 sm:p-6 bg-[#FAF9F5] border-t border-black/8 grid grid-cols-3 gap-2 text-center">
                  {project.stats.map((st) => (
                    <div key={st.label} className="border-r last:border-r-0 border-black/8 px-2">
                      <div className="text-[9px] font-mono text-[#6E6E78] uppercase tracking-wider">
                        {st.label}
                      </div>
                      <div className="text-sm sm:text-base font-black font-sans text-[#0E0E10]">
                        {st.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text & Narrative Editorial Block (5 cols) */}
              <div
                className={`flex flex-col justify-between ${
                  isEven
                    ? "lg:col-span-5"
                    : "lg:col-span-5 lg:order-1"
                }`}
              >
                <div>
                  {/* Index + Client */}
                  <div className="flex items-center gap-3 text-xs font-mono text-[#6E6E78] mb-4">
                    <span className="font-bold text-[#0047FF]">[{project.number}]</span>
                    <span className="uppercase tracking-wider">{project.client}</span>
                  </div>

                  {/* Massive Project Title */}
                  <h3 className="text-4xl sm:text-5xl xl:text-6xl font-black font-sans uppercase tracking-tight text-[#0E0E10] group-hover:text-[#0047FF] transition-colors duration-300 mb-4">
                    {project.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-base sm:text-lg font-serif italic text-[#0E0E10] mb-6">
                    &ldquo;{project.tagline}&rdquo;
                  </p>

                  {/* Description */}
                  <p className="text-sm text-[#6E6E78] leading-relaxed font-sans mb-8">
                    {project.description}
                  </p>

                  {/* Categories Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.category.map((cat) => (
                      <span
                        key={cat}
                        className="px-3 py-1 rounded-full text-[10px] font-mono bg-white border border-black/10 text-[#0E0E10]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Impact & Action Link */}
                <div className="pt-6 border-t border-black/8 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#10B981]" />
                    <span className="text-xs font-mono font-bold text-[#0E0E10]">
                      IMPACT: {project.impact}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0E0E10] group-hover:text-[#0047FF] transition-colors">
                    <span>VIEW CASE STUDY</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
