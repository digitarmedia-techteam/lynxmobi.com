"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  Tv,
  CheckCircle,
  Target,
  Activity,
  Zap,
  Layers,
  Sparkles,
  Smartphone,
  ShieldCheck,
  Flame,
  Radio,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactCTA } from "@/components/ContactCTA";
import { CTVArchitectureGraph } from "@/components/CTVArchitectureGraph";
import { servicesData } from "@/data/services";

export default function CTVServicePage() {
  const service =
    servicesData.find((s) => s.slug === "ctv") || {
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
      capabilities: [],
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
    };

  const corePillars = [
    {
      icon: <Target className="w-6 h-6 text-[#0052FF]" />,
      title: "Intelligent Audience Targeting",
      description:
        "Leverage deterministic ACR (Automatic Content Recognition), household IP graphs, and demographic profiling to deliver ads to the exact high-value viewer personas most likely to engage.",
      stat: "99.2% Accuracy",
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-600" />,
      title: "Real-Time Telemetry & Optimization",
      description:
        "Continuous live telemetry monitor completion rates, pacing, and multi-stream frequency capping across apps and OEM ecosystems to eliminate ad fatigue and waste.",
      stat: "Sub-15ms Latency",
    },
    {
      icon: <Zap className="w-6 h-6 text-amber-500" />,
      title: "Efficient Delivery & High ROI",
      description:
        "Direct server-to-server DSP pipelines into premier private marketplace (PMP) auctions guarantee high-ROI programmatic media buying with zero intermediary markups.",
      stat: "98.4% Avg. VCR",
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-500" />,
      title: "Multi-Platform Ecosystem Support",
      description:
        "Single-point operational management spanning Netflix Ads, Hulu, YouTube TV, Roku, Amazon Fire TV, Samsung Ads, LG Ads Solutions, Xiaomi, and Apple TV.",
      stat: "200M+ Households",
    },
  ];

  const formatCards = [
    {
      tag: "Living-Room Focus",
      title: "CTV Native Ads",
      icon: <Tv className="w-6 h-6 text-[#0052FF]" />,
      description:
        "Seamlessly integrated into smart TV operating systems, home screens, and app launchers. Non-disruptive, highly visible, and navigable with 1-click remote controls.",
      highlights: [
        "First-screen smart TV boot placement",
        "Interactive 1-click remote navigation",
        "Direct deep linking into brand apps",
        "Zero disruption to streaming playback",
      ],
    },
    {
      tag: "Maximum Impact",
      title: "CTV Video Commercials",
      icon: <Flame className="w-6 h-6 text-purple-600" />,
      description:
        "Full-screen 4K and 1080p unskippable video ads broadcast in premium living-room environments with full audio fidelity, commanding viewer attention.",
      highlights: [
        "15s & 30s unskippable video ad spots",
        "Cinema-grade 4K HDR visual delivery",
        "Living-room co-viewing multipliers",
        "98.4% verified video completion rate",
      ],
    },
    {
      tag: "Omnichannel Synergy",
      title: "Cross-Device Retargeting",
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
      description:
        "Connected household identity mapping. Sequence high-impact big-screen TV storytelling with immediate clickable mobile and desktop companion ads.",
      highlights: [
        "Deterministic household IP resolution",
        "Instant mobile companion retargeting",
        "Scan-to-download interactive QR triggers",
        "Full MMP tracking (AppsFlyer / Adjust)",
      ],
    },
  ];

  return (
    <PageTransition>
      {/* 1. Hero Section */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          {/* Breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0052ff] hover:underline mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to All Solutions
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7">
              <RevealElement animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase bg-purple-50 text-purple-700 px-3.5 py-1.5 rounded-full border border-purple-200">
                    Solution 02
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                    Living-Room Immersion & Multi-Screen Reach
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05]">
                  Connected TV <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-[#0052FF] to-blue-500">
                    (CTV) Advertising
                  </span>
                </h1>

                <div className="mt-4 text-xl sm:text-2xl font-extrabold text-[#090a10] tracking-tight">
                  Maximize Your Reach, Amplify Your Impact
                </div>

                <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                  Engage high-intent consumers on the largest screen in the home. Combine big-screen cinema-grade video storytelling with algorithmic programmatic precision, household IP targeting, and cross-device conversion attribution.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={<ArrowUpRight className="w-5 h-5" />}
                  >
                    Launch CTV Campaign
                  </MagneticButton>

                  <a
                    href="#ctv-architecture"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm tracking-wide transition-all"
                  >
                    <Radio className="w-4 h-4 text-purple-600" />
                    <span>Explore CTV Engine</span>
                  </a>
                </div>
              </RevealElement>
            </div>

            {/* Right Column: Key Stats Grid */}
            <div className="lg:col-span-5">
              <RevealElement animation="fade-up" delay={0.15}>
                <div className="p-8 sm:p-10 rounded-3xl bg-[#090A10] text-white border border-white/10 shadow-2xl space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-2">
                      <Tv className="w-5 h-5 text-purple-400" />
                      <span className="font-bold text-sm tracking-wider uppercase text-purple-300">
                        CTV Performance Benchmarks
                      </span>
                    </div>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    {service.keyStats.map((stat, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                          {stat.value}
                        </div>
                        <div className="text-xs text-slate-400 font-medium leading-snug">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span>Direct DSP Pipelines</span>
                    <span className="text-emerald-400 font-semibold flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4" /> 100% Brand Safe
                    </span>
                  </div>
                </div>
              </RevealElement>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Interactive Architecture & Live Simulator */}
      <section id="ctv-architecture" className="py-20 sm:py-28 bg-[#F9FBFC] border-b border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="CTV Operations Architecture"
            title="Next-Gen Living Room Advertising Engine"
            subtitle="Explore how Lynxmobi orchestrates high-completion video streams, native smart TV launcher slots, and cross-device sequential attribution."
          />

          <div className="mt-14 sm:mt-18">
            <CTVArchitectureGraph />
          </div>
        </div>
      </section>

      {/* 3. Four Core Pillars */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Core Strategic Pillars"
            title="Engineered for Maximum Reach & High-LTV Conversion"
            subtitle="Four foundational capabilities powering Lynxmobi's global CTV ecosystem."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-16">
            {corePillars.map((pillar, idx) => (
              <RevealElement key={idx} animation="fade-up" delay={0.1 * idx}>
                <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-purple-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#090a10] mb-3 group-hover:text-purple-600 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between">
                    <span className="text-xs uppercase font-bold text-slate-400">Benchmark</span>
                    <span className="text-xs font-black text-[#0052FF]">{pillar.stat}</span>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Three High-Converting Formats */}
      <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="High-Impact Formats"
            title="Tailored for Every Stage of the Viewer Journey"
            subtitle="From native first-screen smart TV boot units to cinema-grade unskippable commercials."
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-16">
            {formatCards.map((format, idx) => (
              <RevealElement key={idx} animation="fade-up" delay={0.12 * idx}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                        {format.icon}
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {format.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black text-[#090a10] mb-3">
                      {format.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {format.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100">
                      {format.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                          <CheckCircle className="w-4 h-4 text-[#0052FF] shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#0052FF] hover:underline"
                    >
                      <span>Deploy {format.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Supported Ecosystem & Partners */}
      <section className="py-20 sm:py-28 bg-white border-b border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Global Reach"
            title="Authorized Integrations Across All Major CTV Networks"
            subtitle="Access verified inventory on every leading smart TV operating system and streaming app."
          />

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mt-16">
            {service.partners?.map((partner, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#0052FF] hover:bg-blue-50/40 transition-all duration-300 text-center flex flex-col items-center justify-center min-h-[110px]"
              >
                <span className="font-extrabold text-[#090a10] text-sm sm:text-base">
                  {partner}
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-400 mt-1">
                  Direct Programmatic PMP
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Deliverables Checklist */}
      <section className="py-20 sm:py-28 bg-[#090A10] text-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-purple-500/10 text-purple-300 border border-purple-400/30">
                <Sparkles className="w-3.5 h-3.5" />
                Turnkey CTV Campaign Management
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-white">
                Everything Included In Your CTV Campaign Setup
              </h2>
              <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
                From creative asset resizing and unskippable video rendering to household IP clustering and multi-touch attribution reports.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4">
              {service.deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4 hover:bg-white/[0.08] transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-400 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm sm:text-base font-semibold text-slate-100">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Contact CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
