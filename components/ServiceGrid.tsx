"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { RevealElement } from "./RevealElement";
import { cn } from "@/lib/utils";

interface ServiceGridProps {
  className?: string;
  showHeading?: boolean;
}

export function ServiceGrid({ className, showHeading = true }: ServiceGridProps) {
  // Solutions showcased on homepage:
  // 1. Programmatic Advertising
  // 2. Connected TV (CTV)
  // 3. Campaign Management
  const solutions = [
    {
      id: "programmatic",
      title: "Programmatic Advertising",
      description:
        "Tech-driven and performance-oriented, with high-quality targeting for accurate user acquisition",
      href: "/services/programmatic",
      tags: ["AI-Powered DSP", "Sub-15ms Latency", "Automated RTB"],
      accentColor: "#FF5E14",
      // Minimalist & Premium Asset 1: Pure Geometric Precision Aperture (Orange & Peach Theme)
      artwork: (
        <svg
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform translate-x-2 -translate-y-2 sm:translate-x-0 sm:translate-y-0"
        >
          <defs>
            <linearGradient id="minProgGrad1" x1="20" y1="20" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7A00" />
              <stop offset="100%" stopColor="#FF3D00" />
            </linearGradient>
            <linearGradient id="minProgGrad2" x1="60" y1="40" x2="180" y2="160" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FED7AA" />
              <stop offset="100%" stopColor="#FB923C" />
            </linearGradient>
          </defs>

          {/* Outer Minimalist Precision Arc */}
          <path
            d="M195 110C195 63.0558 156.944 25 110 25C63.0558 25 25 63.0558 25 110C25 156.944 63.0558 195 110 195"
            stroke="url(#minProgGrad1)"
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Inner Refined Concentric Arc */}
          <path
            d="M165 110C165 79.6243 140.376 55 110 55C79.6243 55 55 79.6243 55 110"
            stroke="url(#minProgGrad2)"
            strokeWidth="18"
            strokeLinecap="round"
          />

          {/* Pure Geometric Focus Core */}
          <circle cx="110" cy="110" r="18" fill="url(#minProgGrad1)" />
          <circle cx="110" cy="110" r="8" fill="white" />
        </svg>
      ),
    },
    {
      id: "ctv",
      title: "Connected TV (CTV)",
      description:
        "Maximize Your Reach, Amplify Your Impact with high-impact streaming and smart TV programmatic advertising across premier living-room environments.",
      href: "/services/ctv",
      tags: ["Living-Room Immersion", "98.4% Completion Rate", "Cross-Device Reach"],
      accentColor: "#8B5CF6",
      // Minimalist & Premium Asset 2: Connected Smart TV Display Waves & Broadcast Radar (Violet & Indigo Theme)
      artwork: (
        <svg
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform translate-x-2 -translate-y-2 sm:translate-x-0 sm:translate-y-0"
        >
          <defs>
            <linearGradient id="ctvGrad1" x1="20" y1="20" x2="200" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
            <linearGradient id="ctvGrad2" x1="40" y1="40" x2="180" y2="180" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#C4B5FD" />
              <stop offset="100%" stopColor="#818CF8" />
            </linearGradient>
          </defs>

          {/* Sleek Modern TV Frame */}
          <rect
            x="24"
            y="35"
            width="172"
            height="115"
            rx="14"
            stroke="url(#ctvGrad1)"
            strokeWidth="16"
            strokeLinecap="round"
          />

          {/* Connected Living Room Screen Beam / Wave */}
          <path
            d="M50 92.5C70 75 100 110 130 92.5C145 83.75 160 88 170 92.5"
            stroke="url(#ctvGrad2)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Smart Stand Foundation */}
          <path
            d="M85 168H135M110 150V168"
            stroke="url(#ctvGrad1)"
            strokeWidth="12"
            strokeLinecap="round"
          />

          {/* Glowing Broadcast Signal Pulse */}
          <circle cx="110" cy="92.5" r="14" fill="url(#ctvGrad1)" />
          <circle cx="110" cy="92.5" r="6" fill="white" />
        </svg>
      ),
    },
    {
      id: "campaign-management",
      title: "Campaign Management",
      description:
        "Full-cycle ad campaign management with data-driven strategies for scalable growth",
      href: "/services/campaign-management",
      tags: ["Full-Cycle Management", "Data-Driven Strategy", "Scalable Growth"],
      accentColor: "#0084FF",
      // Minimalist & Premium Asset 3: Clean Isometric Architectural Growth Prisms (Cobalt & Cyan Theme)
      artwork: (
        <svg
          viewBox="0 0 220 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full transform translate-x-2 -translate-y-2 sm:translate-x-0 sm:translate-y-0"
        >
          {/* Top Tier: Apex Growth Cube */}
          <g transform="translate(115, 20)">
            <path d="M40 0L78 22L38 44L0 22Z" fill="#38BDF8" />
            <path d="M0 22L38 44V88L0 66Z" fill="#0284C7" />
            <path d="M38 44L78 22V66L38 88Z" fill="#0052FF" />
          </g>

          {/* Middle Tier: Expansion Cube */}
          <g transform="translate(68, 75)">
            <path d="M32 0L62 17L30 34L0 17Z" fill="#7DD3FC" />
            <path d="M0 17L30 34V68L0 51Z" fill="#38BDF8" />
            <path d="M30 34L62 17V51L30 68Z" fill="#0284C7" />
          </g>

          {/* Base Tier: Foundation Cube */}
          <g transform="translate(30, 128)">
            <path d="M24 0L46 13L22 26L0 13Z" fill="#BAE6FD" />
            <path d="M0 13L22 26V52L0 39Z" fill="#7DD3FC" />
            <path d="M22 26L46 13V39L22 52Z" fill="#38BDF8" />
          </g>
        </svg>
      ),
    },
  ];

  return (
    <section className={cn("py-20 sm:py-28 lg:py-32 bg-[#F9FBFC] relative overflow-hidden select-none", className)}>
      {/* Subtle geometric facet shadows in background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Section Heading: SOLUTIONS */}
        {showHeading && (
          <RevealElement animation="fade-up">
            <div className="text-center mb-14 sm:mb-20">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#090A10] tracking-widest uppercase">
                SOLUTIONS
              </h2>
              <div className="w-12 h-1 rounded-full bg-[#0052FF] mx-auto mt-4" />
            </div>
          </RevealElement>
        )}

        {/* Vertical Stacked Cards:
            1. Programmatic Advertising
            2. Campaign Management */}
        <div className="space-y-8 sm:space-y-10 max-w-5xl mx-auto">
          {solutions.map((item, idx) => (
            <RevealElement
              key={item.id}
              animation="fade-up"
              delay={0.12 * idx}
            >
              <div className="group relative bg-white rounded-3xl p-8 sm:p-12 lg:p-14 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-slate-300 transition-all duration-500 overflow-hidden hover:-translate-y-1">
                {/* Minimalist Geometric Vector Artwork in Top Right Corner */}
                <div className="absolute top-0 right-0 w-36 h-36 sm:w-52 sm:h-52 lg:w-60 lg:h-60 pointer-events-none transition-transform duration-700 group-hover:scale-105">
                  {item.artwork}
                </div>

                {/* Card Content (Left / Foreground) */}
                <div className="relative z-10 max-w-xl sm:max-w-2xl pr-12 sm:pr-0">
                  {/* Title */}
                  <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#090A10] tracking-tight leading-[1.1] mb-4 sm:mb-6 group-hover:text-[#0052FF] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal mb-8">
                    {item.description}
                  </p>

                  {/* Feature Tags & Learn More Button */}
                  <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-4 border-t border-slate-100">
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200/70 text-slate-700 text-xs font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={item.href}
                      className="ml-auto inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#090A10] group-hover:text-[#0052FF] transition-colors pt-2 sm:pt-0"
                    >
                      <span>Explore service</span>
                      <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-[#0052FF] group-hover:text-white flex items-center justify-center transition-all">
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </RevealElement>
          ))}
        </div>
      </div>
    </section>
  );
}
