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
  title: "KINETIX // Award-Winning Digital Architecture & Creative Atelier",
  description:
    "Making your brand impossible to ignore. Bespoke digital solutions, radical editorial web experiences, and high-velocity automation engines for global visionaries.",
  keywords: [
    "Digital Agency",
    "Awwwards",
    "Creative Studio",
    "Next.js Development",
    "Luxury Editorial",
    "AI Automation",
    "High-End Web Design",
  ],
  authors: [{ name: "Kinetix Studio" }],
  openGraph: {
    title: "KINETIX // Making your brand impossible to ignore.",
    description:
      "Award-winning digital solutions company. Swiss editorial design + futuristic interfaces + luxury typography.",
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
