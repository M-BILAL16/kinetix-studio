"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import GrowthHero from "@/components/growth/GrowthHero";
import GrowthVelocityEngines from "@/components/growth/GrowthVelocityEngines";
import GrowthFit from "@/components/growth/GrowthFit";
import Engagement from "@/components/Engagement";
import { GROWTH_ENGAGEMENT } from "@/lib/data";
import GrowthSavings from "@/components/growth/GrowthSavings";
import GrowthFaq from "@/components/growth/GrowthFaq";
import GrowthFinalCta from "@/components/growth/GrowthFinalCta";

export default function GrowthMarketingPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0E0E10] relative selection:bg-[#FF3B14] selection:text-white">
      {/* Floating Navigation Rail */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero: High-Velocity Growth Radar & Live Traffic Surge Cockpit */}
      <GrowthHero onOpenContact={() => setIsContactOpen(true)} />

      {/* The 11 growth services */}
      <GrowthVelocityEngines onOpenContact={() => setIsContactOpen(true)} />

      {/* Who this work is a good fit for */}
      <GrowthFit />

      {/* The map before the miles — engagement tiers */}
      <Engagement
        onOpenContact={() => setIsContactOpen(true)}
        tiers={GROWTH_ENGAGEMENT}
        headingLine="PICK THE PLAN THAT"
        headingBeforeAccent=""
        headingAccent="matches your appetite."
      />

      {/* Calculate your savings */}
      <GrowthSavings />

      {/* Growth Architecture FAQ with Topic Filters */}
      <GrowthFaq />

      {/* High-Octane Launchpad Ignition CTA */}
      <GrowthFinalCta onOpenContact={() => setIsContactOpen(true)} />

      {/* Unified Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Interactive Contact & Audit Drawer */}
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
