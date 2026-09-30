import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Manan Gandhi — Software, systems & curiosity",
    template: "%s | Manan Gandhi",
  },
  description:
    "Computer engineering student, open-source enthusiast, and software builder. Explore Manan Gandhi’s projects, trading systems, developer tools, and writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/manangandhi.png" />
      </head>
      <body className={`dark ${monoFont.variable} antialiased`}>
        <div className="relative z-10 min-h-screen">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>
          <SiteHeader />
          {children}
          <Footer />
        </div>
        <EasterEgg />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
