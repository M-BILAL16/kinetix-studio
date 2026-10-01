"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  FileText,
  MessageSquare,
  TrendingUp,
  Settings,
  CreditCard,
  Calendar,
  CheckCircle,
  PhoneCall,
  Sparkles,
  Activity,
  Layers,
} from "lucide-react";

interface AgentPin {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  latency: string;
  position: { top: string; left: string };
  icon: React.ElementType;
  color: string;
}

const AGENTS_LIST: AgentPin[] = [
  {
    id: "file-analysis",
    number: "01",
    category: "FILE ANALYSIS",
    name: "File Analysis Agent",
    description: "Upload documents, sheets, or images. The agent reads them and does the job you ask for.",
    latency: "320ms",
    position: { top: "25%", left: "25%" },
    icon: FileText,
    color: "#0047FF",
  },
  {
    id: "support",
    number: "02",
    category: "SUPPORT",
    name: "Customer Support Agent",
    description: "Answers customer questions on WhatsApp and your website, then sends hard cases to your team.",
    latency: "12ms",
    position: { top: "18%", left: "50%" },
    icon: MessageSquare,
    color: "#10B981",
  },
  {
    id: "sales",
    number: "03",
    category: "SALES",
    name: "Sales & Follow-Up Agent",
    description: "Talks to new leads, asks useful questions, and books meetings automatically.",
    latency: "84ms",
    position: { top: "25%", left: "75%" },
    icon: TrendingUp,
    color: "#0047FF",
  },
  {
    id: "ops",
    number: "04",
    category: "DAILY WORK",
    name: "Business Operations Agent",
    description: "Handles repeated office work and keeps your internal tools and CRM updated.",
    latency: "45ms",
    position: { top: "50%", left: "84%" },
    icon: Settings,
    color: "#6E6E78",
  },
  {
    id: "booking",
    number: "05",
    category: "BOOKING",
    name: "Booking and Invoicing Agent",
    description: "Books the job, makes the bill, and reminds the customer to pay without human intervention.",
    latency: "60ms",
    position: { top: "74%", left: "76%" },
    icon: CreditCard,
    color: "#FF8A00",
  },
  {
    id: "schedule",
    number: "06",
    category: "SCHEDULE",
    name: "Appointments & Scheduling Agent",
    description: "Finds an open time, sets the appointment, and sends calendar invites and reminders.",
    latency: "18ms",
    position: { top: "82%", left: "50%" },
    icon: Calendar,
    color: "#10B981",
  },
  {
    id: "quality",
    number: "07",
    category: "QUALITY",
    name: "Work Review Agent",
    description: "Checks documents, invoices, and records for missing or wrong details with strict guardrails.",
    latency: "28ms",
    position: { top: "74%", left: "25%" },
    icon: CheckCircle,
    color: "#0047FF",
  },
  {
    id: "calling",
    number: "08",
    category: "CALLING",
    name: "Inbound / Outbound Calling Agent",
    description: "Answers incoming voice calls and makes outgoing calls, then routes complex cases to your staff.",
    latency: "110ms",
    position: { top: "50%", left: "16%" },
    icon: PhoneCall,
    color: "#10B981",
  },
];

export default function AiHeroImageShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePin, setActivePin] = useState<AgentPin>(AGENTS_LIST[1]); // Default to WhatsApp support

  // Interactive 3D mouse tilt physics
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 200 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);

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
          className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#10B981]/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#0047FF]/20 blur-3xl"
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
            8-AGENT AUTONOMOUS ECOSYSTEM
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded-full bg-[#FAF9F5] border border-black/8 text-[10px] font-mono text-[#0047FF] font-bold">
            CLUSTER: 8 AGENTS
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
        {/* The 3D 8-Agent Artwork */}
        <Image
          src="/images/ai-agent-ecosystem.jpg"
          alt="8-Agent Autonomous AI Ecosystem Architecture"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Frosted Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />

        {/* Interactive Holographic Click Pins for all 8 Agents */}
        {AGENTS_LIST.map((agent) => {
          const isSelected = activePin.id === agent.id;
          const Icon = agent.icon;

          return (
            <div
              key={agent.id}
              style={{
                top: agent.position.top,
                left: agent.position.left,
                transform: "translate(-50%, -50%)",
              }}
              className="absolute z-20"
            >
              <button
                type="button"
                onClick={() => setActivePin(agent)}
                className={`relative flex items-center justify-center p-2 rounded-xl transition-all duration-300 backdrop-blur-md border ${
                  isSelected
                    ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] scale-110 shadow-xl ring-2 ring-[#10B981]"
                    : "bg-white/85 hover:bg-white text-[#0E0E10] border-black/20 shadow-md hover:scale-105"
                }`}
              >
                {!isSelected && (
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-xl opacity-35"
                    style={{ backgroundColor: agent.color }}
                  />
                )}
                <Icon className="w-3.5 h-3.5" style={{ color: isSelected ? "#FAF9F5" : agent.color }} />
              </button>
            </div>
          );
        })}

        {/* Floating Instruction Chip on Image */}
        <div className="absolute bottom-3 left-3 z-10 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-black/10 text-[10px] font-mono text-[#0E0E10] font-bold shadow-xs flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
          <span>CLICK ANY OF THE 8 AGENTS TO INSPECT</span>
        </div>
      </motion.div>

      {/* Selected Agent Telemetry Inspector Console */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePin.id}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-4 p-4 rounded-2xl bg-[#0E0E10] text-[#FAF9F5] font-mono border border-black/10 shadow-lg space-y-2"
        >
          <div className="flex items-center justify-between text-[11px] pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white font-bold">
                {activePin.number} // {activePin.category}
              </span>
              <span className="font-bold text-white uppercase">{activePin.name}</span>
            </div>
            <span className="text-[#10B981] font-bold text-[10px]">RESPONSE: &lt; {activePin.latency}</span>
          </div>

          <div className="text-xs text-white/90 leading-relaxed font-sans pt-1">
            {activePin.description}
          </div>

          <div className="flex flex-wrap items-center justify-between pt-2 border-t border-white/10 text-[10px] text-white/60">
            <span>STATUS: <strong className="text-white">ONLINE // 24/7</strong></span>
            <span className="text-[#10B981] font-bold">● ZERO-HALLUCINATION RUNTIME</span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Security / Certification Bar */}
      <div className="mt-3 pt-2.5 border-t border-black/8 flex items-center justify-between text-[10px] font-mono text-[#6E6E78]">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-[#10B981]" />
          SEAMLESS TOOL & CRM INTEGRATION
        </span>
        <span className="text-[#0E0E10] font-bold">SOC2 & HIPAA READY</span>
      </div>
    </div>
  );
}
