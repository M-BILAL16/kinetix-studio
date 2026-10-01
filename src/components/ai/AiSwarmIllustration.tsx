"use client";

import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import {
  Layers,
  Database,
  Zap,
  ShieldCheck,
  Cpu,
  Radio,
  Sparkles,
  Activity,
  Maximize2,
  Workflow,
} from "lucide-react";
import confetti from "canvas-confetti";

interface SatelliteNode {
  id: string;
  name: string;
  label: string;
  sub: string;
  icon: React.ElementType;
  color: string;
  latency: string;
  coords: { x: number; y: number }; // Percentage position
  metrics: string;
  payload: string;
}

const SATELLITES: SatelliteNode[] = [
  {
    id: "orchestrator",
    name: "SWARM ORCHESTRATOR",
    label: "01 // COGNITIVE DISPATCHER",
    sub: "Decomposes complex requests into parallel micro-threads",
    icon: Layers,
    color: "#0047FF",
    latency: "142ms",
    coords: { x: 18, y: 18 },
    metrics: "Claude 3.7 Sonnet • Hybrid Reasoning",
    payload: "DECOMPOSING: [Goal -> 6 Parallel Tool Tasks]",
  },
  {
    id: "memory",
    name: "VECTOR MEMORY HUB",
    label: "02 // HYBRID RAG + GRAPH",
    sub: "Semantic similarity retrieval with zero context drift",
    icon: Database,
    color: "#10B981",
    latency: "18ms",
    coords: { x: 82, y: 22 },
    metrics: "GraphDB • Cosine 0.994 Sim",
    payload: "FETCHED: 4,096 Vector Embeddings @ 18ms",
  },
  {
    id: "action",
    name: "EXECUTION ENGINE",
    label: "03 // DETERMINISTIC TOOLS",
    sub: "Strict schema API execution across enterprise systems",
    icon: Zap,
    color: "#FF8A00",
    latency: "89ms",
    coords: { x: 18, y: 80 },
    metrics: "Function Calling • Zero Hallucination",
    payload: "TOOL FIRED: POST /api/v2/crm/commit_stage",
  },
  {
    id: "sentry",
    name: "REFLEXION SENTRY",
    label: "04 // SAFETY & VERIFICATION",
    sub: "Self-correcting critic enforcing enterprise invariants",
    icon: ShieldCheck,
    color: "#CEFF00",
    latency: "24ms",
    coords: { x: 82, y: 78 },
    metrics: "Deterministic Logic • SOC2 Ready",
    payload: "VERIFIED: Invariants passed with 99.99% confidence",
  },
];

