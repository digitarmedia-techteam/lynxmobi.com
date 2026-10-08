export interface StatItem {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

export interface ValueItem {
  title: string;
  subtitle: string;
  description: string;
}

export const companyData = {
  name: "Lynxmobi",
  fullName: "Lynxmobi",
  slogan: "Global Performance & Digital Marketing Architecture",
  tagline: "Growth With Us.",
  mission:
    "We empower global enterprises, visionary developers, and cross-border brands to conquer international markets through data intelligence, localized creative mastery, and precision media execution.",
  platformName: "LynxPulse",
  platformTagline: "A One-Stop Global Advertising Management & Growth Platform",
  platformDescription:
    "LynxPulse is Lynxmobi's proprietary advertising intelligence and campaign operations hub. Integrating multi-channel programmatic bidding, creator discovery, and real-time fraud mitigation into one seamless interface.",
  address: {
    flat: "Flat: E, 11/F",
    building: "On Wah Industrial Building",
    street: "41–43 Au Pui Wan Street",
    area: "Fo Tan",
    district: "Sha Tin",
    region: "New Territories",
    country: "Hong Kong",
    lines: [
      "Flat E, 11/F, On Wah Industrial Building",
      "41–43 Au Pui Wan Street, Fo Tan",
      "Sha Tin, New Territories, Hong Kong",
    ],
  },
  platformPillars: [
    {
      title: "MEDIA",
      heading: "Global Media Orchestration",
      description:
        "Direct API connections with global DSPs, Tier-1 media platforms (Google, Meta, TikTok, Amazon), and localized publisher networks across 200+ territories.",
    },
    {
      title: "MARKETING",
      heading: "Influencer & Creative Intelligence",
      description:
        "Instant access to 150,000+ verified creators, deep audience affinity analytics, and localized creative asset libraries in 40+ international languages.",
    },
    {
      title: "MANAGEMENT",
      heading: "Autonomous Optimization & Security",
      description:
        "Five-dimensional operations: Intelligence, Efficiency, Full Attribution Transparency, Predictive LTV Insights, and Bank-Grade Anti-Fraud Protection.",
    },
  ],
  stats: [
    { value: "10B+", label: "Daily Global Ad Requests", description: "High-throughput real-time bidding infrastructure" },
    { value: "200+", label: "Countries & Regions", description: "Deep localized media penetration across every continent" },
    { value: "5,000+", label: "Global Clients & Brands", description: "Trusted by tier-1 gaming studios, tech innovators & retailers" },
    { value: "12", label: "Global Innovation Hubs", description: "San Francisco, Singapore, Tokyo, Seoul, London, Dubai & more" },
  ] as StatItem[],
  values: [
    {
      title: "Sincere",
      subtitle: "Absolute Transparency",
      description: "Unvarnished performance reporting, zero hidden ad-tech margins, and genuine long-term partnerships.",
    },
    {
      title: "Innovation",
      subtitle: "Algorithmic Edge",
      description: "Pioneering AI predictive bidding, interactive 3D playable architectures, and high-velocity creative automation.",
    },
    {
      title: "Professional",
      subtitle: "Native Precision",
      description: "Certified Tier-1 media experts and native regional specialists embedded directly in target international markets.",
    },
    {
      title: "Energetic",
      subtitle: "Relentless Agility",
      description: "24/7 continuous campaign monitoring, dynamic bid adjustments, and proactive growth consultation.",
    },
  ] as ValueItem[],
  multilingualGreetings: [
    "Hello",
    "你好",
    "こんにちは",
    "Bonjour",
    "Hola",
    "안녕하세요",
    "Halo",
    "नमस्ते",
    "مرحبًا",
    "Привет",
    "Hallo",
    "Olá",
  ],
};
