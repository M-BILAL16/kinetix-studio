"use client";

import React, { useState } from "react";
import { Building2, Stethoscope, ShoppingBag, Briefcase, Users, Scale, ArrowRight, Check } from "lucide-react";

interface IndustryBlueprint {
  id: string;
  name: string;
  icon: any;
  leadFriction: string;
  aiSolution: string;
  provenResult: string;
  metrics: { label: string; value: string }[];
  deliverables: string[];
}

const INDUSTRIES: IndustryBlueprint[] = [
  {
    id: "real-estate",
    name: "Real Estate & Developers",
    icon: Building2,
    leadFriction:
      "Buyers message on WhatsApp inquiring about pricing, floor plans, and installment plans. Inconsistent response times mean over 60% of buyers explore competitor projects before an agent replies.",
    aiSolution:
      "24/7 Real Estate AI Bot that instantly delivers project brochures, checks buyer budget & down-payment readiness, and schedules guided site visits directly with your sales team.",
    provenResult: "+340% More Qualified Site Visits in 45 Days",
    metrics: [
      { label: "Response Speed", value: "<4 Sec" },
      { label: "Lead Qualification", value: "88%" },
      { label: "Site Visit Show-Up", value: "+54%" },
    ],
    deliverables: [
      "WhatsApp Property Brochure Dispatcher",
      "Investor Budget & Downpayment Qualifier",
      "Automated Site-Visit Calendar Sync",
      "Weekly CRM Lead Stage Reporting",
    ],
  },
  {
    id: "clinics",
    name: "Clinics & Aesthetics",
    icon: Stethoscope,
    leadFriction:
      "Missed calls and unread messages after 6:00 PM result in lost patient appointments. Receptionists spend hours manually answering repetitive pricing and timing questions.",
    aiSolution:
      "Automated Patient Booking Agent that verifies doctor availability, answers treatment preparation FAQs, sends automated WhatsApp appointment reminders, and handles reschedules.",
    provenResult: "+270% Increase in Monthly Bookings & Zero Lost Calls",
    metrics: [
      { label: "After-Hours Bookings", value: "48%" },
      { label: "No-Show Rate", value: "<6%" },
      { label: "Staff Hours Saved", value: "30 hrs/wk" },
    ],
    deliverables: [
      "24/7 Patient Triage & Appointment Bot",
      "Automated Google Calendar / Clinic EHR Sync",
      "WhatsApp Pre-Appointment Reminders",
      "Automated Post-Treatment Review Requester",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce & Brands",
    icon: ShoppingBag,
    leadFriction:
      "High cart abandonment rates on Shopify/WooCommerce. Customers have questions about cash-on-delivery (COD) verification, shipping timelines, or sizing and abandon purchase.",
    aiSolution:
      "Omnichannel WhatsApp abandoned cart recovery agent that engages shoppers, answers order FAQs, and verifies COD orders with 1-click confirmation before shipping.",
    provenResult: "+38% Recovered Abandoned Carts & -62% COD Returns",
    metrics: [
      { label: "COD Confirmation", value: "96%" },
      { label: "Abandoned Cart Recovery", value: "+38%" },
      { label: "Support Ticket Deflection", value: "72%" },
    ],
    deliverables: [
      "Automated WhatsApp Abandoned Cart Nudge",
      "One-Click COD Order Address Verification",
      "Real-Time Shipping & Tracking Agent",
      "Post-Purchase VIP Loyalty VIP Upsell",
    ],
  },
  {
    id: "consultants",
    name: "Consultants & Agencies",
    icon: Briefcase,
    leadFriction:
      "Calendars clogged with unqualified discovery calls from prospects who lack the budget or authority to hire high-ticket retainers.",
    aiSolution:
      "Intake Sentry Agent that screens prospects on revenue, timeline, and project scope before granting access to private partner calendar links.",
    provenResult: "100% Qualified Discovery Calls + Zero Time Wasted on Unfit Leads",
    metrics: [
      { label: "Close Rate on Calls", value: "+46%" },
      { label: "Unqualified Calls", value: "0" },
      { label: "Lead-to-Client Velocity", value: "11 Days" },
    ],
    deliverables: [
      "Bespoke High-Ticket Intake Screener",
      "Automated VIP Client Onboarding Flow",
      "Pre-Call Dossier Generated for Partners",
      "Automated Invoice & Retainer Agreement Flow",
    ],
  },
  {
    id: "recruitment",
    name: "Recruitment & Legal Firms",
    icon: Scale,
    leadFriction:
      "Hundreds of resumes or consultation requests arriving weekly. Sifting through candidate credentials and collecting legal identification manually takes days.",
    aiSolution:
      "Document Intake Agent that screens credentials, parses resumes or legal intake briefs, checks conflict-of-interest criteria, and schedules interviews with partners.",
    provenResult: "80% Reduction in Candidate & Client Screening Time",
    metrics: [
      { label: "Time-to-Interview", value: "-75%" },
      { label: "Document Verification", value: "Instant" },
      { label: "Data Accuracy", value: "99.9%" },
    ],
    deliverables: [
      "Automated Resume & Document Screening Agent",
      "Candidate WhatsApp Interview Scheduler",
      "Conflict-of-Interest Verification Logic",
      "Automated Candidate Status Notifications",
    ],
  },
];

export default function AutomationIndustryBlueprints() {
  const [activeIndustryId, setActiveIndustryId] = useState<string>("real-estate");

  const activeIndustry = INDUSTRIES.find((i) => i.id === activeIndustryId) || INDUSTRIES[0];
  const IconComponent = activeIndustry.icon;

  return (
    <section className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#10B981]">03 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              INDUSTRY-SPECIFIC AUTOMATION BLUEPRINTS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            TAILORED FOR YOUR <br />
            <span className="font-serif italic font-normal text-[#10B981] lowercase">
              exact industry.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            EACH VERTICAL COMES PRE-CONFIGURED WITH TESTED PROMPTS, COMPLIANT WORKFLOWS, AND
            PROVEN REVENUE LEVERS.
          </p>
        </div>
      </div>

      {/* Industry Selector Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
        {INDUSTRIES.map((ind) => {
          const isActive = activeIndustryId === ind.id;
          const Icon = ind.icon;

          return (
            <button
              key={ind.id}
              onClick={() => setActiveIndustryId(ind.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between h-28 ${
                isActive
                  ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-md scale-[1.02]"
                  : "bg-white/80 text-[#0E0E10] border-black/10 hover:border-black/30 hover:bg-white"
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? "text-[#CEFF00]" : "text-[#10B981]"}`} />
              <span className="text-xs sm:text-sm font-bold font-sans tracking-tight leading-snug">
                {ind.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Blueprint Display */}
      <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 lg:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#6E6E78]">
              <span className="text-[#10B981] font-bold">BLUEPRINT //</span>
              <span className="uppercase">{activeIndustry.name}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black font-sans tracking-tight text-[#0E0E10]">
              The {activeIndustry.name} Autonomous Growth System
            </h3>

            <div className="space-y-4 pt-2 text-sm sm:text-base font-sans text-[#6E6E78] leading-relaxed">
              <div className="p-4 rounded-xl bg-[#FAF9F5] border border-black/5">
                <strong className="text-[#0E0E10] font-mono text-xs uppercase block mb-1">
                  INDUSTRY BOTTLENECK:
                </strong>
                {activeIndustry.leadFriction}
              </div>
              <div className="p-4 rounded-xl bg-white border border-[#10B981]/30 shadow-xs">
                <strong className="text-[#10B981] font-mono text-xs uppercase block mb-1">
                  AUTONOMOUS AI SOLUTION:
                </strong>
                {activeIndustry.aiSolution}
              </div>
            </div>

            {/* Deliverables */}
            <div className="pt-2">
              <span className="block text-[11px] font-mono uppercase tracking-widest text-[#6E6E78] mb-2 font-bold">
                BUILT-IN AUTOMATION MODULES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeIndustry.deliverables.map((del) => (
                  <div
                    key={del}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-[#FAF9F5] text-xs font-mono text-[#0E0E10]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Quantified Outcome */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col justify-between h-full">
            <div>
              <span className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-wider block mb-1">
                VERIFIED NICHE OUTCOME:
              </span>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10] mb-6">
                {activeIndustry.provenResult}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 pt-4 border-t border-black/8 text-center mb-6">
              {activeIndustry.metrics.map((m) => (
                <div key={m.label} className="border-r last:border-none border-black/8 px-1">
                  <div className="text-[9px] font-mono text-[#6E6E78] uppercase">
                    {m.label}
                  </div>
                  <div className="text-lg sm:text-xl font-black font-sans text-[#0E0E10] mt-1">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-white rounded-xl border border-black/8 text-xs font-mono text-[#6E6E78] flex items-center justify-between">
              <span>PRE-CONFIGURED SPRINT:</span>
              <span className="text-[#0E0E10] font-bold">READY TO DEPLOY IN 14 DAYS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
