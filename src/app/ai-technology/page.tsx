"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import AiHero from "@/components/ai/AiHero";
import AiWorkflowSimulator from "@/components/ai/AiWorkflowSimulator";
import AiMetrics from "@/components/ai/AiMetrics";
import AiFaq from "@/components/ai/AiFaq";
import AiFinalCta from "@/components/ai/AiFinalCta";
import AutomationProblems from "@/components/automation/AutomationProblems";
import AutomationOfferSystems from "@/components/automation/AutomationOfferSystems";
import AutomationIndustryBlueprints from "@/components/automation/AutomationIndustryBlueprints";
import AutomationWhyUs from "@/components/automation/AutomationWhyUs";

export default function AiTechnologyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0E0E10] relative">
      {/* Floating Navigation Rail */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero: Autonomous Intelligence & Multi-Agent Swarm Inspector */}
      <AiHero />

      {/* Cost of manual inefficiency */}
      <AutomationProblems />

      {/* Industry-specific automation blueprints */}
      <AutomationIndustryBlueprints />

      {/* Turnkey done-for-you systems */}
      <AutomationOfferSystems />

      {/* Interactive Operational Friction & ROI Calculator */}
      <AiWorkflowSimulator />

      {/* Empirical Agentic Performance Metrics */}
      <AiMetrics />

      {/* Frequently Examined Specifications & Guardrails FAQ */}
      <AiFaq />

      {/* The automation advantage */}
      <AutomationWhyUs />

      {/* Final Dramatic Agent CTA */}
      <AiFinalCta onOpenContact={() => setIsContactOpen(true)} />

      {/* Oversized Editorial Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Slide-out Interactive Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
