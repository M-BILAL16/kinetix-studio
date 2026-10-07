"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactDrawer from "@/components/ContactDrawer";
import ProjectModal from "@/components/ProjectModal";
import WorkHero from "@/components/work/WorkHero";
import WorkOutcomeStrip from "@/components/work/WorkOutcomeStrip";
import WorkCaseStack from "@/components/work/WorkCaseStack";
import WorkFinalCta from "@/components/work/WorkFinalCta";
import { Project } from "@/lib/data";

export default function WhatWeHaveDoneStoriesPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <main className="relative min-h-screen bg-[#FAF9F5] text-[#0E0E10] selection:bg-[#FF3B14] selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      <WorkHero onOpenContact={() => setIsContactOpen(true)} variant="stories" />
      <WorkOutcomeStrip />
      <WorkCaseStack onOpenProject={setSelectedProject} />
      <WorkFinalCta onOpenContact={() => setIsContactOpen(true)} />
      <Footer onOpenContact={() => setIsContactOpen(true)} />
      <ContactDrawer isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />
    </main>
  );
}
