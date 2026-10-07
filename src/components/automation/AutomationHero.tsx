"use client";

import React, { useState } from "react";
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
  ArrowUpRight,
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
    headline: "Zero-Latency Property Inquiries & Automated Site Visit Dispatch",
    context: "Eliminating dropped leads across DHA, Bahria, and Dubai Off-Plan developments.",
    samplePrompt: "3-bed townhouse available in Dubai Hills? Budget is around AED 2.8M.",
    sampleReply:
      "Ji bilkul! Found 2 prime inventory units matching AED 2.8M. Digital brochure sent to your WhatsApp. Would you like a site visit tomorrow at 4 PM?",
    stat: "+340%",
    statLabel: "Site-Visit Show-Up Rate",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "Omni-Channel Lead Ingestion",
        sub: "Meta Ads, TikTok & Portal Webhook",
        badge: "0.2s Webhook",
        latency: "42ms",
        detail: "Instantly ingests prospect contact, ad source angle, and specific property interests.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "Roman Urdu & English Triage",
        sub: "Contextual Intent Parser",
        badge: "AI Triage",
        latency: "1.4s",
        detail: "Verifies budget threshold, cash vs mortgage readiness, and purchase timeline.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "Dynamic Brochure Delivery",
        sub: "Direct 1-on-1 WhatsApp Thread",
        badge: "Instant PDF",
        latency: "0.8s",
        detail: "Dispatches tailored floorplans, unit pricing sheets, and project walkthrough videos.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Calendar Lock & VIP Escalation",
        sub: "Agent Google Calendar Sync",
        badge: "Booked",
        latency: "Instant",
        detail: "Schedules physical tour, blocks agent calendar, and fires automated reminder prompts.",
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
        sub: "Symptom & Treatment Inbound",
        badge: "Live 24/7",
        latency: "35ms",
        detail: "Categorizes requested treatment, urgency level, and preferred clinic branch.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "EMR / Clinic PMS Live Sync",
        sub: "Real-time calendar verification",
        badge: "Direct Sync",
        latency: "0.6s",
        detail: "Checks doctor roster and open consultation windows without human coordination.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "Pre-Consultation Verification",
        sub: "Location pin & intake form",
        badge: "Secured",
        latency: "Instant",
        detail: "Collects patient history, sends Google Maps pin, and generates appointment token.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Anti-Ghosting Reminder Flow",
        sub: "24h & 2h WhatsApp alerts",
        badge: "0% Drop",
        latency: "Scheduled",
        detail: "Automated 1-click confirmation or rescheduling prompts that slash no-shows.",
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
    stat: "+28%",
    statLabel: "Recovered Cart Revenue",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "Shopify Abandoned Cart Event",
        sub: "Real-time checkout webhook",
        badge: "Real-Time",
        latency: "18ms",
        detail: "Detects uncompleted checkouts and grabs customer WhatsApp contact & items.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "Dynamic Incentive Dispatch",
        sub: "Personalized recovery offer",
        badge: "Algorithmic",
        latency: "1.1s",
        detail: "Sends a personalized 1-click checkout recovery discount to the customer's WhatsApp.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "1-Click COD Address Verification",
        sub: "Anti-RTO location validation",
        badge: "Fraud Guard",
        latency: "0.5s",
        detail: "Confirms order intent and GPS delivery pin via WhatsApp buttons before dispatch.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Courier Tracking & Review Loop",
        sub: "Post-purchase delivery loop",
        badge: "Delivered",
        latency: "Continuous",
        detail: "Sends live tracking updates and automated 5-star Google review collection.",
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
    stat: "4.2x",
    statLabel: "Qualified Sales Calls",
    pipeline: [
      {
        id: "p1",
        stepNumber: "01",
        title: "Inbound Lead Webhook",
        sub: "Forms, Ads & LinkedIn Sync",
        badge: "Omni-Channel",
        latency: "50ms",
        detail: "Captures prospect company size, CRM stack, and estimated implementation timeline.",
      },
      {
        id: "p2",
        stepNumber: "02",
        title: "AI Fit & ICP Scoring",
        sub: "Revenue & software audit",
        badge: "ICP Score",
        latency: "0.9s",
        detail: "Filters viable enterprise buyers from low-budget inquiries automatically.",
      },
      {
        id: "p3",
        stepNumber: "03",
        title: "Cal.com VIP Scheduling",
        sub: "Zero back-and-forth emails",
        badge: "Booked",
        latency: "Instant",
        detail: "Lead picks their preferred time slot with automatic timezone detection.",
      },
      {
        id: "p4",
        stepNumber: "04",
        title: "Executive Slack Briefing",
        sub: "Pre-call intelligence memo",
        badge: "Dispatched",
        latency: "Real-Time",
        detail: "Pushes full company background and agenda bullet-points straight to Slack.",
      },
    ],
  },
};

