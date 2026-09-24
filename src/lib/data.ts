export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string[];
  year: string;
  description: string;
  impact: string;
  accentColor: string;
  tagline: string;
  badge: string;
  image: string;
  stats: { label: string; value: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  deliverables: string[];
  accentColor: string;
  tag: string;
  visualSnippet: string;
}

export interface PhilosophyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyMetric: string;
  accent: string;
  deliverable: string;
}

export interface LeveragePair {
  gap: string;
  fix: string;
}

export interface EngagementTier {
  id: string;
  step: string;
  price: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  cta: string;
  includes: string[];
  accent: string;
  recommended: boolean;
}

export interface ProcessStage {
  number: string;
  phase: string;
  timeline: string;
  focus: string;
  description: string;
  deliverables: string[];
  techSpec: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  location: string;
  metric: string;
}

export const AGENCY_DATA = {
  name: "KINETIX",
  tagline: "Making your brand impossible to ignore.",
  subline:
    "We identify which part of your business is costing you time and money, then we deploy tested solutions to fix it for you.",
  coordinates: "40.7128° N, 74.0060° W // NYC",
  founded: "2021",
  status: "AVAILABLE FOR SELECT Q3/Q4 2026 ENGAGEMENTS",
  primaryCta: "Build and Automate",
  secondaryCta: "Grow and Acquire",
  metrics: [
    {
      value: "250+",
      label: "Projects Delivered",
      detail: "Shipped systems across fintech, education, retail and services",
      tag: "TRACK RECORD",
    },
    {
      value: "12+",
      label: "Enterprise Clients",
      detail: "Multi-year partners running critical operations on our builds",
      tag: "ENTERPRISE",
    },
    {
      value: "92%",
      label: "Client Retention",
      detail: "Most engagements continue well past the first deployment",
      tag: "TRUST",
    },
    {
      value: "$300K+",
      label: "Revenue Enabled",
      detail: "Documented revenue our systems helped partners unlock",
      tag: "LEVERAGE",
    },
  ],
  services: [
    {
      id: "ai-agents",
      number: "01",
      title: "AI AGENTS",
      shortDesc:
        "Handle routine tasks, support requests, and repetitive work automatically — so your team spends its hours on the work only people can do.",
      deliverables: [
        "Support & Intake Agents",
        "Document Processing",
        "Human Handoff Rules",
        "Guardrails & Evaluation",
      ],
      accentColor: "#0047FF",
      tag: "AUTONOMY",
      visualSnippet: "AGENT_RUNTIME // ROUTINE_WORK_OFFLOADED",
    },
    {
      id: "automation",
      number: "02",
      title: "AUTOMATION SYSTEMS",
      shortDesc:
        "Connect your tools and processes, so work happens faster with less manual effort and nothing falls through the gaps between systems.",
      deliverables: [
        "Workflow Orchestration",
        "CRM & Ops Integrations",
        "Automated Handoffs",
        "Failure Alerting",
      ],
      accentColor: "#FF3B14",
      tag: "THROUGHPUT",
      visualSnippet: "PIPELINE // TOOLS_TALKING_TO_EACH_OTHER",
    },
    {
      id: "software",
      number: "03",
      title: "CUSTOM SOFTWARE",
      shortDesc:
        "Build the exact tools your business needs when off-the-shelf systems fall short — owned by you, shaped around how you actually operate.",
      deliverables: [
        "Internal Platforms",
        "Customer-Facing Products",
        "API & Data Layer",
        "Production Deployment",
      ],
      accentColor: "#10B981",
      tag: "OWNERSHIP",
      visualSnippet: "BESPOKE_BUILD // NO_TEMPLATE_COMPROMISE",
    },
    {
      id: "dashboards",
      number: "04",
      title: "INTERNAL DASHBOARDS",
      shortDesc:
        "Give yourself and your team the insights they need to monitor performance and act quickly, instead of waiting on a monthly spreadsheet.",
      deliverables: [
        "Live Operations View",
        "Revenue & Funnel Reporting",
        "Role-Based Access",
        "Automated Alerts",
      ],
      accentColor: "#7C3AED",
      tag: "VISIBILITY",
      visualSnippet: "TELEMETRY // DECISIONS_IN_REAL_TIME",
    },
    {
      id: "growth",
      number: "05",
      title: "GROWTH & MARKETING",
      shortDesc:
        "Use SEO, AI search, paid campaigns, and conversion-focused tools to drive sales — measured against pipeline, not impressions.",
      deliverables: [
        "SEO & AEO",
        "Paid Acquisition",
        "Conversion Optimisation",
        "Sales Campaigns",
      ],
      accentColor: "#FF2E93",
      tag: "ACQUISITION",
      visualSnippet: "DEMAND_ENGINE // PIPELINE_OVER_VANITY",
    },
  ],
  projects: [
    {
      id: "phoenix",
      number: "01",
      title: "PHOENIX TRADER FUNDING",
      client: "Phoenix Trader Funding",
      category: ["STRATEGY", "DESIGN", "ENGINEERING"],
      year: "2026",
      description:
        "Seamless and enjoyable software is the heart of customer retention and sales. From first creating the platform in 2024 to launching its 2.0 in 2026, the revenue of the platform has increased with our engineering role at the core of it.",
      impact: "62% revenue increase compared to 2025",
      accentColor: "#0047FF",
      tagline: "Retention is a product problem before it is a sales problem.",
      badge: "FINTECH",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "Revenue Increase", value: "62%" },
        { label: "Platform Release", value: "2.0" },
        { label: "Partner Since", value: "2024" },
      ],
    },
    {
      id: "uss",
      number: "02",
      title: "UNITED SCHOOL SUPPLIES",
      client: "United School Supplies",
      category: ["PERFORMANCE MARKETING", "SALES CAMPAIGN"],
      year: "2026",
      description:
        "Sales has two parts: knowing who will be interested in your product, and how to reach them. Once those two steps are complete and combined with a quality experience, everything starts converting into the number we all love. That is what our marketing team did for USS, and it resulted in more clients for the business.",
      impact: "4 new enterprise clients added",
      accentColor: "#FF3B14",
      tagline: "Know exactly who is buying, then go and reach them.",
      badge: "EDUCATION",
      image:
        "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "New Clients", value: "17%" },
        { label: "Enterprise Accounts", value: "4" },
        { label: "Channels Deployed", value: "2" },
      ],
    },
    {
      id: "signs-ny",
      number: "03",
      title: "SIGNS NY",
      client: "Signs NY",
      category: ["SEO", "AEO", "ENGINEERING"],
      year: "2026",
      description:
        "Signs NY was tricky, as the customer of the business is not your ordinary street traffic. So we built a unique strategy that delivers ROI without burning thousands in paid marketing. As a result, year on year traffic is seeing a steady rise.",
      impact: "32% organic traffic uplift",
      accentColor: "#10B981",
      tagline: "Reach the buyer that matters without paying for the rest.",
      badge: "RETAIL",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "Organic Traffic", value: "+32%" },
        { label: "Search Surfaces", value: "SEO + AEO" },
        { label: "Paid Spend Added", value: "$0" },
      ],
    },
  ],
  philosophy: [
    {
      number: "01",
      title: "Understand",
      subtitle: "Your business",
      description:
        "See the whole system before prescribing a move. We look at how work actually flows through your company, where your revenue comes from, and where people are quietly spending hours on things a machine should be doing.",
      keyMetric: "Whole-System View",
      accent: "#0047FF",
      deliverable: "Operational Map & Cost-of-Friction Review",
    },
    {
      number: "02",
      title: "Identify",
      subtitle: "The opportunity",
      description:
        "Every business has one gap that is more expensive than the rest. Manual work, a sales gap, or disconnected systems — we name it precisely, then match it to the solution that actually closes it.",
      keyMetric: "Single Highest-Leverage Gap",
      accent: "#FF3B14",
      deliverable: "Opportunity Shortlist & Prioritised Roadmap",
    },
    {
      number: "03",
      title: "Execute",
      subtitle: "The right solution",
      description:
        "A focused combination built around the opportunity. We deploy tested solutions rather than experiments, ship them into the real business, and stay until the number moves.",
      keyMetric: "Tested Solutions Only",
      accent: "#10B981",
      deliverable: "Live System In Production & Handover",
    },
  ],
  leverageMap: [
    { gap: "Manual Work", fix: "Automation" },
    { gap: "Sales Gap", fix: "Performance Marketing" },
    { gap: "Disconnected Systems", fix: "Central Integration" },
  ],
  engagement: [
    {
      id: "discovery",
      step: "Step 01",
      price: "Free",
      title: "Discovery Call",
      subtitle: "Find the Gap",
      description:
        "In this discovery call we discover how your business works, learn about your problems, and identify where AI and automation can create the biggest impact for you.",
      duration: "30 Minutes",
      cta: "Start with diagnosis",
      includes: [
        "How your business runs today",
        "Where time and money leak",
        "Honest view on what is worth automating",
      ],
      accent: "#0047FF",
      recommended: false,
    },
    {
      id: "audit",
      step: "Step 02",
      price: "$2,500",
      title: "AI Audit",
      subtitle: "Propose the Roadmap",
      description:
        "We turn uncertainty into a clear proposal and roadmap — identifying what to automate, where to start, and which specific changes will deliver the greatest savings in time and cost.",
      duration: "10 Days",
      cta: "Get a roadmap",
      includes: [
        "Full workflow and systems audit",
        "Prioritised automation roadmap",
        "Projected time and cost savings",
      ],
      accent: "#FF3B14",
      recommended: true,
    },
    {
      id: "build",
      step: "Step 03",
      price: "$15k–50k",
      title: "Build & Automate",
      subtitle: "Paper to Product",
      description:
        "Once the plan is clear, execution becomes a matter of time. We turn ideas into working systems that start living and creating value in the real world.",
      duration: "45 Days Approx.",
      cta: "Build the solution",
      includes: [
        "Production build and deployment",
        "Team training and handover",
        "Post-launch support window",
      ],
      accent: "#10B981",
      recommended: false,
    },
  ],
  process: [
    {
      number: "01",
      phase: "DISCOVER",
      timeline: "WEEK 01",
      focus: "Where The Money Leaks",
      description:
        "We map how work moves through your business, interview the people doing it, and put a number on what the current friction costs you every month.",
      deliverables: ["Operational Map", "Cost-of-Friction Review", "Opportunity Shortlist"],
      techSpec: "INPUT: WORKFLOWS + UNIT ECONOMICS",
    },
    {
      number: "02",
      phase: "DEFINE",
      timeline: "WEEK 02",
      focus: "The Roadmap",
      description:
        "Uncertainty becomes a written plan: what gets automated, what gets built, what gets left alone, and the order that delivers savings soonest.",
      deliverables: ["Prioritised Roadmap", "Solution Architecture", "Success Metrics"],
      techSpec: "OUTPUT: SEQUENCED BUILD PLAN",
    },
    {
      number: "03",
      phase: "BUILD",
      timeline: "WEEKS 03 — 05",
      focus: "Agents, Systems & Software",
      description:
        "Full-stack engineering of the agreed systems — AI agents, automation pipelines, custom software and the dashboards that keep them visible.",
      deliverables: ["Production Codebase", "Automation Pipelines", "Internal Dashboards"],
      techSpec: "FRAMEWORK: NEXT.JS 16 + AGENT RUNTIME",
    },
    {
      number: "04",
      phase: "LAUNCH",
      timeline: "WEEK 06",
      focus: "Into The Real Business",
      description:
        "Deployment, load testing, and training your team on the new system so it is genuinely adopted rather than quietly abandoned after a fortnight.",
      deliverables: ["Deployment", "Team Training", "Runbook & Handover"],
      techSpec: "INFRASTRUCTURE: ZERO-DOWNTIME EDGE",
    },
    {
      number: "05",
      phase: "OPTIMIZE",
      timeline: "ONGOING",
      focus: "Compounding The Return",
      description:
        "We watch the numbers the system was built to move, tune what underperforms, and extend into the next opportunity on the roadmap.",
      deliverables: ["Performance Tuning", "Conversion Optimisation", "Quarterly Sprints"],
      techSpec: "TELEMETRY: REAL-TIME OUTCOME TRACKING",
    },
  ],
  testimonials: [
    {
      id: "quote-1",
      quote:
        "Their high level of capability made them a real pleasure to work with. They provided useful suggestions along the way that helped to improve the overall outcome of our project.",
      author: "Steve Benko",
      role: "Co-Founder",
      company: "United School Supplies",
      location: "Education // United States",
      metric: "4 New Enterprise Clients",
    },
    {
      id: "quote-2",
      quote:
        "With 12 hours difference in time, communication was not affected as they were always very responsive to any questions or concerns I may have had. If you want quality, then hire them. You'll be in great hands.",
      author: "Sabrina Mcdonald",
      role: "Founder",
      company: "City Eats CA",
      location: "Hospitality // California",
      metric: "12-Hour Gap, Zero Friction",
    },
    {
      id: "quote-3",
      quote:
        "It's beautiful to see quality work without structural flaws or dirty shortcuts. They listen well to the feedback which is crucial for good software.",
      author: "Van Dyke",
      role: "Founder",
      company: "Bloodwork Blueprint",
      location: "Health Tech // United States",
      metric: "Zero Structural Debt",
    },
  ],
  marqueeTrackA: [
    "AI AGENTS",
    "AUTOMATION SYSTEMS",
    "CUSTOM SOFTWARE",
    "INTERNAL DASHBOARDS",
    "GROWTH & MARKETING",
    "SEO & AEO",
    "PERFORMANCE MARKETING",
    "CENTRAL INTEGRATION",
  ],
  marqueeTrackB: [
    "BUILD AND AUTOMATE",
    "GROW AND ACQUIRE",
    "LESS MANUAL WORK",
    "FASTER HANDOFFS",
    "CLEARER NUMBERS",
    "TESTED SOLUTIONS",
    "REAL OUTCOMES",
    "60 DAYS TO LIVE",
  ],
};
