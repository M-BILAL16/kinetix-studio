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
    q: "What is AI automation for business?",
    a: "AI automation uses intelligent systems to handle repetitive business tasks like instant lead follow-ups, 24/7 customer support, automatic calendar appointment booking, and cross-platform data synchronization. This frees your human staff to focus on high-value closing and strategic growth.",
    tag: "FUNDAMENTALS",
  },
  {
    q: "How does AI automation help my business grow faster?",
    a: "By replying to inquiries within 5 seconds, answering questions around the clock, and executing multi-step follow-up sequences automatically, businesses stop losing leads to slow response times. Most of our clients experience a 3x to 5x increase in qualified booked appointments within 30 to 60 days.",
    tag: "GROWTH IMPACT",
  },
  {
    q: "Do you actively serve businesses in Pakistan, the UAE, and Saudi Arabia?",
    a: "Yes! We specialize in localized AI systems tailored for Pakistan (Karachi, Lahore, Islamabad), the UAE (Dubai, Abu Dhabi), and Saudi Arabia (Riyadh, Jeddah). Our bots natively understand Roman Urdu, proper Urdu, English, and Arabic, and integrate with local payment and messaging workflows.",
    tag: "REGIONAL FOCUS",
  },
  {
    q: "Can you automate WhatsApp conversations and lead follow-ups end-to-end?",
    a: "Absolutely. WhatsApp automation is one of our deepest specialties. We configure verified WhatsApp Business Cloud API accounts, train conversational AI sales assistants to qualify buyer intent, deliver project brochures, and book meetings directly into your calendar.",
    tag: "WHATSAPP SYSTEMS",
  },
  {
    q: "How long does it take to implement a done-for-you automation system?",
    a: "Most turnkey systems are fully engineered, tested, and live in production within 2 to 4 weeks. We begin delivering value from Day 1 with our comprehensive Friction & System Audit.",
    tag: "DEPLOYMENT SPEED",
  },
  {
    q: "Do you provide ongoing monthly support and performance optimization?",
    a: "Yes. Every deployment includes ongoing technical maintenance, prompt fine-tuning, bug fixes, and monthly executive strategy sessions to continually compound your conversion yield.",
    tag: "SUPPORT & SLA",
  },
];

export default function AutomationFaq() {
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
            <span className="text-xs font-mono font-bold text-[#0047FF]">06 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              COMMON SPECIFICATIONS &amp; ANSWERS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            FREQUENTLY ASKED <br />
            <span className="font-serif italic font-normal text-[#0047FF]">
              questions.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            EVERYTHING YOU NEED TO KNOW ABOUT OUR TURNKEY AUTOMATION INTEGRATIONS.
          </p>
        </div>
      </div>

      {/* Accordion */}
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
                  <span className="text-[10px] font-mono text-[#0047FF] font-bold uppercase tracking-wider block mb-1">
                    {faq.tag}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-bold font-sans tracking-tight text-[#0E0E10] group-hover:text-[#0047FF] transition-colors">
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
