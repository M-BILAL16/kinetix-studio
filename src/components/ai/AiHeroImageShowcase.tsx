"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  Layers,
  Database,
  Zap,
  ShieldCheck,
  Cpu,
  Sparkles,
  Activity,
  CheckCircle2,
  Maximize2,
  Scan,
} from "lucide-react";

interface AgentPin {
  id: string;
  name: string;
  role: string;
  model: string;
  latency: string;
  position: { top: string; left: string };
  icon: React.ElementType;
  color: string;
  detail: string;
}

const AGENT_PINS: AgentPin[] = [
  {
    id: "orchestrator",
    name: "Swarm Orchestrator",
    role: "Intent Parsing & Sub-Task Planning",
    model: "Claude 3.7 Sonnet (Hybrid)",
    latency: "142ms",
    position: { top: "16%", left: "18%" },
    icon: Layers,
    color: "#0047FF",
    detail: "Decomposes unstructured requests into parallel deterministic workflows.",
  },
  {
    id: "memory",
    name: "Vector Memory Hub",
    role: "Semantic Retrieval & GraphDB",
    model: "Custom Hybrid RAG",
    latency: "18ms",
    position: { top: "16%", left: "80%" },
    icon: Database,
    color: "#10B981",
    detail: "Queries 4,096 high-dimensional vectors with zero context hallucination.",
  },
  {
    id: "execution",
    name: "Deterministic Tool Agent",
    role: "API Calls & System Execution",
    model: "Fine-Tuned Function Caller",
    latency: "89ms",
    position: { top: "74%", left: "18%" },
    icon: Zap,
    color: "#0047FF",
    detail: "Safely fires verified REST/GraphQL mutations directly to CRM & ERP.",
  },
  {
    id: "sentry",
    name: "Reflexion Sentry",
    role: "Safety & Schema Invariant Guard",
    model: "Deterministic Logic Engine",
    latency: "24ms",
    position: { top: "74%", left: "82%" },
    icon: ShieldCheck,
    color: "#10B981",
    detail: "Validates every output against SOC2/HIPAA guardrails before dispatch.",
  },
];

export default function AiHeroImageShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<AgentPin | null>(AGENT_PINS[0]);

  // Interactive 3D mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl p-4 sm:p-6 bg-white border border-black/10 shadow-2xl overflow-hidden select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Ambient Aura Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#0047FF]/25 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#10B981]/20 blur-3xl"
        />
      </div>

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-20 flex items-center justify-between pb-3.5 border-b border-black/8 mb-3 sm:mb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#10B981]"></span>
          </span>
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#0E0E10] uppercase">
            AUTONOMOUS SWARM ARCHITECTURE
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-black/8 text-[10px] font-mono text-[#0047FF] font-bold">
            LATENCY: &lt;180MS
          </span>
        </div>
      </div>

      {/* 3D Tilting Image Canvas Frame */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full aspect-square rounded-2xl overflow-hidden border border-black/10 bg-[#FAF9F5] shadow-inner group"
      >
        {/* The 3D High-Res Generated Artwork */}
        <Image
          src="/images/ai-agents-hero.jpg"
          alt="Autonomous AI Agent Swarm Core Architecture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Frosted Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Interactive Holographic Pins on the 4 Satellite Agent Cubes */}
        {AGENT_PINS.map((pin) => {
          const isSelected = activePin?.id === pin.id;
          const Icon = pin.icon;

          return (
            <div
              key={pin.id}
              style={{
                top: pin.position.top,
                left: pin.position.left,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute z-20"
            >
              <button
                type="button"
                onClick={() => setActivePin(pin)}
                className={`relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 backdrop-blur-md border ${
                  isSelected
                    ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] scale-110 shadow-xl ring-2 ring-[#0047FF]"
                    : "bg-white/80 hover:bg-white text-[#0E0E10] border-black/20 shadow-md hover:scale-105"
                }`}
              >
                {/* Pulse ring when not selected */}
                {!isSelected && (
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-xl opacity-40"
                    style={{ backgroundColor: pin.color }}
                  />
                )}
                <Icon className="w-4 h-4" style={{ color: isSelected ? "#FAF9F5" : pin.color }} />
              </button>
            </div>
          );
        })}

        {/* Center Quantum Core Badge */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-20 h-20 rounded-full border border-white/40 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg">
            <div className="w-4 h-4 rounded-full bg-[#0047FF] animate-pulse shadow-md" />
          </div>
        </div>

        {/* Instruction Chip on Image */}
        <div className="absolute bottom-3 left-3 z-10 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-black/10 text-[10px] font-mono text-[#0E0E10] font-bold shadow-xs flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#0047FF]" />
          <span>CLICK ANY AGENT CUBE TO INSPECT</span>
        </div>
      </motion.div>

      {/* Selected Agent Telemetry Inspector Console */}
      <AnimatePresence mode="wait">
        {activePin && (
          <motion.div
            key={activePin.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-4 p-4 rounded-2xl bg-[#0E0E10] text-[#FAF9F5] font-mono border border-black/10 shadow-lg space-y-2"
          >
            <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: activePin.color }}
                />
                <span className="font-bold text-white uppercase">{activePin.name}</span>
              </div>
              <span className="text-[#10B981] font-bold">LATENCY: {activePin.latency}</span>
            </div>

            <div className="text-xs text-white/90 leading-relaxed font-sans pt-1">
              {activePin.detail}
            </div>

            <div className="flex flex-wrap items-center justify-between pt-2 border-t border-white/10 text-[10px] text-white/60">
              <span>MODEL: <strong className="text-white">{activePin.model}</strong></span>
              <span className="text-[#10B981] font-bold">● ACTIVE IN SWARM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Security / Certification Bar */}
      <div className="mt-3 pt-2.5 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#10B981]" />
          ZERO-HALLUCINATION RUNTIME
        </span>
        <span className="text-[#0E0E10] font-bold">SOC2 & HIPAA READY</span>
      </div>
    </div>
  );
}
