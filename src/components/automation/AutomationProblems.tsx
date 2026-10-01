"use client";

import React from "react";
import { Clock, RefreshCcw, UserX, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";

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
    <section className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#FF3B14]">01 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              THE COST OF MANUAL INEFFICIENCY
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            STOP LOSING LEADS <br />
            <span className="font-serif italic font-normal text-[#FF3B14] lowercase">
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

      {/* Before vs After Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BOTTLENECK_COMPARISONS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-3xl border border-black/10 p-8 shadow-xl flex flex-col justify-between group hover:border-black/30 transition-all duration-300"
          >
            <div>
              {/* Problem Section (Top) */}
              <div className="pb-6 border-b border-black/8">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF3B14] font-bold uppercase mb-2">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>MANUAL BOTTLENECK [0{idx + 1}]</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black font-sans tracking-tight text-[#0E0E10] mb-2">
                  {item.problemTitle}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E78] font-sans leading-relaxed">
                  {item.problemDesc}
                </p>
              </div>

              {/* Automated Solution Section (Bottom) */}
              <div className="pt-6">
                <div className="flex items-center gap-2 text-xs font-mono text-[#10B981] font-bold uppercase mb-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>KINETIX AI AUTOMATION FIX</span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold font-sans tracking-tight text-[#0E0E10] mb-2">
                  {item.fixTitle}
                </h4>
                <p className="text-xs sm:text-sm text-[#6E6E78] font-sans leading-relaxed">
                  {item.fixDesc}
                </p>
              </div>
            </div>

            {/* Impact Metric Pill */}
            <div className="mt-8 pt-4 border-t border-black/8 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#6E6E78] uppercase">
                DOCUMENTED PERFORMANCE DELTA:
              </span>
              <span className="px-3 py-1 rounded-full bg-[#FAF9F5] border border-black/10 text-xs font-mono font-bold text-[#0E0E10]">
                ★ {item.metric}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
