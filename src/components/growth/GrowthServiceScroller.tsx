"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

interface Service {
  number: string;
  title: string;
  badge: string;
  tagline: string;
  image: string;
  note?: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Google Ads / Meta Ads",
    badge: "ADS",
    tagline: "We run ads on Google, Facebook, and Instagram so the right people find your business.",
    image: "/images/growth/ads.jpg",
  },
  {
    number: "02",
    title: "SEO + Technical Improvements",
    badge: "SEARCH",
    tagline: "We fix your site and help it show up higher when people search for what you sell.",
    image: "/images/growth/seo.jpg",
  },
  {
    number: "03",
    title: "AEO",
    badge: "AI SEARCH",
    tagline: "We help AI tools recommend your business when someone asks for a service like yours.",
    image: "/images/growth/aeo.jpg",
  },
  {
    number: "04",
    title: "Email Marketing",
    badge: "EMAIL",
    tagline: "We write and send emails that bring past customers back and keep new ones interested.",
    image: "/images/growth/email.jpg",
  },
  {
    number: "05",
    title: "Content Marketing",
    badge: "CONTENT",
    tagline: "We create pages and posts that explain your work and bring in people who need it.",
    image: "/images/growth/content.jpg",
  },
  {
    number: "06",
    title: "Google Business Suite",
    badge: "GOOGLE",
    tagline: "We keep your Google listing complete, with the right hours, photos, and details.",
    image: "/images/growth/google.jpg",
  },
  {
    number: "07",
    title: "Copywriting",
    badge: "WORDS",
    tagline: "We write clear words for your ads, website, and emails so people know what to do next.",
    image: "/images/growth/copy.jpg",
  },
  {
    number: "08",
    title: "Credible Backlinking",
    badge: "LINKS",
    tagline: "We get trusted sites to link to you, so Google sees your business as a real one.",
    image: "/images/growth/links.jpg",
    note: "Charged separately",
  },
  {
    number: "09",
    title: "Monthly Blogs",
    badge: "BLOGS",
    tagline: "We publish a new blog each month so your site stays useful and easier to find.",
    image: "/images/growth/blogs.jpg",
  },
  {
    number: "10",
    title: "Reporting Dashboard",
    badge: "REPORT",
    tagline: "One simple screen that shows visits, leads, and which work is bringing customers.",
    image: "/images/growth/dashboard.jpg",
  },
  {
    number: "11",
    title: "Google Analytics",
    badge: "TRACKING",
    tagline: "We connect Google Analytics so you can see who visits and what they do on your site.",
    image: "/images/growth/analytics.jpg",
  },
];

export default function GrowthServiceScroller() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [pin, setPin] = useState<"top" | "fixed" | "bottom">("top");
  const service = SERVICES[active];

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(scrollable, 0));
      const progress = scrollable <= 0 ? 0 : scrolled / scrollable;
      const next = Math.min(SERVICES.length - 1, Math.round(progress * (SERVICES.length - 1)));
      setActive((current) => (current === next ? current : next));

      const nextPin = rect.top > 0 ? "top" : rect.bottom < window.innerHeight ? "bottom" : "fixed";
      setPin((current) => (current === nextPin ? current : nextPin));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const jumpTo = (index: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const scrollable = section.offsetHeight - window.innerHeight;
    const progress = SERVICES.length === 1 ? 0 : index / (SERVICES.length - 1);
    window.scrollTo({ top: section.offsetTop + scrollable * progress, behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      id="growth-scroll"
      className="relative border-b border-black/10 bg-[#FAF9F5]"
      style={{ height: `${SERVICES.length * 85}vh` }}
    >
      <div
        className={`flex h-screen flex-col justify-center pt-20 ${
          pin === "fixed" ? "fixed inset-x-0 top-0 z-10" : pin === "bottom" ? "absolute inset-x-0 bottom-0" : "absolute inset-x-0 top-0"
        }`}
      >
        <div className="site-gutter mb-8 flex w-full flex-col justify-between gap-4 md:flex-row md:items-end">
          <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-5xl lg:text-6xl">
            ELEVEN WAYS <br />
            <span className="text-[#0047FF]">to get found.</span>
          </h2>
          <p className="max-w-sm text-left font-mono text-xs leading-relaxed text-[#6E6E78] md:text-right">
            KEEP SCROLLING. EACH SERVICE SHOWS WHAT WE DO AND HOW IT BRINGS YOU CUSTOMERS.
          </p>
        </div>
        <div className="site-gutter grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] lg:gap-10">
          <div className="relative aspect-[4/3] max-h-[55vh] overflow-hidden rounded-3xl bg-white">
            <AnimatePresence mode="wait">
              <motion.div
                key={service.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority={active === 0}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.35 }}
              className="relative flex min-h-[280px] flex-col overflow-hidden rounded-3xl border border-black/10 bg-white p-6 text-[#0E0E10] sm:min-h-[340px] sm:p-8"
            >
              <span className="pointer-events-none absolute -right-2 -top-6 text-8xl font-black leading-none text-[#0047FF]/12">
                {service.number}
              </span>
              <div className="relative flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#0047FF] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                  {service.badge}
                </span>
                <span className="font-mono text-xs font-bold text-[#6E6E78]">
                  {service.number} / {String(SERVICES.length).padStart(2, "0")}
                </span>
              </div>
              <h3 className="relative mt-auto pt-10 font-sans text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                {service.title}
              </h3>
              <p className="relative mt-4 max-w-md font-sans text-base leading-relaxed text-[#6E6E78]">
                {service.tagline}
              </p>
              {service.note ? (
                <p className="relative mt-6 w-fit rounded-full bg-[#CEFF00] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0E0E10]">
                  {service.note}
                </p>
              ) : null}
            </motion.article>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-2 lg:flex-col">
            {SERVICES.map((item, index) => (
              <button
                key={item.number}
                type="button"
                aria-label={item.title}
                onClick={() => jumpTo(index)}
                className={`rounded-full transition-all ${
                  index === active ? "h-2.5 w-8 bg-[#0047FF] lg:h-8 lg:w-2.5" : "h-2.5 w-2.5 bg-black/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
