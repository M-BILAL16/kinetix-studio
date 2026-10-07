"use client";

import React from "react";

interface FooterProps {
  onOpenContact: () => void;
}

const solutions = [
  { label: "AI Agents", href: "/ai-technology" },
  { label: "Automation Systems", href: "/ai-automation" },
  { label: "Custom Software", href: "#software" },
  { label: "Internal Dashboards", href: "#dashboards" },
  { label: "Growth & Marketing", href: "/growth-marketing" },
];

export default function Footer({ onOpenContact }: FooterProps) {
  return (
    <footer className="bg-[#FAF9F5] border-t border-black/10 pt-20 pb-0 overflow-hidden relative">
      <div className="site-gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-black/8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-5">
            <a href="#" className="inline-flex items-center gap-2.5 group">
              <span className="w-8 h-8 rounded-full bg-[#0E0E10] flex items-center justify-center text-[#FAF9F5] font-black text-xs group-hover:bg-[#0047FF] transition-colors duration-300">
                S
              </span>
              <span className="font-sans font-black tracking-tight text-sm text-[#0E0E10]">
                Single Solution
              </span>
            </a>
            <p className="text-sm text-[#6E6E78] leading-relaxed max-w-sm font-sans">
              One digital partner for every growth problem — websites, automations, AI and
              the systems in between.
            </p>
          </div>

          {/* Get Started */}
          <div className="lg:col-span-2">
            <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-4">
              Get Started
            </div>
            <ul className="text-sm font-sans space-y-3 text-[#0E0E10]">
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#0047FF] transition-colors text-left"
                >
                  Schedule a Call
                </button>
              </li>
              <li>
                <a href="#audit" className="hover:text-[#0047FF] transition-colors">
                  Get your AI Audit
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#0047FF] transition-colors text-left"
                >
                  Send a Query
                </button>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-4">
              Solutions
            </div>
            <ul className="text-sm font-sans space-y-3 text-[#0E0E10]">
              {solutions.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#0047FF] transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-4">
              Company
            </div>
            <ul className="text-sm font-sans space-y-3 text-[#0E0E10]">
              <li>
                <a href="/what-we-have-done" className="hover:text-[#0047FF] transition-colors">
                  What We Have Done
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#0047FF] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#0047FF] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="hover:text-[#0047FF] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Phone & Address */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-3">
                Phone
              </div>
              <a
                href="tel:+17744616388"
                className="text-sm font-sans text-[#0E0E10] hover:text-[#0047FF] transition-colors"
              >
                +1 (774) 461-6388
              </a>
            </div>
            <div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-3">
                Address
              </div>
              <p className="text-sm font-sans text-[#0E0E10] leading-relaxed">
                123 Innovation Drive, Suite 400
                <br />
                San Francisco, CA 94103
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-8 text-xs font-mono text-[#6E6E78]">
          <span>© 2026 Single Solution. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-[#0047FF] transition-colors">
              Security
            </a>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden leading-none select-none pointer-events-none mt-2 -mb-3 sm:-mb-6">
        <p className="text-[11vw] font-black tracking-tighter text-black/5 text-center uppercase whitespace-nowrap font-sans">
          Single Solution
        </p>
      </div>
    </footer>
  );
}
