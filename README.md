# KINETIX // Studio Homepage

> **Award-Winning, High-End, Animated Digital Solutions Agency Homepage**  
> Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lenis Smooth Scrolling.

---

## ✨ Overview

**KINETIX** is an Awwwards-caliber interactive agency website tailored for a high-end digital solutions studio. It blends **Swiss editorial design**, **futuristic digital interfaces**, **asymmetrical kinetic compositions**, and **luxury typography** into a strictly bright/light visual environment.

### Key Aesthetic Tenets
- **Bright Mode Only**: Foundation in warm ivory (`#FAF9F5`), soft cream (`#F2F0E8`), and crisp white (`#FFFFFF`) with vivid editorial accents (Electric Cobalt `#0047FF`, Acid Lime `#CEFF00`, and Solar Flame `#FF3B14`).
- **Typography as Graphic Art**: Monolithic uppercase Grotesk display paired with luxury italic serif (`Playfair Display`) and technical monospace telemetry stamps.
- **Micro-Textures**: Subtle editorial grid lines and paper noise.
- **Zero Cookie-Cutter Templates**: Custom-crafted editorial layouts, asymmetrical sections, and kinetic depth.

---

## 🛠 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Physics**: [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://github.com/darkroomengineering/lenis)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Celebration Effects**: [Canvas Confetti](https://github.com/catdad/canvas-confetti)

---

## 📐 Architecture & Components

```
src/
├── app/
│   ├── layout.tsx             # Root layout with fonts, Lenis smooth scroll, Custom Cursor
│   ├── page.tsx               # Homepage assembling all editorial sections
│   └── globals.css            # Custom tokens, typography, noise textures, keyframes
├── components/
│   ├── CustomCursor.tsx       # Dual-layer trailing cursor with contextual labels (VIEW, EXPLORE, OPEN, START)
│   ├── SmoothScroll.tsx       # Lenis smooth-scroll provider with momentum dampening
│   ├── Navbar.tsx             # Floating translucent rail with magnetic CTA & active slots pill
│   ├── Hero.tsx               # Asymmetric editorial hero with massive masked typography
│   ├── HeroVisualCluster.tsx  # Interactive 3D kinetic cluster reacting to mouse tilt
│   ├── Metrics.tsx            # Screen-spanning editorial grid with animated counters
│   ├── Philosophy.tsx         # "Clarity before complexity" scrollytelling step stage (01-04)
│   ├── Services.tsx           # Giant horizontal typography rows with hover expansion & pills
│   ├── FeaturedWork.tsx       # Alternating portfolio showcase with zoom easing & telemetry
│   ├── ProjectModal.tsx       # Interactive case study deep-dive modal
│   ├── Statement.tsx          # Scroll-driven word-by-word illumination moment
│   ├── CapabilitiesMarquee.tsx# Dual-track kinetic marquee with opposite-direction loops
│   ├── Process.tsx            # 5-phase interactive sequence (DISCOVER → OPTIMIZE)
│   ├── Testimonial.tsx        # High-impact editorial magazine quote spread
│   ├── FinalCTA.tsx           # Full-viewport finale with magnetic stretching circle button
│   ├── ContactDrawer.tsx      # Slide-out inquiry drawer with service chips & budget picker
│   └── Footer.tsx             # Oversized cropped brand wordmark & live NYC/LON/TYO clocks
└── lib/
    ├── utils.ts               # cn helper (clsx + twMerge)
    └── data.ts                # Structured agency data
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal).

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📄 License

Private & proprietary to KINETIX Studio.
