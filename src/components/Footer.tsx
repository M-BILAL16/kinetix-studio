"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Globe, Clock } from "lucide-react";

export default function Footer() {
  const [times, setTimes] = useState({
    nyc: "",
    lon: "",
    tyo: "",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        nyc: now.toLocaleTimeString("en-US", {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
        lon: now.toLocaleTimeString("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
        tyo: now.toLocaleTimeString("ja-JP", {
          timeZone: "Asia/Tokyo",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#FAF9F5] border-t border-black/10 pt-20 pb-0 overflow-hidden relative select-none">
      <div className="px-4 sm:px-8 lg:px-12">
        {/* Top Operational Bar */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-16 border-b border-black/8 items-start">
          {/* Status & Studio Info (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0E0E10]">
                STUDIO STATUS: ACTIVE
              </span>
            </div>
            <p className="text-sm text-[#6E6E78] leading-relaxed max-w-sm font-sans">
              Bespoke digital architecture, Awwwards-caliber web experiences, and high-velocity
              automation engines for visionaries who refuse ordinary.
            </p>
            <div className="text-xs font-mono text-[#0047FF] font-semibold">
              HELLO@KINETIX-STUDIO.COM
            </div>
          </div>

          {/* Time Clocks (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#6E6E78] uppercase tracking-wider mb-2">
              <Clock className="w-3.5 h-3.5" />
              <span>STUDIO ATELIERS & LOCAL TIME</span>
            </div>
            <div className="font-mono text-xs space-y-1.5 text-[#0E0E10]">
              <div className="flex justify-between border-b border-black/5 pb-1">
                <span className="text-[#6E6E78]">NEW YORK [EST]</span>
                <span className="font-bold">{times.nyc || "12:00:00"}</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-1">
                <span className="text-[#6E6E78]">LONDON [GMT]</span>
                <span className="font-bold">{times.lon || "17:00:00"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6E6E78]">TOKYO [JST]</span>
                <span className="font-bold">{times.tyo || "01:00:00"}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links (2 cols) & Socials (2 cols) */}
          <div className="md:col-span-2 space-y-2">
            <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-3">
              NAVIGATION
            </div>
            <ul className="text-xs font-mono space-y-2 text-[#0E0E10]">
              <li>
                <a href="#work" className="hover:text-[#0047FF] transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0047FF] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#philosophy" className="hover:text-[#0047FF] transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#0047FF] transition-colors">
                  Process
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#0047FF] transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-2">
            <div className="text-[10px] font-mono text-[#6E6E78] uppercase tracking-widest mb-3">
              NETWORK
            </div>
            <ul className="text-xs font-mono space-y-2 text-[#0E0E10]">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0047FF] transition-colors flex items-center justify-between"
                >
                  <span>X // Twitter</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0047FF] transition-colors flex items-center justify-between"
                >
                  <span>Instagram</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0047FF] transition-colors flex items-center justify-between"
                >
                  <span>LinkedIn</span>
                  <span>↗</span>
                </a>
              </li>
              <li>
                <a
                  href="https://dribbble.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#0047FF] transition-colors flex items-center justify-between"
                >
                  <span>Dribbble</span>
                  <span>↗</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sub-bar: Legal & Back To Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between py-8 text-xs font-mono text-[#6E6E78] gap-4">
          <div className="flex items-center gap-3">
            <span>© 2026 KINETIX DIGITAL ATELIER.</span>
            <span>ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            data-cursor="top"
            className="flex items-center gap-2 text-[#0E0E10] hover:text-[#0047FF] font-bold group"
          >
            <span>BACK TO TOP</span>
            <div className="w-7 h-7 rounded-full border border-black/15 flex items-center justify-center group-hover:border-[#0047FF] group-hover:-translate-y-1 transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>

      {/* Massive Cropped Brand Wordmark Spanning Width */}
      <div className="w-full overflow-hidden leading-none select-none pointer-events-none mt-4 -mb-4 sm:-mb-8">
        <h1 className="text-[17vw] font-black tracking-tighter text-black/5 hover:text-black/8 transition-colors text-center uppercase whitespace-nowrap font-sans">
          KINETIX
        </h1>
      </div>
    </footer>
  );
}
