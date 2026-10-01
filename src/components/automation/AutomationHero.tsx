"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Zap,
  MessageSquare,
  Bot,
  ArrowRight,
  ArrowDown,
  CheckCircle2,
  Calendar,
  Sparkles,
  PhoneCall,
  Globe,
  Clock,
  Send,
} from "lucide-react";

interface AutomationHeroProps {
  onOpenContact: () => void;
}

interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  time: string;
  actionPill?: string;
}

export default function AutomationHero({ onOpenContact }: AutomationHeroProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      sender: "user",
      text: "Hi, do you build WhatsApp AI bots that can book patient appointments directly into our clinic software?",
      time: "10:42 AM",
    },
    {
      id: "2",
      sender: "bot",
      text: "Hello! Yes, absolutely. We deploy intelligent 24/7 WhatsApp AI agents that answer patient FAQs, verify doctor availability in real-time, and book appointments directly into your clinic calendar.",
      time: "10:42 AM",
      actionPill: "✓ Calendar API Synced",
    },
    {
      id: "3",
      sender: "user",
      text: "Can it communicate in Urdu and English interchangeably?",
      time: "10:43 AM",
    },
    {
      id: "4",
      sender: "bot",
      text: "Ji bilkul! Our multi-lingual models understand Roman Urdu, proper Urdu, English, and Arabic seamlessly. Would you like to see a custom live demo for your specialty?",
      time: "10:43 AM",
      actionPill: "✓ Multi-Lingual Engine Active",
    },
  ]);

  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const simulateUserAction = (customText: string, botReply: string, actionPill: string) => {
    if (isTyping) return;
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: "user",
      text: customText,
      time: now,
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: "bot",
        text: botReply,
        time: now,
        actionPill,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 900);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    simulateUserAction(
      inputVal,
      "Thanks for your inquiry! Our automated lead pipeline has logged your parameter and scheduled an executive audit.",
      "✓ Auto-Logged to CRM"
    );
    setInputVal("");
  };

  return (
    <section className="relative min-h-[92vh] pt-32 pb-20 px-4 sm:px-8 lg:px-12 bg-editorial-grid bg-noise border-b border-black/10 overflow-hidden">
      {/* Top Editorial Index & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-black/8 pb-4 mb-12 gap-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#CEFF00] animate-ping" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#0E0E10]">
            AI AUTOMATION AGENCY // PREMIER GROWTH SYSTEMS
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-[#6E6E78]">
          <span className="hidden sm:inline">SERVING PAKISTAN • UAE • SAUDI ARABIA • GLOBAL</span>
          <span className="text-[#CEFF00] font-semibold">STATUS: SYSTEMS LIVE // 2026</span>
        </div>
      </div>

      {/* Main Grid: Headline + Interactive WhatsApp AI Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Monumental Editorial Typography (7 cols) */}
        <div className="lg:col-span-7 flex flex-col z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/10 text-xs font-mono text-[#0E0E10] font-semibold mb-6 w-fit shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#CEFF00]" />
            <span>DONE-FOR-YOU REVENUE AUTOMATIONS</span>
          </div>

          <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black uppercase tracking-tight text-[#0E0E10] leading-[0.92] font-sans">
            AI SYSTEMS THAT <br />
            AUTOMATE SALES &amp; <br />
            <span className="font-serif italic font-normal text-[#0047FF] lowercase text-6xl sm:text-8xl xl:text-9xl pr-2">
              operations.
            </span>{" "}
            24/7 AUTOPILOT.
          </h1>

          <p className="mt-8 text-base sm:text-xl text-[#6E6E78] leading-relaxed max-w-2xl font-sans">
            We help ambitious businesses across Pakistan, the GCC, and international markets
            automate lead generation, instant WhatsApp sales follow-ups, and operational
            workflows — scaling revenue without expanding headcount.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenContact}
              data-cursor="start"
              className="px-8 py-4 rounded-full bg-[#0E0E10] hover:bg-[#CEFF00] text-[#FAF9F5] text-xs font-mono font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>CLAIM YOUR FREE AI AUDIT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#signature-offers"
              className="px-6 py-4 rounded-full bg-white hover:bg-black/5 text-[#0E0E10] border border-black/15 text-xs font-mono font-bold tracking-widest uppercase transition-all duration-200 flex items-center gap-2"
            >
              <span>SIGNATURE OFFERS</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Core Telemetry Strip */}
          <div className="mt-12 pt-8 border-t border-black/8 grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                &lt;5 Sec
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Lead Response Speed
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                30 Days
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Full Production Deploy
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-black font-sans text-[#0E0E10]">
                +340%
              </div>
              <div className="text-[10px] font-mono text-[#6E6E78] uppercase mt-0.5">
                Avg. Inbound Pipeline Lift
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Live Interactive WhatsApp Sales Bot Simulator (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-3xl border border-black/10 shadow-2xl overflow-hidden flex flex-col">
            {/* WhatsApp Header bar */}
            <div className="bg-[#0B141A] text-white p-4 sm:p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#CEFF00] flex items-center justify-center text-white font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-sm">Kinetix AI Sales Agent</span>
                    <span className="w-2 h-2 rounded-full bg-[#CEFF00]" />
                  </div>
                  <div className="text-[10px] text-white/70 font-mono">
                    Official WhatsApp Business Verified
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-mono bg-white/10 px-2 py-0.5 rounded text-[#CEFF00] font-semibold">
                ONLINE 24/7
              </span>
            </div>

            {/* Chat Messages Body */}
            <div className="bg-[#EFEAE2] p-4 sm:p-5 space-y-3.5 h-[340px] overflow-y-auto">
              {messages.map((m) => {
                const isUser = m.sender === "user";
                return (
                  <div
                    key={m.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-xs leading-relaxed ${
                        isUser
                          ? "bg-[#D9FDD3] text-[#0E0E10] rounded-tr-none font-sans"
                          : "bg-white text-[#0E0E10] rounded-tl-none font-sans border border-black/5"
                      }`}
                    >
                      <p>{m.text}</p>
                      {m.actionPill && (
                        <div className="mt-2 text-[9px] font-mono text-[#0047FF] font-bold bg-[#0047FF]/10 px-2 py-0.5 rounded w-fit">
                          {m.actionPill}
                        </div>
                      )}
                      <span className="text-[9px] text-[#6E6E78] font-mono block text-right mt-1">
                        {m.time}
                      </span>
                    </div>
                  </div>
                );
              })}

              {isTyping && (
                <div className="flex items-center gap-1.5 p-2.5 bg-white rounded-xl w-fit shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CEFF00] animate-bounce [animation-delay:0.4s]" />
                  <span className="text-[10px] font-mono text-[#6E6E78] ml-1">AI agent typing...</span>
                </div>
              )}
            </div>

            {/* Quick Interactive Prompt Chips */}
            <div className="p-3 bg-white border-t border-black/8 flex gap-1.5 overflow-x-auto text-[11px] font-mono">
              <button
                type="button"
                onClick={() =>
                  simulateUserAction(
                    "What are your done-for-you investment plans?",
                    "We offer 4 turnkey systems starting from the AI Revenue Engine up to complete Local Market Domination. Would you like a 60-second diagnostic call?",
                    "✓ Loaded Investment Catalog"
                  )
                }
                className="px-2.5 py-1 rounded-full bg-black/5 hover:bg-black/10 text-[#0E0E10] shrink-0"
              >
                + Pricing Plans
              </button>
              <button
                type="button"
                onClick={() =>
                  simulateUserAction(
                    "Kya aap real estate agencies ke liye lead qualifying karte hain?",
                    "Ji bilkul! We automate property listings, budget verification, and WhatsApp site-visit bookings with 340% higher lead show-up rates.",
                    "✓ Urdu Language Engine"
                  )
                }
                className="px-2.5 py-1 rounded-full bg-black/5 hover:bg-black/10 text-[#0E0E10] shrink-0"
              >
                + Urdu Real Estate
              </button>
              <button
                type="button"
                onClick={() =>
                  simulateUserAction(
                    "Can I book a free automation strategy call for tomorrow?",
                    "Slot confirmed! Our lead automation architect is available Thursday 3:00 PM PKT / 2:00 PM GST. Calendar invite sent to your WhatsApp.",
                    "✓ Cal.com Booked"
                  )
                }
                className="px-2.5 py-1 rounded-full bg-[#CEFF00]/15 text-[#065F46] font-bold shrink-0"
              >
                + Book Call Demo
              </button>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 bg-white border-t border-black/8 flex items-center gap-2">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a test message to the AI bot..."
                className="flex-1 bg-[#FAF9F5] px-3.5 py-2 text-xs rounded-full border border-black/10 focus:outline-none focus:border-[#CEFF00]"
              />
              <button
                type="submit"
                className="w-8 h-8 rounded-full bg-[#CEFF00] hover:bg-[#059669] text-white flex items-center justify-center shrink-0"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
