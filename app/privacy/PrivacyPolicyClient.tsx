"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Globe,
  Cookie,
  UserCheck,
  Server,
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Clock,
  Building2,
  FileText,
  ChevronRight,
  Database,
  Eye,
  ExternalLink,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { RevealElement } from "@/components/RevealElement";
import { companyData } from "@/data/company";
import { navigationConfig } from "@/data/navigation";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "intro", title: "1. Introduction & Global Scope", short: "Scope & Overview" },
  { id: "collection", title: "2. Information We Collect", short: "Information Collected" },
  { id: "usage", title: "3. How We Use Your Information", short: "Data Usage" },
  { id: "cookies", title: "4. Cookies & Tracking Technologies", short: "Cookies & Tags" },
  { id: "sharing", title: "5. Data Sharing & Disclosures", short: "Sharing & Disclosure" },
  { id: "transfers", title: "6. International Cross-Border Transfers", short: "International Transfers" },
  { id: "retention", title: "7. Data Retention & Lifecycle", short: "Data Retention" },
  { id: "security", title: "8. Security Architecture & Safeguards", short: "Security Safeguards" },
  { id: "rights", title: "9. Your Global Privacy Rights", short: "Your Legal Rights" },
  { id: "children", title: "10. Children's Privacy", short: "Children's Privacy" },
  { id: "updates", title: "11. Policy Changes & Updates", short: "Policy Revisions" },
  { id: "contact", title: "12. Contact & Data Protection Officer", short: "Contact & Inquiries" },
];

