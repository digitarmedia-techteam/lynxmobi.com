"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  Layers,
  BarChart3,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactCTA } from "@/components/ContactCTA";
import { CampaignManagementGraph } from "@/components/CampaignManagementGraph";
import { servicesData } from "@/data/services";

export default function CampaignManagementServicePage() {
  const service = servicesData.find((s) => s.slug === "campaign-management")!;

  const lifecycleStages = [
    {
      step: "01",
      title: "Strategic Blueprint & Audience Discovery",
      description: "In-depth competitor benchmarking, regional audience cohort modeling, and optimal multi-channel budget allocation.",
      icon: <Layers className="w-5 h-5 text-[#0052ff]" />,
    },
    {
      step: "02",
      title: "Localized Creative Studio Production",
      description: "Native video reels, high-converting 3D playable ads, and culturally resonated ad copy produced by native studio squads.",
      icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    },
    {
      step: "03",
      title: "Omnichannel Launch & Live Pacing",
      description: "Synchronized rollout across Meta, Google, TikTok, and alternative media with algorithmic budget distribution.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-500" />,
    },
    {
      step: "04",
      title: "Real-Time Telemetry & Funnel Optimization",
      description: "Multivariate testing of creative hooks, micro-demographic bidding shifts, and continuous CPA minimization.",
      icon: <BarChart3 className="w-5 h-5 text-purple-500" />,
    },
  ];

  return (
    <PageTransition>
      {/* 1. Service Hero with Visual Asset & ROAS Highlights */}
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
                  <span className="text-xs font-black tracking-widest uppercase bg-blue-50 text-[#0052ff] px-3.5 py-1.5 rounded-full border border-blue-100">
                    Service {service.number}
                  </span>
                  <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                    {service.subtitle}
                  </span>
                </div>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05]">
                  {service.title} & Squad Operations
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
                    Launch Ad Campaign
                  </MagneticButton>

                  <a
                    href="#roas-growth"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm tracking-wide transition-all"
                  >
                    <span>Inspect ROAS Curve</span>
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
                    <span>Average ROAS • 4.85x</span>
                  </div>

                  {/* High-Resolution Campaign Analytics Image */}
                  <img
                    src="/images/service-campaign-analytics.jpg"
                    alt="LynxMobi Campaign Analytics & ROAS Studio"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Glass Overlay on bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-blue-400">
                        In-House Studio
                      </div>
                      <div className="text-sm font-black">1,200+ Assets / Month</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                      24/7 Live Telemetry
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

      {/* 2. Interactive ROAS Curves & Creative Studio Section */}
      <section id="roas-growth" className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <SectionHeading
            tag="Attribution & Telemetry"
            title="Interactive ROAS Curves & Creative Lab"
            subtitle="Explore how compounding creative iteration and dedicated bilingual squads deliver 4.8x+ ROAS over 90-day expansion cycles."
          />

          <div className="mt-14">
            <CampaignManagementGraph />
          </div>
        </div>
      </section>

      {/* 3. Full-Cycle Execution Process */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Full-Cycle Execution"
            title="The End-to-End Campaign Lifecycle"
            subtitle="How we manage, optimize, and scale campaigns across mature and emerging markets worldwide."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {lifecycleStages.map((stage, idx) => (
              <RevealElement key={idx} animation="fade-up" delay={0.08 * idx}>
                <div className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-[#0052ff] transition-all flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black text-slate-200 group-hover:text-[#0052ff] transition-colors">
                        {stage.step}
                      </span>
                      <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center">
                        {stage.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#090a10] group-hover:text-[#0052ff] transition-colors leading-snug">
                      {stage.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-500 leading-relaxed">
                      {stage.description}
                    </p>
                  </div>
                </div>
              </RevealElement>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Specializations */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Core Specializations"
            title="Performance-Driven Campaign Capabilities"
            subtitle="Combining localized creative storytelling with algorithmic bid intelligence."
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

      {/* 5. Deliverables Section */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                tag="Integrated Growth"
                title="Dedicated Cross-Border Squad Architecture"
                subtitle="Senior media buyers, creative directors, and data scientists embedded directly into your expansion pipeline."
              />

              <div className="mt-8 p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="text-sm font-bold text-slate-900">24/7 Global Campaign Operations</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Our regional account managers operate across time zones in North America, Europe, Southeast Asia, and APAC to ensure uninterrupted optimization, policy adherence, and instant incident response.
                </p>
                <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                  {service.partners?.map((p, i) => (
                    <span
                      key={i}
                      className="text-xs font-bold text-slate-700 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                tag="Deliverables"
                title="Management Inclusions"
                subtitle="Everything required to launch, monitor, and scale international ad operations."
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
