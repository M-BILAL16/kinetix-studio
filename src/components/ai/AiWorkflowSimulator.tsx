"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Zap, Clock, DollarSign, Users, ArrowRight, ShieldCheck } from "lucide-react";

export default function AiWorkflowSimulator() {
  const [teamSize, setTeamSize] = useState<number>(15);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [hoursWastedPerWeek, setHoursWastedPerWeek] = useState<number>(8);

  // Calculations
  const totalHoursWastedMonthly = teamSize * hoursWastedPerWeek * 4.33;
  const hoursSavedMonthly = Math.round(totalHoursWastedMonthly * 0.84);
  const annualDollarsSaved = Math.round(hoursSavedMonthly * 12 * hourlyRate);
  const speedMultiplier = 42;

  return (
    <section className="py-28 site-gutter bg-[#FAF9F5]">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            CALCULATE YOUR <br />
            <span className="text-[#0047FF]">
              agentic yield.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            REPLACE EXPENSIVE HUMAN CHOKEPOINTS WITH 24/7 AUTONOMOUS PRECISION. ESTIMATE THE
            CAPITAL AND HOURS RECOVERED ANNUALLY.
          </p>
        </div>
      </div>

      {/* Main Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left Column: Interactive Parameters (6 cols) */}
        <div className="lg:col-span-6 h-full bg-white rounded-3xl border border-black/10 p-6 sm:p-10 shadow-xl flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono uppercase text-[#6E6E78] tracking-widest block mb-2">
              CONFIGURE WORKFORCE PARAMETERS:
            </span>
            <h3 className="text-2xl font-black font-sans text-[#0E0E10]">
              Operational Friction Inputs
            </h3>
          </div>

          {/* Slider 1: Team Size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Team Members Performing Repetitive Tasks</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans">{teamSize} Employees</span>
            </div>
            <input
              type="range"
              min="2"
              max="150"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>2 members</span>
              <span>150 members</span>
            </div>
          </div>

          {/* Slider 2: Hours wasted per week */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Manual / Routine Hours Per Person / Week</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans">{hoursWastedPerWeek} Hours</span>
            </div>
            <input
              type="range"
              min="2"
              max="25"
              value={hoursWastedPerWeek}
              onChange={(e) => setHoursWastedPerWeek(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>2 hrs (Low friction)</span>
              <span>25 hrs (Heavy overhead)</span>
            </div>
          </div>

          {/* Slider 3: Average Fully Loaded Hourly Cost */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Blended Hourly Cost (Salary + Overhead)</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans">${hourlyRate}/hr</span>
            </div>
            <input
              type="range"
              min="30"
              max="200"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>$30/hr</span>
              <span>$200/hr</span>
            </div>
          </div>

          {/* Context note */}
          <div className="mt-auto p-4 rounded-xl bg-[#FAF9F5] border border-black/8 text-xs font-mono text-[#6E6E78] leading-relaxed">
            Based on empirical client telemetry across 250+ enterprise deployments. Assumes conservative 84% autonomous resolution rate with human-in-the-loop oversight.
          </div>
        </div>

        {/* Right Column: Dynamic Yield Output Card (6 cols) */}
        <div className="lg:col-span-6 h-full bg-[#0E0E10] text-[#FAF9F5] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          {/* Background Ambient Flare */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[#0047FF]/20 via-[#CEFF00]/15 to-transparent blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#CEFF00] animate-ping" />
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E9EA8]">
                  ESTIMATED AGENTIC VALUE RECOVERED
                </span>
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded-full text-[#CEFF00] font-bold">
                HIGH LEVERAGE
              </span>
            </div>

            {/* Giant Annual Dollar Recovery */}
            <div className="mb-8">
              <span className="text-[11px] font-mono text-[#9E9EA8] uppercase tracking-wider block mb-1">
                PROJECTED ANNUAL CAPITAL RECOVERED
              </span>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white">
                ${annualDollarsSaved.toLocaleString()}
                <span className="text-lg font-mono text-[#CEFF00] font-normal"> / year</span>
              </div>
            </div>

            {/* Output Metrics Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[10px] font-mono text-[#9E9EA8] uppercase">
                  Hours Reclaimed Monthly
                </div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-white mt-1">
                  {hoursSavedMonthly.toLocaleString()} hrs
                </div>
                <div className="text-[10px] font-mono text-[#CEFF00] mt-1">
                  +84% Capacity Freed
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[10px] font-mono text-[#9E9EA8] uppercase">
                  Throughput Velocity
                </div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-white mt-1">
                  ~{speedMultiplier}x Faster
                </div>
                <div className="text-[10px] font-mono text-[#0047FF] mt-1">
                  Sub-second execution
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Summary Callout */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#9E9EA8]">
              READY TO RECLAIM THIS MARGIN IN YOUR BUSINESS?
            </div>
            <a
              href="#agent-showcase"
              className="text-xs font-mono font-bold text-[#CEFF00] hover:underline flex items-center gap-1"
            >
              <span>SEE TESTED ARCHITECTURES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
