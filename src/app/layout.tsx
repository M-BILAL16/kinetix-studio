import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-cormorant",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KINETIX // AI Agents, Automation & Growth Systems",
  description:
    "Making your brand impossible to ignore. We identify which part of your business is costing you time and money, then we deploy tested solutions to fix it for you.",
  keywords: [
    "AI Agents",
    "Business Automation",
    "Custom Software",
    "Internal Dashboards",
    "Performance Marketing",
    "SEO and AEO",
    "Next.js Development",
  ],
  authors: [{ name: "Kinetix Studio" }],
  openGraph: {
    title: "KINETIX // Making your brand impossible to ignore.",
    description:
      "AI agents, automation systems, custom software, internal dashboards and growth marketing — from a free discovery call to a live system in 60 days.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased selection:bg-[#0047FF] selection:text-white`}
    >
      <body className="min-h-full flex flex-col bg-[#FAF9F5] text-[#0E0E10] font-sans">
        <SmoothScroll>
          <CustomCursor />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
