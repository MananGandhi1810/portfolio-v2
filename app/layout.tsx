import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "../components/SiteHeader";
import Footer from "@/components/Footer";
import EasterEgg from "@/components/EasterEgg";
import { Analytics } from "@vercel/analytics/next";

const monoFont = Space_Mono({
    subsets: ["latin"],
    variable: "--font-mono",
    weight: ["400", "700"],
});

export const metadata: Metadata = {
    title: "Manan Gandhi",
    description: "Manan Gandhi",
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
                    <SiteHeader />
                    {children}
                    <Footer />
                </div>
                <EasterEgg />
                <Analytics />
            </body>
        </html>
    );
}
