"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqTab {
  id: string;
  label: string;
  short: string;
  faqs: FaqItem[];
}

const TABS: FaqTab[] = [
  {
    id: "ads",
    label: "Google Ads / Meta Ads",
    short: "Ads",
    faqs: [
      {
        q: "Which platforms do you run ads on?",
        a: "We run paid campaigns on Google Ads plus Meta — Facebook and Instagram. We pick the mix based on who you sell to and where those people already spend time.",
      },
      {
        q: "How soon can I expect results from ads?",
        a: "Most accounts start collecting useful data in the first two weeks. Clear lead and booking trends usually show up by week four once the creative and targeting have been tested.",
      },
      {
        q: "Do I need a big budget to start?",
        a: "No. We set a spend level that matches your market and goals. Small local budgets can work if the offer is clear and tracking is set up correctly from day one.",
      },
      {
        q: "Who writes the ad copy and creatives?",
        a: "We do. Headlines, descriptions, and creative direction sit with our team. You approve the direction, then we ship and improve based on what people actually click and call.",
      },
      {
        q: "How do I know the ads are bringing customers?",
        a: "We connect conversion tracking and report leads, calls, and cost per result in one dashboard — so you can see spend next to outcomes, not just impressions.",
      },
    ],
  },
  {
    id: "seo",
    label: "SEO + Technical",
    short: "SEO",
    faqs: [
      {
        q: "What does SEO work include each month?",
        a: "On-page fixes, keyword targeting, technical improvements, and content that helps your site rank for the searches that bring buyers — not just traffic for traffic’s sake.",
      },
      {
        q: "How long does SEO take to show results?",
        a: "You often see early movement in a few weeks. Stronger, stable rankings usually build over three to six months as pages, technical health, and authority improve together.",
      },
      {
        q: "What are technical improvements?",
        a: "Speed, mobile layout, crawlability, broken links, indexing, and site structure. If Google cannot read your pages cleanly, rankings stay stuck even with good content.",
      },
      {
        q: "Do you choose the keywords for me?",
        a: "Yes. We map keywords to what you sell and how locals search. Starter plans cover a focused set; larger plans expand that list as the site grows.",
      },
      {
        q: "Will SEO replace paid ads?",
        a: "They work best together. Ads bring demand now while SEO builds lasting visibility. We decide the balance based on your timeline and budget.",
      },
    ],
  },
  {
    id: "aeo",
    label: "AEO",
    short: "AEO",
    faqs: [
      {
        q: "What is AEO?",
        a: "AEO means answer engine optimisation. When someone asks Google, ChatGPT, or similar tools for a business like yours, we work so your name shows up in those answers.",
      },
      {
        q: "How is AEO different from SEO?",
        a: "SEO helps you rank in classic search results. AEO shapes clear, cite-ready answers that AI tools and answer boxes can quote when people ask for recommendations.",
      },
      {
        q: "Which AI tools does AEO cover?",
        a: "We focus on the surfaces people already use — Google’s AI answers, ChatGPT-style tools, and similar recommenders — with content and structure built to be referenced.",
      },
      {
        q: "Is AEO only for big brands?",
        a: "No. Local shops, clinics, and service businesses benefit when nearby buyers ask AI for “best near me” recommendations and your business is ready to be named.",
      },
      {
        q: "How do you measure AEO progress?",
        a: "We track branded mentions, answer-style visibility, referral traffic, and whether your pages are structured so engines can quote them with confidence.",
      },
    ],
  },
  {
    id: "email",
    label: "Email Marketing",
    short: "Email",
    faqs: [
      {
        q: "What kinds of emails do you send?",
        a: "Welcome sequences, follow-ups for leads who went quiet, seasonal offers, and simple nurture notes that bring past customers back without sounding spammy.",
      },
      {
        q: "Do you write the emails for us?",
        a: "Yes. We write the subject lines and body copy, set the timing, and connect the list so messages go out on a steady rhythm.",
      },
      {
        q: "Will this work if my list is small?",
        a: "Yes. Small lists often convert better when the message is personal and relevant. We also help grow the list through ads, forms, and site capture.",
      },
      {
        q: "How often will you email my customers?",
        a: "Enough to stay useful, not enough to annoy. Frequency depends on your offer and list health — we watch opens and unsubscribes and adjust.",
      },
      {
        q: "Can email work with my ads and site?",
        a: "That is the point. Leads from ads and search enter the same system, then email keeps the conversation going until they book or buy.",
      },
    ],
  },
  {
    id: "content",
    label: "Content Marketing",
    short: "Content",
    faqs: [
      {
        q: "What content do you create?",
        a: "Service pages, landing pages, and posts that explain what you do in plain language — so searchers and visitors know you are the right fit.",
      },
      {
        q: "Is content the same as blogging?",
        a: "Related but not identical. Content marketing covers the pages and pieces that support ads and SEO. Monthly blogs are a separate, steady publishing rhythm.",
      },
      {
        q: "Who decides the topics?",
        a: "We map topics to your services and the questions buyers ask. You approve the plan, then we write and publish against that list.",
      },
      {
        q: "How does content bring customers?",
        a: "Clear pages rank, convert ad traffic, and give sales something useful to send. Weak pages waste spend; strong pages turn attention into calls.",
      },
      {
        q: "Do you need photos or brand assets from me?",
        a: "Helpful, but not a blocker. We can start with what you have and fill gaps with structured copy and layout that still feels like your business.",
      },
    ],
  },
  {
    id: "gbp",
    label: "Google Business",
    short: "Google",
    faqs: [
      {
        q: "What is Google Business Suite work?",
        a: "We keep your Google Business Profile complete — hours, photos, categories, services, and posts — so local searchers see a trusted listing.",
      },
      {
        q: "Why does my Google listing matter?",
        a: "Many local buyers never scroll past Maps. A complete, active profile wins calls and directions before they ever open your website.",
      },
      {
        q: "Do you manage reviews?",
        a: "We help you respond and keep the profile tidy. The reviews themselves come from real customers; we make sure your side of the listing stays sharp.",
      },
      {
        q: "Can you claim or recover a listing?",
        a: "In most cases yes. We walk through verification, ownership, and cleanup if the listing is incomplete, duplicated, or out of date.",
      },
      {
        q: "How often do you update the profile?",
        a: "Throughout the month — posts, photos, and detail checks — so the listing stays accurate when people search for you.",
      },
    ],
  },
  {
    id: "copy",
    label: "Copywriting",
    short: "Copy",
    faqs: [
      {
        q: "Where does your copywriting show up?",
        a: "Ads, website pages, emails, and landing pages. Same voice across channels so people hear one clear offer wherever they find you.",
      },
      {
        q: "Will you rewrite my whole website?",
        a: "We focus on the pages that drive leads first — home, services, and key landers. Broader rewrites can follow once the conversion path is working.",
      },
      {
        q: "Do I need to write a brief?",
        a: "A short call is enough. You tell us what you sell and who buys; we turn that into copy people can act on.",
      },
      {
        q: "How do you keep the tone on-brand?",
        a: "We match how you already speak with customers — plain, direct, and local — then tighten it for screens and ads.",
      },
      {
        q: "Is copywriting included in every plan?",
        a: "Yes on the growth packages. Words for ads, pages, and emails sit inside the monthly work so creative never waits on a separate vendor.",
      },
    ],
  },
  {
    id: "links",
    label: "Backlinking",
    short: "Links",
    faqs: [
      {
        q: "Are backlinks included in the monthly plans?",
        a: "No. Credible backlinking is charged separately. We only pursue links that are real and relevant to your business.",
      },
      {
        q: "What makes a backlink “credible”?",
        a: "A link from a real site that people trust and that relates to your market. We avoid bought spam networks that can hurt rankings.",
      },
      {
        q: "How many links do I need?",
        a: "Quality beats volume. A handful of strong, relevant links usually beats dozens of weak ones that Google ignores or penalises.",
      },
      {
        q: "Will you guarantee rankings from links alone?",
        a: "No honest partner can. Links support SEO alongside content and technical health. We report placements and the movement they help create.",
      },
      {
        q: "How do we decide if backlinks are worth it?",
        a: "After we see your competitive gap. If rivals outrank you with stronger authority, we propose a focused link plan with clear scope and cost.",
      },
    ],
  },
  {
    id: "blogs",
    label: "Monthly Blogs",
    short: "Blogs",
    faqs: [
      {
        q: "How many blogs do you publish each month?",
        a: "One new post each month on the standard rhythm — written to answer real buyer questions and support your keyword plan.",
      },
      {
        q: "Who picks the blog topics?",
        a: "We propose topics from your services and search demand. You approve, then we write, edit, and publish.",
      },
      {
        q: "Do blogs help SEO and AEO?",
        a: "Yes. Fresh, useful posts give Google and answer engines more to index and cite, especially when they target questions your buyers already ask.",
      },
      {
        q: "Will you promote the blog after it goes live?",
        a: "We connect posts to your channels where it makes sense — site navigation, email, and social — so the article does not sit unread.",
      },
      {
        q: "Can we request a specific topic?",
        a: "Absolutely. If you have a seasonal offer or a question customers keep asking, we write that next.",
      },
    ],
  },
  {
    id: "dashboard",
    label: "Reporting Dashboard",
    short: "Report",
    faqs: [
      {
        q: "What does the reporting dashboard show?",
        a: "Visits, leads, ad results, and which channels are bringing customers — in one screen instead of five logins.",
      },
      {
        q: "How often is the dashboard updated?",
        a: "Data refreshes through the month. We also walk the numbers with you so the report turns into decisions, not just charts.",
      },
      {
        q: "Do I need to learn a complicated tool?",
        a: "No. The dashboard is built to be readable. If a number matters, it is labelled in plain language.",
      },
      {
        q: "Can my team get access too?",
        a: "Yes. We share access with whoever needs it — owners, managers, or partners — with the same clear view.",
      },
      {
        q: "What if something looks off in the numbers?",
        a: "Tell us. We check tracking, filters, and campaign changes, then fix the source so the report stays trustworthy.",
      },
    ],
  },
  {
    id: "analytics",
    label: "Google Analytics",
    short: "Analytics",
    faqs: [
      {
        q: "Do you set up Google Analytics for us?",
        a: "Yes. We connect Analytics so you can see who visits, which pages they use, and what leads to a call or form fill.",
      },
      {
        q: "Is Analytics different from the dashboard?",
        a: "Analytics is the raw measurement layer. The reporting dashboard pulls the important numbers into a simpler monthly view.",
      },
      {
        q: "Will you track phone calls and form fills?",
        a: "Where possible, yes. We set conversion events so ads and SEO are judged by real enquiries, not just page views.",
      },
      {
        q: "Do I already need a Google account?",
        a: "A Google account helps. If you do not have Analytics yet, we create and connect it as part of the setup.",
      },
      {
        q: "Can Analytics show which campaigns work best?",
        a: "With proper tagging, yes. We align campaign names and conversions so spend and outcomes stay connected.",
      },
    ],
  },
];

