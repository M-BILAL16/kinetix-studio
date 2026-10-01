"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  Play,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  ArrowRight,
  Sparkles,
  Sliders,
  Clock,
  DollarSign,
  Activity,
  Bot,
  Layers,
} from "lucide-react";
import confetti from "canvas-confetti";

interface AutomationHeroProps {
  onOpenContact: () => void;
}

type IndustryType = "real-estate" | "clinics" | "ecommerce" | "b2b";

interface PipelineStep {
  id: string;
  stepNumber: string;
  title: string;
  sub: string;
  badge: string;
  latency: string;
  detail: string;
}

const INDUSTRY_DATA: Record<
  IndustryType,
  {
    name: string;
    icon: React.ElementType;
    headline: string;
    context: string;
    samplePrompt: string;
    sampleReply: string;
    pipeline: PipelineStep[];
    stat: string;
    statLabel: string;
  }
> = {
  "real-estate": {
    name: "Real Estate (PK & UAE)",
    icon: Building2,
    headline: "Zero-Latency Property Inquiries & WhatsApp Site Visit Dispatch",
    context: "Eliminating dropped leads across DHA, Bahria, and Dubai Off-Plan developments.",
    samplePrompt: "3-bed townhouse available in Dubai Hills? Budget is around AED 2.8M.",
    sampleReply:
      "Ji bilkul! Found 2 prime inventory units matching AED 2.8M. Digital brochure sent to your WhatsApp. Would you like a site visit tomorrow at 4 PM?",
    stat: "340% Higher",
    statLabel: "Site-Visit Show-Up Rate",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "Meta / Portal Lead Ingestion",
        sub: "Instant Webhook trigger",
        badge: "0.2s Event",
        latency: "42ms",
        detail: "Ingests prospect contact, source ad ID, and property interest payload.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "Linguistic & Budget Qualification",
        sub: "Roman Urdu & English parser",
        badge: "AI Triage",
        latency: "1.4s",
        detail: "Verifies budget readiness, payment terms (cash vs mortgage), and preferred timeline.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "Dynamic Brochure & Video Dispatch",
        sub: "Direct WhatsApp Delivery",
        badge: "Auto-Fulfill",
        latency: "0.8s",
        detail: "Generates custom PDF floorplan & price-sheet delivered in 1-on-1 WhatsApp thread.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Calendar Booking & VIP Escalation",
        sub: "Senior Agent Hand-off",
        badge: "Confirmed",
        latency: "Instant",
        detail: "Books physical site-tour, locks slot in agent Google Calendar, and sends SMS reminder.",
      },
    ],
  },
  clinics: {
    name: "Medical & Aesthetic Clinics",
    icon: Stethoscope,
    headline: "24/7 Patient Triage, Doctor Slot Booking & Zero No-Shows",
    context: "Handling hundreds of patient queries in Urdu and English without front-desk bottlenecks.",
    samplePrompt: "Doctor sahab available hain kal laser treatment consultation ke liye?",
    sampleReply:
      "Ji Dr. Ayesha kal available hain 3:00 PM aur 6:30 PM par. Konsa slot book karein aapke liye?",
    stat: "-68%",
    statLabel: "Patient No-Show Rate",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "24/7 Patient WhatsApp Intake",
        sub: "Inbound symptom triage",
        badge: "Live 24/7",
        latency: "35ms",
        detail: "Identifies requested treatment, urgency level, and preferred doctor.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "Clinic Software Calendar Sync",
        sub: "EMR / Clinic PMS API",
        badge: "Live Sync",
        latency: "0.6s",
        detail: "Checks real-time doctor availability without front-desk intervention.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "Pre-Consultation Verification",
        sub: "SMS / WhatsApp confirmation",
        badge: "Secured",
        latency: "Instant",
        detail: "Collects basic medical intake, sends clinic location pin, and issues appointment token.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Automated Reminder Cadence",
        sub: "24h & 2h Anti-Ghosting",
        badge: "0% Drop",
        latency: "Scheduled",
        detail: "Sends friendly reminder prompts with 1-click confirmation or rescheduling.",
      },
    ],
  },
  ecommerce: {
    name: "E-Commerce & Retail",
    icon: ShoppingBag,
    headline: "Automated COD Confirmation, Cart Recovery & 1-Click Support",
    context: "Slashing return-to-origin (RTO) rates and recovering lost revenue on autopilot.",
    samplePrompt: "Mera order #8921 confirm hua ya nahi? Delivery kab tak aayegi?",
    sampleReply:
      "Aapka order #8921 dispatch ho chuka hai via Courier. Estimated delivery Thursday 2 PM. Tracking link sent!",
    stat: "+28% Revenue",
    statLabel: "Recovered Abandoned Carts",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "Shopify / WooCommerce Webhook",
        sub: "Abandoned cart event",
        badge: "Real-Time",
        latency: "18ms",
        detail: "Detects uncompleted checkouts and logs cart value and customer WhatsApp number.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "Smart Incentive Trigger",
        sub: "Personalized discount logic",
        badge: "Algorithmic",
        latency: "1.1s",
        detail: "Dispatches tailored WhatsApp recovery offer with 1-click checkout link.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "COD Verification & Address Triage",
        sub: "Anti-RTO Verification",
        badge: "Fraud Guard",
        latency: "0.5s",
        detail: "Requests 1-click WhatsApp location or button confirmation before dispatch.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Courier Tracking & Review Loop",
        sub: "Post-Purchase Delight",
        badge: "Delivered",
        latency: "Continuous",
        detail: "Automated delivery updates followed by 5-star Google Review request.",
      },
    ],
  },
  b2b: {
    name: "B2B & Consultancies",
    icon: Briefcase,
    headline: "Inbound Pipeline Qualification & Instant Executive Calendar Booking",
    context: "Turning cold inbound leads into qualified sales meetings in under 3 minutes.",
    samplePrompt: "We need custom CRM automation for a 45-person sales team. What are the costs?",
    sampleReply:
      "Enterprise systems range from $2.5k to $8k depending on endpoint integrations. Let's schedule a 20-min technical architecture call with our lead engineer.",
    stat: "4.2x More",
    statLabel: "Qualified Sales Calls",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "Inbound Form / DM Ingestion",
        sub: "HubSpot & LinkedIn sync",
        badge: "Omni-Channel",
        latency: "50ms",
        detail: "Captures prospect company size, software stack, and monthly budget.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "AI Fit & Readiness Scoring",
        sub: "ICP verification matrix",
        badge: "ICP Score",
        latency: "0.9s",
        detail: "Ranks lead viability based on revenue threshold and integration feasibility.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "Cal.com VIP Scheduling",
        sub: "Direct Calendar Access",
        badge: "Booked",
        latency: "Instant",
        detail: "Prospect chooses exact available slot with automated timezone conversion.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Executive Slack & Briefing Dispatch",
        sub: "Zero Manual Prep",
        badge: "Dispatched",
        latency: "Real-Time",
        detail: "Generates concise pre-call intelligence brief pushed directly to founder's Slack.",
      },
    ],
  },
};

