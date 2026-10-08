"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  ShieldCheck,
  Zap,
  Globe,
  KeyRound,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactCTA } from "@/components/ContactCTA";
import { GlobalMediaGraph } from "@/components/GlobalMediaGraph";
import { servicesData } from "@/data/services";

export default function GlobalMediaServicePage() {
  const service = servicesData.find((s) => s.slug === "global-media")!;

  const keyPlatforms = [
    { name: "Google Premier", type: "Search, YouTube & GDN", tier: "Core Tier 1" },
    { name: "Meta Business", type: "Facebook & Instagram", tier: "Core Tier 1" },
    { name: "TikTok for Business", type: "Short Video & Spark Ads", tier: "Global Viral" },
    { name: "BIGO Ads", type: "Likee & imo Social Ads", tier: "Emerging Scale" },
    { name: "Kwai for Business", type: "LATAM & SEA Video Stream", tier: "High-Growth" },
    { name: "MediaGo", type: "Baidu Global Native Ads", tier: "Contextual" },
    { name: "Mintegral", type: "Mobile In-App Video & Programmatic", tier: "SDK Inventory" },
    { name: "Moloco", type: "Machine Learning App Bidding", tier: "Performance DSP" },
    { name: "Apple Search Ads", type: "App Store High-Intent UA", tier: "iOS Dominance" },
  ];

  return (
    <PageTransition>
      {/* 1. Service Hero with Visual Asset & Global Hub Highlights */}
      <section className="py-16 sm:py-24 lg:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          {/* Breadcrumb */}
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0052ff] hover:underline mb-8"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to All Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7">
              <RevealElement animation="fade-up">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-black tracking-widest uppercase bg-emerald-50 text-emerald-600 px-3.5 py-1.5 rounded-full border border-emerald-100">
                    Service {service.number}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                    {service.subtitle}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05]">
                  {service.title} & Ad Account Opening
                </h1>

                <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                  {service.heroDescription}
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <MagneticButton
                    href="/contact"
                    variant="primary"
                    size="lg"
                    icon={<ArrowUpRight className="w-5 h-5" />}
                  >
                    Open Global Ad Accounts
                  </MagneticButton>

                  <a
                    href="#allocation-graphs"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm tracking-wide transition-all"
                  >
                    <span>Simulate Media Allocation</span>
                  </a>
                </div>
              </RevealElement>
            </div>

            {/* Right Column: High-Impact Visual Asset Card */}
            <div className="lg:col-span-5">
              <RevealElement animation="fade-up" delay={0.15}>
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#090a10]">
                  {/* Floating Status Pill */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Authorized Partner Lines • Active</span>
                  </div>

                  {/* High-Resolution Global Network Map Image */}
                  <img
                    src="/images/service-global-media-map.jpg"
                    alt="LynxMobi Global Media Access & Account Network"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Glass Overlay on bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-emerald-400">
                        Global Reach
                      </div>
                      <div className="text-sm font-black">200+ Countries Connected</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-mono font-bold">
                      24h Fast-Track
                    </span>
                  </div>
                </div>
              </RevealElement>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-200">
            {service.keyStats.map((stat, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100">
                <div className="text-3xl sm:text-4xl font-black text-[#0052ff]">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Interactive Omnichannel Budget Allocator & VIP Account Pipeline */}
      <section id="allocation-graphs" className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <SectionHeading
            tag="Media Economics"
            title="Interactive Media Allocator & VIP Onboarding"
            subtitle="Simulate cross-network reach and inspect our accelerated 24-hour tier-1 account deployment pipeline."
          />

          <div className="mt-14">
            <GlobalMediaGraph />
          </div>
        </div>
      </section>

      {/* 3. Authorized Platform Ecosystem */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Authorized Partner Network"
            title="Direct Access to World-Leading Ad Platforms"
            subtitle="Eliminate long approval wait times and protect account health with authorized tier-1 and emerging media agency lines."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {keyPlatforms.map((plat, idx) => (
              <RevealElement key={idx} animation="fade-up" delay={0.06 * idx}>
                <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0052ff] transition-all group h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-50 text-[#0052ff]">
                        {plat.tier}
                      </span>
                      <KeyRound className="w-4 h-4 text-slate-400 group-hover:text-[#0052ff] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#090a10] group-hover:text-[#0052ff] transition-colors">
                      {plat.name}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-500">
                      {plat.type}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                    <CheckCircle className="w-3.5 h-3.5" />
                    <span>Direct Agency Whitelist Line</span>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Capabilities */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Onboarding & Infrastructure"
            title="Accelerated Ad Account Architecture"
            subtitle="From instant policy pre-clearance to VIP multi-currency financial settlements."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {service.capabilities.map((cap, i) => (
              <RevealElement key={i} animation="fade-up" delay={0.08 * i}>
                <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0052ff] hover:bg-white hover:shadow-xl transition-all h-full group">
                  <div className="text-xs font-black text-[#0052ff] uppercase tracking-widest mb-3">
                    / 0{i + 1} CAPABILITY
                  </div>
                  <h3 className="text-2xl font-bold text-[#090a10] group-hover:text-[#0052ff] transition-colors">
                    {cap.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deliverables & Benefits */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                tag="Zero Intermediaries"
                title="Single-Platform Budget Operations"
                subtitle="Centralized multi-channel account deployment ensuring maximum uptime and instant credit top-ups."
              />

              <div className="space-y-4 mt-8">
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Proactive Account Health Guardianship</span>
                    <span className="text-xs text-slate-500 mt-0.5 block">Dedicated compliance auditors pre-screening ad creatives to prevent account suspensions.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <Zap className="w-5 h-5 text-[#0052ff] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Sub-24h Fast-Track Provisioning</span>
                    <span className="text-xs text-slate-500 mt-0.5 block">Rapid deployment of verified agency ad accounts across mainstream and alternative platforms.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <Globe className="w-5 h-5 text-purple-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-sm font-bold text-slate-900 block">Omnichannel Global Inventory</span>
                    <span className="text-xs text-slate-500 mt-0.5 block">Unrestricted access to regional high-converting traffic sources in APAC, LATAM, and EMEA.</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                tag="Deliverables"
                title="Onboarding Inclusions"
                subtitle="Complete operational coverage from initial verification to ongoing account management."
              />

              <div className="space-y-4 mt-8">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0052ff] transition-all"
                  >
                    <CheckCircle className="w-5 h-5 text-[#0052ff] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Contact CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
