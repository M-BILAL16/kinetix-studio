"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Check, ArrowRight, ShieldCheck, Clock, Sparkles } from "lucide-react";

interface OfferSystem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  badge: string;
  timeline: string;
  overview: string;
  deliverables: string[];
  bestFor: string;
  highlight: string;
  accent: string;
}

const OFFERS: OfferSystem[] = [
  {
    id: "revenue-engine",
    number: "01",
    title: "The AI Revenue Engine",
    tagline: "A complete AI-powered system to generate, qualify, and convert leads automatically.",
    badge: "MOST POPULAR",
    timeline: "3–4 WEEKS TURNKEY",
    overview:
      "Our flagship done-for-you automation system. We architect an intelligent inbound capture pipeline that engages leads on WhatsApp or your website within 5 seconds, answers inquiries, qualifies budget and intent, and deposits ready-to-close discovery calls into your calendar.",
    deliverables: [
      "Custom 24/7 WhatsApp & Web AI Sales Agent",
      "Sub-5-Second Lead Capture & Verification Funnel",
      "Multi-Touch Automated Re-engagement Sequences",
      "Full CRM Synchronization (HubSpot, Salesforce, Zoho)",
      "Automated Meeting Booking & WhatsApp Reminders",
      "Dedicated Analytics & Real-Time Performance Dashboard",
    ],
    bestFor: "High-ticket service businesses, real estate, consultants, and growth agencies.",
    highlight: "Average 3–5x Increase in Qualified Inbound Appointments",
    accent: "#0047FF",
  },
  {
    id: "acquisition",
    number: "02",
    title: "AI Client Acquisition System",
    tagline: "Consistent B2B pipeline generation powered by intelligent enrichment and outreach.",
    badge: "OUTBOUND & INBOUND",
    timeline: "2–3 WEEKS TURNKEY",
    overview:
      "Stop waiting for referrals. We build an automated outbound engine that identifies high-intent accounts, enriches decision-maker contact details, drafts hyper-personalized outreach, and routes interested prospects into your sales pipeline automatically.",
    deliverables: [
      "Target Account Sourcing & Verification Engine",
      "Automated Multi-Channel Outreach Sequences",
      "AI Personalization Based on Company News & Hiring",
      "Spam-Protected Domain & Inbox Infrastructure",
      "Automated Lead Scoring & Warm Handoff Protocols",
      "Weekly Pipeline & Response Optimization Audits",
    ],
    bestFor: "B2B companies, tech startups, recruiters, and corporate service providers.",
    highlight: "Consistent 20–40 Qualified Decision-Maker Inquiries Monthly",
    accent: "#FF2E93",
  },
  {
    id: "local-domination",
    number: "03",
    title: "Local Market Domination System",
    tagline: "Help your business dominate your city or metropolitan area using AI growth systems.",
    badge: "LOCAL LEADER",
    timeline: "2 WEEKS TURNKEY",
    overview:
      "Specially designed for clinics, real estate brokerages, aesthetics centers, and local service providers in Pakistan, the UAE, and KSA. Captures local high-intent search traffic, automates WhatsApp consultations, and collects 5-star Google reviews on autopilot.",
    deliverables: [
      "AI Google Maps & Local Search Engine (AEO) Optimization",
      "24/7 WhatsApp Appointment Booking & Rescheduling",
      "Automated Post-Visit Review & Reputation Engine",
      "Missed-Call Auto-Reply via WhatsApp & SMS",
      "Local Competitor Voice & Citation Dominance",
      "Monthly Local Ranking & Appointment Growth Reports",
    ],
    bestFor: "Clinics, dental practices, real estate brokers, salons, and local consultants.",
    highlight: "Zero Missed Patients/Clients + Top 3 Local Google Maps Rank",
    accent: "#10B981",
  },
  {
    id: "ops-suite",
    number: "04",
    title: "AI Business Automation Suite",
    tagline: "Automate internal operations, eliminate repetitive admin, and streamline team workflows.",
    badge: "OPERATIONAL SCALE",
    timeline: "4 WEEKS TURNKEY",
    overview:
      "Scale your revenue without hiring an army of administrative staff. We automate your backend: parsing incoming PDFs and receipts, generating invoices, routing project tickets, and sending automated team alerts across Slack, email, and ERP systems.",
    deliverables: [
      "Automated Invoicing, AP & Financial Reconciliation",
      "OCR Document Parsing & Data Entry Elimination",
      "Cross-Platform Workflow Connectors (Zapier, Make, Custom API)",
      "Automated Client Onboarding & Contract Generation",
      "Team Task Dispatch & SLA Escalation Triggers",
      "Comprehensive SOPs & Staff Training Sessions",
    ],
    bestFor: "Companies scaling past 10+ employees drowning in administrative overhead.",
    highlight: "Saves 25–40 Hours of Manual Staff Effort Every Single Week",
    accent: "#7C3AED",
  },
];

