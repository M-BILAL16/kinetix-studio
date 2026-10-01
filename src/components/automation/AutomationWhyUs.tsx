"use client";

import React from "react";
import { Check, ShieldCheck, Zap, Globe, HeartHandshake, TrendingUp } from "lucide-react";

const REASONS = [
  {
    icon: TrendingUp,
    title: "Engineered for Revenue, Not Just Gimmicky Tech",
    description:
      "Most agencies install basic chatbot templates that irritate customers. We build deterministic revenue systems focused on one core metric: qualified discovery calls and closed sales.",
    accent: "#0047FF",
  },
  {
    icon: Zap,
    title: "100% Done-For-You Implementation",
    description:
      "No prompt engineering, coding, or Zapier maintenance required from your team. We build the architecture, connect your tools, test edge cases, and hand you the keys.",
    accent: "#10B981",
  },
  {
    icon: Globe,
    title: "Tailored for Pakistan, UAE, GCC & International",
    description:
      "Deep localization: WhatsApp-first architecture, Roman Urdu and Arabic conversational fluency, and direct integration with local payment and delivery systems.",
    accent: "#FF2E93",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Zero-Hallucination Guardrails",
    description:
      "We strictly constrain what the AI can say and do. If an inquiry exceeds its pre-approved knowledge boundary, it gracefully escalates to a human manager.",
    accent: "#7C3AED",
  },
  {
    icon: HeartHandshake,
    title: "Ongoing Monthly Optimization & Support",
    description:
      "Launch day is step zero. We continually review chat transcripts, tune conversion prompts, and hold monthly strategy sessions to keep your lead flow compounding.",
    accent: "#FF3B14",
  },
];

export default function AutomationWhyUs() {
  return (
    <section className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#10B981]">05 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              THE AUTOMATION ADVANTAGE
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            WHY BUSINESSES CHOOSE <br />
            <span className="font-serif italic font-normal text-[#10B981] lowercase">
              our agency.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            WE ELIMINATE HUMAN INEFFICIENCY WITH RELIABLE, ENTERPRISE-GRADE AUTOMATION INFRASTRUCTURE.
          </p>
        </div>
      </div>

      {/* Grid of Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map((r, idx) => {
          const Icon = r.icon;

          return (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-black/10 p-8 shadow-xl flex flex-col justify-between hover:border-black/30 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#FAF9F5] flex items-center justify-center text-[#0E0E10] mb-6">
                  <Icon className="w-6 h-6" style={{ color: r.accent }} />
                </div>
                <h3 className="text-xl font-bold font-sans tracking-tight text-[#0E0E10] mb-3">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6E78] font-sans leading-relaxed">
                  {r.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-black/8 flex items-center gap-2 text-[10px] font-mono font-bold text-[#10B981]">
                <Check className="w-3.5 h-3.5" />
                <span>INCLUDED IN EVERY DEPLOYMENT</span>
              </div>
            </div>
          );
        })}

        {/* 6th Tile: Free Audit Banner */}
        <div className="bg-[#0E0E10] text-white rounded-3xl p-8 shadow-2xl flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-mono text-[#CEFF00] font-bold uppercase tracking-wider block mb-2">
              COMPLIMENTARY REVIEW
            </span>
            <h3 className="text-2xl font-black font-sans tracking-tight text-white mb-3">
              Get Your Free 48-Hour AI Growth Plan
            </h3>
            <p className="text-xs text-stone-300 font-sans leading-relaxed">
              We&apos;ll analyze your current lead handling, secret-shop your competitors, and deliver a personalized automation roadmap within 48 hours.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-white/10 text-xs font-mono text-[#10B981] font-bold">
            AVERAGE FINDINGS: 3–7 HIGH-IMPACT OPPORTUNITIES
          </div>
        </div>
      </div>
    </section>
  );
}