export default function AutomationHero({ onOpenContact }: AutomationHeroProps) {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustryType>("real-estate");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [monthlyLeads, setMonthlyLeads] = useState<number>(1500);

  const currentData = INDUSTRY_DATA[selectedIndustry];

  // Dynamic calculations based on slider
  const hoursSavedPerMonth = Math.round((monthlyLeads * 14) / 60);
  const recoveredRevenue = Math.round(monthlyLeads * 0.12 * 450);

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
              spread: 70,
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
    }, 700);
  };

  return (
    <section className="relative min-h-[min(88vh,920px)] pt-40 pb-24 md:pt-48 md:pb-32 bg-[#FAF9F5] border-b border-black/10 overflow-hidden">
      {/* Background Architectural Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        <div className="absolute top-10 right-1/4 w-[500px] h-[500px] rounded-full bg-[#10B981]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0047FF]/10 blur-3xl pointer-events-none" />
      </div>

      {/* EXPANSIVE WIDE CONTAINER (No Cramping) */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 relative z-10 space-y-12 sm:space-y-16">
        {/* 01. TOP TELEMETRY HUD BAR */}
        <div className="w-full rounded-2xl bg-white border border-black/10 p-4 sm:p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
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
              REGIONS: PAKISTAN • UAE • GCC • UK
            </span>
          </div>
        </div>

        {/* 02. MONUMENTAL ARCHITECTURAL HEADER & CALLOUT */}
        <div className="space-y-8">
          <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-8 pb-8 border-b border-black/10">
            <div className="space-y-4 max-w-4xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#10B981] font-bold">
                <Zap className="w-4 h-4" />
                DONE-FOR-YOU REVENUE & WORKFLOW AUTOMATIONS
              </div>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-sans font-black tracking-tight text-[#0E0E10] uppercase leading-[0.92]">
                YOUR ENTIRE SALES &amp; OPS PIPELINE. <br />
                <span className="font-serif italic font-normal text-[#0047FF] tracking-normal">
                  autonomous.
                </span>{" "}
                24/7/365.
              </h1>
            </div>

            <div className="xl:max-w-md space-y-5">
              <p className="text-base sm:text-lg font-sans text-[#6E6E78] leading-relaxed">
                We engineer intelligent AI sales agents, WhatsApp lead qualification pipelines, and
                backend automations that capture, qualify, and close inbound leads in seconds.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="px-8 py-4 rounded-full bg-[#0E0E10] hover:bg-[#10B981] text-[#FAF9F5] font-sans font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center gap-2 shadow-lg hover:scale-[1.02]"
                >
                  <span>CLAIM FREE AI AUDIT</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleSimulate}
                  className={`px-6 py-4 rounded-full border text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 ${
                    isSimulating
                      ? "bg-[#10B981] text-white border-[#10B981]"
                      : "bg-white hover:bg-black/5 text-[#0E0E10] border-black/15 shadow-sm"
                  }`}
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? "animate-spin" : "text-[#10B981]"}`} />
                  <span>{isSimulating ? "SIMULATING..." : "TEST LIVE RUN"}</span>
                </button>
              </div>
            </div>
          </div>

          {/* INDUSTRY SELECTOR TABS (Wide & Spacious) */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
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
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl text-xs sm:text-sm font-mono font-bold tracking-wider uppercase transition-all duration-300 shrink-0 border ${
                    isSelected
                      ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-lg scale-[1.02]"
                      : "bg-white hover:bg-[#F4F1EA] text-[#6E6E78] hover:text-[#0E0E10] border-black/10 shadow-xs"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#10B981]" : "text-[#6E6E78]"}`} />
                  <span>{item.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 03. FULL-WIDTH AIRY WORKFLOW CANVAS */}
        <div className="w-full bg-white rounded-3xl border border-black/10 p-6 sm:p-10 lg:p-12 shadow-xl space-y-10">
          {/* Top of Canvas: Topology Title & Stat */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 border-b border-black/8 gap-6">
            <div>
              <div className="text-xs font-mono text-[#6E6E78] uppercase tracking-widest mb-1">
                ACTIVE PIPELINE ARCHITECTURE //
              </div>
              <h2 className="text-2xl sm:text-3xl font-sans font-black text-[#0E0E10]">
                {currentData.headline}
              </h2>
              <p className="text-sm font-sans text-[#6E6E78] mt-1">
                {currentData.context}
              </p>
            </div>
            <div className="p-4 px-6 rounded-2xl bg-[#FAF9F5] border border-black/8 shrink-0 text-center sm:text-right">
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase">DOCUMENTED LIFT</div>
              <div className="text-2xl sm:text-3xl font-mono font-black text-[#10B981] mt-0.5">
                {currentData.stat}
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] font-bold">{currentData.statLabel}</div>
            </div>
          </div>

          {/* 4 Spacious Pipeline Stage Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {currentData.pipeline.map((step, idx) => {
              const isCurrent = activeStepIndex === idx;
              const isCompleted = activeStepIndex > idx;

              return (
                <div
                  key={step.id}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[220px] ${
                    isCurrent
                      ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-[1.02] ring-4 ring-[#10B981]/30"
                      : isCompleted
                      ? "bg-[#10B981]/10 text-[#0E0E10] border-[#10B981]/30"
                      : "bg-[#FAF9F5] hover:bg-white text-[#0E0E10] border-black/10 hover:border-black/25 shadow-xs"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className={`text-xs font-mono font-black px-2.5 py-1 rounded-full ${
                          isCurrent
                            ? "bg-[#10B981] text-white"
                            : "bg-black/5 text-[#6E6E78]"
                        }`}
                      >
                        STAGE {step.stepNumber}
                      </span>
                      <span
                        className={`text-xs font-mono font-bold ${
                          isCurrent ? "text-[#10B981]" : "text-[#6E6E78]"
                        }`}
                      >
                        {step.latency}
                      </span>
                    </div>

                    <div className="text-lg font-sans font-bold leading-snug mb-1.5">
                      {step.title}
                    </div>
                    <div
                      className={`text-xs font-sans mb-5 font-medium ${
                        isCurrent ? "text-stone-300" : "text-[#6E6E78]"
                      }`}
                    >
                      {step.sub}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-current/10">
                    <div
                      className={`text-xs font-mono leading-relaxed ${
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

          {/* Real-Time WhatsApp Inference Terminal (Full Width, Spacious) */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0E0E10] text-[#FAF9F5] border border-black/10 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
              <span className="text-white/60">LIVE LINGUISTIC & CONVERSATIONAL INFERENCE ENGINE</span>
              <span className="text-[#10B981] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                ACTIVE WHATSAPP THREAD
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2 font-mono text-xs">
              {/* User Inbound */}
              <div className="p-4 sm:p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                <div className="text-[10px] text-white/50 uppercase tracking-wider">
                  INBOUND CLIENT QUERY (URDU / ENGLISH):
                </div>
                <div className="text-white font-sans text-base sm:text-lg leading-relaxed">
                  &ldquo;{currentData.samplePrompt}&rdquo;
                </div>
              </div>

              {/* Bot Outbound */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#10B981]/15 border border-[#10B981]/30 space-y-2">
                <div className="text-[10px] text-[#10B981] uppercase font-bold tracking-wider">
                  AI SALES AGENT RESPONSE (&lt; 2.8 SEC):
                </div>
                <div className="text-white font-sans text-base sm:text-lg leading-relaxed">
                  &ldquo;{currentData.sampleReply}&rdquo;
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 04. EXPANSIVE VALUE & LABOR RECOVERY CALCULATOR */}
        <div className="w-full bg-[#F4F1EA] rounded-3xl p-8 sm:p-12 lg:p-14 border border-black/10 space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-black/10">
            <div>
              <div className="text-xs font-mono uppercase text-[#6E6E78] tracking-widest mb-1">
                INTERACTIVE ROI ESTIMATOR //
              </div>
              <h3 className="text-2xl sm:text-4xl font-sans font-black text-[#0E0E10]">
                Monthly Inbound Lead Volume
              </h3>
            </div>
            <div className="text-3xl sm:text-4xl font-mono font-black text-[#0E0E10]">
              {monthlyLeads.toLocaleString()} leads/mo
            </div>
          </div>

          {/* Big Slider */}
          <div className="space-y-3">
            <input
              type="range"
              min="200"
              max="5000"
              step="100"
              value={monthlyLeads}
              onChange={(e) => setMonthlyLeads(Number(e.target.value))}
              className="w-full h-3 bg-black/10 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
            />
            <div className="flex justify-between text-xs font-mono text-[#6E6E78]">
              <span>200 leads/mo</span>
              <span>1,500</span>
              <span>3,000</span>
              <span>5,000+ leads/mo</span>
            </div>
          </div>

          {/* 3 Large Spaced Yield Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-black/8 text-center sm:text-left shadow-xs">
              <div className="text-xs font-mono text-[#6E6E78] uppercase">MANUAL HOURS SAVED</div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-[#0E0E10] mt-2">
                {hoursSavedPerMonth} hrs
              </div>
              <div className="text-xs font-mono text-[#10B981] mt-1 font-bold">
                / month human labor replaced
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/8 text-center sm:text-left shadow-xs">
              <div className="text-xs font-mono text-[#6E6E78] uppercase">RECOVERED PIPELINE</div>
              <div className="text-3xl sm:text-4xl font-mono font-black text-[#10B981] mt-2 truncate">
                ${recoveredRevenue.toLocaleString()}
              </div>
              <div className="text-xs font-mono text-[#6E6E78] mt-1 font-bold">
                extra closed revenue
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-black/8 flex flex-col justify-center items-center sm:items-stretch shadow-xs">
              <button
                type="button"
                onClick={onOpenContact}
                className="w-full py-5 px-6 rounded-xl bg-[#0E0E10] hover:bg-[#10B981] text-white font-mono font-bold text-sm uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:scale-[1.02]"
              >
                <span>AUDIT YOUR SYSTEM</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
