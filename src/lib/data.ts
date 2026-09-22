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
  coordinates: "40.7128° N, 74.0060° W // NYC",
  founded: "2021",
  status: "AVAILABLE FOR SELECT Q3/Q4 2026 ENGAGEMENTS",
  metrics: [
    {
      value: "250+",
      label: "Bespoke Platforms Deployed",
      detail: "Global enterprise deployments across 18 countries",
      tag: "TRACK RECORD",
    },
    {
      value: "12+",
      label: "Global Tier-1 Enterprise Clients",
      detail: "Including Fortune 100 fintech & autonomous AI leaders",
      tag: "ENTERPRISE",
    },
    {
      value: "92%",
      label: "Client Multi-Year Retention",
      detail: "Long-term engineering and brand evolution partners",
      tag: "TRUST",
    },
    {
      value: "$340M+",
      label: "Capital & Revenue Enabled",
      detail: "Direct documented valuation uplift for partner companies",
      tag: "LEVERAGE",
    },
  ],
  services: [
    {
      id: "strategy",
      number: "01",
      title: "DIGITAL STRATEGY",
      shortDesc:
        "We identify the single highest-leverage gap costing your business time, margins, and momentum.",
      deliverables: [
        "Leverage Audit",
        "Systems Architecture",
        "Go-To-Market Mechanics",
        "Conversion Funnel Topology",
      ],
      accentColor: "#0047FF",
      tag: "FOUNDATION",
      visualSnippet: "SYS_AUDIT // HIGH_LEVERAGE_DISCOVERY",
    },
    {
      id: "experiences",
      number: "02",
      title: "WEB EXPERIENCES",
      shortDesc:
        "Awwwards-caliber interactive web platforms engineered with cutting-edge motion, microinteractions, and 60fps fluidity.",
      deliverables: [
        "Editorial Next.js Architecture",
        "Kinetic Typography & Motion",
        "Interactive 3D / WebGL",
        "Conversion-First Flow",
      ],
      accentColor: "#FF3B14",
      tag: "VISUAL CRAFT",
      visualSnippet: "INTERACTION // 60FPS_FLUID_CANVAS",
    },
    {
      id: "ai",
      number: "03",
      title: "AI & AUTOMATION",
      shortDesc:
        "Bespoke intelligent agents and workflow automation that replace weeks of manual human bottlenecks with instant autonomy.",
      deliverables: [
        "Autonomous Agent Pipelines",
        "Custom LLM Integrations",
        "Zero-Friction Workflows",
        "Real-Time Data Orchestration",
      ],
      accentColor: "#10B981",
      tag: "INTELLIGENCE",
      visualSnippet: "NEURAL_SYNAPSE // AUTONOMOUS_CORE",
    },
    {
      id: "growth",
      number: "04",
      title: "GROWTH SYSTEMS",
      shortDesc:
        "High-velocity acquisition engines and precision conversion architectures that compound customer lifetime value.",
      deliverables: [
        "Performance Funnel Engineering",
        "Scientific Split-Testing",
        "Behavioral Analytics",
        "CAC Reduction Protocols",
      ],
      accentColor: "#FF2E93",
      tag: "ACCELERATION",
      visualSnippet: "COMPOUND_ENGINE // CONVERSION_MAX",
    },
    {
      id: "brand",
      number: "05",
      title: "BRAND ARCHITECTURE",
      shortDesc:
        "Provocative visual identities, luxury editorial typography, and bespoke design systems that cannot be mistaken for anyone else.",
      deliverables: [
        "Monolithic Brand Identity",
        "Custom Typography Design",
        "Modular Multi-Platform Design Systems",
        "Art Direction & Motion Guidelines",
      ],
      accentColor: "#000000",
      tag: "IDENTITY",
      visualSnippet: "TYPOGRAPHIC_HERITAGE // MONOLITH",
    },
  ],
  projects: [
    {
      id: "aura",
      number: "01",
      title: "AURA LABS",
      client: "Aura Spatial Intelligence Inc.",
      category: ["AI SPATIAL INTERFACE", "BRAND SYSTEM", "WEBGL"],
      year: "2026",
      description:
        "A radical, spatial computing platform interface engineered for next-generation biometric visual computing. Designed to make complex spatial AI intuitive, immediate, and breathtaking.",
      impact: "+380% Qualified Enterprise Inbound",
      accentColor: "#0047FF",
      tagline: "Making spatial intelligence tangibly human.",
      badge: "AWWWARDS SITE OF THE DAY",
      image:
        "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "Pipeline Generated", value: "$48M" },
        { label: "Interaction Velocity", value: "<16ms" },
        { label: "Global Reach", value: "140+ Countries" },
      ],
    },
    {
      id: "nexus",
      number: "02",
      title: "NEXUS PROTOCOL",
      client: "Nexus Clearing Group AG",
      category: ["INSTITUTIONAL FINTECH", "NEXT.JS ENGINE", "DESIGN SYSTEM"],
      year: "2026",
      description:
        "Swiss institutional liquidity platform reimagined with brutalist typography, real-time sub-millisecond data tickers, and tactile interactive portfolio visualizers.",
      impact: "$2.1B Cleared in First Quarter",
      accentColor: "#FF3B14",
      tagline: "Uncompromising speed for institutional capital.",
      badge: "FWA OF THE MONTH",
      image:
        "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "Volume Cleared", value: "$2.1B" },
        { label: "Session Duration", value: "+140%" },
        { label: "API Latency", value: "4.2ms" },
      ],
    },
    {
      id: "chrono",
      number: "03",
      title: "CHRONO ATELIER",
      client: "Chrono Haute Horlogerie Geneva",
      category: ["LUXURY EDITORIAL", "SPATIAL COMMERCE", "CUSTOM SOUND"],
      year: "2026",
      description:
        "Digital flagship experience for an independent Geneva master watchmaker. Blending microscopic macro 3D craftsmanship with cinematic typography and whisper-quiet transitions.",
      impact: "100% Collector Allocation Sold Out in 18 Min",
      accentColor: "#111111",
      tagline: "The art of mechanical time rendered digital.",
      badge: "DESIGN EXCELLENCE GOLD",
      image:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "Sellout Speed", value: "18 Min" },
        { label: "Average Order", value: "$42,000" },
        { label: "Collector Signups", value: "24,000+" },
      ],
    },
    {
      id: "vortex",
      number: "04",
      title: "VORTEX TRANSIT",
      client: "Vortex Autonomous Systems",
      category: ["AUTONOMOUS FLEET UI", "REAL-TIME TELEMETRY", "MOTION"],
      year: "2026",
      description:
        "High-density operational dashboard and customer mobile interface for autonomous air and ground transit networks in Dubai and Tokyo.",
      impact: "Zero Dispatch Latency Incident Rate",
      accentColor: "#059669",
      tagline: "Orchestrating autonomous transit at urban scale.",
      badge: "RED DOT BEST OF THE BEST",
      image:
        "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1600&auto=format&fit=crop",
      stats: [
        { label: "Fleet Active", value: "4,200 Pods" },
        { label: "Dispatch Precision", value: "99.98%" },
        { label: "System Uptime", value: "100.0%" },
      ],
    },
  ],
  philosophy: [
    {
      number: "01",
      title: "Understand Your Business",
      subtitle: "Strip away the cosmetic illusions",
      description:
        "Most agencies start with wireframes or color swatches. We inspect your unit economics, customer drop-off choke points, and internal operational friction first. If the foundation is broken, beautiful animations won't save you.",
      keyMetric: "100% Data-Driven Discovery",
      accent: "#0047FF",
      deliverable: "Strategic Leverage Audit & Vulnerability Matrix",
    },
    {
      number: "02",
      title: "Identify The Bottleneck",
      subtitle: "Find the single highest-leverage gap",
      description:
        "Every struggling or stagnating company has one specific bottleneck: is it lack of brand authority, high conversion churn, or an agonizingly slow engineering cycle? We isolate the one lever that moves the entire boulder.",
      keyMetric: "Single-Point Focus",
      accent: "#FF3B14",
      deliverable: "Bottleneck Diagnostic & Kinetic Roadmap",
    },
    {
      number: "03",
      title: "Build The Solution",
      subtitle: "Craft with zero compromises",
      description:
        "We engineer custom digital solutions that marry radical editorial aesthetics with blazing runtime performance. We don't use off-the-shelf templates or cookie-cutter SaaS themes. Every pixel, easing curve, and API is bespoke.",
      keyMetric: "60 FPS Runtime Precision",
      accent: "#10B981",
      deliverable: "Production Next.js Infrastructure & Design System",
    },
    {
      number: "04",
      title: "Scale What Works",
      subtitle: "Compound the momentum",
      description:
        "Launch day is step zero. We implement continuous behavioral telemetry, automated conversion tracking, and iterative growth loops to turn initial user intrigue into multi-million dollar business momentum.",
      keyMetric: "Compounding Growth Yield",
      accent: "#FF2E93",
      deliverable: "Autonomic Growth Engine & Performance Telemetry",
    },
  ],
  process: [
    {
      number: "01",
      phase: "DISCOVER",
      timeline: "WEEK 01",
      focus: "Deep Operational Leverage",
      description:
        "Exhaustive architectural breakdown of your current business model, customer psychology, and technological bottlenecks.",
      deliverables: ["Leverage Audit", "Competitive Void Analysis", "Technical Spec"],
      techSpec: "INPUT: TELEMETRY + UNIT ECONOMICS",
    },
    {
      number: "02",
      phase: "DEFINE",
      timeline: "WEEK 02",
      focus: "Art Direction & Systems",
      description:
        "Establishing an uncompromising visual grammar: custom typography, motion curves, interaction models, and brand tone.",
      deliverables: ["Interactive Prototype", "Design Tokens", "Typography System"],
      techSpec: "OUTPUT: MONOLITHIC DESIGN SYSTEM",
    },
    {
      number: "03",
      phase: "BUILD",
      timeline: "WEEKS 03 — 05",
      focus: "High-Performance Engineering",
      description:
        "Full-stack Next.js production build, custom WebGL/Canvas micro-animations, accessible DOM semantics, and zero-latency pipelines.",
      deliverables: ["Production Codebase", "API Pipelines", "Motion Easing Engine"],
      techSpec: "FRAMEWORK: NEXT.JS 16 + FRAMER MOTION",
    },
    {
      number: "04",
      phase: "LAUNCH",
      timeline: "WEEK 06",
      focus: "Orchestrated Deployment",
      description:
        "Global edge propagation, end-to-end load testing, Core Web Vitals perfection, and high-impact industry reveal campaign.",
      deliverables: ["Edge CDN Deployment", "Lighthouse 100/100", "Campaign Assets"],
      techSpec: "INFRASTRUCTURE: ZERO-DOWNTIME EDGE",
    },
    {
      number: "05",
      phase: "OPTIMIZE",
      timeline: "ONGOING",
      focus: "Compounding Scale",
      description:
        "Autonomous performance tuning, multivariate behavioral split testing, and continuous creative evolution.",
      deliverables: ["Conversion Optimizations", "Growth Loops", "Quarterly Sprints"],
      techSpec: "TELEMETRY: REAL-TIME CONVERSION AUDITING",
    },
  ],
  testimonials: [
    {
      id: "quote-1",
      quote:
        "They didn't just redesign our website. They changed how the entire venture capital and enterprise community perceived our company. Within 90 days of launch, our inbound pipeline tripled.",
      author: "Elena Rostova",
      role: "Chief Product Officer",
      company: "Aura Spatial Systems",
      location: "San Francisco // Zurich",
      metric: "+380% Enterprise Inbound",
    },
    {
      id: "quote-2",
      quote:
        "KINETIX possesses a rare dual mastery: world-class editorial taste that wins awards, coupled with an obsession over conversion metrics and technical runtime performance.",
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "Nexus Protocol",
      location: "New York // Geneva",
      metric: "$2.1B Cleared Q1",
    },
    {
      id: "quote-3",
      quote:
        "Working with their creative engineers felt like stepping 5 years into the future. No corporate bureaucracy, no generic templates. Just radical speed, razor-sharp focus, and flawless execution.",
      author: "Amira Al-Mansoor",
      role: "VP of Global Innovation",
      company: "Vortex Autonomous",
      location: "Dubai // Tokyo",
      metric: "100% On-Time Global Fleet Deploy",
    },
  ],
  marqueeTrackA: [
    "STRATEGY",
    "DIGITAL ARCHITECTURE",
    "BESPOKE WEB",
    "AI INTEGRATION",
    "HIGH-VELOCITY GROWTH",
    "LUXURY EDITORIAL",
    "60FPS MOTION",
    "ZERO TEMPLATES",
  ],
  marqueeTrackB: [
    "EDITORIAL DESIGN",
    "CREATIVE DEVELOPMENT",
    "PRODUCT DESIGN",
    "BRAND PLATFORMS",
    "KINETIC TYPOGRAPHY",
    "CONVERSION ENGINES",
    "GLOBAL IMPACT",
    "AWARDS CALIBER",
  ],
};
