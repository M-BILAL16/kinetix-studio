"use client";

import React from "react";
import { ArrowRight, AlertTriangle, CheckCircle2 } from "lucide-react";

const BOTTLENECK_COMPARISONS = [
  {
    problemTitle: "Slow Lead Response = Lost Clients",
    problemDesc:
      "When a prospect reaches out, your competitors reply in seconds. If your team takes 3 to 4 hours, over 70% of potential buyers have already booked elsewhere.",
    fixTitle: "Sub-5-Second Instant AI Engagement",
    fixDesc:
      "Our AI sales assistant instantly greets every lead on WhatsApp, SMS, or web forms, qualifies their budget, and offers instant calendar booking within seconds.",
    metric: "9x Higher Connection Rate",
  },
  {
    problemTitle: "Manual Follow-ups = Poor Conversions",
    problemDesc:
      "Over 80% of sales require 5 or more follow-up touchpoints to convert. Most human sales reps give up after just 1 or 2 messages.",
    fixTitle: "Algorithmic 5-Touch Nurture Sequences",
    fixDesc:
      "Automated intelligent sequences re-engage warm leads via personalized WhatsApp messages, case studies, and scheduling nudges until they convert.",
    metric: "+64% Re-engagement Yield",
  },
  {
    problemTitle: "No Automation = Burned Staff Hours",
    problemDesc:
      "Your highest-paid employees burn 25+ hours every week copying data across spreadsheets, chasing invoices, and typing repetitive answers to FAQs.",
    fixTitle: "100% Autonomous Workflow Sync",
    fixDesc:
      "AI pipelines handle routine inquiries, sync customer data into your CRM, and automatically generate invoices and bookings without human intervention.",
    metric: "25+ Hours Returned Weekly",
  },
  {
    problemTitle: "No Systems = Scaling Becomes Chaos",
    problemDesc:
      "When marketing campaigns spike traffic, leads fall through the cracks between disparate software tools, resulting in lost revenue and customer frustration.",
    fixTitle: "Zero-Leak Event-Driven Infrastructure",
    fixDesc:
      "Robust automation webhooks connect ad platforms, WhatsApp, calendars, and accounting tools into a synchronized revenue engine that never drops a lead.",
    metric: "Zero Dropped Inquiries",
  },
];

export default function AutomationProblems() {
  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            STOP LOSING LEADS <br />
            <span className="text-[#0047FF]">
              to manual friction.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            COMPARE HOW TRADITIONAL BUSINESSES BLEED REVENUE EVERY DAY VERSUS HOW AN AI-POWERED
            AUTOMATION ECOSYSTEM OPERATES ON AUTOPILOT.
          </p>
        </div>
      </div>

      <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-5 px-2 mb-4">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#0047FF]">
          Manual bottleneck
        </span>
        <span className="w-10" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#CEFF00] text-right">
          Automation fix
        </span>
      </div>

      <div className="space-y-5">
        {BOTTLENECK_COMPARISONS.map((item, idx) => (
          <article
            key={item.problemTitle}
            className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 lg:gap-5 items-stretch"
          >
            <div className="rounded-3xl border border-dashed border-[#FF3B14]/35 bg-white p-6 sm:p-8">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#0047FF] mb-4">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Manual bottleneck [0{idx + 1}]</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-[#0E0E10] leading-tight">
                {item.problemTitle}
              </h3>
              <p className="mt-3 text-sm text-[#6E6E78] font-sans leading-relaxed">
                {item.problemDesc}
              </p>
            </div>

            <div className="flex lg:flex-col items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-[#0E0E10] text-[#FAF9F5] flex items-center justify-center">
                <ArrowRight className="w-4 h-4 lg:rotate-0 rotate-90" />
              </div>
            </div>

            <div className="rounded-3xl bg-[#0E0E10] text-[#FAF9F5] p-6 sm:p-8 flex flex-col">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold uppercase tracking-widest text-[#CEFF00] mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>AI automation fix</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight leading-tight">
                {item.fixTitle}
              </h3>
              <p className="mt-3 text-sm text-white/65 font-sans leading-relaxed">
                {item.fixDesc}
              </p>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between gap-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/45">
                  Documented result
                </span>
                <span className="shrink-0 px-3 py-1.5 rounded-full bg-[#CEFF00] text-[#0E0E10] text-xs font-mono font-bold">
                  ★ {item.metric}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
