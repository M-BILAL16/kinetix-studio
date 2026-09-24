"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import { X, ArrowUpRight, Award, Zap, Check } from "lucide-react";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onOpenContact,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#FAF9F5] rounded-3xl border border-black/15 shadow-2xl overflow-y-auto z-10 flex flex-col"
        >
          {/* Top Bar */}
          <div className="p-6 sm:p-8 border-b border-black/8 flex items-center justify-between sticky top-0 bg-[#FAF9F5]/90 backdrop-blur-md z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#0047FF]">
                [{project.number}]
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
                CASE ARCHIVE {project.year}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5 text-[#0E0E10]" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-10 space-y-8">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-white text-[10px] font-mono font-bold text-[#0E0E10] border border-black/10 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#0047FF]" />
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-[#6E6E78]">
                  CLIENT: {project.client}
                </span>
              </div>
              <h2 className="text-4xl sm:text-6xl font-black font-sans uppercase tracking-tight text-[#0E0E10]">
                {project.title}
              </h2>
              <p className="text-lg font-serif italic text-[#0047FF] mt-2">
                &ldquo;{project.tagline}&rdquo;
              </p>
            </div>

            {/* Hero Image */}
            <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-black/10 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Impact Metric Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 bg-white rounded-2xl border border-black/8 text-center">
              {project.stats.map((st) => (
                <div key={st.label} className="border-b sm:border-b-0 sm:border-r last:border-none border-black/8 pb-3 sm:pb-0">
                  <div className="text-[10px] font-mono text-[#6E6E78] uppercase">
                    {st.label}
                  </div>
                  <div className="text-2xl font-black font-sans text-[#0E0E10] mt-1">
                    {st.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Narrative Breakdown */}
            <div className="space-y-4">
              <h3 className="text-xs font-mono tracking-widest uppercase text-[#6E6E78]">
                ARCHITECTURAL BREAKDOWN & OUTCOME
              </h3>
              <p className="text-base text-[#6E6E78] leading-relaxed font-sans">
                {project.description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Zap className="w-4 h-4 text-[#10B981]" />
                <span className="text-sm font-mono font-bold text-[#0E0E10]">
                  DOCUMENTED RESULT: {project.impact}
                </span>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-black/8">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="px-3 py-1 rounded-full text-xs font-mono bg-white border border-black/10 text-[#0E0E10]"
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="pt-6 border-t border-black/8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#6E6E78]">
                READY FOR SIMILAR PARADIGM IMPACT?
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-8 py-3.5 bg-[#0047FF] hover:bg-[#0E0E10] text-white rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-colors flex items-center gap-2"
              >
                <span>REQUEST THIS ARCHITECTURE</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
