"use client";

import React from "react";
import { Cpu, ShieldCheck, Database, GitMerge, Check, Eye } from "lucide-react";

const STACK_LAYERS = [
  {
    layer: "01",
    title: "COGNITIVE & REASONING CORE",
    subtitle: "Adaptive Multi-Model Router",
    desc: "We don't rely on a single proprietary model. Our dynamic router directs incoming tasks to the optimal LLM based on latency, context window, and reasoning depth requirements.",
    components: [
      "Claude 3.7 Sonnet (Hybrid Reasoning)",
      "GPT-4o / o3-mini (High-Speed Tool Calling)",
      "DeepSeek-R1 (Complex Logical Verification)",
      "Private Llama-3 (On-Prem / High-Security VPC)",
    ],
    highlight: "Dynamic Cost & Latency Optimization",
    accent: "#0047FF",
  },
  {
    layer: "02",
    title: "DETERMINISTIC STATE ORCHESTRATION",
    subtitle: "Graph-Based Execution & Temporal Workflows",
    desc: "Prompt chains fail when edge cases arise. We build deterministic multi-agent state machines with checkpointing, transactional rollbacks, and persistent memory across multi-day lifecycles.",
    components: [
      "LangGraph State Machines",
      "Temporal / Inngest Resilient Queues",
      "Transactional Sub-Step Rollbacks",
      "Human-In-The-Loop Breakpoints",
    ],
    highlight: "Zero Orphaned Tasks // 100% Traceability",
    accent: "#CEFF00",
  },
  {
    layer: "03",
    title: "ENTERPRISE MEMORY & HYBRID RAG",
    subtitle: "Semantic Vector Stores & Knowledge Graphs",
    desc: "Agents are only as intelligent as the context they access. We synthesize vector embeddings with structured relational schemas to prevent context drift and hallucination.",
    components: [
      "pgvector + Pinecone Hybrid Search",
      "Knowledge Graph Entity Relations",
      "Hierarchical Summarization Buffers",
      "Sub-Millisecond Semantic Caching",
    ],
    highlight: "Zero Context Drift Across Sessions",
    accent: "#7C3AED",
  },
  {
    layer: "04",
    title: "ENTERPRISE SECURITY & INVARIANTS",
    subtitle: "Air-Gapped Privacy & Deterministic Tool Guardrails",
    desc: "Enterprise compliance is non-negotiable. Every API invocation is validated against strict Pydantic/Zod schemas, and sensitive customer data is sanitized before reaching model contexts.",
    components: [
      "Strict Output Schema Enforcement (Zod)",
      "Automated PII Masking & Redaction",
      "Zero-Data Retention API Agreements",
      "SOC2 Type II & HIPAA Aligned Architecture",
    ],
    highlight: "Zero Model Training on Your Data",
    accent: "#FF3B14",
  },
];

export default function AiArchitectureStack() {
  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            BUILT FOR ENTERPRISE <br />
            <span className="font-serif italic font-normal text-[#0047FF] lowercase">
              compliance.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            NOT TOY PROMPTS. A HARDENED SYSTEM ARCHITECTURE DESIGNED TO MEET STRICT DATA PRIVACY,
            AUDITABILITY, AND UPTIME STANDARDS.
          </p>
        </div>
      </div>

      {/* 4 Layers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {STACK_LAYERS.map((layer) => (
          <div
            key={layer.layer}
            className="bg-white rounded-3xl border border-black/10 p-8 sm:p-10 shadow-xl flex flex-col justify-between group hover:border-black/30 transition-all duration-300"
          >
            <div>
              {/* Layer Number & Highlight */}
              <div className="flex items-center justify-between text-xs font-mono mb-6">
                <span className="font-bold text-[#0047FF]">LAYER {layer.layer}</span>
                <span className="px-3 py-1 rounded-full bg-[#FAF9F5] border border-black/10 text-[10px] uppercase font-bold text-[#0E0E10]">
                  {layer.highlight}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-black font-sans tracking-tight text-[#0E0E10] mb-1">
                {layer.title}
              </h3>
              <div className="text-xs font-mono text-[#6E6E78] uppercase mb-4">
                {layer.subtitle}
              </div>

              {/* Description */}
              <p className="text-sm text-[#6E6E78] font-sans leading-relaxed mb-8">
                {layer.desc}
              </p>
            </div>

            {/* Components checklist */}
            <div className="pt-6 border-t border-black/8 space-y-2.5">
              <span className="block text-[10px] font-mono tracking-widest uppercase text-[#9E9EA8]">
                CORE TECHNICAL IMPLEMENTATION:
              </span>
              <div className="grid grid-cols-1 gap-2">
                {layer.components.map((comp) => (
                  <div
                    key={comp}
                    className="flex items-center gap-2.5 text-xs font-mono text-[#0E0E10] bg-[#FAF9F5] p-2.5 rounded-xl border border-black/5"
                  >
                    <Check className="w-3.5 h-3.5 text-[#CEFF00] shrink-0" />
                    <span>{comp}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
