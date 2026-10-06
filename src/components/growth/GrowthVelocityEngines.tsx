"use client";

import {
  ArrowRight,
  BarChart3,
  FileText,
  Link2,
  Mail,
  MapPin,
  Megaphone,
  PenLine,
  Search,
  Sparkles,
  LineChart,
  Newspaper,
  type LucideIcon,
} from "lucide-react";

interface Service {
  number: string;
  title: string;
  badge: string;
  tagline: string;
  icon: LucideIcon;
  note?: string;
  cta?: boolean;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Google Ads / Meta Ads",
    badge: "ADS",
    tagline: "We run ads on Google, Facebook, and Instagram so the right people find your business.",
    icon: Megaphone,
  },
  {
    number: "02",
    title: "SEO + Technical Improvements",
    badge: "SEARCH",
    tagline: "We fix your site and help it show up higher when people search for what you sell.",
    icon: Search,
  },
  {
    number: "03",
    title: "AEO",
    badge: "AI SEARCH",
    tagline: "We help AI tools recommend your business when someone asks for a service like yours.",
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Email Marketing",
    badge: "EMAIL",
    tagline: "We write and send emails that bring past customers back and keep new ones interested.",
    icon: Mail,
  },
  {
    number: "05",
    title: "Content Marketing",
    badge: "CONTENT",
    tagline: "We create pages and posts that explain your work and bring in people who need it.",
    icon: FileText,
  },
  {
    number: "06",
    title: "Google Business Suite",
    badge: "GOOGLE",
    tagline: "We keep your Google listing complete, with the right hours, photos, and details.",
    icon: MapPin,
  },
  {
    number: "07",
    title: "Copywriting",
    badge: "WORDS",
    tagline: "We write clear words for your ads, website, and emails so people know what to do next.",
    icon: PenLine,
  },
  {
    number: "08",
    title: "Credible Backlinking",
    badge: "LINKS",
    tagline: "We get trusted sites to link to you, so Google sees your business as a real one.",
    icon: Link2,
    note: "Charged separately",
  },
  {
    number: "09",
    title: "Monthly Blogs",
    badge: "BLOGS",
    tagline: "We publish a new blog each month so your site stays useful and easier to find.",
    icon: Newspaper,
  },
  {
    number: "10",
    title: "Reporting Dashboard",
    badge: "REPORT",
    tagline: "One simple screen that shows visits, leads, and which work is bringing customers.",
    icon: BarChart3,
  },
  {
    number: "11",
    title: "Google Analytics",
    badge: "TRACKING",
    tagline: "We connect Google Analytics so you can see who visits and what they do on your site.",
    icon: LineChart,
  },
  {
    number: "12",
    title: "Start with a plan",
    badge: "NEXT STEP",
    tagline: "Tell us what you sell. We will choose the ads, search, and content to start with.",
    icon: ArrowRight,
    cta: true,
  },
];

export default function GrowthVelocityEngines({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section id="growth-services" className="border-b border-black/10 bg-[#FAF9F5] py-28 site-gutter">
      <div className="mb-16 flex flex-col justify-between gap-6 border-b border-black/10 pb-8 md:flex-row md:items-end">
        <h2 className="font-sans text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#0E0E10] sm:text-6xl lg:text-7xl">
          WHAT WE DO <br />
          <span className="text-[#0047FF]">for growth.</span>
        </h2>
        <p className="max-w-md text-left font-mono text-xs leading-relaxed text-[#6E6E78] sm:text-sm md:text-right">
          ADS, SEARCH, EMAIL, CONTENT, COPY, BLOGS, AND A CLEAR MONTHLY REPORT. BACKLINKS ARE
          CHARGED ON THEIR OWN.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = service.icon;
          return (
            <article
              key={service.number}
              className={`relative flex min-h-[250px] flex-col overflow-hidden rounded-3xl p-6 ${
                service.cta
                  ? "bg-[#0E0E10] text-[#FAF9F5]"
                  : "border border-black/10 bg-white text-[#0E0E10]"
              }`}
            >
              <span
                className={`pointer-events-none absolute -right-1 -top-5 text-7xl font-black leading-none ${
                  service.cta ? "text-white/10" : "text-[#0047FF]/12"
                }`}
              >
                {service.number}
              </span>
              <div className="relative flex items-center justify-between gap-3">
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest ${
                    service.cta ? "bg-[#CEFF00] text-[#0E0E10]" : "bg-[#0047FF] text-white"
                  }`}
                >
                  {service.badge}
                </span>
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                    service.cta ? "bg-[#CEFF00] text-[#0E0E10]" : "bg-[#0047FF] text-white"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="relative mt-auto pt-8 font-sans text-xl font-black leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className={`relative mt-3 font-sans text-sm leading-snug ${service.cta ? "text-white/70" : "text-[#6E6E78]"}`}>
                {service.tagline}
              </p>
              {service.note ? (
                <p className="relative mt-4 w-fit rounded-full bg-[#CEFF00] px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0E0E10]">
                  {service.note}
                </p>
              ) : null}
              {service.cta ? (
                <button
                  type="button"
                  onClick={onOpenContact}
                  className="relative mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-[10px] font-mono font-bold uppercase tracking-widest text-[#0E0E10]"
                >
                  Start a project
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