export default function GrowthFaq() {
  const [activeTab, setActiveTab] = useState(TABS[0].id);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const active = TABS.find((tab) => tab.id === activeTab) ?? TABS[0];

  const selectTab = (id: string) => {
    setActiveTab(id);
    setOpenIndex(0);
  };

  return (
    <section className="relative overflow-hidden border-b border-black/10 bg-[#FAF9F5] py-28 site-gutter">
      <div className="mb-12 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
        <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl">
          COMMON <span className="text-[#0047FF]">questions.</span>
        </h2>
        <p className="max-w-sm text-left font-mono text-xs leading-relaxed text-[#6E6E78] md:text-right">
          ELEVEN SERVICES. FIVE ANSWERS EACH. PICK A SERVICE ON THE LEFT TO READ ITS FAQ.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:gap-8">
        {/* Left: service list */}
        <aside className="flex lg:col-span-4">
          <div className="flex h-full min-h-[36rem] w-full flex-col rounded-3xl border border-black/10 bg-white p-3 shadow-sm sm:min-h-[40rem] lg:min-h-[44rem]">
            <p className="mb-3 shrink-0 px-3 pt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-[#6E6E78]">
              Services
            </p>
            <div className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
              {TABS.map((tab, idx) => {
                const isActive = tab.id === activeTab;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => selectTab(tab.id)}
                    className={`flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 text-left transition-colors ${
                      isActive
                        ? "bg-[#0E0E10] text-[#FAF9F5]"
                        : "text-[#0E0E10] hover:bg-black/[0.04]"
                    }`}
                  >
                    <span
                      className={`shrink-0 font-mono text-[10px] font-bold tracking-widest ${
                        isActive ? "text-[#CEFF00]" : "text-[#9E9EA8]"
                      }`}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="font-sans text-sm font-bold leading-snug sm:text-[15px]">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Right: FAQs */}
        <div className="flex lg:col-span-8">
          <div className="flex h-full min-h-[36rem] w-full flex-col rounded-3xl border border-black/10 bg-white p-6 shadow-sm sm:min-h-[40rem] sm:p-8 lg:min-h-[44rem] lg:p-10">
            <div className="mb-6 flex shrink-0 flex-wrap items-center gap-3 border-b border-black/10 pb-6">
              <span className="rounded-full bg-[#0047FF] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                {active.short}
              </span>
              <h3 className="font-sans text-xl font-black tracking-tight text-[#0E0E10] sm:text-2xl">
                {active.label}
              </h3>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="min-h-0 flex-1 divide-y divide-black/8 overflow-y-auto"
              >
                {active.faqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <div key={faq.q} className="py-6 first:pt-1 last:pb-1">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="flex w-full items-center justify-between gap-4 text-left"
                      >
                        <span className="font-sans text-base font-bold text-[#0E0E10] sm:text-lg">
                          {faq.q}
                        </span>
                        <span
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isOpen
                              ? "border-[#0E0E10] bg-[#0E0E10] text-white"
                              : "border-black/10 bg-[#FAF9F5] text-[#0E0E10]"
                          }`}
                        >
                          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                        </span>
                      </button>
                      <AnimatePresence>
                        {isOpen ? (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden pt-3 font-sans text-base leading-relaxed text-[#6E6E78]"
                          >
                            {faq.a}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
