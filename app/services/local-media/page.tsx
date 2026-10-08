"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, ChevronLeft } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactCTA } from "@/components/ContactCTA";
import { servicesData } from "@/data/services";

export default function LocalMediaServicePage() {
  const service = servicesData.find((s) => s.slug === "local-media")!;

  return (
    <PageTransition>
      {/* Service Hero */}
      <section className="py-20 sm:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#0052ff] hover:underline mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to All Services
          </Link>

          <RevealElement animation="fade-up">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-black tracking-widest uppercase bg-blue-50 text-[#0052ff] px-3 py-1 rounded-full border border-blue-100">
                Service {service.number}
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-500">
                {service.subtitle}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05] max-w-5xl">
              {service.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              {service.heroDescription}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <MagneticButton
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowUpRight className="w-5 h-5" />}
              >
                Inquire About Local Media
              </MagneticButton>
            </div>
          </RevealElement>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-16 pt-10 border-t border-slate-200">
            {service.keyStats.map((stat, i) => (
              <div key={i}>
                <div className="text-3xl sm:text-4xl font-black text-[#0052ff]">{stat.value}</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <SectionHeading
            tag="Core Offerings"
            title="Strategic Local Media Buying Capabilities"
            subtitle="Precision targeting and customized media distribution across global and regional dominance networks."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0052ff] transition-colors"
              >
                <div className="text-xs font-black text-[#0052ff] uppercase tracking-widest mb-3">
                  / 0{i + 1} CAPABILITY
                </div>
                <h3 className="text-2xl font-bold text-[#090a10]">{cap.title}</h3>
                <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certified Partners & Deliverables */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading
                tag="Authorized Networks"
                title="Premier Certified Partners"
                subtitle="Direct API access, policy whitelisting, and priority beta access across all major ad platforms."
              />

              <div className="flex flex-wrap gap-3 mt-8">
                {service.partners?.map((p, i) => (
                  <span
                    key={i}
                    className="text-sm font-bold text-slate-800 bg-white px-4 py-2.5 rounded-full border border-slate-200/90 shadow-xs"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading
                tag="What We Deliver"
                title="End-to-End Campaign Deliverables"
                subtitle="Full transparency, meticulous reporting, and ongoing creative iteration."
              />

              <div className="space-y-4 mt-8">
                {service.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200/90">
                    <CheckCircle className="w-5 h-5 text-[#0052ff] shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
