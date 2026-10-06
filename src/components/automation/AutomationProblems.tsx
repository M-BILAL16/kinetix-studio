"use client";

import React from "react";
import { AlertTriangle, ArrowDown, CheckCircle2, TrendingDown, TrendingUp } from "lucide-react";

const BOTTLENECK_COMPARISONS = [
  {
    problemTitle: "Slow Lead Response = Lost Clients",
    problemDesc:
      "A 3–4 hour reply lets over 70% of buyers book a competitor who answered in seconds.",
    fixTitle: "Reply to Every Customer in Seconds",
    fixDesc:
      "AI answers every message on WhatsApp, SMS, or your website right away, asks their budget, and books a meeting.",
    metric: "9x Higher Connection Rate",
  },
  {
    problemTitle: "Manual Follow-ups = Poor Conversions",
    problemDesc:
      "80% of sales need 5+ follow-ups, but most reps stop after one or two and lose the deal.",
    fixTitle: "Automatic Follow-ups That Never Stop",
    fixDesc:
      "AI sends 5 friendly reminders with reviews and a booking link until the customer says yes.",
    metric: "+64% Re-engagement Yield",
  },
  {
    problemTitle: "No Automation = Burned Staff Hours",
    problemDesc:
      "Senior staff lose 25+ hours a week copying data, chasing invoices, and repeating the same FAQs.",
    fixTitle: "Let AI Do the Daily Busy Work",
    fixDesc:
      "AI answers common questions, saves customer details, and makes bills and bookings for you.",
    metric: "25+ Hours Returned Weekly",
  },
  {
    problemTitle: "No Systems = Scaling Becomes Chaos",
    problemDesc:
      "Traffic spikes drop leads between disconnected tools, so revenue leaks and buyers go cold.",
    fixTitle: "All Your Tools Connected in One Place",
    fixDesc:
      "Your ads, WhatsApp, calendar, and accounts work together, so no customer is ever missed.",
    metric: "Zero Dropped Inquiries",
  },
];

export default function AutomationProblems() {
  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            STOP LOSING BUSINESS <br />
            <span className="text-[#0047FF]">
              to manual friction.
            </span>
          </h2>
        </div>
        {/* <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            COMPARE HOW TRADITIONAL BUSINESSES BLEED REVENUE EVERY DAY VERSUS HOW AN AI-POWERED
            AUTOMATION ECOSYSTEM OPERATES ON AUTOPILOT.
          </p>
        </div> */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-stretch">
        {BOTTLENECK_COMPARISONS.map((item, idx) => {
          const [cause, effect] = item.problemTitle.split(" = ");
          return (
            <article key={item.problemTitle} className="flex h-full flex-col">
              <div className="relative flex min-h-[260px] flex-col overflow-hidden rounded-3xl border border-[#0047FF]/15 bg-white p-5">
                <AlertTriangle
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 text-[#0047FF]/[0.07]"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="inline-flex items-center text-[10px] font-mono font-bold uppercase tracking-widest text-[#0047FF]">
                    The problem
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#0047FF]/50">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="relative mt-6 text-2xl font-black font-sans leading-tight tracking-tight text-[#0E0E10]">
                  {cause}
                </h3>
                <p className="relative mt-3 text-sm font-sans leading-snug text-[#3A3A44]">
                  {item.problemDesc}
                </p>
                <div className="relative mt-auto flex items-center gap-2 border-t border-dashed border-[#0047FF]/25 pt-4 text-sm font-black uppercase tracking-tight text-[#0047FF]">
                  <TrendingDown className="h-4 w-4 shrink-0" />
                  {effect}
                </div>
              </div>

              <div className="relative z-10 -my-3 flex justify-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#FAF9F5] bg-[#0E0E10] text-[#FAF9F5]">
                  <ArrowDown className="h-4 w-4" />
                </div>
              </div>

              <div className="relative flex min-h-[260px] flex-1 flex-col overflow-hidden rounded-3xl border border-[#CEFF00]/20 bg-[#0E0E10] p-5 text-[#FAF9F5]">
                <CheckCircle2
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="pointer-events-none absolute -bottom-6 -right-6 h-36 w-36 text-[#CEFF00]/[0.08]"
                />
                <div className="relative flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#CEFF00]">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#CEFF00] text-xs font-black text-[#0E0E10]">
                      ✓
                    </span>
                    The fix
                  </span>
                  <span className="text-[11px] font-mono font-bold tracking-widest text-[#CEFF00]/50">
                    0{idx + 1}
                  </span>
                </div>
                <h3 className="relative mt-6 text-2xl font-black font-sans leading-tight tracking-tight">
                  {item.fixTitle}
                </h3>
                <p className="relative mt-3 text-sm font-sans leading-snug text-white/70">
                  {item.fixDesc}
                </p>
                <div className="relative mt-auto flex items-center gap-2 border-t border-dashed border-[#CEFF00]/25 pt-4 text-sm font-black uppercase tracking-tight text-[#CEFF00]">
                  <TrendingUp className="h-4 w-4 shrink-0" />
                  {item.metric}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
