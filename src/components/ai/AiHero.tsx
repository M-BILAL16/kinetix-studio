"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Bot,
  Zap,
  ShieldCheck,
  Terminal,
  ArrowRight,
  Database,
  ArrowDown,
  Layers,
  Sparkles,
} from "lucide-react";

interface AiHeroProps {
  onOpenContact: () => void;
}

interface AgentNode {
  id: string;
  name: string;
  role: string;
  model: string;
  status: "idle" | "reasoning" | "executing";
  latency: string;
  confidence: string;
  desc: string;
}

const AGENT_NODES: AgentNode[] = [
  {
    id: "orchestrator",
    name: "Swarm Orchestrator",
    role: "Intent Classification & Task Decomposition",
    model: "Claude 3.7 Sonnet (Hybrid Reasoning)",
    status: "reasoning",
    latency: "142ms",
    confidence: "99.8%",
    desc: "Breaks incoming enterprise requests into atomic parallel sub-tasks and assigns to specialized agents.",
  },
  {
    id: "memory",
    name: "Semantic Vector Memory",
    role: "Episodic & Procedural Context Retrieval",
    model: "Custom Hybrid RAG + GraphDB",
    status: "executing",
    latency: "18ms",
    confidence: "100%",
    desc: "Retrieves company policies, schemas, and historical precedents without context drift.",
  },
  {
    id: "reasoning",
    name: "Autonomous Action Agent",
    role: "Deterministic Tool Execution & Schema Guard",
    model: "Fine-Tuned Function Calling LLM",
    status: "executing",
    latency: "89ms",
    confidence: "99.94%",
    desc: "Executes verified API calls against CRM, ERP, and payment gateways with zero hallucinations.",
  },
  {
    id: "critic",
    name: "Reflexion & Safety Sentry",
    role: "Self-Correction & Output Verification",
    model: "Deterministic Logic Engine",
    status: "idle",
    latency: "24ms",
    confidence: "99.99%",
    desc: "Validates every output against compliance and business invariants before committing actions.",
  },
];

export default function AiHero({ onOpenContact }: AiHeroProps) {
  const [selectedNode, setSelectedNode] = useState<AgentNode>(AGENT_NODES[0]);

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 px-4 sm:px-8 lg:px-12 bg-editorial-grid bg-noise border-b border-black/10 overflow-hidden">
      {/* Top Editorial Index & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/8 pb-4 mb-12 gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#0047FF] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E0E10]">
            AI & TECHNOLOGY LAB // AUTONOMOUS AGENTS & AUTOMATION
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-[#6E6E78]">
          <span className="hidden sm:inline">ARCHITECTURE: MULTI-AGENT SWARMS</span>
          <span className="text-[#0047FF] font-semibold">ENGINE: ACTIVE // 2026.1</span>
        </div>
      </div>

      {/* Main Grid: Headline + Interactive Agent Mesh */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Monumental Editorial Typography (7 cols) */}
        <div className="lg:col-span-7 flex flex-col z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-[#0E0E10] font-semibold mb-6 w-fit shadow-xs">
            <Bot className="w-3.5 h-3.5 text-[#0047FF]" />
            <span>ENTERPRISE-GRADE AUTONOMOUS RUNTIMES</span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans">
            BUILDING AGENTS <br />
            THAT RUN WORK <br />
            <span className="font-serif italic font-normal text-[#0047FF] lowercase text-6xl sm:text-8xl xl:text-9xl pr-2">
              without
            </span>{" "}
            BOTTLENECKS.
          </h1>

          <p className="mt-8 text-base sm:text-xl text-[#6E6E78] leading-relaxed max-w-2xl font-sans">
            We architect, fine-tune, and deploy bespoke multi-agent AI systems and deterministic
            workflows that replace manual hours with sub-second execution — fully compliant,
            secure, and integrated into your core stack.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              data-cursor="start"
              className="px-8 py-4 rounded-full bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>DEPLOY AN AUTONOMOUS AGENT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#agent-showcase"
              className="px-6 py-4 rounded-full bg-white hover:bg-black/5 text-[#0E0E10] border border-black/15 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 flex items-center gap-2"
            >
              <span>EXPLORE CAPABILITIES</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Core Trust Badges */}
          <div className="mt-12 pt-8 border-t border-black/8 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                &lt;180ms
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Reasoning Latency
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                99.94%
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Deterministic Accuracy
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                Zero-Retention
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Enterprise Privacy
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive Agent Mesh Simulator (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Header Telemetry */}
            <div className="flex items-center justify-between border-b border-black/8 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-[11px] font-mono font-bold tracking-widest text-[#0E0E10] uppercase">
                  AGENT SWARM TELEMETRY
                </span>
              </div>
              <span className="text-[10px] font-mono bg-[#FAF9F5] px-2.5 py-1 rounded-full text-[#0047FF] font-semibold border border-black/5">
                LIVE CLUSTER: 4 AGENTS
              </span>
            </div>

            {/* Interactive Node Matrix */}
            <div className="space-y-3 mb-6">
              <div className="text-[10px] font-mono uppercase text-[#6E6E78] tracking-wider mb-2">
                CLICK AN AGENT TO INSPECT TELEMETRY:
              </div>

              {AGENT_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all duration-200 flex items-center justify-between ${
                      isSelected
                        ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-md"
                        : "bg-[#FAF9F5] text-[#0E0E10] border-black/8 hover:border-black/20 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                          isSelected ? "bg-white/10 text-white" : "bg-black/5 text-[#0047FF]"
                        }`}
                      >
                        {node.id === "orchestrator" && <Layers className="w-4 h-4" />}
                        {node.id === "memory" && <Database className="w-4 h-4" />}
                        {node.id === "reasoning" && <Zap className="w-4 h-4" />}
                        {node.id === "critic" && <ShieldCheck className="w-4 h-4" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold font-sans tracking-tight">
                          {node.name}
                        </div>
                        <div
                          className={`text-[10px] font-mono truncate max-w-[190px] sm:max-w-[240px] ${
                            isSelected ? "text-stone-300" : "text-[#6E6E78]"
                          }`}
                        >
                          {node.role}
                        </div>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                          isSelected
                            ? "bg-[#0047FF] text-white"
                            : "bg-black/5 text-[#10B981]"
                        }`}
                      >
                        {node.latency}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Node Inspector Console */}
            <div className="bg-[#FAF9F5] rounded-2xl border border-black/8 p-5 font-mono">
              <div className="flex items-center justify-between text-[10px] text-[#6E6E78] pb-2 border-b border-black/6">
                <span>INSPECTOR: {selectedNode.name.toUpperCase()}</span>
                <span className="text-[#0047FF] font-bold">CONF: {selectedNode.confidence}</span>
              </div>

              <div className="mt-3 text-xs text-[#0E0E10] space-y-2">
                <div>
                  <span className="text-[#6E6E78]">BACKBONE: </span>
                  <span className="font-bold text-[#0E0E10]">{selectedNode.model}</span>
                </div>
                <div className="text-[11px] leading-relaxed text-[#6E6E78]">
                  &gt; {selectedNode.desc}
                </div>
                <div className="flex items-center gap-2 pt-2 text-[10px] text-[#10B981]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span>SCHEMA VALIDATION: STRICT ENFORCEMENT</span>
                </div>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-5 pt-3 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
              <span>ZERO HALLUCINATION PROTOCOL</span>
              <span className="text-[#0E0E10] font-bold">SOC2 & HIPAA READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
