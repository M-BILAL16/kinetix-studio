"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/lib/data";
import { X, ArrowUpRight, Award, Zap, Check, Clock, TrendingUp } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 cursor-pointer bg-black/50 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 28, stiffness: 300 }}
          className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-y-auto rounded-3xl border border-black/15 bg-[#FAF9F5] shadow-2xl"
        >
          <div className="sticky top-0 z-20 flex items-center justify-between border-b border-black/8 bg-[#FAF9F5]/90 p-6 backdrop-blur-md sm:p-8">
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
              className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 hover:bg-black/5 transition-colors"
              aria-label="Close project modal"
            >
              <X className="h-5 w-5 text-[#0E0E10]" />
            </button>
          </div>

          <div className="space-y-8 p-6 sm:p-10">
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1 text-[10px] font-mono font-bold text-[#0E0E10]">
                  <Award className="h-3.5 w-3.5 text-[#0047FF]" />
                  {project.badge}
                </span>
                <span className="text-xs font-mono text-[#6E6E78]">
                  CLIENT: {project.client}
                </span>
                {project.services?.map((service) => (
                  <span
                    key={service}
                    className="rounded-full bg-[#0047FF]/10 px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0047FF]"
                  >
                    {service}
                  </span>
                ))}
              </div>
              <h2 className="font-sans text-4xl font-black uppercase tracking-tight text-[#0E0E10] sm:text-6xl">
                {project.title}
              </h2>
              <p className="mt-2 text-lg text-[#0047FF]">&ldquo;{project.tagline}&rdquo;</p>
            </div>

            <div className="aspect-[16/9] overflow-hidden rounded-2xl border border-black/10 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover object-center"
              />
            </div>

            {(project.timeSaved || project.revenueLift) && (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {project.timeSaved ? (
                  <div className="rounded-2xl border border-black/8 bg-white p-5">
                    <div className="flex items-center gap-2 text-[#0047FF]">
                      <Clock className="h-4 w-4" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                        Time saved
                      </span>
                    </div>
                    <p className="mt-3 font-sans text-3xl font-black tracking-tight text-[#0E0E10]">
                      {project.timeSaved}
                    </p>
                  </div>
                ) : null}
                {project.revenueLift ? (
                  <div className="rounded-2xl border border-black/8 bg-white p-5">
                    <div className="flex items-center gap-2 text-[#0047FF]">
                      <TrendingUp className="h-4 w-4" />
                      <span className="font-mono text-[10px] font-bold uppercase tracking-widest">
                        Revenue lift
                      </span>
                    </div>
                    <p className="mt-3 font-sans text-3xl font-black tracking-tight text-[#0E0E10]">
                      {project.revenueLift}
                    </p>
                  </div>
                ) : null}
              </div>
            )}

            <div className="grid grid-cols-1 gap-4 rounded-2xl border border-black/8 bg-white p-6 text-center sm:grid-cols-3">
              {project.stats.map((st) => (
                <div
                  key={st.label}
                  className="border-b border-black/8 pb-3 last:border-none sm:border-b-0 sm:border-r sm:pb-0"
                >
                  <div className="text-[10px] font-mono uppercase text-[#6E6E78]">{st.label}</div>
                  <div className="mt-1 font-sans text-2xl font-black text-[#0E0E10]">{st.value}</div>
                </div>
              ))}
            </div>

            {(project.challenge || project.solution) && (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {project.challenge ? (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
                      Challenge
                    </h3>
                    <p className="mt-3 font-sans text-base leading-relaxed text-[#6E6E78]">
                      {project.challenge}
                    </p>
                  </div>
                ) : null}
                {project.solution ? (
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
                      Solution
                    </h3>
                    <p className="mt-3 font-sans text-base leading-relaxed text-[#6E6E78]">
                      {project.solution}
                    </p>
                  </div>
                ) : null}
              </div>
            )}

            {project.results?.length ? (
              <div>
                <h3 className="mb-4 text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
                  Results
                </h3>
                <ul className="space-y-3">
                  {project.results.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-black/5">
                        <Check className="h-2.5 w-2.5 text-[#0047FF]" />
                      </span>
                      <span className="font-sans text-sm leading-relaxed text-[#6E6E78]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="space-y-4">
              <h3 className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
                Architectural breakdown & outcome
              </h3>
              <p className="font-sans text-base leading-relaxed text-[#6E6E78]">
                {project.description}
              </p>
              <div className="flex items-center gap-2 pt-2">
                <Zap className="h-4 w-4 text-[#CEFF00]" />
                <span className="text-sm font-mono font-bold text-[#0E0E10]">
                  DOCUMENTED RESULT: {project.impact}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-black/8 pt-4">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full border border-black/10 bg-white px-3 py-1 text-xs font-mono text-[#0E0E10]"
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center justify-between gap-4 border-t border-black/8 pt-6 sm:flex-row">
              <span className="text-xs font-mono text-[#6E6E78]">
                READY FOR SIMILAR PARADIGM IMPACT?
              </span>
              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="flex items-center gap-2 rounded-full bg-[#0047FF] px-8 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-white transition-colors hover:bg-[#0E0E10]"
              >
                <span>REQUEST THIS ARCHITECTURE</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
