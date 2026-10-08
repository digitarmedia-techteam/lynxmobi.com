export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: "Partnership" | "Recognition" | "Technology" | "Industry Insight";
  date: string;
  readTime: string;
  author: string;
  featured?: boolean;
}

export const newsArticlesData: NewsArticle[] = [
  {
    id: "amazon-ads-partner-network",
    slug: "amazon-ads-partner-network",
    title: "Lynxmobi Officially Joins the Amazon Ads Partner Network for Global E-Commerce Growth",
    summary:
      "Expanding high-velocity cross-border brand advertising with verified direct API connections and enhanced retail analytics.",
    category: "Partnership",
    date: "May 12, 2025",
    readTime: "4 min read",
    author: "Lynxmobi Editorial",
    featured: true,
  },
  {
    id: "outstanding-marketing-award",
    slug: "outstanding-marketing-award",
    title: "Lynxmobi Wins the 2025 Global Digital Marketing Service Provider of the Year",
    summary:
      "Recognized for groundbreaking AI-driven real-time bidding algorithms and remarkable international cross-border campaign scale.",
    category: "Recognition",
    date: "April 28, 2025",
    readTime: "3 min read",
    author: "Global AdTech Summit",
    featured: true,
  },
  {
    id: "lynxpulse-platform-launch",
    slug: "lynxpulse-platform-launch",
    title: "Unveiling LynxPulse 3.0: Unified Creator Intelligence & Automated Programmatic Bidding",
    summary:
      "The next generation of our proprietary ad operations platform provides sub-15ms auction decisions and verified anti-fraud auditing.",
    category: "Technology",
    date: "March 15, 2025",
    readTime: "5 min read",
    author: "AdTech Engineering Team",
  },
  {
    id: "top-global-expansion-trends",
    slug: "top-global-expansion-trends",
    title: "Navigating Southeast Asia and Latin America: 2025 Mobile User Acquisition Blueprint",
    summary:
      "An in-depth analysis on creative fatigue, localized payment channels, and creator-led community building in emerging growth markets.",
    category: "Industry Insight",
    date: "February 20, 2025",
    readTime: "7 min read",
    author: "Regional Growth Strategy Group",
  },
  {
    id: "google-premier-partner-renewed",
    slug: "google-premier-partner-renewed",
    title: "Lynxmobi Renews Google Premier Partner Status with Top 3% Global Performance Tier",
    summary:
      "Demonstrating consistent excellence in managing enterprise search, YouTube Video Action, and App Campaign (ACe) budgets.",
    category: "Partnership",
    date: "January 14, 2025",
    readTime: "3 min read",
    author: "Global Media Operations",
  },
];
