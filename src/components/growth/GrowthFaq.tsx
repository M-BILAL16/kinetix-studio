"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is Generative Engine Optimization (AEO/GEO) and why is it replacing SEO?",
    a: "Traditional SEO focuses on ranking for keywords in Google's 10 blue links. Generative Engine Optimization (GEO/AEO) ensures that when high-intent enterprise buyers ask ChatGPT, Perplexity, Claude, or Google Gemini for vendor recommendations, your brand is the synthesized, verified authority. We structure your digital entity data, press citations, and technical semantic schemas so AI engines cite your company by name.",
    tag: "AI SEARCH PARADIGM",
  },
  {
    q: "How do you prevent ad fatigue on high-spend paid campaigns?",
    a: "Most agencies run 2 or 3 static creatives until costs spike. We engineer modular creative systems: separating hooks, core arguments, visual formats, and CTAs into interchangeable components. We continuously deploy 15–25 variant micro-tests weekly, using automated rules to scale high-performing combinations while pruning underperformers before ad fatigue occurs.",
    tag: "PAID MEDIA",
  },
  {
    q: "Why do you engineer landing pages in Next.js instead of Webflow or WordPress?",
    a: "Speed and interaction quality directly dictate conversion rates. Off-the-shelf page builders load heavy JavaScript libraries and third-party plugins that drag load times past 3 seconds, losing 30%+ of ad traffic. Our custom Next.js landing experiences load at the global edge in under 400ms, maintain silky 60fps micro-animations, and support dynamic personalization based on the prospect's company domain.",
    tag: "CONVERSION ARCHITECTURE",
  },
  {
    q: "How quickly do we see measurable improvement in CAC and pipeline?",
    a: "Paid acquisition and landing page conversion optimizations typically generate measurable CAC compression within 10 to 14 days of launch. AI Search & AEO entity seeding compounds over a 30 to 60 day horizon as generative model indices ingest and verify your domain citations.",
    tag: "TIMELINE & ROI",
  },
  {
    q: "How do you track attribution accurately in a cookie-less privacy landscape?",
    a: "We avoid reliance on client-side third-party cookies. We implement robust First-Party Server-Side Tracking (Conversions API) directly tied to your CRM records (HubSpot, Salesforce, Stripe). When a lead converts into a signed contract 60 days later, that revenue is accurately attributed back to the exact initial campaign hook and touchpoint.",
    tag: "CLOSED-LOOP ATTRIBUTION",
  },
];

export default function GrowthFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#FF2E93]">05 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              ACQUISITION STRATEGY & METHODOLOGY
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            FREQUENTLY EXAMINED <br />
            <span className="font-serif italic font-normal text-[#FF2E93] lowercase">
              questions.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            DIRECT ANSWERS ON AEO, CREATIVE TESTING, CLOSED-LOOP TRACKING, AND ROI TIMELINES.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="max-w-4xl mx-auto divide-y divide-black/10 border-t border-b border-black/10">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div key={idx} className="py-6 transition-colors">
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left flex items-start justify-between gap-4 group"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#FF2E93] font-bold uppercase tracking-wider block mb-1">
                    {faq.tag}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-sans tracking-tight text-[#0E0E10] group-hover:text-[#FF2E93] transition-colors">
                    {faq.q}
                  </h3>
                </div>
                <div
                  className={`w-9 h-9 rounded-full border border-black/10 flex items-center justify-center shrink-0 transition-colors duration-200 ${
                    isOpen ? "bg-[#0E0E10] text-white" : "bg-white text-[#0E0E10] group-hover:border-black/30"
                  }`}
                >
                  {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed pt-2">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
