"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { SectionHeading } from "@/components/SectionHeading";
import { RevealElement } from "@/components/RevealElement";
import { ContactCTA } from "@/components/ContactCTA";
import { caseStudiesData } from "@/data/work";

export default function WorkPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", "Gaming", "Consumer Tech", "E-Commerce", "FinTech"];

  const filteredCases =
    selectedIndustry === "All"
      ? caseStudiesData
      : caseStudiesData.filter((c) => c.industry === selectedIndustry);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 sm:py-28 bg-white bg-tech-grid border-b border-slate-200">
        <div className="container-editorial">
          <RevealElement animation="fade-up">
            <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase bg-blue-50 text-[#0052ff] border border-blue-100">
              Portfolio & Impact
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#090a10] tracking-tight leading-[1.05] max-w-5xl">
              Here&apos;s Some Work We Are Super Proud Of.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed">
              Explore how we help global gaming titles, leading DTC hardware manufacturers, and fast-scaling digital brands capture high-LTV users worldwide.
            </p>
          </RevealElement>

          {/* Filter Pills */}
          <div className="mt-12 flex flex-wrap gap-2 pt-6 border-t border-slate-200">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => setSelectedIndustry(ind)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedIndustry === ind
                    ? "bg-[#0052ff] text-white shadow-md shadow-blue-500/25"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="container-editorial">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {filteredCases.map((item) => (
              <div
                key={item.id}
                className="group flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-[#0052ff] hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-black uppercase tracking-widest text-[#0052ff] bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                      {item.client}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.industry} • {item.year}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] tracking-tight group-hover:text-[#0052ff] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.subtitle}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-semibold text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/70">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
                    {item.results.slice(0, 3).map((r, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-xl sm:text-2xl font-black text-[#0052ff]">
                          {r.value}
                        </span>
                        <span className="text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                          {r.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#0052ff]">
                    <span>Verified Campaign Results</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
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
