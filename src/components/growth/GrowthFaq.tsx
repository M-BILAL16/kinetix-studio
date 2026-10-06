"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

const FAQS = [
  {
    q: "What marketing work do you actually do?",
    a: "We handle Google and Meta ads, SEO and site fixes, AEO, email, content, copywriting, monthly blogs, your Google Business listing, Google Analytics, and a reporting dashboard. Backlinks are offered too, and they are billed on their own.",
  },
  {
    q: "What is AEO?",
    a: "AEO means answer engine optimisation. When someone asks Google or an AI tool for a business like yours, we work so your name is one of the answers they see.",
  },
  {
    q: "Are backlinks included in the monthly work?",
    a: "No. Credible backlinking is charged separately. We only place links on sites that are real and relevant to your business.",
  },
  {
    q: "How will I know what is working?",
    a: "You get a reporting dashboard, and we connect Google Analytics. You can see visits, leads, and which ads or pages are bringing people in.",
  },
  {
    q: "Do you write the words as well?",
    a: "Yes. Copywriting covers the words on your ads, pages, and emails. Monthly blogs are a separate piece: one new post each month.",
  },
];

export default function GrowthFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#FAF9F5] py-28 site-gutter">
      <div className="mb-10 border-b border-black/10 pb-8">
        <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl">
          COMMON <span className="text-[#0047FF]">questions.</span>
        </h2>
      </div>

      <div className="divide-y divide-black/8">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={faq.q} className="py-6">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-sans text-lg font-bold text-[#0E0E10] sm:text-xl">{faq.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/10 bg-white">
                  {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              <AnimatePresence>
                {isOpen ? (
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden pt-4 font-sans text-base leading-relaxed text-[#6E6E78]"
                  >
                    {faq.a}
                  </motion.p>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
