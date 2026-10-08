import type { Metadata } from "next";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy — LynxMobi",
  description:
    "Learn how LynxMobi collects, protects, and manages your personal information and programmatic data in compliance with GDPR, CCPA/CPRA, and global data protection standards.",
  keywords: [
    "LynxMobi Privacy Policy",
    "Data Protection",
    "GDPR Compliance",
    "CCPA Compliance",
    "AdTech Privacy",
    "Programmatic Data Transparency",
    "Cookie Policy",
  ],
  openGraph: {
    title: "Privacy Policy — LynxMobi",
    description:
      "Comprehensive data governance, transparency, and privacy framework across LynxMobi's global digital advertising operations.",
    type: "website",
    locale: "en_US",
    siteName: "LynxMobi",
  },
};

export default function PrivacyPage() {
  return <PrivacyPolicyClient />;
}
