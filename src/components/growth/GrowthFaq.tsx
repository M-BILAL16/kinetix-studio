"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle, ArrowUpRight } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  category: "all" | "aeo" | "paid" | "cro";
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    q: "What is AI Engine Optimization (AEO) and why is it replacing standard SEO?",
    a: "Traditional SEO focuses on chasing keyword rankings in Google's 10 blue links. Generative Engine Optimization (AEO) ensures that when high-intent enterprise buyers ask ChatGPT, Perplexity, Claude, or Google Gemini for vendor recommendations, your brand is the synthesized, verified authority. We structure your digital entity data, press citations, and technical semantic schemas so AI engines cite your company by name.",
    category: "aeo",
    tag: "AEO / AI SEARCH",
  },
  {
    q: "How do you prevent ad fatigue on high-spend paid campaigns?",
    a: "Most agencies run 2 or 3 static creatives until costs spike. We engineer modular creative systems: separating hooks, core arguments, visual formats, and CTAs into interchangeable components. We continuously deploy 15–25 variant micro-tests weekly, using automated rules to scale high-performing combinations while pruning underperformers before ad fatigue occurs.",
    category: "paid",
    tag: "PAID MEDIA",
  },
  {
    q: "Why do you engineer landing pages in Next.js instead of Webflow or WordPress?",
    a: "Speed and interaction quality directly dictate conversion rates. Off-the-shelf page builders load heavy JavaScript libraries and third-party plugins that drag load times past 3 seconds, losing 30%+ of ad traffic. Our custom Next.js landing experiences load at the global edge in under 200ms, maintain silky 60fps micro-animations, and support dynamic personalization based on the prospect's company domain.",
    category: "cro",
    tag: "NEXT.JS CONVERSION",
  },
  {
    q: "How quickly do we see measurable improvement in CAC and pipeline?",
    a: "Paid acquisition and landing page conversion optimizations typically generate measurable CAC compression within 10 to 14 days of launch. AI Search & AEO entity seeding compounds over a 30 to 60 day horizon as generative model indices ingest and verify your domain citations.",
    category: "paid",
    tag: "TIMELINE & ROI",
  },
  {
    q: "How do you track attribution accurately in a cookie-less privacy landscape?",
    a: "We avoid reliance on client-side third-party cookies. We implement robust First-Party Server-Side Tracking (Conversions API) directly tied to your CRM records (HubSpot, Salesforce, Stripe). When a lead converts into a signed contract 60 days later, that revenue is accurately attributed back to the exact initial campaign hook and touchpoint.",
    category: "all",
    tag: "CLOSED-LOOP ATTRIBUTION",
  },
];

export default function GrowthFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredFaqs =
    selectedFilter === "all" ? FAQS : FAQS.filter((f) => f.category === selectedFilter || f.category === "all");

  return (
    <section className="py-24 md:py-32 site-gutter bg-[#FAF9F5] border-b border-black/10 overflow-hidden relative">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/8">
          <div>
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#0047FF] font-bold mb-3 flex items-center gap-2">
              <HelpCircle className="w-3.5 h-3.5" />
              GROWTH ARCHITECTURE FAQ
            </div>
            <h2 className="text-3xl sm:text-5xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.95]">
              FREQUENTLY ASKED <br />
              <span className="font-serif italic font-normal text-[#0047FF] lowercase tracking-normal">
                growth
              </span>{" "}
              QUESTIONS.
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: "all", label: "All Topics" },
              { id: "aeo", label: "AEO & AI Search" },
              { id: "paid", label: "Paid Media" },
              { id: "cro", label: "Next.js Landers" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setSelectedFilter(f.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase transition-all ${
                  selectedFilter === f.id
                    ? "bg-[#0E0E10] text-[#FAF9F5] shadow-sm"
                    : "bg-white text-[#6E6E78] border border-black/10 hover:border-black/25"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordion Stack */}
        <div className="divide-y divide-black/8 my-8">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left gap-4 group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-mono font-bold text-[#0047FF]">
                      0{idx + 1}
                    </span>
                    <span className="text-lg sm:text-xl font-sans font-bold text-[#0E0E10] group-hover:text-[#0047FF] transition-colors">
                      {faq.q}
                    </span>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? "bg-[#0E0E10] text-white border-[#0E0E10] rotate-180"
                        : "bg-white text-[#0E0E10] border-black/10 group-hover:border-black/30"
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4 pl-10 pr-4"
                    >
                      <span className="inline-block text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#FF3B14]/10 text-[#0047FF] mb-2 uppercase">
                        {faq.tag}
                      </span>
                      <p className="text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed">
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
