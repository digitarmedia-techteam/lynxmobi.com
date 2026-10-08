export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  subtitle: string;
  tagline: string;
  heroDescription: string;
  overview: string;
  keyStats: { value: string; label: string }[];
  capabilities: { title: string; description: string }[];
  partners?: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  // 1. Programmatic Marketing / Advertising (Referencing novabeyond.com/solution.html)
  {
    id: "programmatic",
    slug: "programmatic",
    number: "01",
    title: "Programmatic Marketing",
    shortTitle: "Programmatic",
    subtitle: "Tech-Driven Precision & Real-Time Performance Bidding",
    tagline: "High-quality audience targeting and algorithmic intelligence for accurate user acquisition.",
    heroDescription:
      "Tech-driven and performance-oriented programmatic advertising solutions. Using advanced audience modeling, predictive machine learning, and sub-15ms real-time bidding to help brands achieve accurate user acquisition and scalable international growth.",
    overview:
      "Our proprietary programmatic advertising infrastructure processes billions of auctions per second across the world's premier Ad Exchanges and SSPs. By deploying granular multi-attribute bid modifications, anti-fraud telemetry, and dynamic creative optimization (DCO), we eliminate ad spend waste and optimize for high-LTV users, not empty clicks.",
    keyStats: [
      { value: "10B+", label: "Daily Global Ad Requests" },
      { value: "<15ms", label: "Predictive Bidding Latency" },
      { value: "99.4%", label: "Brand Safety & IVT Rating" },
      { value: "50+", label: "Dynamic Real-Time Bid Attributes" },
    ],
    capabilities: [
      {
        title: "Advanced Audience Modeling",
        description:
          "Machine learning algorithms trained on billions of post-install events to predict user lifetime value (LTV) and pinpoint high-converting audience cohorts.",
      },
      {
        title: "Sub-15ms RTB Decisioning",
        description:
          "High-throughput server-to-server DSP pipelines bidding across top exchanges (Google Ad Manager, Unity, AppLovin, OpenX, Magnite) with millisecond execution.",
      },
      {
        title: "Dynamic Creative Optimization (DCO)",
        description:
          "Automated real-time assembly of localized headlines, visual hooks, and interactive formats tailored to user device context and behavioral signals.",
      },
      {
        title: "Bank-Grade Anti-Fraud & IVT Protection",
        description:
          "Multi-layered fraud filtering, bot detection, IP reputation checks, and conversion verification ensuring pristine media quality and complete safety.",
      },
    ],
    partners: ["Google Ad Manager", "Unity Ads", "AppLovin", "ironSource", "Magnite", "OpenX", "BIGO Ads", "Mintegral"],
    deliverables: [
      "Autonomous ROAS and CPA bid optimization",
      "Predictive lookalike audience expansion models",
      "Real-time bid-stream analytics and transparent telemetry",
      "Automated budget pacing and fraud monitoring 24/7",
    ],
  },

  // 2. Connected TV (CTV) Advertising (Referencing nasimobi.com/#ctv)
  {
    id: "ctv",
    slug: "ctv",
    number: "02",
    title: "Connected TV (CTV)",
    shortTitle: "Connected TV",
    subtitle: "Living-Room Immersion & Omnichannel Cross-Device Reach",
    tagline: "Maximize Your Reach, Amplify Your Impact with high-impact streaming and smart TV programmatic advertising.",
    heroDescription:
      "Maximize Your Reach, Amplify Your Impact. Deliver high-definition, unskippable video storytelling and native living-room ads across top connected TV platforms, streaming giants, and smart TV ecosystems.",
    overview:
      "Lynxmobi Connected TV (CTV) advertising empowers global brands to engage high-intent viewers on the biggest screen in the house. Integrating deep programmatic targeting, ACR (Automatic Content Recognition) data, and cross-device household identity graphs, we bridge the gap between premium living-room branding and measurable performance conversions.",
    keyStats: [
      { value: "98.4%", label: "Average Video Completion Rate (VCR)" },
      { value: "200M+", label: "Addressable Connected TV Households" },
      { value: "+42%", label: "Cross-Device Brand Lift & Recall" },
      { value: "99.9%", label: "IVT-Free Verified Living Room Traffic" },
    ],
    capabilities: [
      {
        title: "Intelligent Audience Targeting",
        description:
          "Advanced data analytics, household IP resolution, and ACR technology ensure your ads reach the right demographic cohorts with precision and relevance.",
      },
      {
        title: "Real-Time Telemetry & Optimization",
        description:
          "Live bid-stream monitoring, automated frequency capping across streaming apps, and real-time impression verification to eliminate ad fatigue.",
      },
      {
        title: "Efficient Multi-Platform Delivery",
        description:
          "Direct programmatic pipelines to premium inventory across Roku, Samsung Ads, LG Ads, Amazon Fire TV, Xiaomi, Apple TV, Netflix, and Hulu.",
      },
      {
        title: "Cross-Device Household Graph",
        description:
          "Synchronized ad sequencing across Smart TVs, smartphones, tablets, and desktops to drive measurable downstream website visits and app installs.",
      },
    ],
    partners: [
      "Samsung Ads",
      "LG Ads Solutions",
      "Roku",
      "Amazon Fire TV",
      "Xiaomi TV",
      "Apple TV",
      "Netflix Ads",
      "Hulu",
      "YouTube TV",
      "Google TV",
    ],
    deliverables: [
      "Full-screen 4K unskippable CTV video ad placements",
      "Interactive and native smart TV home-screen units",
      "Cross-device retargeting and attribution telemetry",
      "Real-time fraud mitigation and brand safety audits",
    ],
  },

  // 3. Campaign Management (Referencing novabeyond.com/solution3.html)
  {
    id: "campaign-management",
    slug: "campaign-management",
    number: "03",
    title: "Campaign Management",
    shortTitle: "Campaign Management",
    subtitle: "Full-Cycle Ad Campaign Execution & Data-Driven Growth",
    tagline: "End-to-end campaign architecture from creative production to real-time performance optimization.",
    heroDescription:
      "Full-cycle ad campaign management powered by data-driven strategies for scalable growth. We handle the entire advertising lifecycle—including account setup, localized creative studio production, launch orchestration, and continuous algorithmic scaling.",
    overview:
      "Scaling successfully in overseas markets demands harmonious coordination between localized creative messaging and rigorous data optimization. Our dedicated bilingual account squads conduct multivariate creative testing, real-time funnel telemetry, and continuous budget re-allocation to ensure maximum return on ad spend (ROAS).",
    keyStats: [
      { value: "150K+", label: "Verified Global Creators" },
      { value: "4.8x", label: "Average ROAS Improvement" },
      { value: "1,200+", label: "Localized Creatives Produced/Mo" },
      { value: "24/7", label: "Live Optimization Telemetry" },
    ],
    capabilities: [
      {
        title: "End-to-End Lifecycle Execution",
        description:
          "Comprehensive campaign management: strategic brief, target audience research, asset localization, live pacing, and granular post-campaign analysis.",
      },
      {
        title: "Localized Creative Studio & Playables",
        description:
          "In-house production of high-converting UGC videos, 3D playable interactive ads, and culturally authentic copy crafted by native regional specialists.",
      },
      {
        title: "Real-Time Telemetry & Funnel Optimization",
        description:
          "Continuous multi-funnel testing (hooks, visual motifs, CTAs) and instant budget shifting to high-performing cohorts and ad sets.",
      },
      {
        title: "Dedicated Cross-Border Squad Architecture",
        description:
          "Senior media buyers, creative directors, and data analysts embedded directly into your growth pipeline to drive sustainable market leadership.",
      },
    ],
    partners: ["Meta Creative Shop", "TikTok Creative Exchange", "AppsFlyer", "Adjust", "Singular", "Kochava"],
    deliverables: [
      "Full-funnel campaign roadmap & creative matrix",
      "High-production localized video & interactive playable assets",
      "Live performance dashboards with transparent attribution",
      "Weekly strategic reviews and ongoing iterative scaling",
    ],
  },

  // Legacy compatibility entry for local-media
  {
    id: "local-media",
    slug: "local-media",
    number: "04",
    title: "Local Media Marketing",
    shortTitle: "Local Media",
    subtitle: "Direct Tier-1 Media Buying & Regional Expansion",
    tagline: "Empowering cross-border enterprises with precision localized media strategies.",
    heroDescription:
      "Connect with global audiences through premier advertising channels. We partner directly with major international platforms to build customized, high-ROI acquisition campaigns tailored to regional nuances.",
    overview:
      "As an official certified partner of the world's leading media giants—including Google, Meta, TikTok, and Apple Search Ads—Lynxmobi delivers granular campaign planning, real-time optimization, and localized creative adaptation across 200+ regions.",
    keyStats: [
      { value: "50B+", label: "Monthly Ad Impressions" },
      { value: "98%", label: "Client Retention Rate" },
      { value: "200+", label: "Geographic Markets Covered" },
      { value: "4.8x", label: "Average ROAS Multiplier" },
    ],
    capabilities: [
      {
        title: "Tier-1 Media Buying",
        description: "Official authorized operations on Google, Meta, TikTok, and Apple Search Ads.",
      },
      {
        title: "Hyper-Localized Channel Selection",
        description: "Selecting regional dominance platforms for unprecedented local penetration.",
      },
      {
        title: "Smart Bidding Orchestration",
        description: "Algorithmic budget distribution to capture high-value lifetime users.",
      },
      {
        title: "Account Health Guardianship",
        description: "Dedicated monitoring and whitelisting to ensure uninterrupted media operations.",
      },
    ],
    partners: ["Google Premier Partner", "Meta Business Partner", "TikTok for Business", "Apple Search Ads"],
    deliverables: [
      "Multi-channel strategy & media allocation matrix",
      "Localized creative copy & native ad adaptations",
      "Real-time analytics dashboard & daily performance audits",
      "Custom anti-fraud and click-quality verification",
    ],
  },

  // Legacy compatibility entry for integrated
  {
    id: "integrated",
    slug: "integrated",
    number: "05",
    title: "Integrated Marketing",
    shortTitle: "Integrated",
    subtitle: "Full-Funnel Brand Growth & Localized Creative Studios",
    tagline: "Harmonizing creative storytelling, performance acquisition, and local cultural relevance.",
    heroDescription:
      "From high-converting 3D playable ads and cinematic trailers to full-scale go-to-market strategies. We craft unified marketing experiences that captivate international markets.",
    overview:
      "True global scale requires more than isolated ad buys. Lynxmobi Integrated Marketing unites performance media, bespoke creative studios, local PR, and brand identity into an unstoppable international growth engine.",
    keyStats: [
      { value: "1,200+", label: "Creatives / Mo" },
      { value: "35%", label: "Average CTR Lift via Playables" },
      { value: "12", label: "Global Creative Production Hubs" },
      { value: "100%", label: "Culturally Native Adaptation" },
    ],
    capabilities: [
      {
        title: "3D & Interactive Playable Ads",
        description: "Lightweight, high-performing interactive playable ads built using proprietary HTML5 game engines.",
      },
      {
        title: "Global Creative Studio",
        description: "Native video shoots, 3D CGI rendering, and motion graphics created in-house.",
      },
      {
        title: "Full-Funnel Brand GTM",
        description: "Complete overseas expansion playbook across ASO, PR, and performance media.",
      },
      {
        title: "Multivariate Testing Matrix",
        description: "Systematic testing of creative hooks and emotional triggers for non-stop conversion lift.",
      },
    ],
    partners: ["TikTok Creative Exchange", "Meta Creative Shop", "Figma", "Unreal Engine"],
    deliverables: [
      "Custom 3D playable ad assets & interactive demos",
      "Localized video creative packs in 4K resolution",
      "Go-to-Market launch roadmap and media schedule",
      "Comprehensive creative retention and conversion teardown",
    ],
  },

  // Legacy compatibility entry for global-media
  {
    id: "global-media",
    slug: "global-media",
    number: "06",
    title: "Global Media Access",
    shortTitle: "Global Media",
    subtitle: "Seamless Global Platforms & VIP Ad Account Onboarding",
    tagline: "Direct authorized access to top-tier and emerging global media networks through a single unified platform.",
    heroDescription:
      "Seamless global media access through a single platform. We assist clients with flexible ad account onboarding, VIP policy approvals, and stable, efficient launches across major international giants and high-growth emerging networks.",
    overview:
      "As an authorized agency partner with core qualifications across Google, Meta, TikTok, Kwai, BIGO Ads, MediaGo, Mintegral, Moloco, Xiaomi Ads, and Apple Search Ads, Lynxmobi eliminates long approval wait times and mitigates account suspensions. We provide international advertisers with diversified user acquisition pipelines across 200+ countries.",
    keyStats: [
      { value: "200+", label: "Countries & Geographic Regions" },
      { value: "24h", label: "Fast-Track Account Opening" },
      { value: "99.8%", label: "Account Health & Uptime Rate" },
      { value: "30+", label: "Direct Media Network Partnerships" },
    ],
    capabilities: [
      {
        title: "VIP Ad Account Opening & Whitelisting",
        description:
          "Direct agency channels ensuring rapid approval times, elevated credit limits, and VIP compliance support on Google, Meta, TikTok, Kwai, and BIGO Ads.",
      },
      {
        title: "Emerging Media & OEM Channel Access",
        description:
          "Expanding UA beyond saturated platforms by tapping into high-performing alternative networks, mobile OEM stores, and CTV inventory worldwide.",
      },
      {
        title: "Single-Platform Centralized Operations",
        description:
          "Manage, fund, and allocate budgets across multiple global ad platforms through a unified financial and operational dashboard.",
      },
      {
        title: "Compliance & Account Health Guardianship",
        description:
          "Proactive policy guidance, pre-review creative auditing, and dedicated account managers to maintain spotless account standing.",
      },
    ],
    partners: ["Google Premier Partner", "Meta Business Partner", "TikTok for Business", "BIGO Ads", "Kwai", "MediaGo", "Mintegral", "Moloco", "Apple Search Ads"],
    deliverables: [
      "Fast-track verified ad accounts across all major networks",
      "Unified multi-currency funding and invoicing",
      "Localized policy pre-screening and appeal escalation",
      "Cross-network media planning and allocation roadmaps",
    ],
  },
];
