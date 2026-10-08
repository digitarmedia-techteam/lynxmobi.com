"use client";

import React from "react";
import { ArrowUpRight, Globe, Building2 } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { MagneticButton } from "@/components/MagneticButton";
import { ContactCTA } from "@/components/ContactCTA";
import { companyData } from "@/data/company";
import { navigationConfig } from "@/data/navigation";

export default function AboutPage() {
  return (
    <PageTransition>
      {/* Editorial Hero */}
      <section className="py-20 sm:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          <RevealElement animation="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[#0052ff] border border-blue-100">
              <Globe className="w-3.5 h-3.5" />
              About Lynxmobi
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05] max-w-5xl">
              Architecting Global Growth for the World&apos;s Most Ambitious Brands.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              {companyData.mission}
            </p>
          </RevealElement>

          <RevealElement animation="fade-up" delay={0.2} className="mt-12">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-10 border-t border-slate-200">
              {companyData.stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl sm:text-4xl font-black text-[#0052ff]">{stat.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-700 mt-1 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </RevealElement>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <SectionHeading
            tag="Core Philosophy"
            title="Values That Drive Every Campaign"
            subtitle="Our four foundational pillars that guarantee exceptional execution and long-term client trust."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {companyData.values.map((v, i) => (
              <div
                key={i}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#0052ff] hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="text-xs font-black tracking-widest text-[#0052ff] uppercase mb-4">
                  / 0{i + 1}
                </div>
                <h3 className="text-2xl font-black text-[#090a10]">{v.title}</h3>
                <p className="text-xs uppercase font-semibold text-blue-600 tracking-wider mt-1 mb-4">
                  {v.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Hubs */}
      <section className="py-20 sm:py-28 bg-slate-50 border-t border-slate-200">
        <div className="container-editorial">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              tag="Worldwide Footprint"
              title="Native Presence Across 10 Key Global Tech Hubs"
              subtitle="Embedded in the world's most vibrant digital capitals to provide localized insights around the clock."
            />
            <MagneticButton href="/contact" variant="primary" icon={<ArrowUpRight className="w-4 h-4" />}>
              Connect With Local Hub
            </MagneticButton>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {navigationConfig.branches.map((b, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <Building2 className="w-5 h-5 text-[#0052ff] mb-4" />
                <div>
                  <h4 className="text-lg font-bold text-[#090a10]">{b.city}</h4>
                  <p className="text-xs uppercase tracking-wider text-slate-500 font-medium mt-1">
                    {b.country}
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
