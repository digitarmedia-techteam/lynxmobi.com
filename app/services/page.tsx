"use client";

import React from "react";
import { PageTransition } from "@/components/PageTransition";
import { ServiceGrid } from "@/components/ServiceGrid";
import { RevealElement } from "@/components/RevealElement";
import { ContactCTA } from "@/components/ContactCTA";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  const advantages = [
    {
      title: "Direct Tier-1 Partnerships",
      description:
        "Official partner status with Google, Meta, TikTok, Apple Search Ads, and Amazon Ads guaranteeing priority support and direct API optimization.",
    },
    {
      title: "Native Creative Studios",
      description:
        "Dedicated in-house 3D playable ad production, localized native copywriters, and video teams producing 1,200+ high-converting assets per month.",
    },
    {
      title: "Proprietary AI AdTech Stack",
      description:
        "LynxPulse DSP and predictive real-time bidding algorithms processing 10B+ daily ad auctions with sub-15ms execution latency.",
    },
    {
      title: "Transparent Attribution & Anti-Fraud",
      description:
        "Zero hidden markups, comprehensive MMP attribution audits (AppsFlyer, Adjust, Singular), and proprietary fraud shields.",
    },
  ];

  return (
    <PageTransition>
      {/* Services Hero */}
      <section className="py-20 sm:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          <RevealElement animation="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[#0052ff] border border-blue-100">
              Services & Capabilities
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05] max-w-5xl">
              7x24 Online Service. <br />
              Empathizing With Your Business Needs.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              We provide end-to-end digital marketing and AdTech solutions spanning tech-driven programmatic marketing, high-impact Connected TV (CTV) advertising, and full-cycle campaign management.
            </p>
          </RevealElement>
        </div>
      </section>

      {/* Services Grid */}
      <ServiceGrid showHeading={false} className="py-12" />

      {/* Why Lynxmobi Advantages */}
      <section className="py-20 sm:py-28 bg-slate-50 border-y border-slate-200">
        <div className="container-editorial">
          <SectionHeading
            tag="The Lynxmobi Advantage"
            title="Engineered for Scalable ROAS and Cultural Resonance"
            subtitle="How our technical infrastructure and localized teams outperform traditional agencies."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {advantages.map((adv, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex items-start gap-5"
              >
                <div className="w-10 h-10 rounded-full bg-blue-50 text-[#0052ff] flex items-center justify-center shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#090a10]">{adv.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </PageTransition>
  );
}
