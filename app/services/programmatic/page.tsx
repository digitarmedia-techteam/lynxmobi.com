"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle,
  ChevronLeft,
  Cpu,
} from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactCTA } from "@/components/ContactCTA";
import { ProgrammaticGraph } from "@/components/ProgrammaticGraph";
import { servicesData } from "@/data/services";

export default function ProgrammaticServicePage() {
  const service = servicesData.find((s) => s.slug === "programmatic")!;

  return (
    <PageTransition>
      {/* 1. Service Hero with Visual Asset & Telemetry Highlights */}
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
                  {service.title}
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
                    Inquire About Programmatic DSP
                  </MagneticButton>

                  <a
                    href="#rtb-telemetry"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 font-semibold text-sm tracking-wide transition-all"
                  >
                    <span>View RTB Telemetry</span>
                  </a>
                </div>
              </RevealElement>
            </div>

            {/* Right Column: High-Impact Visual Asset Card */}
            <div className="lg:col-span-5">
              <RevealElement animation="fade-up" delay={0.15}>
                <div className="relative group rounded-3xl overflow-hidden shadow-2xl border border-slate-800 bg-[#090a10]">
                  {/* Floating Telemetry Pill */}
                  <div className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white text-xs font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DSP RTB Engine • 12.8ms</span>
                  </div>

                  {/* High-Resolution Dashboard Mockup Image */}
                  <img
                    src="/images/service-programmatic-dashboard.jpg"
                    alt="LynxPulse Programmatic DSP Telemetry Dashboard"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Glass Overlay on bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-center justify-between text-white">
                    <div>
                      <div className="text-xs uppercase font-bold tracking-wider text-blue-400">
                        LynxPulse Engine
                      </div>
                      <div className="text-sm font-black">10B+ Daily RTB Auctions</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                      99.4% IVT Safe
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

      {/* 2. Interactive RTB Graphs & Telemetry Simulator Section */}
      <section id="rtb-telemetry" className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <SectionHeading
            tag="Real-Time Telemetry"
            title="Interactive Bid-Stream & Yield Simulator"
            subtitle="Explore sub-15ms auction pacing, predictive bid shaping, and dynamic eCPM clearing across global industry verticals."
          />

          <div className="mt-14">
            <ProgrammaticGraph />
          </div>
        </div>
      </section>

      {/* 3. Core Algorithmic Capabilities */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="Algorithmic Infrastructure"
            title="Next-Generation Programmatic DSP"
            subtitle="Real-time predictive bidding engines connected to global ad exchanges."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {service.capabilities.map((cap, i) => (
              <RevealElement key={i} animation="fade-up" delay={0.08 * i}>
                <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 hover:border-[#0052ff] hover:shadow-xl transition-all h-full group">
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

      {/* 4. Ad Exchanges & Deliverables */}
      <section className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <SectionHeading
                tag="Direct Integrations"
                title="Global Ad Exchanges & SSPs"
                subtitle="High-throughput direct server-to-server SSP connections ensuring zero intermediaries."
              />

              <div className="flex flex-wrap gap-3 mt-8">
                {service.partners?.map((p, i) => (
                  <span
                    key={i}
                    className="text-sm font-bold text-slate-800 bg-slate-50 px-4 py-2.5 rounded-full border border-slate-200 hover:border-[#0052ff] hover:bg-white transition-all shadow-xs"
                  >
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-6 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0052ff] text-white flex items-center justify-center shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Direct S2S OpenRTB 3.0 Standard</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Sub-millisecond protocol buffers with automated gzip compression.
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                tag="Deliverables"
                title="Programmatic Campaign Operations"
                subtitle="Automated optimization, predictive audience discovery, and transparent attribution."
              />

              <div className="space-y-4 mt-8">
                {service.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50 border border-slate-200/90 hover:bg-white hover:border-[#0052ff] transition-all"
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

      {/* 5. Contact CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
