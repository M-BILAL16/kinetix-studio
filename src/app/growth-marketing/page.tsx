"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import GrowthHero from "@/components/growth/GrowthHero";
import GrowthPillars from "@/components/growth/GrowthPillars";
import GrowthFunnelSimulator from "@/components/growth/GrowthFunnelSimulator";
import GrowthCaseStudies from "@/components/growth/GrowthCaseStudies";
import GrowthMetrics from "@/components/growth/GrowthMetrics";
import GrowthFaq from "@/components/growth/GrowthFaq";
import GrowthFinalCta from "@/components/growth/GrowthFinalCta";

export default function GrowthMarketingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0E0E10] relative">
      {/* Floating Navigation Rail */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero: Acquisition Architecture & Real-Time Demand Engine */}
      <GrowthHero onOpenContact={() => setIsContactOpen(true)} />

      {/* The 4 Core Pillars of High-Velocity Growth */}
      <GrowthPillars />

      {/* Interactive Demand & Pipeline ROI Simulator */}
      <GrowthFunnelSimulator />

      {/* Verified Enterprise Case Studies */}
      <GrowthCaseStudies />

      {/* Empirical Benchmarks */}
      <GrowthMetrics />

      {/* Acquisition Strategy & Governance FAQ */}
      <GrowthFaq />

      {/* Final Dramatic Demand CTA */}
      <GrowthFinalCta onOpenContact={() => setIsContactOpen(true)} />

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
