import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import NetworkBackground from "../components/NetworkBackground";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manan Gandhi",
  description: "Manan Gandhi",
  icons: {
    icon: "/manangandhi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  {/* default to dark mode (monochrome) - use only the mono font for a programmer-y theme */}
  <body className={`dark ${geistMono.variable} antialiased`}>
        <NetworkBackground />
        <div className="relative z-10 min-h-screen">
          <SiteHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