interface AutomationOfferSystemsProps {
  onOpenContact: () => void;
}

export default function AutomationOfferSystems({ onOpenContact }: AutomationOfferSystemsProps) {
  const [selectedOfferId, setSelectedOfferId] = useState<string>("revenue-engine");

  const activeOffer = OFFERS.find((o) => o.id === selectedOfferId) || OFFERS[0];

  return (
    <section id="signature-offers" className="py-28 px-4 sm:px-8 lg:px-12 bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-mono font-bold text-[#0047FF]">02 //</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#6E6E78]">
              TURNKEY DONE-FOR-YOU SYSTEMS
            </span>
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            SIGNATURE AI <br />
            <span className="font-serif italic font-normal text-[#0047FF] lowercase">
              growth offers.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            TRANSPARENT, HIGH-ROI SYSTEMS TAILORED FOR AMBITIOUS SCALE-UPS AND ENTERPRISES. WE
            BUILD AND HAND OVER REVENUE ENGINES THAT RUN 24/7.
          </p>
        </div>
      </div>

      {/* 4 Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-12">
        {OFFERS.map((offer) => {
          const isActive = selectedOfferId === offer.id;

          return (
            <button
              key={offer.id}
              onClick={() => setSelectedOfferId(offer.id)}
              data-cursor="open"
              className={`p-6 rounded-2xl text-left border transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10] shadow-xl scale-[1.02]"
                  : "bg-white/70 text-[#0E0E10] border-black/10 hover:border-black/30 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-4">
                <span className={isActive ? "text-[#CEFF00]" : "text-[#0047FF] font-bold"}>
                  [{offer.number}]
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider opacity-80">
                  {offer.badge}
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-black font-sans tracking-tight leading-snug">
                {offer.title}
              </h3>
              <p className="text-xs opacity-70 mt-2 font-mono line-clamp-2">
                {offer.tagline}
              </p>
            </button>
          );
        })}
      </div>

      {/* Deep-Dive Card */}
      <div className="bg-white rounded-3xl border border-black/10 p-6 sm:p-10 lg:p-12 shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Scope & Overview (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[#6E6E78]">
              <span className="text-[#0047FF] font-bold">[{activeOffer.number}]</span>
              <span>//</span>
              <span className="uppercase">{activeOffer.badge}</span>
              <span>//</span>
              <span className="text-[#10B981] font-bold">{activeOffer.timeline}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-black font-sans tracking-tight text-[#0E0E10]">
              {activeOffer.title}
            </h3>

            <p className="text-lg font-serif italic text-[#0047FF]">
              &ldquo;{activeOffer.tagline}&rdquo;
            </p>

            <p className="text-sm sm:text-base text-[#6E6E78] font-sans leading-relaxed">
              {activeOffer.overview}
            </p>

            {/* Turnkey Deliverables */}
            <div className="pt-4 border-t border-black/8 space-y-2.5">
              <span className="block text-[11px] font-mono tracking-widest uppercase text-[#0E0E10] font-bold mb-2">
                TURNKEY SYSTEM DELIVERABLES INCLUDED:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeOffer.deliverables.map((del) => (
                  <div
                    key={del}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-[#FAF9F5] border border-black/5 text-xs font-mono text-[#0E0E10]"
                  >
                    <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Key Highlight & Direct Action Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F5] rounded-2xl border border-black/10 p-6 sm:p-8 flex flex-col justify-between h-full min-h-[380px]">
            <div>
              <div className="flex items-center justify-between border-b border-black/8 pb-3 mb-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6E78]">
                  TARGET OUTCOME SPEC
                </span>
                <span className="text-[10px] font-mono bg-white px-2 py-0.5 rounded-full border border-black/10 text-[#10B981] font-bold">
                  GUARANTEED DEPLOY
                </span>
              </div>

              {/* Highlight callout */}
              <div className="p-5 bg-white rounded-2xl border border-black/8 shadow-xs mb-6">
                <span className="text-[10px] font-mono text-[#0047FF] uppercase font-bold block mb-1">
                  CORE VALUE IMPACT:
                </span>
                <div className="text-xl sm:text-2xl font-black font-sans text-[#0E0E10]">
                  {activeOffer.highlight}
                </div>
              </div>

              {/* Best for */}
              <div className="space-y-1.5 text-xs font-mono text-[#6E6E78] mb-6">
                <span className="text-[#0E0E10] font-bold uppercase block">BEST SUITED FOR:</span>
                <p>{activeOffer.bestFor}</p>
              </div>
            </div>

            {/* CTA button */}
            <div className="pt-4 border-t border-black/8">
              <button
                onClick={onOpenContact}
                data-cursor="start"
                className="w-full py-4 bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group shadow-md"
              >
                <span>CHOOSE THIS SYSTEM</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] font-mono text-center text-[#9E9EA8] mt-2">
                INCLUDES 30-DAY POST-DEPLOY GUARANTEE &amp; SUPPORT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
