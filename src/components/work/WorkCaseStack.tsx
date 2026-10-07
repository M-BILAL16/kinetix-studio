"use client";

import React from "react";
import { motion } from "framer-motion";
import { AGENCY_DATA, Project } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

interface WorkCaseStackProps {
  onOpenProject: (project: Project) => void;
}

export default function WorkCaseStack({ onOpenProject }: WorkCaseStackProps) {
  return (
    <section className="bg-[#FAF9F5]">
      <div className="site-gutter border-b border-black/10 py-16 md:py-20">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl lg:text-7xl">
            SELECTED <span className="text-[#0047FF]">WORK.</span>
          </h2>
          <p className="max-w-xs font-mono text-xs leading-relaxed text-[#6E6E78] md:text-right">
            SCROLL THE ARCHIVE. EACH CHAPTER OPENS WITH THE NUMBERS THAT MATTERED.
          </p>
        </div>
      </div>

      <div className="site-gutter space-y-16 py-16 md:space-y-24 md:py-24">
      {AGENCY_DATA.projects.map((project, idx) => {
        const flip = idx % 2 === 1;
        return (
          <article
            key={project.id}
            className="overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 lg:min-h-[75vh]">
              <button
                type="button"
                onClick={() => onOpenProject(project)}
                className={`group relative min-h-[48vh] overflow-hidden lg:min-h-full ${
                  flip ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10]/80 via-[#0E0E10]/20 to-transparent" />

                <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                  <span className="font-sans text-5xl font-black leading-none tracking-tight text-white/90 sm:text-7xl">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3 sm:bottom-8 sm:left-8 sm:right-8">
                  <div className="rounded-2xl bg-white/10 px-4 py-3 backdrop-blur-md">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-white/55">Time saved</p>
                    <p className="mt-1 font-sans text-xl font-black text-white sm:text-2xl">
                      {project.timeSaved}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#CEFF00] px-4 py-3 text-[#0E0E10]">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-[#0E0E10]/60">
                      Revenue lift
                    </p>
                    <p className="mt-1 font-sans text-xl font-black sm:text-2xl">{project.revenueLift}</p>
                  </div>
                </div>
              </button>

              <div
                className={`flex flex-col justify-center p-8 sm:p-10 lg:col-span-5 lg:p-12 xl:p-14 ${
                  flip ? "lg:order-1" : ""
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0047FF]">
                      {project.badge}
                    </span>
                    <span className="text-white/0">·</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E6E78]">
                      {project.client}
                    </span>
                  </div>

                  <h3 className="mt-5 font-sans text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-4xl xl:text-5xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 font-sans text-lg leading-snug text-[#0E0E10]/80">
                    {project.tagline}
                  </p>

                  <div className="mt-8 space-y-6 border-t border-black/10 pt-8">
                    {project.challenge ? (
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9E9EA8]">
                          01 Challenge
                        </p>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-[#6E6E78]">
                          {project.challenge}
                        </p>
                      </div>
                    ) : null}
                    {project.solution ? (
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#9E9EA8]">
                          02 Solution
                        </p>
                        <p className="mt-2 font-sans text-sm leading-relaxed text-[#6E6E78]">
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
                          {project.results.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 font-sans text-sm leading-relaxed text-[#6E6E78]"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[#0047FF]" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-3">
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
                    className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#0E0E10] px-6 py-3.5 text-xs font-mono font-bold uppercase tracking-widest text-[#FAF9F5] transition-colors hover:bg-[#0047FF]"
                  >
                    <span>Open full case</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </motion.div>
              </div>
            </div>
          </article>
        );
      })}
      </div>
    </section>
  );
}
