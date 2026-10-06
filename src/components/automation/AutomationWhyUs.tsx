"use client";

import React from "react";
import { Check, Clock, Wallet, PhoneCall, TrendingUp, Users } from "lucide-react";

const REASONS = [
  {
    icon: Clock,
    title: "Save hours every week",
    result: "25+ HOURS BACK EVERY WEEK",
  },
  {
    icon: Wallet,
    title: "Spend less on daily work",
    result: "LOWER STAFF AND ADMIN COST",
  },
  {
    icon: PhoneCall,
    title: "Never miss a customer",
    result: "EVERY CHAT AND CALL ANSWERED",
  },
  {
    icon: TrendingUp,
    title: "Turn more leads into sales",
    result: "MORE BOOKED MEETINGS AND DEALS",
  },
  {
    icon: Users,
    title: "Grow without hiring more",
    result: "MORE WORK, SAME TEAM SIZE",
  },
];

export default function AutomationWhyUs() {
  return (
    <section className="py-28 site-gutter bg-[#FAF9F5] border-b border-black/10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-8 border-b border-black/10 gap-6">
        <div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0E0E10] font-sans leading-[0.95]">
            WHY CLIENTS <br />
            <span className="text-[#0047FF]">
              stay with us.
            </span>
          </h2>
        </div>
        <div className="max-w-xs text-left md:text-right">
          <p className="text-xs font-mono text-[#6E6E78]">
            THEY SAVE HOURS, SPEND LESS, MISS FEWER CUSTOMERS, AND GROW WITHOUT HIRING MORE PEOPLE.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {REASONS.map((r) => {
          const Icon = r.icon;
          return (
            <div
              key={r.title}
              className="grid grid-cols-1 items-center gap-4 rounded-3xl border border-black/10 bg-white px-6 py-6 sm:px-8 md:grid-cols-[1fr_auto] md:gap-8"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0E0E10] text-[#CEFF00]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-2xl sm:text-4xl font-black font-sans uppercase leading-none tracking-tight text-[#0E0E10]">
                  {r.title}
                </h3>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#CEFF00] px-4 py-2 text-xs font-mono font-bold text-[#0E0E10]">
                <Check className="h-4 w-4" />
                {r.result}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex flex-col gap-6 rounded-3xl bg-[#0E0E10] px-6 py-8 text-[#FAF9F5] sm:px-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#CEFF00]">
            Free savings check
          </span>
          <h3 className="mt-3 text-3xl sm:text-5xl font-black font-sans uppercase leading-[0.95] tracking-tight">
            See how much <br /> you can save
          </h3>
          <p className="mt-4 max-w-md text-sm font-sans leading-relaxed text-white/70">
            In 48 hours we show you how many hours and how much money an agent can save your business.
          </p>
        </div>
        <span className="inline-flex w-fit rounded-full bg-[#CEFF00] px-5 py-3 text-xs font-mono font-bold text-[#0E0E10]">
          HOURS SAVED. MONEY SAVED.
        </span>
      </div>
    </section>
  );
}