export default function AiSwarmIllustration() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeNode, setActiveNode] = useState<SatelliteNode>(SATELLITES[0]);
  const [isStimulated, setIsStimulated] = useState(false);

  // Parallax with scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollRotate = useTransform(scrollYProgress, [0, 1], [-12, 16]);
  const scrollY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const scrollScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.02, 0.96]);

  // Interactive 3D mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 24, stiffness: 180 };
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

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

  const triggerPulse = (node: SatelliteNode) => {
    setActiveNode(node);
    setIsStimulated(true);
    try {
      confetti({
        particleCount: 35,
        spread: 45,
        origin: { x: node.coords.x / 100, y: node.coords.y / 100 },
        colors: [node.color, "#0047FF", "#10B981", "#FAF9F5"],
      });
    } catch {
      // safe fallback
    }
    setTimeout(() => setIsStimulated(false), 1800);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-3xl p-6 sm:p-8 bg-white border border-black/10 shadow-2xl overflow-hidden select-none"
      style={{ perspective: 1200 }}
    >
      {/* Background ambient grid & lighting */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#0047FF0D_1px,transparent_1px)] bg-[size:20px_20px]" />
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.12, 0.24, 0.12],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#0047FF]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#10B981]/15 blur-3xl"
        />
      </div>

      {/* Top HUD Telemetry Bar */}
      <div className="relative z-20 flex items-center justify-between pb-4 border-b border-black/8 mb-4">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0047FF] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#0047FF]"></span>
          </span>
          <span className="text-[11px] font-mono font-bold tracking-widest text-[#0E0E10] uppercase">
            AUTONOMOUS SWARM CORE // v4
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-black/8 text-[10px] font-mono text-[#0047FF] font-bold">
            INTERACTIVE KINETIC STAGE
          </span>
        </div>
      </div>

      {/* Main 3D Kinetic Neural Stage */}
      <motion.div
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          scale: scrollScale,
          y: scrollY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-[420px] sm:h-[460px] rounded-2xl bg-[#FAF9F5] border border-black/8 overflow-hidden flex items-center justify-center"
      >
        {/* SVG Synapse Connection Conduits */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
          <defs>
            <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0047FF" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0E0E10" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="lineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0E0E10" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="lineGrad3" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0E0E10" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="lineGrad4" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#CEFF00" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#0E0E10" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Diagonals to Central Neural Core */}
          <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="url(#lineGrad3)" strokeWidth="2" strokeDasharray="4 4" />
          <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="url(#lineGrad4)" strokeWidth="2" strokeDasharray="4 4" />

          {/* Peripheral Perimeter Conduits */}
          <path
            d="M 80 80 Q 250 30 420 80 Q 470 230 420 380 Q 250 430 80 380 Z"
            fill="none"
            stroke="#0000000A"
            strokeWidth="1.5"
          />
        </svg>

        {/* Concentric Rotating Orbital Rings */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Ring 1 (Outer) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-dashed border-black/12 flex items-center justify-between p-2"
          >
            <div className="w-2 h-2 rounded-full bg-[#0047FF]" />
            <div className="w-2 h-2 rounded-full bg-[#10B981]" />
          </motion.div>

          {/* Ring 2 (Middle Reverse) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-black/8 flex items-center justify-between p-3"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#CEFF00]" />
          </motion.div>

          {/* Ring 3 (Inner Fast) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute w-36 h-36 rounded-full border border-[#0047FF]/20"
          />
        </div>

        {/* THE CENTRAL NEURAL QUANTUM CORE */}
        <motion.div
          animate={{
            scale: isStimulated ? [1, 1.22, 1] : [1, 1.06, 1],
          }}
          transition={{ duration: isStimulated ? 0.6 : 3, repeat: isStimulated ? 1 : Infinity, ease: "easeInOut" }}
          className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#0E0E10] text-[#FAF9F5] shadow-2xl flex flex-col items-center justify-center border-4 border-white"
          style={{ transform: "translateZ(40px)" }}
        >
          {/* Pulsing Aura */}
          <div
            className="absolute -inset-3 rounded-full blur-md opacity-50 transition-colors duration-500 -z-10"
            style={{ backgroundColor: activeNode.color }}
          />

          <Cpu className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 text-white" />
          <span className="text-[8px] font-mono font-black uppercase tracking-widest mt-1 text-white/80">
            NEURAL CORE
          </span>
          <span className="text-[7px] font-mono text-[#10B981] font-bold">
            ● 99.9% ACTIVE
          </span>
        </motion.div>

        {/* 4 FLOATING KINETIC SATELLITE NODES */}
        {SATELLITES.map((sat) => {
          const isSelected = activeNode.id === sat.id;
          const Icon = sat.icon;

          return (
            <motion.div
              key={sat.id}
              animate={{
                y: [0, sat.coords.y < 50 ? -6 : 6, 0],
              }}
              transition={{
                duration: sat.coords.x < 50 ? 4 : 4.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${sat.coords.y}%`,
                left: `${sat.coords.x}%`,
                transform: "translate(-50%, -50%) translateZ(60px)",
              }}
              className="absolute z-20"
            >
              <button
                type="button"
                onClick={() => triggerPulse(sat)}
                className={`group relative p-3 sm:p-3.5 rounded-2xl border transition-all duration-300 text-left flex items-center gap-3 backdrop-blur-md ${
                  isSelected
                    ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-110 ring-2 ring-offset-2"
                    : "bg-white/90 hover:bg-white text-[#0E0E10] border-black/10 hover:border-black/30 shadow-md hover:scale-105"
                }`}
                style={{
                  boxShadow: isSelected ? `0 0 0 2px #FAF9F5, 0 0 0 4px ${sat.color}` : undefined,
                }}
              >
                {/* Node Icon Avatar */}
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-white shrink-0 shadow-sm"
                  style={{ backgroundColor: sat.color }}
                >
                  <Icon className="w-4 h-4 text-white" />
                </div>

                {/* Node Label Text */}
                <div className="hidden sm:block">
                  <div className="text-[10px] font-mono font-bold tracking-tight uppercase">
                    {sat.name}
                  </div>
                  <div className="text-[9px] font-mono opacity-70">
                    LATENCY: {sat.latency}
                  </div>
                </div>

                {/* Interactive Pulse Dot */}
                <span
                  className="w-2 h-2 rounded-full absolute -top-1 -right-1"
                  style={{ backgroundColor: sat.color }}
                />
              </button>
            </motion.div>
          );
        })}

        {/* Floating Telemetry Badge in bottom center */}
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full bg-white/80 backdrop-blur-md border border-black/10 text-[9px] font-mono text-[#0E0E10] shadow-xs flex items-center gap-1.5"
        >
          <Sparkles className="w-3 h-3 text-[#0047FF]" />
          <span>CLICK ANY NODE TO STIMULATE SYNAPTIC PATH</span>
        </motion.div>
      </motion.div>

      {/* Dynamic Synaptic Inspector Terminal Console (Bottom HUD) */}
      <div className="mt-4 p-4 rounded-2xl bg-[#0E0E10] text-[#FAF9F5] font-mono border border-black/10 shadow-lg">
        <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[10px]">
          <div className="flex items-center gap-2">
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: activeNode.color }}
            />
            <span className="text-white/60">ACTIVE AGENT TELEMETRY:</span>
            <span className="text-white font-bold">{activeNode.name}</span>
          </div>
          <span className="text-[#10B981] font-bold">LATENCY: {activeNode.latency}</span>
        </div>

        <div className="pt-2.5 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="text-white/80 truncate text-[11px]">
            &gt; <span className="text-[#CEFF00] font-bold">{activeNode.payload}</span>
          </div>
          <div className="text-[10px] text-white/50 shrink-0">
            {activeNode.metrics}
          </div>
        </div>
      </div>

      {/* Footer Specs Bar */}
      <div className="mt-3 pt-2.5 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#10B981]" />
          STRICT CONTEXT VECTOR ISOLATION
        </span>
        <span className="text-[#0E0E10] font-bold">SOC2 TYPE II COMPLIANT</span>
      </div>
    </div>
  );
}