export function PrivacyPolicyClient() {
  const [activeSection, setActiveSection] = useState<string>("intro");
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(navigationConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <PageTransition>
      {/* 1. Hero Header */}
      <section className="relative py-16 sm:py-24 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-slate-500 mb-6 uppercase">
            <Link href="/" className="hover:text-[#0052ff] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[#0052ff]">Privacy Policy</span>
          </div>

          <RevealElement animation="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[#0052ff] border border-blue-100">
              <ShieldCheck className="w-4 h-4 text-[#0052ff]" />
              Data Protection & Governance
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#090a10] tracking-tight leading-[1.08] max-w-4xl">
              Privacy Policy
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              At {companyData.fullName}, we hold user privacy and data sovereignty as fundamental
              commandments. This Privacy Policy details our protocols for collecting, utilizing,
              protecting, and processing data across our websites, advertising technology systems, and
              global performance marketing solutions.
            </p>

            {/* Quick Metadata Pill Strip */}
            <div className="mt-8 pt-8 border-t border-slate-200/80 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#0052ff]" />
                <span className="font-semibold text-slate-800">Effective Date:</span>
                <span>October 2026</span>
              </div>
              <div className="hidden sm:block text-slate-300">•</div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#0052ff]" />
                <span className="font-semibold text-slate-800">Compliance:</span>
                <span>GDPR (EU/UK), CCPA/CPRA, Singapore PDPA</span>
              </div>
              <div className="hidden sm:block text-slate-300">•</div>
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#0052ff]" />
                <span className="font-semibold text-slate-800">Entity:</span>
                <span>{companyData.fullName}</span>
              </div>
            </div>
          </RevealElement>
        </div>
      </section>

      {/* 2. Key Privacy Commitments (4 Highlight Cards) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#090a10] mb-1.5">No Sale of Personal Data</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never monetize, rent, or trade your personal identifiable information to any third party for commercial brokers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#090a10] mb-1.5">Enterprise Encryption</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                TLS 1.3 in transit and AES-256 at rest safeguard operational assets, databases, and client interactions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#090a10] mb-1.5">Programmatic Precision</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Ad telemetry is pseudonymous and aggregated strictly for fraud prevention, attribution, and delivery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0052ff] flex items-center justify-center mb-4">
                <UserCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[#090a10] mb-1.5">Full User Sovereignty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seamless rights to access, rectify, extract, or delete personal data in compliance with international privacy laws.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Policy Content with Interactive Sticky Sidebar */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Desktop Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-400 mb-4">
                  <FileText className="w-4 h-4 text-[#0052ff]" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-1">
                  {SECTIONS.map((sec) => {
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => scrollToSection(sec.id)}
                        className={cn(
                          "w-full text-left px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between cursor-pointer group",
                          isActive
                            ? "bg-[#0052ff] text-white shadow-sm shadow-blue-500/20"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                        )}
                      >
                        <span className="truncate">{sec.short}</span>
                        <ChevronRight
                          className={cn(
                            "w-3.5 h-3.5 transition-transform flex-shrink-0",
                            isActive
                              ? "text-white translate-x-0.5"
                              : "text-slate-400 group-hover:translate-x-0.5"
                          )}
                        />
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Contact Card */}
              <div className="p-6 rounded-3xl bg-[#090a10] text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block mb-3" />
                <h4 className="text-base font-bold mb-1.5">Data Privacy Office</h4>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Have a specific inquiry, request data deletion, or wish to exercise your GDPR / CCPA rights?
                </p>

                <div className="space-y-2">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-medium text-white transition-all cursor-pointer border border-white/10"
                  >
                    <span className="truncate">{navigationConfig.email}</span>
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#0052ff] hover:bg-blue-600 text-xs font-bold text-white transition-colors"
                  >
                    <span>Submit Privacy Request</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Main Policy Text Column */}
            <div className="lg:col-span-8 space-y-16 text-slate-700">
              {/* Mobile Quick Selector */}
              <div className="lg:hidden p-4 rounded-2xl bg-slate-50 border border-slate-200 mb-8">
                <label htmlFor="mobile-toc" className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Jump to Section:
                </label>
                <select
                  id="mobile-toc"
                  value={activeSection}
                  onChange={(e) => scrollToSection(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-white border border-slate-300 text-xs font-semibold text-slate-800"
                >
                  {SECTIONS.map((sec) => (
                    <option key={sec.id} value={sec.id}>
                      {sec.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* SECTION 1 */}
              <section id="intro" className="scroll-mt-28">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 01
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  1. Introduction & Global Scope
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    {companyData.fullName} (“<strong>LynxMobi</strong>,” “<strong>we</strong>,” “
                    <strong>our</strong>,” or “<strong>us</strong>”) is committed to protecting your
                    privacy and ensuring that personal information is collected, processed, and
                    safeguarded in an ethical, secure, and accountable manner. This Privacy Policy
                    governs our practices across our primary website (
                    <Link href="/" className="text-[#0052ff] font-semibold hover:underline">
                      lynxmobi.com
                    </Link>
                    ), our proprietary advertising management platform (<strong>{companyData.platformName}</strong>),
                    our creator intelligence databases, and our digital advertising services.
                  </p>
                  <p>
                    As a premier provider of global performance marketing and cross-border digital
                    advertising architecture, LynxMobi operates across international jurisdictions.
                    We comply strictly with all applicable data protection frameworks, including
                    without limitation:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>
                      <strong>The EU General Data Protection Regulation (GDPR)</strong> (Regulation (EU)
                      2016/679) and the UK GDPR / Data Protection Act 2018.
                    </li>
                    <li>
                      <strong>The California Consumer Privacy Act (CCPA)</strong> as amended by the{" "}
                      <strong>California Privacy Rights Act (CPRA)</strong> (Cal. Civ. Code § 1798.100 et seq.).
                    </li>
                    <li>
                      <strong>The Personal Data Protection Act (PDPA)</strong> of Singapore (Act 26 of 2012).
                    </li>
                    <li>
                      Applicable state, federal, and national data privacy regulations across the 200+
                      territories in which we deliver digital media campaigns.
                    </li>
                  </ul>
                  <p>
                    Please review this Privacy Policy thoroughly. By accessing our websites, utilizing
                    our services, interacting with our media channels, or transmitting inquiries to our
                    team, you acknowledge the terms described herein.
                  </p>
                </div>
              </section>

              {/* SECTION 2 */}
              <section id="collection" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 02
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  2. Information We Collect
                </h2>
                <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    We collect personal information depending on the context of your interactions with
                    LynxMobi, the choices you make, and the products and features you utilize. We
                    categorize this information as follows:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <UserCheck className="w-4 h-4 text-[#0052ff]" />
                        <span>A. Information You Provide Directly</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        When you submit a contact request, schedule a consultation, subscribe to our
                        intelligence reports, or register as an advertiser, publisher, or creator, we
                        may collect your:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
                        <li>Full name and professional contact email</li>
                        <li>Company / organization name and job title</li>
                        <li>Business phone number and headquarters location</li>
                        <li>Marketing budgets, target regions, and project specifications</li>
                        <li>Billing details and corporate verification materials</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <Server className="w-4 h-4 text-[#0052ff]" />
                        <span>B. Technical & Device Information</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Collected automatically via web server logs, browser session tokens, and
                        essential telemetry when navigating our domains:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
                        <li>Internet Protocol (IP) address and approximate country/city</li>
                        <li>Browser type, engine version, and language preferences</li>
                        <li>Operating system, device hardware category, and screen resolution</li>
                        <li>Referring URL, entrance/exit pages, and access timestamps</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <Database className="w-4 h-4 text-[#0052ff]" />
                        <span>C. Programmatic Advertising Telemetry</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        In executing programmatic auctions and cross-border media buying (via DSP/SSP
                        integrations), our systems process non-PII and pseudonymous telemetry:
                      </p>
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-xs text-slate-500">
                        <li>Pseudonymous ad identifiers (Apple IDFA, Google GAID, OAID)</li>
                        <li>Ad impression timestamps, creative variant IDs, and placements</li>
                        <li>Click telemetry, conversion tokens, and video completion status</li>
                        <li>Bot mitigation indicators and invalid traffic (IVT) flags</li>
                      </ul>
                    </div>

                    <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <Mail className="w-4 h-4 text-[#0052ff]" />
                        <span>D. Communications & Correspondence</span>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        Records and transcripts of messages, RFPs, support queries, email exchanges, and
                        in-app floating chat interactions conducted through official LynxMobi channels.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 text-xs text-blue-900 flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-[#0052ff] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-bold">Important AdTech Notice:</strong> LynxMobi does{" "}
                      <strong>not</strong> collect or process directly identifying personal data (such
                      as government ID numbers, personal credit cards, or home addresses) through
                      real-time ad bid requests. All programmatic identifiers handled during campaign
                      delivery are strictly pseudonymous.
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 3 */}
              <section id="usage" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 03
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  3. How We Use Your Information
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    LynxMobi processes information only where we have a lawful legal basis (such as
                    contractual performance, legitimate business interest, legal obligation, or explicit
                    user consent). Purposes include:
                  </p>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h4 className="font-bold text-sm text-[#090a10] mb-1">
                        Service Delivery & Campaign Execution
                      </h4>
                      <p className="text-xs text-slate-600">
                        Administering your account, delivering Tier-1 programmatic media buying,
                        coordinating influencer outreach campaigns, managing publisher traffic, and
                        calculating precise performance attribution.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h4 className="font-bold text-sm text-[#090a10] mb-1">
                        Client Inquiries & Strategic Consultation
                      </h4>
                      <p className="text-xs text-slate-600">
                        Evaluating incoming partnership requests, responding to RFPs, arranging
                        introductory calls with our regional hubs, and delivering tailored digital media
                        growth proposals.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h4 className="font-bold text-sm text-[#090a10] mb-1">
                        Fraud Detection & Security Hardening
                      </h4>
                      <p className="text-xs text-slate-600">
                        Employing algorithmic telemetry in {companyData.platformName} to detect and
                        block click farms, programmatic bot nets, invalid traffic, unauthorized system
                        access, and distributed denial-of-service attempts.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h4 className="font-bold text-sm text-[#090a10] mb-1">
                        Platform Optimization & Product Innovation
                      </h4>
                      <p className="text-xs text-slate-600">
                        Analyzing traffic patterns and user interface interactions to optimize loading
                        latencies, server infrastructure, responsive rendering, and overall digital
                        experience.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                      <h4 className="font-bold text-sm text-[#090a10] mb-1">
                        Commercial Communications (B2B)
                      </h4>
                      <p className="text-xs text-slate-600">
                        Sending industry intelligence, case studies, service enhancements, or marketing
                        notices where permitted by law. Recipients retain an unrestricted right to
                        opt-out at any time via one-click unsubscribe links.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 4 */}
              <section id="cookies" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 04
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  4. Cookies & Tracking Technologies
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    We deploy cookies, web beacons, and similar tracking mechanisms to ensure core site
                    functionality, analyze visitor trends, and gauge marketing efficacy:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <Cookie className="w-4 h-4 text-[#0052ff]" />
                        <span>Essential Cookies</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Mandatory for security, authentication state, and session routing. Cannot be
                        disabled without impairing site operations.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <Eye className="w-4 h-4 text-[#0052ff]" />
                        <span>Analytics Cookies</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Gather aggregated, de-identified telemetry (e.g. Google Analytics 4) to monitor
                        page visits, user flows, and engagement metrics.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 mb-2 font-bold text-[#090a10] text-sm">
                        <Database className="w-4 h-4 text-[#0052ff]" />
                        <span>Attribution Tags</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Measure conversion velocity and campaign return on ad spend (ROAS) across
                        partner channels without profiling individual consumers.
                      </p>
                    </div>
                  </div>

                  <h4 className="font-bold text-sm text-[#090a10] pt-2">Managing Your Cookie Preferences</h4>
                  <p className="text-xs sm:text-sm text-slate-600">
                    You can restrict or block cookies at any time via your browser settings. Consult
                    your browser&apos;s documentation:
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">Google Chrome</span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">Apple Safari</span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">Mozilla Firefox</span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 font-medium">Microsoft Edge</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2">
                    For consumer ad-choice opt-outs, visit the{" "}
                    <a
                      href="https://optout.aboutads.info"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0052ff] hover:underline inline-flex items-center gap-0.5"
                    >
                      Digital Advertising Alliance (DAA) <ExternalLink className="w-3 h-3" />
                    </a>{" "}
                    or the{" "}
                    <a
                      href="https://www.youronlinechoices.eu"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#0052ff] hover:underline inline-flex items-center gap-0.5"
                    >
                      European Interactive Digital Advertising Alliance (EDAA) <ExternalLink className="w-3 h-3" />
                    </a>.
                  </p>
                </div>
              </section>

              {/* SECTION 5 */}
              <section id="sharing" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 05
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  5. Data Sharing & Disclosures
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-semibold flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>
                      Our Golden Rule: <strong>We do NOT sell personal data.</strong> We do not rent,
                      broker, or exchange your personal information for monetary compensation.
                    </span>
                  </div>

                  <p>
                    We disclose information strictly under the following limited, legally documented
                    circumstances:
                  </p>

                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>
                      <strong>Vetted Service Providers:</strong> We engage certified infrastructure
                      partners (cloud hosting, database management, billing automation, customer
                      relationship management) who process data exclusively on our instructions under
                      strict confidentiality covenants and Data Processing Agreements (DPAs).
                    </li>
                    <li>
                      <strong>Legal & Regulatory Mandates:</strong> Where compelled by enforceable court
                      orders, statutory warrants, judicial subpoenas, or regulatory directives issued by
                      authorities possessing legitimate jurisdiction.
                    </li>
                    <li>
                      <strong>Protection of Rights & Safety:</strong> When necessary to enforce our
                      contractual agreements, prevent fraud, mitigate ad-tech security threats, or protect
                      the physical safety of any person.
                    </li>
                    <li>
                      <strong>Corporate Transactions:</strong> In connection with an eventual merger,
                      acquisition, reorganization, or sale of company assets, wherein the successor
                      entity assumes identical data protection commitments.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 6 */}
              <section id="transfers" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 06
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  6. International Cross-Border Data Transfers
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    As an international enterprise with strategic innovation hubs spanning San Francisco,
                    Singapore, Tokyo, Seoul, London, Berlin, Dubai, and beyond, LynxMobi operates a
                    distributed cloud infrastructure. Consequently, your data may be transferred to,
                    stored, or processed in jurisdictions outside your home nation.
                  </p>
                  <p>
                    Whenever cross-border transfers occur, we implement rigorous legal mechanisms to ensure
                    that an equivalent degree of protection is upheld:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-slate-600">
                    <li>
                      <strong>Standard Contractual Clauses (SCCs):</strong> Execution of European
                      Commission approved SCCs with all international processors and affiliates.
                    </li>
                    <li>
                      <strong>Adequacy Decisions:</strong> Leveraging formal adequacy determinations by
                      the European Commission and the UK Information Commissioner&apos;s Office (ICO).
                    </li>
                    <li>
                      <strong>Supplementary Safeguards:</strong> Implementing end-to-end encryption in
                      transit and at rest, coupled with strict access control governance.
                    </li>
                  </ul>
                </div>
              </section>

              {/* SECTION 7 */}
              <section id="retention" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 07
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  7. Data Retention & Lifecycle
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    We retain personal information only for the minimum duration requisite to fulfill the
                    purposes specified in this Privacy Policy, unless a more extensive retention horizon
                    is mandated by statutory accounting, tax, or legal obligations.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-xs uppercase tracking-wider text-[#0052ff] mb-1">
                        AdTech & Auction Telemetry
                      </div>
                      <p className="text-xs text-slate-600">
                        Pseudonymous ad logs and impression tokens are retained for 13 to 24 months for
                        attribution validation and anti-fraud auditing, after which they are irreversibly
                        purged or fully aggregated.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="font-bold text-xs uppercase tracking-wider text-[#0052ff] mb-1">
                        Client & Contract Records
                      </div>
                      <p className="text-xs text-slate-600">
                        Business correspondence, contractual agreements, and financial transactions are
                        preserved for the duration of the commercial relationship plus statutory
                        limitation periods (typically 5–7 years).
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 8 */}
              <section id="security" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 08
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  8. Security Architecture & Safeguards
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    We implement defense-in-depth technical, administrative, and physical safeguards
                    engineered to prevent unauthorized access, disclosure, alteration, or accidental
                    loss of personal data:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#090a10] mb-2">
                        <Lock className="w-4 h-4 text-[#0052ff]" />
                        <span>Cryptographic Protection</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        End-to-end TLS 1.3 protocol encryption for all data in transit, coupled with
                        AES-256 block-level encryption for stationary databases.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center gap-2 font-bold text-sm text-[#090a10] mb-2">
                        <UserCheck className="w-4 h-4 text-[#0052ff]" />
                        <span>Zero-Trust Access Control</span>
                      </div>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        Granular role-based access control (RBAC), mandatory hardware-backed MFA, and
                        continuous activity logging across all engineering endpoints.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 9 */}
              <section id="rights" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 09
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  9. Your Global Privacy Rights
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    Depending on your geographic residency and applicable data protection legislation
                    (such as GDPR, CCPA/CPRA, or Singapore PDPA), you may exercise the following rights:
                  </p>

                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <div>
                        <strong className="text-sm font-bold text-[#090a10] block">
                          Right to Access & Knowledge
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Request confirmation as to whether we process your personal data and obtain a
                          copy of that information, including categories collected, purposes, and
                          recipients.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <div>
                        <strong className="text-sm font-bold text-[#090a10] block">
                          Right to Rectification & Correction
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Rectify inaccurate or incomplete personal records maintained in our systems.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <div>
                        <strong className="text-sm font-bold text-[#090a10] block">
                          Right to Erasure (&quot;Right to be Forgotten&quot;)
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Request deletion of your personal data where retention is no longer necessary or
                          where consent has been withdrawn.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <div>
                        <strong className="text-sm font-bold text-[#090a10] block">
                          Right to Data Portability
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Receive your personal data in a structured, commonly used, machine-readable
                          format (JSON or CSV) for transfer to another controller.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        5
                      </span>
                      <div>
                        <strong className="text-sm font-bold text-[#090a10] block">
                          Right to Object & Opt-Out (CCPA/CPRA)
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          Object to processing based on legitimate business interests or direct marketing.
                          Under CCPA/CPRA, you hold the explicit right to opt out of the sale or sharing of
                          personal data (which we do not engage in).
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-[#0052ff] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                        6
                      </span>
                      <div>
                        <strong className="text-sm font-bold text-[#090a10] block">
                          Right to Non-Discrimination
                        </strong>
                        <p className="text-xs text-slate-600 mt-0.5">
                          You will never receive discriminatory treatment, price variations, or altered
                          service quality for exercising statutory privacy rights.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Submission Instructions Box */}
                  <div className="mt-6 p-6 rounded-2xl bg-slate-900 text-white">
                    <h4 className="text-base font-bold mb-2">How to Submit a Verification Request</h4>
                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      To exercise any of the above rights, please contact our Data Protection Team at{" "}
                      <a
                        href={`mailto:${navigationConfig.email}`}
                        className="text-blue-400 font-semibold hover:underline"
                      >
                        {navigationConfig.email}
                      </a>{" "}
                      with the subject line <em>&quot;Privacy Rights Request&quot;</em>. We will verify
                      your identity and respond within thirty (30) calendar days as required by law.
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-all cursor-pointer border border-white/15"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-slate-300" />
                            <span>Copy Email Address</span>
                          </>
                        )}
                      </button>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#0052ff] hover:bg-blue-600 text-xs font-bold text-white transition-colors"
                      >
                        <span>Open Contact Form</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* SECTION 10 */}
              <section id="children" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 10
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  10. Children&apos;s Privacy
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    Our services, platforms, and websites are exclusively engineered for commercial
                    enterprises, cross-border brands, and individuals aged sixteen (16) and older. We do
                    not knowingly solicit or collect personal information from minors.
                  </p>
                  <p>
                    If we discover that personal information of a child under 16 has been inadvertently
                    collected without verified parental consent, we will take immediate measures to
                    permanently delete the record from our operational repositories. If you believe a child
                    has provided us with personal information, please alert us immediately at{" "}
                    <a
                      href={`mailto:${navigationConfig.email}`}
                      className="text-[#0052ff] font-semibold hover:underline"
                    >
                      {navigationConfig.email}
                    </a>.
                  </p>
                </div>
              </section>

              {/* SECTION 11 */}
              <section id="updates" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 11
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  11. Policy Changes & Updates
                </h2>
                <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    We reserve the right to amend, modify, or modernize this Privacy Policy periodically
                    to mirror evolving technical practices, product enhancements, industry conventions,
                    or regulatory mandates.
                  </p>
                  <p>
                    Whenever alterations occur, we will update the &quot;Effective Date&quot; at the top
                    of this page. In the case of material changes that substantially impact your rights,
                    we will provide prominent notification across our platforms or via email prior to the
                    adjustments taking effect. We recommend reviewing this document on a recurring basis.
                  </p>
                </div>
              </section>

              {/* SECTION 12 */}
              <section id="contact" className="scroll-mt-28 pt-8 border-t border-slate-200">
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-2">
                  Section 12
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] mb-6">
                  12. Contact & Data Protection Officer
                </h2>
                <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-600">
                  <p>
                    If you have questions, comments, or grievances regarding this Privacy Policy, our data
                    handling procedures, or wish to connect directly with our compliance strategists,
                    please get in touch:
                  </p>

                  <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#0052ff] text-white flex items-center justify-center font-black text-xl">
                        L
                      </div>
                      <div>
                        <h4 className="text-lg font-black text-[#090a10]">{companyData.fullName}</h4>
                        <p className="text-xs uppercase tracking-wider text-slate-500 font-medium">
                          Data Protection & Compliance Office
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Direct Privacy Inquiries</span>
                        <a
                          href={`mailto:${navigationConfig.email}`}
                          className="text-[#0052ff] font-semibold hover:underline"
                        >
                          {navigationConfig.email}
                        </a>
                      </div>

                      <div>
                        <span className="font-bold text-slate-900 block mb-1">Commercial Inquiries</span>
                        <Link href="/contact" className="text-[#0052ff] font-semibold hover:underline">
                          Schedule Strategic Consultation →
                        </Link>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                      <p className="text-xs text-slate-500">
                        San Francisco • Singapore • Tokyo • London • Dubai
                      </p>

                      <div className="flex items-center gap-3">
                        <Link
                          href="/contact"
                          className="px-4 py-2 rounded-xl bg-[#090a10] hover:bg-[#0052ff] text-white text-xs font-bold uppercase tracking-wider transition-colors"
                        >
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
