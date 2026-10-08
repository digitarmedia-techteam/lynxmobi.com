"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudiesData } from "@/data/work";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";

interface WorkShowcaseProps {
  className?: string;
}

export function WorkShowcase({ className }: WorkShowcaseProps) {
  const [activeId, setActiveId] = useState(caseStudiesData[0].id);
  const activeCase = caseStudiesData.find((c) => c.id === activeId) || caseStudiesData[0];

  return (
    <section className={cn("py-20 sm:py-28 lg:py-36 bg-[#090a10] text-white overflow-hidden", className)}>
      <div className="container-editorial">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <SectionHeading
            theme="dark"
            tag="Selected Case Studies"
            title={
              <>
                Proven Global <br className="hidden sm:inline" />
                Performance at Scale
              </>
            }
            subtitle="Explore how our integrated media buying, creator networks, and algorithmic bidding deliver unprecedented international growth."
          />
          <MagneticButton
            href="/work"
            variant="outline"
            className="text-white border-white/20 hover:border-white hover:text-white hover:bg-white/10"
            icon={<ArrowUpRight className="w-4 h-4" />}
          >
            Explore all our work
          </MagneticButton>
        </div>

        {/* Interactive Editorial Showcase Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Client List Navigator */}
          <div className="lg:col-span-5 flex flex-col space-y-2">
            {caseStudiesData.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  onMouseEnter={() => setActiveId(item.id)}
                  className={cn(
                    "group text-left p-5 sm:p-6 rounded-2xl transition-all duration-300 relative flex items-center justify-between border cursor-pointer",
                    isActive
                      ? "bg-white/10 border-[#0052ff] shadow-xl shadow-blue-500/10"
                      : "bg-white/3 border-white/5 hover:bg-white/6 hover:border-white/15"
                  )}
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                        {item.client}
                      </span>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/10 text-slate-300">
                        {item.industry}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                      {item.title}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-colors shrink-0",
                      isActive
                        ? "bg-[#0052ff] text-white"
                        : "bg-white/10 text-slate-400 group-hover:text-white"
                    )}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Active Case Study Deep-Dive Card */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-3xl bg-slate-900/90 border border-white/10 p-8 sm:p-12 relative overflow-hidden flex flex-col justify-between min-h-[460px]"
              >
                {/* Cobalt Glow Backdrop */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#0052ff]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-[#0052ff] bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full">
                      {activeCase.industry} • {activeCase.year}
                    </span>
                    <div className="flex gap-2">
                      {activeCase.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                    {activeCase.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                    {activeCase.subtitle}
                  </p>

                  <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-1">
                      Execution Strategy
                    </p>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeCase.solution}
                    </p>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {activeCase.results.map((res, i) => (
                      <div key={i} className="flex flex-col">
                        <span className="text-2xl sm:text-3xl font-black text-[#0052ff]">
                          {res.value}
                        </span>
                        <span className="text-xs text-slate-400 font-medium mt-1 leading-snug">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex justify-end">
                    <Link
                      href="/work"
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-400 hover:text-white transition-colors"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
