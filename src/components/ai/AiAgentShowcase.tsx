"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  Play,
  CheckCircle2,
  Terminal,
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Headphones,
  Code2,
  Sparkles,
} from "lucide-react";

interface AgentClass {
  id: string;
  number: string;
  title: string;
  badge: string;
  tagline: string;
  overview: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  simulation: {
    inputPrompt: string;
    thoughtTrace: string[];
    actionExecuted: string;
    finalResult: string;
  };
}

const AGENT_CLASSES: AgentClass[] = [
  {
    id: "intake",
    number: "01",
    title: "Autonomous Revenue Triage & Deal Sentry",
    badge: "REVENUE ACCELERATION",
    tagline: "Qualify, enrich, and route high-value enterprise leads in 8 seconds.",
    overview:
      "Eliminate the 4-hour delay between inquiry and first human contact. This agent instantly parses incoming inquiries, checks LinkedIn & Apollo for company headcount, verifies budget authority against CRM records, and schedules discovery calls directly into your AE's calendar.",
    tools: ["HubSpot CRM", "Apollo.io API", "Clearbit", "Slack Webhooks", "Google Calendar API"],
    metrics: [
      { label: "Lead Response Time", value: "<12 Sec" },
      { label: "Pipeline Conversion Uplift", value: "+38%" },
      { label: "Weekly SDR Hours Saved", value: "32 hrs" },
    ],
    simulation: {
      inputPrompt:
        "New inbound form submission: 'VP of Engineering at FinScale ($40M ARR), exploring multi-agent automation for KYC compliance.'",
      thoughtTrace: [
        "1. Extract metadata: Domain finscale.io, Role: VP Engineering, Intent: KYC Automation.",
        "2. Query Apollo: FinScale confirmed 280 employees, Series B, verified $42M ARR.",
        "3. Check CRM: No active conflict. High ICP match tier (Tier 1).",
        "4. Compose personalized enterprise briefing memo with compliance whitepaper attachment.",
      ],
      actionExecuted: "Created Deal #9281 in HubSpot + Sent VIP Cal.com link + Alerted VP Sales in #enterprise-leads",
      finalResult: "Meeting confirmed on calendar with AE for Thursday 2:00 PM EST. Zero human bottleneck.",
    },
  },
  {
    id: "finance",
    number: "02",
    title: "Autonomous Invoice Audit & AP Auto-Pilot",
    badge: "FINANCIAL AUTOMATION",
    tagline: "End-to-end invoice reconciliation and 3-way matching with zero data entry.",
    overview:
      "Manual invoice data entry and cross-referencing POs with delivery receipts causes costly delays and payment errors. Our autonomous AP agent parses multi-format PDFs, performs line-item 3-way matching, flags pricing anomalies, and drafts approvals directly inside your accounting software.",
    tools: ["QuickBooks Online", "NetSuite ERP", "Stripe Invoicing", "OCR Document AI", "Gmail API"],
    metrics: [
      { label: "Cost Per Invoice", value: "-82%" },
      { label: "Processing Latency", value: "4.2 Sec" },
      { label: "Accuracy Rate", value: "99.98%" },
    ],
    simulation: {
      inputPrompt:
        "Vendor invoice received: $48,250.00 from CloudInfrastructure Corp for monthly GPU cluster hosting.",
      thoughtTrace: [
        "1. Parse PDF: Vendor TAX ID: 82-1928471, PO Reference: PO-8831.",
        "2. Retrieve purchase order PO-8831 from NetSuite: Authorized limit $50,000.00.",
        "3. Match line items: 8x H100 GPU nodes for 720 hours @ contract rate $8.37/hr.",
        "4. Invariant check: Invoice total matches approved usage telemetry exactly.",
      ],
      actionExecuted: "Created Bill in NetSuite + Applied scheduled payment for Net-30 discount + Posted audit log",
      finalResult: "Payment approved and staged. Automated 2% early-pay discount saved $965.00.",
    },
  },
  {
    id: "support",
    number: "03",
    title: "Autonomous 24/7 Client Concierge & Support Agent",
    badge: "CUSTOMER RETENTION",
    tagline: "Instant resolution of 74% of enterprise customer requests with zero hallucination.",
    overview:
      "Trained on your private documentation, API references, and resolved ticket archives. Solves complex user requests, executes safe account actions (password resets, tier upgrades, quota adjustments), and gracefully summarizes edge cases for human engineers when necessary.",
    tools: ["Zendesk", "Intercom API", "Pinecone Vector Store", "Internal Admin API", "Linear"],
    metrics: [
      { label: "First Contact Resolution", value: "74%" },
      { label: "Median Resolution Time", value: "45 Sec" },
      { label: "CSAT Score Average", value: "4.9 / 5.0" },
    ],
    simulation: {
      inputPrompt:
        "Customer ticket: 'Our API webhook suddenly returned 429 Too Many Requests after our latest batch upload.'",
      thoughtTrace: [
        "1. Identify customer ID: Enterprise Tier Org #4092.",
        "2. Inspect rate limit telemetry: Customer burst limit reached 12,000 req/min at 14:02 UTC.",
        "3. Consult SLA agreement: Contract guarantees temporary burst buffer up to 25,000 req/min for Enterprise.",
        "4. Invoke Admin API: Apply temporary 4-hour burst quota expansion safely.",
      ],
      actionExecuted: "Executed POST /api/admin/organizations/4092/quota/burst + Sent polite technical guidance",
      finalResult: "Customer issue resolved in 28 seconds without waking up an on-call engineer.",
    },
  },
  {
    id: "devops",
    number: "04",
    title: "Autonomous Sentry & Code Quality Healer",
    badge: "DEVELOPER PRODUCTIVITY",
    tagline: "Detect, diagnose, and propose tested git pull requests for system exceptions.",
    overview:
      "Monitors production logs, Sentry errors, and CI/CD pipelines. When an uncaught exception triggers, the agent retrieves the exact stack trace, isolates the offending commit, runs reproduction unit tests in an isolated sandbox, and opens an annotated GitHub Pull Request with the fix.",
    tools: ["GitHub Actions", "Sentry", "AWS CloudWatch", "Datadog", "Docker Sandbox"],
    metrics: [
      { label: "Mean Time to Recovery", value: "-68%" },
      { label: "Regression Test Coverage", value: "100%" },
      { label: "On-Call Fatigue Reduction", value: "80%" },
    ],
    simulation: {
      inputPrompt:
        "Sentry Alert: Uncaught TypeError in billing_service.ts: Cannot read properties of undefined (reading 'billing_address')",
      thoughtTrace: [
        "1. Analyze stack trace: Failure occurs during guest checkout when billing address is null.",
        "2. Checkout repo branch & isolate commit #8f12a: Nullable check was omitted in refactor.",
        "3. Implement defensive null coalescing + write regression test case in jest.",
        "4. Execute test suite in ephemeral Docker sandbox: 184/184 tests pass.",
      ],
      actionExecuted: "Opened Pull Request #412 with unit test + Added detailed root-cause documentation for team",
      finalResult: "Hotfix PR ready for human 1-click review. Downtime averted.",
    },
  },
];

