"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
  tag: string;
}

const FAQS: FaqItem[] = [
  {
    q: "How do you guarantee agents won't hallucinate or take destructive actions?",
    a: "We do not let raw LLM output trigger direct actions. Every tool invocation passes through a deterministic validation layer (Zod / JSON Schema). If an output does not conform 100% to verified type definitions, the agent automatically retries with reflexive error feedback or halts and flags a human operator. Furthermore, destructive or financial actions above your defined threshold require explicit human-in-the-loop authorization.",
    tag: "SAFETY & GUARDRAILS",
  },
  {
    q: "Does our proprietary company data ever train external AI models?",
    a: "Never. We enforce strict enterprise Zero-Data-Retention (ZDR) agreements with foundational API providers (Anthropic, OpenAI). Your data is never stored on external servers to train future models. For clients with heightened data sovereignty needs (healthcare, defense, fintech), we deploy fine-tuned open-source models (such as Llama 3 or DeepSeek) entirely inside your private VPC.",
    tag: "DATA PRIVACY",
  },
  {
    q: "How do your autonomous agents interface with our legacy or custom software?",
    a: "Our agents interface through bespoke deterministic connectors built on standard REST, GraphQL, gRPC, and SQL protocols. Whether your systems live on NetSuite, Salesforce, custom PostgreSQL databases, or proprietary internal APIs, we build strongly-typed function endpoints that give the agent direct, audited access to read context and execute updates.",
    tag: "INTEGRATION",
  },
  {
    q: "What is the typical deployment timeline from kick-off to production?",
    a: "A standard deployment sprint takes 3 to 5 weeks. Week 1 is an exhaustive Operational Leverage & Schema Audit. Weeks 2–3 encompass multi-agent state orchestration, vector memory ingestion, and sandbox evaluation. Week 4 introduces human-in-the-loop shadow runs. Full production edge cutover occurs in Week 5 with 24/7 telemetry monitoring.",
    tag: "TIMELINE",
  },
  {
    q: "What happens when an agent encounters an unexpected edge case?",
    a: "When an agent encounters ambiguous inputs or an unforeseen scenario outside its confidence threshold (e.g. <95%), it initiates an Autonomous Escalation Protocol. It halts the sensitive branch, compiles an executive summary of the context, past steps, and recommended options, and notifies the responsible human team member via Slack, Linear, or CRM notification.",
    tag: "RESILIENCE",
  },
];

export default function AiFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            GOVERNANCE & <br />
            <span className="text-[#0047FF]">
              implementation.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            DIRECT ANSWERS ON SECURITY, LATENCY, INTEGRATIONS, AND FAIL-SAFE PROTOCOLS.
          </p>
        </div>
      </div>

      {/* Accordion List */}
      <div className="w-full divide-y divide-black/10 border-b border-black/10">
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
