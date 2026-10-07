"use client";

import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AGENCY_DATA, Project, ProjectService } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

const FILTERS: Array<"All" | ProjectService> = [
  "All",
  "AI",
  "Automation",
  "Growth",
  "Software",
];

interface WorkArchiveIndexProps {
  onOpenProject: (project: Project) => void;
}

export default function WorkArchiveIndex({ onOpenProject }: WorkArchiveIndexProps) {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [activeId, setActiveId] = useState(AGENCY_DATA.projects[0]?.id ?? "");

  const projects = useMemo(() => {
    if (filter === "All") return AGENCY_DATA.projects;
    return AGENCY_DATA.projects.filter((project) => project.services?.includes(filter));
  }, [filter]);

  useEffect(() => {
    if (!projects.some((project) => project.id === activeId)) {
      setActiveId(projects[0]?.id ?? "");
    }
  }, [projects, activeId]);

  const active = projects.find((project) => project.id === activeId) ?? projects[0];

  if (!active) {
    return (
      <section className="border-b border-black/10 bg-[#FAF9F5] py-28 site-gutter">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-[#6E6E78]">
          No cases in this filter yet.
        </p>
      </section>
    );
  }

  return (
    <section className="border-b border-black/10 bg-[#FAF9F5] py-16 md:py-24">
      <div className="site-gutter mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0047FF]">
            Portfolio index
          </p>
          <h2 className="mt-3 font-sans text-3xl font-black uppercase tracking-tight text-[#0E0E10] sm:text-5xl">
            BROWSE BY <span className="text-[#0047FF]">SIGNAL.</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {FILTERS.map((item) => {
            const on = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-widest transition-colors ${
                  on
                    ? "bg-[#0E0E10] text-[#FAF9F5]"
                    : "border border-black/10 bg-white text-[#6E6E78] hover:border-black/25 hover:text-[#0E0E10]"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="site-gutter grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
        <div className="space-y-3 lg:col-span-5">
          {projects.map((project) => {
            const isActive = project.id === active.id;
            return (
              <button
                key={project.id}
                type="button"
                onMouseEnter={() => setActiveId(project.id)}
                onFocus={() => setActiveId(project.id)}
                onClick={() => {
                  setActiveId(project.id);
                  onOpenProject(project);
                }}
                className={`group flex w-full items-stretch gap-4 rounded-3xl border px-4 py-5 text-left transition-all sm:gap-5 sm:px-5 sm:py-6 ${
                  isActive
                    ? "border-[#0E0E10] bg-[#0E0E10] text-[#FAF9F5] shadow-xl"
                    : "border-black/10 bg-white text-[#0E0E10] shadow-sm hover:border-black/20 hover:shadow-md"
                }`}
              >
                <span
                  className={`w-10 shrink-0 pt-1 font-mono text-xs font-bold tracking-widest sm:w-12 ${
                    isActive ? "text-[#CEFF00]" : "text-[#9E9EA8]"
                  }`}
                >
                  {project.number}
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className={`font-mono text-[10px] uppercase tracking-widest ${
                        isActive ? "text-white/45" : "text-[#6E6E78]"
                      }`}
                    >
                      {project.client}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                        isActive
                          ? "bg-[#CEFF00]/15 text-[#CEFF00]"
                          : "bg-[#0047FF]/10 text-[#0047FF]"
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <h3 className="mt-2 font-sans text-xl font-black uppercase leading-[0.95] tracking-tight sm:text-2xl">
                    {project.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                    <div>
                      <p
                        className={`font-mono text-[9px] uppercase tracking-widest ${
                          isActive ? "text-white/40" : "text-[#9E9EA8]"
                        }`}
                      >
                        Time
                      </p>
                      <p
                        className={`mt-0.5 font-sans text-sm font-bold ${
                          isActive ? "text-[#CEFF00]" : "text-[#0E0E10]"
                        }`}
                      >
                        {project.timeSaved}
                      </p>
                    </div>
                    <div>
                      <p
                        className={`font-mono text-[9px] uppercase tracking-widest ${
                          isActive ? "text-white/40" : "text-[#9E9EA8]"
                        }`}
                      >
                        Revenue
                      </p>
                      <p className="mt-0.5 font-sans text-sm font-bold">{project.revenueLift}</p>
                    </div>
                  </div>
                </div>

                <span
                  className={`flex h-10 w-10 shrink-0 self-center items-center justify-center rounded-full transition-all ${
                    isActive
                      ? "bg-[#CEFF00] text-[#0E0E10]"
                      : "bg-black/5 text-[#0E0E10] opacity-0 group-hover:opacity-100"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative lg:col-span-7">
          <div className="lg:sticky lg:top-28">
            <div className="relative h-[58vh] overflow-hidden rounded-[2rem] border border-black/10 shadow-2xl lg:h-[calc(100vh-9rem)] lg:min-h-[34rem]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <img
                    src={active.image}
                    alt={active.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-[#0E0E10]/35 to-[#0E0E10]/10" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex flex-wrap gap-2">
                    {active.services?.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <span className="rounded-full bg-[#0E0E10]/50 px-3 py-1.5 font-mono text-xs font-bold tracking-widest text-white/70 backdrop-blur-md">
                    {active.year}
                  </span>
                </div>

                <div className="max-w-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${active.id}-copy`}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                    >
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                        Now viewing
                      </p>
                      <h3 className="mt-3 font-sans text-3xl font-black uppercase leading-[0.92] tracking-tight text-white sm:text-5xl">
                        {active.title}
                      </h3>
                      <p className="mt-4 font-sans text-base leading-relaxed text-white/70 sm:text-lg">
                        {active.tagline}
                      </p>

                      <div className="mt-8 grid max-w-md grid-cols-2 gap-3">
                        <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                            Time saved
                          </p>
                          <p className="mt-2 font-sans text-2xl font-black text-[#CEFF00] sm:text-3xl">
                            {active.timeSaved}
                          </p>
                        </div>
                        <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                            Revenue lift
                          </p>
                          <p className="mt-2 font-sans text-2xl font-black text-white sm:text-3xl">
                            {active.revenueLift}
                          </p>
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => onOpenProject(active)}
                        className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#FAF9F5] px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0E0E10] transition-colors hover:bg-[#CEFF00]"
                      >
                        <span>Open case study</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