export default function AiAgentShowcase() {
  const [selectedAgentId, setSelectedAgentId] = useState<string>("intake");
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(true);

  const activeAgent = AGENT_CLASSES.find((a) => a.id === selectedAgentId) || AGENT_CLASSES[0];

  const triggerSimulation = () => {
    setIsSimulating(true);
    setSimulationComplete(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationComplete(true);
    }, 1200);
  };

  return (
    <section id="agent-showcase" className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            SPECIALIZED AGENTS. <br />
            <span className="font-serif italic font-normal text-[#0047FF]">
              hyper-leverage.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            WE DO NOT BUILD GENERIC CHATBOTS. WE ENGINEER RELENTLESS, AUTONOMOUS WORKERS THAT
            INTERACT WITH YOUR REAL TOOLS AND EXECUTE REAL WORK.
          </p>
        </div>
      </div>

      {/* Horizontal Agent Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        {AGENT_CLASSES.map((agent) => {
          const isActive = selectedAgentId === agent.id;
          return (
            <button
              key={agent.id}
              onClick={() => {
                setSelectedAgentId(agent.id);
                setSimulationComplete(true);
              }}
              data-cursor="open"
              className={`p-6 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-[1.02]"
                  : "bg-white/70 text-[#0E0E10] border-black/10 hover:border-black/30 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className={isActive ? "text-[#CEFF00]" : "text-[#0047FF] font-bold"}>
                  [{agent.number}]
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                  {agent.badge}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black font-sans tracking-tight leading-snug">
                {agent.title}
              </h3>
              <p className="text-xs opacity-70 mt-2 font-mono line-clamp-2">
                {agent.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Agent Deep Dive Container */}
      <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 lg:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Description, Tools & Quantified Impact (6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-3 text-xs font-mono text-[#6E6E78] mb-3">
                <span className="text-[#0047FF] font-bold">[{activeAgent.number}]</span>
                <span className="uppercase">{activeAgent.badge}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#0E0E10]">
                {activeAgent.title}
              </h3>
              <p className="text-lg font-serif italic text-[#0047FF] mt-2">
                &ldquo;{activeAgent.tagline}&rdquo;
              </p>
              <p className="text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed mt-4">
                {activeAgent.overview}
              </p>
            </div>

            {/* Integrated Enterprise Tools */}
            <div>
              <span className="block text-[11px] font-mono tracking-widest uppercase text-[#6E6E78] mb-3">
                INTEGRATED TOOL ECOSYSTEM:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeAgent.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 rounded-full bg-[#FAF9F5] border border-black/10 text-xs font-mono font-medium text-[#0E0E10]"
                  >
                    + {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Hard ROI Metrics */}
            <div className="grid grid-cols-3 gap-3 p-5 rounded-2xl bg-[#FAF9F5] border border-black/8 text-center">
              {activeAgent.metrics.map((m) => (
                <div key={m.label} className="border-r last:border-none border-black/8 px-1">
                  <div className="text-[10px] font-mono text-[#6E6E78] uppercase">
                    {m.label}
                  </div>
                  <div className="text-xl sm:text-2xl font-black font-sans text-[#0E0E10] mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Interactive Execution Terminal (6 cols) */}
          <div className="lg:col-span-6 bg-[#0E0E10] text-[#FAF9F5] rounded-2xl p-6 sm:p-8 shadow-2xl font-mono">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF3B14]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00]" />
                <span className="text-[11px] text-[#9E9EA8] ml-2">
                  autonomous_agent_runtime.sh
                </span>
              </div>
              <button
                onClick={triggerSimulation}
                disabled={isSimulating}
                className="px-3 py-1.5 rounded-lg bg-[#0047FF] hover:bg-[#0038CC] text-white text-[10px] font-bold tracking-wider uppercase transition-colors flex items-center gap-1.5"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{isSimulating ? "RUNNING..." : "SIMULATE RUN"}</span>
              </button>
            </div>

            {/* Terminal Content */}
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#9E9EA8] uppercase text-[10px] tracking-wider block mb-1">
                  [INPUT TRIGGER]
                </span>
                <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-stone-200">
                  {activeAgent.simulation.inputPrompt}
                </div>
              </div>

              {/* Step By Step Trace */}
              <div>
                <span className="text-[#9E9EA8] uppercase text-[10px] tracking-wider block mb-1">
                  [REASONING TRACE]
                </span>
                <div className="space-y-1.5 pl-2 border-l border-[#0047FF]">
                  {activeAgent.simulation.thoughtTrace.map((step, idx) => (
                    <div
                      key={idx}
                      className={`transition-opacity duration-300 ${
                        isSimulating ? "opacity-30" : "opacity-90"
                      }`}
                    >
                      <span className="text-stone-300">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Executed */}
              <div>
                <span className="text-[#CEFF00] uppercase text-[10px] tracking-wider block mb-1">
                  [DETERMINISTIC ACTION]
                </span>
                <div className="p-2.5 bg-[#CEFF00]/10 border border-[#CEFF00]/20 rounded-xl text-[#CEFF00]">
                  ✓ {activeAgent.simulation.actionExecuted}
                </div>
              </div>

              {/* Final Impact Result */}
              <div className="pt-2 border-t border-white/10">
                <span className="text-[#CEFF00] font-bold block text-[11px]">
                  OUTCOME: {activeAgent.simulation.finalResult}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-[#9E9EA8]">
              <span>INSPECTOR: ACTIVE MEMORY STREAM</span>
              <span className="text-[#CEFF00]">STATUS: 0 ERRORS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
