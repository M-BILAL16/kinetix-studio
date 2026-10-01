"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import AutomationHero from "@/components/automation/AutomationHero";
import AutomationProblems from "@/components/automation/AutomationProblems";
import AutomationOfferSystems from "@/components/automation/AutomationOfferSystems";
import AutomationIndustryBlueprints from "@/components/automation/AutomationIndustryBlueprints";
import AutomationProcess from "@/components/automation/AutomationProcess";
import AutomationWhyUs from "@/components/automation/AutomationWhyUs";
import AutomationFaq from "@/components/automation/AutomationFaq";
import AutomationFinalCta from "@/components/automation/AutomationFinalCta";

export default function AiAutomationPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0E0E10] relative">
      {/* Floating Navigation Rail */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero: AI Systems That Automate Sales & Operations 24/7 with Live WhatsApp Bot Simulator */}
      <AutomationHero onOpenContact={() => setIsContactOpen(true)} />

      {/* Before & After: Stop Losing Leads to Manual Processes */}
      <AutomationProblems />

      {/* Turnkey Done-For-You Systems (Signature Offers) */}
      <AutomationOfferSystems onOpenContact={() => setIsContactOpen(true)} />

      {/* Niche Industry Blueprints (Real Estate, Clinics, E-Com, Consultants, Recruitment) */}
      <AutomationIndustryBlueprints />

      {/* The 4-Step Framework: From Audit to Autopilot */}
      <AutomationProcess />

      {/* The Automation Advantage: Why Businesses Choose Us */}
      <AutomationWhyUs />

      {/* Frequently Asked Questions */}
      <AutomationFaq />

      {/* Final Dramatic Call to Action */}
      <AutomationFinalCta onOpenContact={() => setIsContactOpen(true)} />

      {/* Oversized Editorial Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Slide-Out Interactive Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </main>
  );
}