export default function AutomationHero({ onOpenContact }: AutomationHeroProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>("real-estate");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [monthlyLeads, setMonthlyLeads] = useState<number>(1200);

  const currentData = INDUSTRY_DATA[selectedIndustry];

  // Dynamic calculations based on slider
  const hoursSavedPerMonth = Math.round((monthlyLeads * 14) / 60); // 14 mins per lead saved
  const recoveredRevenue = Math.round(monthlyLeads * 0.12 * 450); // 12% extra conversion * $450 avg value

  const handleSimulate = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setActiveStepIndex(0);

    const stepInterval = setInterval(() => {
      setActiveStepIndex((prev) => {
        if (prev >= 3) {
          clearInterval(stepInterval);
          setIsSimulating(false);
          try {
            confetti({
              particleCount: 50,
              spread: 60,
              origin: { y: 0.5 },
              colors: ["#10B981", "#0047FF", "#CEFF00", "#0E0E10"],
            });
          } catch {
            // safe fallback
          }
          return 3;
        }
        return prev + 1;
      });
    }, 650);
  };

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-[#FAF9F5] border-b border-black/10 overflow-hidden">
      {/* Background Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-[#0047FF]/10 blur-3xl pointer-events-none" />
      </div>

      <div className="site-gutter max-w-7xl mx-auto relative z-10">
        {/* TOP COMMAND DECK BAR */}
        <div className="rounded-2xl bg-white border border-black/10 p-4 sm:p-5 shadow-sm mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
            </span>
            <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E0E10]">
              AUTONOMOUS OPERATIONS COMMAND DECK // v5.1
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] font-mono text-[#6E6E78]">
            <span className="hidden md:inline-flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-[#10B981]" />
              META CLOUD API: <strong className="text-[#0E0E10]">100% HEALTH</strong>
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#0047FF]" />
              AVG RESPONSE: <strong className="text-[#0E0E10]">&lt; 2.8 SEC</strong>
            </span>
            <span className="px-3 py-1 rounded-full bg-[#0E0E10] text-[#FAF9F5] font-bold text-[10px]">
              REGIONS: PK • UAE • GCC • UK
            </span>
          </div>
        </div>

        {/* FULL-WIDTH INTEGRATED ARCHITECTURAL HEADER */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold mb-2">
                <Zap className="w-3.5 h-3.5" />
                DONE-FOR-YOU REVENUE & WORKFLOW AUTOMATIONS
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.93]">
                YOUR ENTIRE SALES &amp; OPS PIPELINE. <br />
                <span className="font-serif italic font-normal text-[#0047FF] lowercase tracking-normal">
                  autonomous.
                </span>{" "}
                24/7/365.
              </h1>
            </div>

            <div className="lg:max-w-sm space-y-3">
              <p className="text-sm font-sans text-[#6E6E78] leading-relaxed">
                We design and engineer bespoke AI sales agents, WhatsApp lead pipelines, and backend
                automations that capture, qualify, and close inbound leads in seconds.
              </p>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-6 py-3 rounded-full bg-[#0E0E10] hover:bg-[#10B981] text-[#FAF9F5] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-md hover:scale-[1.02]"
                >
                  <span>CLAIM FREE AI AUDIT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleSimulate}
                  className={`px-5 py-3 rounded-full border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                    isSimulating
                      ? "bg-[#10B981] text-white border-[#10B981]"
                      : "bg-white hover:bg-black/5 text-[#0E0E10] border-black/15"
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : "text-[#10B981]"}`} />
                  <span>{isSimulating ? "SIMULATING..." : "TEST LIVE RUN"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* INDUSTRY BLUEPRINT SWITCHER TABS */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2">
            {(Object.keys(INDUSTRY_DATA) as IndustryType[]).map((key) => {
              const item = INDUSTRY_DATA[key];
              const Icon = item.icon;
              const isSelected = selectedIndustry === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setSelectedIndustry(key);
                    setActiveStepIndex(0);
                  }}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs font-mono font-bold tracking-wider uppercase transition-all duration-300 shrink-0 border ${
                    isSelected
                      ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-md scale-[1.02]"
                      : "bg-white hover:bg-[#F4F1EA] text-[#6E6E78] hover:text-[#0E0E10] border-black/10"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#10B981]" : "text-[#6E6E78]"}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* PANORAMIC INTERACTIVE WORKFLOW CANVAS */}
        <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 shadow-xl relative overflow-hidden mb-12">
          {/* Canvas Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-black/8 gap-4">
            <div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest">
                ACTIVE PIPELINE TOPOLOGY:
              </div>
              <h2 className="text-xl sm:text-2xl font-sans font-black text-[#0E0E10] mt-0.5">
                {currentData.headline}
              </h2>
            </div>
            <div className="flex items-center gap-4 text-right">
              <div className="p-3 rounded-xl bg-[#FAF9F5] border border-black/6">
                <div className="text-[9px] font-mono text-[#6E6E78] uppercase">DOCUMENTED LIFT</div>
                <div className="text-lg font-mono font-black text-[#10B981]">{currentData.stat}</div>
                <div className="text-[9px] font-mono text-[#6E6E78]">{currentData.statLabel}</div>
              </div>
            </div>
          </div>

          {/* 4-Step Connected Circuit Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
            {currentData.pipeline.map((step, idx) => {
              const isCurrent = activeStepIndex === idx;
              const isCompleted = activeStepIndex > idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-[1.03] ring-2 ring-[#10B981]"
                      : isCompleted
                      ? "bg-[#10B981]/10 text-[#0E0E10] border-[#10B981]/30"
                      : "bg-[#FAF9F5] hover:bg-white text-[#0E0E10] border-black/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-mono font-black px-2 py-0.5 rounded-full ${
                          isCurrent
                            ? "bg-[#10B981] text-white"
                            : "bg-black/5 text-[#6E6E78]"
                        }`}
                      >
                        STAGE {step.stepNumber}
                      </span>
                      <span
                        className={`text-[10px] font-mono font-bold ${
                          isCurrent ? "text-[#10B981]" : "text-[#6E6E78]"
                        }`}
                      >
                        {step.latency}
                      </span>
                    </div>

                    <div className="text-base font-sans font-bold leading-tight mb-1">
                      {step.title}
                    </div>
                    <div
                      className={`text-xs font-sans mb-4 ${
                        isCurrent ? "text-stone-300" : "text-[#6E6E78]"
                      }`}
                    >
                      {step.sub}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-current/10">
                    <div
                      className={`text-[11px] font-mono leading-relaxed ${
                        isCurrent ? "text-stone-400" : "text-[#6E6E78]"
                      }`}
                    >
                      &gt; {step.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Live Dialogue Preview Box (Simulated Output) */}
          <div className="mt-8 p-5 rounded-2xl bg-[#0E0E10] text-[#FAF9F5] border border-black/10">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
              <span className="text-white/60">LIVE LINGUISTIC & CONVERSATIONAL INFERENCE ENGINE</span>
              <span className="text-[#10B981] font-bold">● ACTIVE WHATSAPP THREAD</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-xs font-mono">
              {/* User Inbound */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="text-[10px] text-white/50 uppercase">INBOUND CLIENT QUERY (URDU/ENG):</div>
                <div className="text-white font-sans text-sm">&quot;{currentData.samplePrompt}&quot;</div>
              </div>

              {/* Bot Outbound */}
              <div className="p-3.5 rounded-xl bg-[#10B981]/10 border border-[#10B981]/30 space-y-1">
                <div className="text-[10px] text-[#10B981] uppercase font-bold">AI SALES AGENT RESPONSE (&lt; 2.8S):</div>
                <div className="text-white font-sans text-sm">&quot;{currentData.sampleReply}&quot;</div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: VALUE CALCULATOR & INSTANT ENGAGEMENT BAR */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F4F1EA] rounded-3xl p-6 sm:p-10 border border-black/10">
          {/* Left: Interactive Volume Slider */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase text-[#6E6E78] tracking-widest">
                  INTERACTIVE IMPACT ESTIMATOR
                </span>
                <h3 className="text-xl font-sans font-black text-[#0E0E10]">
                  Your Estimated Monthly Inbound Volume
                </h3>
              </div>
              <span className="text-2xl font-mono font-black text-[#0E0E10]">
                {monthlyLeads.toLocaleString()} leads/mo
              </span>
            </div>

            <input
              type="range"
              min="200"
              max="5000"
              step="100"
              value={monthlyLeads}
              onChange={(e) => setMonthlyLeads(Number(e.target.value))}
              className="w-full accent-[#10B981] cursor-pointer"
            />
            <div className="flex justify-between text-[11px] font-mono text-[#6E6E78]">
              <span>200 leads/mo</span>
              <span>1,500</span>
              <span>3,000</span>
              <span>5,000+ leads/mo</span>
            </div>
          </div>

          {/* Right: Calculated Yield Metrics */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-2xl bg-white border border-black/8 text-center">
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase">HOURS SAVED</div>
              <div className="text-2xl font-mono font-black text-[#0E0E10] mt-1">
                {hoursSavedPerMonth}h
              </div>
              <div className="text-[9px] font-mono text-[#10B981]">/ month eliminated</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/8 text-center">
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase">RECOVERED PIPELINE</div>
              <div className="text-2xl font-mono font-black text-[#10B981] mt-1 truncate">
                ${recoveredRevenue.toLocaleString()}
              </div>
              <div className="text-[9px] font-mono text-[#6E6E78]">Estimated extra revenue</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-black/8 text-center col-span-2 sm:col-span-1 flex flex-col justify-center items-center">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full h-full py-3 px-4 rounded-xl bg-[#0E0E10] hover:bg-[#10B981] text-white font-mono font-bold text-xs uppercase transition-all duration-300 flex items-center justify-center gap-1.5 shadow-sm"
              >
                <span>AUDIT SYSTEM</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
