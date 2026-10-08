import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lynxmobi",
  description:
    "Empowering cross-border enterprises with Tier-1 media buying, global influencer marketing, AI programmatic advertising, and full-funnel creative studios.",
  keywords: [
    "Lynxmobi",
    "Global Digital Marketing",
    "Programmatic Advertising",
    "Tier 1 Media Buying",
    "Influencer Marketing",
    "Global User Acquisition",
    "DSP",
    "AdTech",
  ],
  authors: [{ name: "Lynxmobi." }],
  openGraph: {
    title: "Lynxmobi",
    description:
      "Empowering cross-border enterprises with Tier-1 media buying, global influencer marketing, and AI programmatic advertising across 200+ countries.",
    type: "website",
    siteName: "Lynxmobi",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${playfair.variable} font-sans scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-white text-[#090a10]">
        <ScrollProgress />
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
