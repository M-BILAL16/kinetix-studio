"use client";

import React, { useState } from "react";
import { CheckCircle2, ArrowRight, Search, FileText, Wrench, Rocket } from "lucide-react";

const STEPS = [
  {
    number: "01",
    phase: "SYSTEM & BOTTLENECK AUDIT",
    timeline: "DAYS 1 — 5",
    icon: Search,
    title: "Deep Analysis of Operational Friction",
    description:
      "We examine your current customer journey, response times, software stack, and manual bottlenecks. We calculate where you are losing leads and establish clear baseline KPIs.",
    deliverables: ["Friction Diagnostic", "Revenue Leakage Map", "Automation Spec Document"],
  },
  {
    number: "02",
    phase: "AI ARCHITECTURE & STRATEGY",
    timeline: "DAYS 6 — 10",
    icon: FileText,
    title: "Custom Multi-Agent Blueprint",
    description:
      "We design the conversational flows, prompt system instructions, multi-lingual language parameters (Urdu, English, Arabic), and safety guardrails tailored to your business.",
    deliverables: ["Prompt Engineering Architecture", "CRM Field Mapping", "Human Escalation Protocol"],
  },
  {
    number: "03",
    phase: "BESPOKE BUILD & INTEGRATION",
    timeline: "WEEKS 02 — 03",
    icon: Wrench,
    title: "Full-Stack Development & Sandbox Testing",
    description:
      "We configure your official WhatsApp Business API, build webhook connectors to your CRM, EHR, or calendar, and run exhaustive simulated test runs across edge cases.",
    deliverables: ["Official WhatsApp API Setup", "CRM & Calendar Webhooks", "Zero-Hallucination Testing"],
  },
  {
    number: "04",
    phase: "DEPLOY & AUTONOMOUS SCALE",
    timeline: "WEEK 04 & BEYOND",
    icon: Rocket,
    title: "Go-Live & Continuous Telemetry Optimization",
    description:
      "We launch your system into production, train your team on viewing lead transcripts, and conduct monthly optimization sprints to continually increase conversion rates.",
    deliverables: ["Production Edge Launch", "Team Onboarding Session", "Monthly Performance Optimization"],
  },
];

export default function AutomationProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#0047FF]">04 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              THE 4-STEP INTEGRATION FRAMEWORK
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            FROM AUDIT TO <br />
            <span className="font-serif italic font-normal text-[#0047FF]">
              autopilot.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            DONE-FOR-YOU IMPLEMENTATION. YOU FOCUS ON RUNNING YOUR BUSINESS; WE HANDLE ALL
            TECHNICAL WORK.
          </p>
        </div>
      </div>

      {/* 4 Steps Horizontal / Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((step, idx) => {
          const Icon = step.icon;

          return (
            <div
              key={step.number}
              className="bg-white rounded-3xl border border-black/10 p-8 shadow-xl flex flex-col justify-between hover:border-black/30 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono mb-6">
                  <span className="text-2xl font-black font-sans text-[#0047FF]">
                    [{step.number}]
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-black/10 text-[10px] uppercase font-bold text-[#6E6E78]">
                    {step.timeline}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] flex items-center justify-center text-[#0E0E10] mb-6 group-hover:bg-[#0047FF] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>

                <span className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-wider block mb-1">
                  {step.phase}
                </span>

                <h3 className="text-xl font-black font-sans tracking-tight text-[#0E0E10] mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6E6E78] font-sans leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className="pt-4 border-t border-black/8 space-y-1.5">
                {step.deliverables.map((d) => (
                  <div key={d} className="flex items-center gap-2 text-[11px] font-mono text-[#0E0E10]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
