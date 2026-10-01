"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import GrowthHero from "@/components/growth/GrowthHero";
import GrowthMarqueeBand from "@/components/growth/GrowthMarqueeBand";
import GrowthVelocityEngines from "@/components/growth/GrowthVelocityEngines";
import GrowthScaleDial from "@/components/growth/GrowthScaleDial";
import GrowthHookSandbox from "@/components/growth/GrowthHookSandbox";
import GrowthTiltWinsWall from "@/components/growth/GrowthTiltWinsWall";
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

      {/* Kinetic Dual-Track Velocity Marquee Ribbon */}
      <GrowthMarqueeBand />

      {/* The 4-Part Interactive Velocity Engines Reel (A/B Slider, Hook Matrix, AEO Scanner) */}
      <GrowthVelocityEngines />

      {/* The Interactive Tachometer Scale Dial (Bootstrap -> Hyper-Growth -> Monopoly) */}
      <GrowthScaleDial />

      {/* Interactive Creative Hook Lab & 30-Second Retention Curve Sandbox */}
      <GrowthHookSandbox />

      {/* 3D Kinetic Wall of Wins with Before vs After Engine Toggle */}
      <GrowthTiltWinsWall />

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
