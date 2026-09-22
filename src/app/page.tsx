"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import Statement from "@/components/Statement";
import CapabilitiesMarquee from "@/components/CapabilitiesMarquee";
import Process from "@/components/Process";
import Testimonial from "@/components/Testimonial";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ProjectModal from "@/components/ProjectModal";
import { Project } from "@/lib/data";

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="min-h-screen bg-[#FAF9F5] text-[#0E0E10] relative">
      {/* Floating Minimal Navigation Bar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Hero Section */}
      <Hero onOpenContact={() => setIsContactOpen(true)} />

      {/* Social Proof & Metrics */}
      <Metrics />

      {/* Philosophy / Positioning Section */}
      <Philosophy />

      {/* Services Preview */}
      <Services onOpenContact={() => setIsContactOpen(true)} />

      {/* Featured Work / Portfolio Showcase */}
      <FeaturedWork
        onOpenProject={(project: Project) => setSelectedProject(project)}
      />

      {/* Interactive Statement Section */}
      <Statement />

      {/* Capabilities Kinetic Marquee */}
      <CapabilitiesMarquee />

      {/* Process Preview Sequence */}
      <Process />

      {/* Testimonials Magazine Moment */}
      <Testimonial />

      {/* Final Dramatic CTA */}
      <FinalCTA onOpenContact={() => setIsContactOpen(true)} />

      {/* Oversized Editorial Footer */}
      <Footer />

      {/* Interactive Slide-out Contact Drawer */}
      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  );
}
