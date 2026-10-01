"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import AiHero from "@/components/ai/AiHero";
import AiAgentShowcase from "@/components/ai/AiAgentShowcase";
import AiWorkflowSimulator from "@/components/ai/AiWorkflowSimulator";
import AiArchitectureStack from "@/components/ai/AiArchitectureStack";
import AiMetrics from "@/components/ai/AiMetrics";
import AiFaq from "@/components/ai/AiFaq";
import AiFinalCta from "@/components/ai/AiFinalCta";

export default function AiTechnologyPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0E0E10] relative">
      {/* Floating Navigation Rail */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero: Autonomous Intelligence & Multi-Agent Swarm Inspector */}
      <AiHero onOpenContact={() => setIsContactOpen(true)} />

      {/* Production-Tested Agent Architectures & Simulated Terminal */}
      <AiAgentShowcase />

      {/* Interactive Operational Friction & ROI Calculator */}
      <AiWorkflowSimulator />

      {/* Technical Architecture & Governance Layers */}
      <AiArchitectureStack />

      {/* Empirical Agentic Performance Metrics */}
      <AiMetrics />

      {/* Frequently Examined Specifications & Guardrails FAQ */}
      <AiFaq />

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
