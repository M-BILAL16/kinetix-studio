"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface ContactDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const SERVICES = [
  "AI Agents",
  "Automation Systems",
  "Custom Software",
  "Internal Dashboards",
  "Growth & Marketing",
];

const BUDGETS = ["Free Discovery Call", "$2,500 AI Audit", "$15k – $50k Build", "Not sure yet"];

export default function ContactDrawer({ isOpen, onClose }: ContactDrawerProps) {
  const [selectedServices, setSelectedServices] = useState<string[]>(["Automation Systems"]);
  const [selectedBudget, setSelectedBudget] = useState<string>("Free Discovery Call");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: "Next 30–60 Days",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (svc: string) => {
    if (selectedServices.includes(svc)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== svc));
      }
    } else {
      setSelectedServices([...selectedServices, svc]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#0047FF", "#CEFF00", "#FF3B14", "#0E0E10"],
      });
    }, 600);
  };

  const resetForm = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-100 cursor-pointer"
          />

          {/* Drawer container */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-xl bg-[#FAF9F5] z-101 shadow-2xl border-l border-black/10 flex flex-col justify-between overflow-y-auto"
          >
            {/* Header */}
            <div className="p-8 border-b border-black/8 flex items-center justify-between sticky top-0 bg-[#FAF9F5]/90 backdrop-blur-md z-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#0047FF] animate-pulse" />
                  <span className="text-[11px] font-mono uppercase tracking-widest text-[#6E6E78]">
                    DIRECT ENGAGEMENT INQUIRY
                  </span>
                </div>
                <h3 className="text-2xl font-black tracking-tight text-[#0E0E10] mt-1 font-sans">
                  START SOMETHING BIG
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center hover:bg-black/5 transition-colors"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5 text-[#0E0E10]" />
              </button>
            </div>

            {/* Body */}
            <div className="p-8 flex-1">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-[#0047FF]/10 text-[#0047FF] flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-mono tracking-widest text-[#0047FF] uppercase font-bold">
                    INQUIRY TRANSMITTED
                  </span>
                  <h4 className="text-3xl font-black text-[#0E0E10] mt-2 mb-4 font-sans tracking-tight">
                    We&apos;ll Be in Touch Within 24h.
                  </h4>
                  <p className="text-[#6E6E78] text-sm max-w-sm mb-8 leading-relaxed">
                    Our lead architect will review your project parameters and schedule an executive
                    strategy deep-dive.
                  </p>
                  <button
                    onClick={resetForm}
                    className="px-8 py-3.5 bg-[#0E0E10] text-[#FAF9F5] rounded-full text-xs font-mono font-bold tracking-widest uppercase hover:bg-[#0047FF] transition-colors"
                  >
                    RETURN TO EXPERIENCE
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7">
                  {/* Select Services */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-[#6E6E78] mb-3">
                      (01) What digital solutions do you need?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            type="button"
                            key={svc}
                            onClick={() => toggleService(svc)}
                            className={`px-3.5 py-2 rounded-full text-xs font-mono transition-all duration-200 border ${
                              isSelected
                                ? "bg-[#0E0E10] text-[#FAF9F5] border-[#0E0E10]"
                                : "bg-white/80 text-[#0E0E10] border-black/10 hover:border-black/30"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Allocation */}
                  <div>
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-[#6E6E78] mb-3">
                      (02) Which starting point fits you?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {BUDGETS.map((b) => (
                        <button
                          type="button"
                          key={b}
                          onClick={() => setSelectedBudget(b)}
                          className={`px-3 py-2.5 rounded-lg text-xs font-mono font-medium text-center transition-all duration-200 border ${
                            selectedBudget === b
                              ? "bg-[#0047FF] text-white border-[#0047FF] shadow-sm"
                              : "bg-white/80 text-[#0E0E10] border-black/10 hover:border-black/30"
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Text Inputs */}
                  <div className="space-y-4">
                    <label className="block text-[11px] font-mono tracking-widest uppercase text-[#6E6E78]">
                      (03) Stakeholder & Project Specifics
                    </label>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <input
                          required
                          type="text"
                          placeholder="Your Name *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-white px-4 py-3 text-sm rounded-lg border border-black/10 focus:border-[#0047FF] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          required
                          type="email"
                          placeholder="Work Email *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-white px-4 py-3 text-sm rounded-lg border border-black/10 focus:border-[#0047FF] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Company / Venture Name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white px-4 py-3 text-sm rounded-lg border border-black/10 focus:border-[#0047FF] focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <textarea
                        rows={3}
                        placeholder="Briefly describe the bottleneck costing you time or money..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-white px-4 py-3 text-sm rounded-lg border border-black/10 focus:border-[#0047FF] focus:outline-none transition-colors resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#0E0E10] hover:bg-[#0047FF] text-[#FAF9F5] rounded-full text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group"
                    >
                      {isSubmitting ? (
                        <span>TRANSMITTING PARAMETERS...</span>
                      ) : (
                        <>
                          <span>INITIALIZE PROJECT PROTOCOL</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                    <p className="text-[10px] font-mono text-center text-[#9E9EA8] mt-3">
                      STRICT NDA INCLUDED AUTOMATICALLY. PRIVATE REPOSITORY
                    </p>
                  </div>
                </form>
              )}
            </div>

            {/* Footer stamp */}
            <div className="p-6 border-t border-black/8 bg-black/2 flex items-center justify-between text-[11px] font-mono text-[#6E6E78]">
              <span>KINETIX STUDIO, HQ NYC</span>
              <span>SLOTS LEFT: 02 FOR Q3/Q4</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
