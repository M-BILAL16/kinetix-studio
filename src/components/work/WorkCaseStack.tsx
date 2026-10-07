"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AGENCY_DATA, Project } from "@/lib/data";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

interface WorkCaseStackProps {
  onOpenProject: (project: Project) => void;
}

export default function WorkCaseStack({ onOpenProject }: WorkCaseStackProps) {
  const projects = AGENCY_DATA.projects;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const project = projects[index];
  const total = projects.length;

  const goTo = (next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  };

  const goNext = () => {
    setDirection(1);
    setIndex((current) => (current + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setIndex((current) => (current - 1 + total) % total);
  };

  if (!project) return null;

  return (
    <section className="border-b border-black/10 bg-[#FAF9F5] py-20 md:py-28">
      <div className="site-gutter mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl lg:text-7xl">
            SELECTED <span className="text-[#0047FF]">WORK.</span>
          </h2>
          <p className="mt-4 max-w-md font-mono text-xs leading-relaxed text-[#6E6E78]">
            SWIPE THE CASES. EACH SLIDE OPENS WITH TIME SAVED AND REVENUE LIFT.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-bold tracking-widest text-[#6E6E78]">
            {project.number} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous case"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#0E0E10] transition-colors hover:border-black/25 hover:bg-[#0E0E10] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={goNext}
            aria-label="Next case"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-[#0E0E10] transition-colors hover:border-black/25 hover:bg-[#0E0E10] hover:text-white"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="site-gutter">
        <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.article
              key={project.id}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid min-h-[70vh] grid-cols-1 lg:min-h-[640px] lg:grid-cols-12"
            >
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className="group relative min-h-[360px] overflow-hidden sm:min-h-[420px] lg:col-span-6 lg:min-h-full"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/80 via-[#0E0E10]/20 to-transparent" />

                <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                  <span className="font-sans text-5xl font-black leading-none tracking-tight text-white/90 sm:text-7xl">
                    {project.number}
                  </span>
                  <span className="rounded-full bg-[#0E0E10]/50 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white/70 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="rounded-2xl bg-white/10 px-5 py-4 backdrop-blur-md">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-white/55">
                      Time saved
                    </p>
                    <p className="mt-2 font-sans text-2xl font-black text-white sm:text-3xl">
                      {project.timeSaved}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#CEFF00] px-5 py-4 text-[#0E0E10]">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[#0E0E10]/60">
                      Revenue lift
                    </p>
                    <p className="mt-2 font-sans text-2xl font-black sm:text-3xl">{project.revenueLift}</p>
                  </div>
                </div>
              </button>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:col-span-6 lg:p-12 xl:p-14">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <span className="rounded-full bg-[#0047FF]/10 px-3 py-1.5 font-mono text-[11px] font-bold uppercase tracking-widest text-[#0047FF]">
                    {project.badge}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E6E78]">
                    {project.client}
                  </span>
                </div>

                <h3 className="mt-5 font-sans text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-4xl xl:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-5 font-sans text-lg leading-snug text-[#0E0E10]/80">{project.tagline}</p>

                <div className="mt-8 space-y-5 border-t border-black/10 pt-8">
                  {project.challenge ? (
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9E9EA8]">
                        01 Challenge
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-[#6E6E78] sm:text-base">
                        {project.challenge}
                      </p>
                    </div>
                  ) : null}
                  {project.solution ? (
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9E9EA8]">
                        02 Solution
                      </p>
                      <p className="mt-2 font-sans text-sm leading-relaxed text-[#6E6E78] sm:text-base">
                        {project.solution}
                      </p>
                    </div>
                  ) : null}
                  {project.results?.length ? (
                    <div>
                      <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9E9EA8]">
                        03 Results
                      </p>
                      <ul className="mt-3 space-y-2">
                        {project.results.slice(0, 3).map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 font-sans text-sm leading-relaxed text-[#6E6E78]"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0047FF]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                  {project.services?.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/10 bg-[#FAF9F5] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-widest text-[#0E0E10]"
                    >
                      {service}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onOpenProject(project)}
                  className="group mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-[#0E0E10] px-7 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#FAF9F5] transition-colors hover:bg-[#0047FF]"
                >
                  <span>Open full case</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {projects.map((item, i) => (
            <button
              key={item.id}
              type="button"
              aria-label={`Go to ${item.title}`}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-8 bg-[#0047FF]" : "w-2.5 bg-black/15 hover:bg-black/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
