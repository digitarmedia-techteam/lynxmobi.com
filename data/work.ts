export interface CaseStudyItem {
  id: string;
  slug: string;
  client: string;
  industry: "Gaming" | "E-Commerce" | "Consumer Tech" | "FinTech" | "Entertainment";
  title: string;
  subtitle: string;
  headlineMetric: string;
  headlineMetricLabel: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: { value: string; label: string }[];
  featured: boolean;
  accentColor?: string;
  year: string;
}

export const caseStudiesData: CaseStudyItem[] = [
  {
    id: "apex-legends-asia",
    slug: "apex-legends-asia",
    client: "NEXON Mobile",
    industry: "Gaming",
    title: "Pan-Asian Blockbuster Mobile Launch Across 12 Markets",
    subtitle: "Orchestrating synchronized Tier-1 media buying and 80+ top gaming creators.",
    headlineMetric: "+4.2M",
    headlineMetricLabel: "Day-30 Global Registrations",
    tags: ["Local Media", "Influencer Marketing", "Tier-1 SEA"],
    challenge:
      "Launching an iconic competitive action title simultaneously across Southeast Asia and Japan within an overcrowded mobile market during peak Q4 season.",
    solution:
      "Deployed a synchronized multi-tier strategy: pre-registration hype powered by YouTube and Twitch live-streamers, backed by programmatic real-time bidding on Google and Meta.",
    results: [
      { value: "#1", label: "Top Free Games in 8 App Stores" },
      { value: "4.2M+", label: "Verified Installs in 30 Days" },
      { value: "-34%", label: "Effective Cost Per Install (eCPI)" },
      { value: "32%", label: "Day-7 Retention Rate" },
    ],
    featured: true,
    year: "2025",
  },
  {
    id: "lumina-audio",
    slug: "lumina-audio",
    client: "TORRAS Tech",
    industry: "Consumer Tech",
    title: "Scaling Direct-to-Consumer Flagship Hardware in North America & Europe",
    subtitle: "High-performance Amazon Ads integration and localized UGC video syndication.",
    headlineMetric: "+320%",
    headlineMetricLabel: "Black Friday ROAS Expansion",
    tags: ["Integrated Marketing", "TikTok UGC", "Amazon Ads"],
    challenge:
      "Establishing premium brand equity and market leadership in North America against entrenched legacy consumer electronic brands.",
    solution:
      "Integrated full-funnel creator gifting, viral TikTok Spark Ads showcasing real-world durability tests, and algorithmic DSP retargeting during peak shopping holidays.",
    results: [
      { value: "320%", label: "Holiday ROAS Growth" },
      { value: "140K+", label: "Direct Units Sold in Q4" },
      { value: "45M+", label: "TikTok Impressions" },
      { value: "+65%", label: "Amazon Brand Search Lift" },
    ],
    featured: true,
    year: "2025",
  },
  {
    id: "shein-marketplace",
    slug: "shein-marketplace",
    client: "AURA Retail Global",
    industry: "E-Commerce",
    title: "Hyper-Growth User Acquisition Across Latin America & Europe",
    subtitle: "Automated dynamic creative optimization (DCO) delivering 500+ localized ads weekly.",
    headlineMetric: "12M+",
    headlineMetricLabel: "High-LTV App Installs",
    tags: ["Programmatic DSP", "Dynamic Creatives", "Local Media"],
    challenge:
      "Maintaining low customer acquisition costs (CAC) while scaling new market penetration across Brazil, Mexico, and Germany simultaneously.",
    solution:
      "Implemented Lynxmobi's AI Dynamic Creative Optimization engine connected to native DSP feeds, delivering hyper-personalized product ads in Portuguese, Spanish, and German.",
    results: [
      { value: "12M+", label: "Active App Installs" },
      { value: "4.6x", label: "Return on Ad Spend (ROAS)" },
      { value: "-28%", label: "Cost Per First Purchase" },
      { value: "99.8%", label: "Anti-Fraud Verification Score" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "finpay-middle-east",
    slug: "finpay-middle-east",
    client: "VaultPay Digital",
    industry: "FinTech",
    title: "Regional Scale & Trusted Brand Adoption in GCC & MENA",
    subtitle: "Compliant financial media buying and localized Arabic digital creator campaigns.",
    headlineMetric: "2.8M+",
    headlineMetricLabel: "KYC Verified Accounts",
    tags: ["Local Media Marketing", "Influencer Marketing", "MENA"],
    challenge:
      "Establishing consumer trust and navigating strict banking regulatory guidelines while promoting a cross-border remittance app across Saudi Arabia and UAE.",
    solution:
      "Formed an alliance with trusted business journalists and regional tech figures, complemented by Google Premier Partner search capture for high-intent search queries.",
    results: [
      { value: "2.8M", label: "Completed KYC Registrations" },
      { value: "$180M+", label: "Total Transaction Volume Driven" },
      { value: "62%", label: "Lower Cost Per Verified User" },
      { value: "#2", label: "Top Finance App in UAE" },
    ],
    featured: true,
    year: "2024",
  },
  {
    id: "dream-realms-rpg",
    slug: "dream-realms-rpg",
    client: "Chando Interactive",
    industry: "Gaming",
    title: "Global 3D Playable Ad Campaign for AAA Fantasy RPG",
    subtitle: "Custom interactive mini-game creatives boosting install conversion rates.",
    headlineMetric: "+48%",
    headlineMetricLabel: "Install Conversion Rate Lift",
    tags: ["Integrated Marketing", "3D Playables", "Global Scale"],
    challenge:
      "Combating creative fatigue and high banner blindness across major global programmatic ad networks for a flagship fantasy title.",
    solution:
      "Developed 8 customized lightweight HTML5 3D playable interactive ads that allowed prospective gamers to test boss battles directly inside their social media feeds.",
    results: [
      { value: "+48%", label: "Click-to-Install Conversion Lift" },
      { value: "85M+", label: "Total Interactive Play Sessions" },
      { value: "24s", label: "Average Creative Engagement Time" },
      { value: "-41%", label: "Overall Acquisition Cost" },
    ],
    featured: true,
    year: "2024",
  },
];
