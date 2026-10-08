export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
    tag?: string;
  }[];
}

export const navigationConfig: {
  mainNav: NavItem[];
  email: string;
  contactHref: string;
  socials: { name: string; href: string; label: string }[];
  branches: { country: string; city: string; flag?: string }[];
} = {
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Solutions",
      href: "/services",
      children: [
        {
          title: "Programmatic Marketing",
          href: "/services/programmatic",
        },
        {
          title: "Connected TV (CTV)",
          href: "/services/ctv",
        },
        {
          title: "Campaign Management",
          href: "/services/campaign-management",
        },
      ],
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact Us",
      href: "/contact",
    },
  ],
  email: "support@lynxmobi.com",
  contactHref: "/contact",
  socials: [
    { name: "LinkedIn", href: "https://www.linkedin.com/company/lynxmobi-limited/", label: "LinkedIn" },
    { name: "Twitter / X", href: "https://x.com", label: "@Lynxmobi" },
    { name: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { name: "WeChat", href: "#wechat", label: "WeChat Official" },
  ],
  branches: [
    { country: "United States", city: "San Francisco" },
    { country: "Singapore", city: "Singapore" },
    { country: "Japan", city: "Tokyo" },
    { country: "South Korea", city: "Seoul" },
    { country: "United Kingdom", city: "London" },
    { country: "Germany", city: "Berlin" },
    { country: "United Arab Emirates", city: "Dubai" },
    { country: "India", city: "Bengaluru" },
    { country: "Indonesia", city: "Jakarta" },
    { country: "China", city: "Shenzhen" },
    { country: "Hong Kong", city: "Hong Kong" },
  ],
};
