"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const WEEKS_PER_YEAR = 52;
const WEEKS_PER_MONTH = WEEKS_PER_YEAR / 12;
const FULL_TIME_HOURS_PER_WEEK = 40;

export default function AiWorkflowSimulator() {
  const [teamSize, setTeamSize] = useState<number>(15);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(8);
  const [hourlyRate, setHourlyRate] = useState<number>(65);
  const [agentShare, setAgentShare] = useState<number>(70);

  const hoursSavedWeekly = teamSize * hoursPerWeek * (agentShare / 100);
  const hoursSavedMonthly = Math.round(hoursSavedWeekly * WEEKS_PER_MONTH);
  const moneySavedYearly = Math.round(hoursSavedWeekly * WEEKS_PER_YEAR * hourlyRate);
  const fullTimeEquivalent = hoursSavedWeekly / FULL_TIME_HOURS_PER_WEEK;

  return (
    <section className="py-28 site-gutter bg-[#FAF9F5]">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            CALCULATE YOUR <br />
            <span className="text-[#0047FF]">
              savings.
            </span>
          </h2>
        </div>
        <div className="max-w-md text-left md:text-right">
          <p className="text-xs sm:text-sm font-mono text-[#6E6E78] leading-relaxed">
            MOVE THE SLIDERS TO SEE HOW MANY HOURS AND HOW MUCH MONEY AN AGENT CAN SAVE YOUR
            BUSINESS EACH YEAR.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        <div className="lg:col-span-6 h-full bg-white rounded-3xl border border-black/10 p-6 sm:p-10 shadow-xl flex flex-col gap-8">
          <div>
            <span className="text-xs font-mono uppercase text-[#6E6E78] tracking-widest block mb-2">
              Your business today
            </span>
            <h3 className="text-2xl font-black font-sans text-[#0E0E10]">
              Tell us about your team
            </h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">People doing repeated tasks</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans shrink-0">
                {teamSize} people
              </span>
            </div>
            <input
              type="range"
              min="2"
              max="350"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>2 people</span>
              <span>350 people</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Hours each person spends on it per week</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans shrink-0">
                {hoursPerWeek} hours
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>1 hour</span>
              <span>40 hours</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Cost of one hour of their time</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans shrink-0">
                ${hourlyRate}/hr
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>$5/hr</span>
              <span>$200/hr</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#6E6E78] uppercase">Share of that work the agent takes over</span>
              <span className="text-base font-bold text-[#0E0E10] font-sans shrink-0">
                {agentShare}%
              </span>
            </div>
            <input
              type="range"
              min="20"
              max="90"
              step="5"
              value={agentShare}
              onChange={(e) => setAgentShare(Number(e.target.value))}
              className="w-full accent-[#0047FF] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-[#9E9EA8]">
              <span>20%</span>
              <span>90%</span>
            </div>
          </div>

          <div className="mt-auto p-4 rounded-xl bg-[#FAF9F5] border border-black/8 text-xs font-mono text-[#6E6E78] leading-relaxed">
            This is an estimate. Your real savings depend on the tasks you hand over. We confirm
            the numbers with you before we start.
          </div>
        </div>

        <div className="lg:col-span-6 h-full bg-[#0E0E10] text-[#FAF9F5] rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-gradient-to-bl from-[#0047FF]/20 via-[#CEFF00]/15 to-transparent blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8">
              <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#9E9EA8]">
                What you could save
              </span>
            </div>

            <div className="mb-8">
              <span className="text-[11px] font-mono text-[#9E9EA8] uppercase tracking-wider block mb-1">
                Money saved per year
              </span>
              <div className="text-5xl sm:text-6xl lg:text-7xl font-black font-sans tracking-tight text-white">
                ${moneySavedYearly.toLocaleString()}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[10px] font-mono text-[#9E9EA8] uppercase">
                  Hours saved per month
                </div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-white mt-1">
                  {hoursSavedMonthly.toLocaleString()} hrs
                </div>
                <div className="text-[10px] font-mono text-[#CEFF00] mt-1">
                  Time your team gets back
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="text-[10px] font-mono text-[#9E9EA8] uppercase">
                  Same as full-time staff
                </div>
                <div className="text-2xl sm:text-3xl font-black font-sans text-white mt-1">
                  {fullTimeEquivalent.toFixed(1)} people
                </div>
                <div className="text-[10px] font-mono text-[#CEFF00] mt-1">
                  Work done without hiring
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#9E9EA8]">
              WANT THESE SAVINGS IN YOUR BUSINESS?
            </div>
            <a
              href="#signature-offers"
              className="text-xs font-mono font-bold text-[#CEFF00] hover:underline flex items-center gap-1"
            >
              <span>SEE THE AGENTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
