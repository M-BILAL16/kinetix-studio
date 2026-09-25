"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AGENCY_DATA, Service } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface ServicesProps {
  onOpenContact: () => void;
}

export default function Services({ onOpenContact }: ServicesProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section
      id="services"
      className="py-32 site-gutter bg-[#FAF9F5] border-t border-black/10 relative overflow-hidden"
    >
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            FROM INSIGHT <br />
            TO{" "}
            <span className="text-[#0047FF] lowercase">
              impact.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            A REPEATABLE TOOL KIT DESIGNED FOR ENTERPRISE COMPLEXITY AND STARTUP SPEED.
            EVERY ENGAGEMENT COMBINES ONLY THE PIECES YOUR GAP ACTUALLY NEEDS.
          </p>
        </div>
      </div>

      {/* Giant Horizontal Service Rows */}
      <div className="divide-y divide-black/10 border-t border-b border-black/10">
        {AGENCY_DATA.services.map((service: Service) => {
          const isHovered = hoveredId === service.id;

          return (
            <div
              key={service.id}
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={onOpenContact}
              data-cursor="explore"
              className="group relative transition-all duration-300 py-8 sm:py-12 px-2 sm:px-6 cursor-pointer overflow-hidden"
            >
              {/* Row hover accent wash */}
              <div
                className={`absolute inset-0 transition-opacity duration-300 pointer-events-none -z-10 ${
                  isHovered ? "opacity-100 bg-white" : "opacity-0"
                }`}
              />

              {/* Main row typography content */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
                {/* Left: Number + Title */}
                <div className="flex items-baseline gap-4 sm:gap-8">
                  <span className="text-lg sm:text-2xl font-mono font-bold text-[#9E9EA8] group-hover:text-[#0047FF] transition-colors duration-300">
                    {service.number}
                  </span>
                  <h3 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black font-sans tracking-tight text-[#0E0E10] group-hover:translate-x-3 transition-transform duration-300">
                    {service.title}
                  </h3>
                </div>

                {/* Right: Metadata, Tag & Arrow */}
                <div className="flex items-center gap-6 self-end lg:self-center">
                  <span className="hidden sm:inline-block px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase border border-black/10 bg-white/80 text-[#6E6E78] group-hover:border-[#0047FF] group-hover:text-[#0047FF] transition-colors">
                    {service.tag}
                  </span>

                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-black/15 flex items-center justify-center bg-white group-hover:bg-[#0047FF] group-hover:border-[#0047FF] group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#0E0E10] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </div>
                </div>
              </div>

              {/* Revealable Sub-info on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 20 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-4 border-t border-black/8 items-center">
                      <div className="md:col-span-6">
                        <p className="text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed">
                          {service.shortDesc}
                        </p>
                      </div>
                      <div className="md:col-span-6 flex flex-wrap gap-2 md:justify-end">
                        {service.deliverables.map((d) => (
                          <span
                            key={d}
                            className="px-3 py-1 bg-[#FAF9F5] border border-black/10 rounded-full text-xs font-mono text-[#0E0E10]"
                          >
                            + {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Bottom editorial CTA bar */}
      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6E6E78] pt-4">
        <span>NEED A COMBINATION OF THE ABOVE?</span>
        <button
          onClick={onOpenContact}
          className="text-[#0E0E10] hover:text-[#0047FF] font-bold underline transition-colors"
        >
          TELL US WHAT YOU&apos;RE TRYING TO BUILD ↗
        </button>
      </div>
    </section>
  );
}
