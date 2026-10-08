"use client";

import React from "react";
import { RevealElement } from "./RevealElement";

export function AdvertisersSection() {
  const cards = [
    {
      id: "academic-excellence",
      title: "ACADEMIC EXCELLENCE",
      description:
        "We directly cooperate with the world's leading application developers, mobile websites and advertising trading platform",
    },
    {
      id: "reach-global",
      title: "REACH GLOBAL MOBILE DEVICES",
      description:
        "We can scale performance efficiently leveraging our massive daily reach through mobile apps and leading sites.",
    },
    {
      id: "auto-optimization",
      title: "AUTO-\nOPTIMIZATION",
      description:
        "Our machine learning-based platform dynamically modifies bids based on over 50 different attributes, optimizing for installs and LTV, not clicks.",
    },
    {
      id: "quality-transparency",
      title: "QUALITY & TRANSPARENCY",
      description:
        "We work with all leading anti-fraud, IVT, and viewability partners across the ecosystem to ensure media quality and brand safety.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#0052FF] py-20 sm:py-28 lg:py-32 select-none">
      {/* Background Image Texture with subtle overlay matching reference */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/service-map-holding.jpg"
          alt="Advertisers background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0052FF]/95 via-[#0047E0]/90 to-[#0052FF]/95" />
      </div>

      <div className="container-editorial relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: 2x2 White Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {cards.map((card, idx) => (
              <RevealElement
                key={card.id}
                animation="fade-up"
                delay={0.1 * idx}
                className="h-full"
              >
                <div className="h-full bg-white rounded-2xl p-6 sm:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start">
                  {/* Card Title in Cobalt Blue */}
                  <h3 className="text-base sm:text-lg font-black tracking-wider text-[#0052FF] uppercase whitespace-pre-line leading-tight">
                    {card.title}
                  </h3>

                  {/* Vibrant Green Accent Line */}
                  <div className="w-8 h-1 rounded-full bg-[#00BB1F] mt-3 mb-4 shrink-0" />

                  {/* Description Text */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>
              </RevealElement>
            ))}
          </div>

          {/* Right Column: "FOR ADVERTISERS" & Narrative + Green Accent Bar */}
          <div className="lg:col-span-5 relative flex items-center justify-between">
            <RevealElement animation="fade-up" delay={0.2} className="max-w-xl">
              <div>
                {/* Bold Header */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-wider uppercase leading-tight">
                  FOR ADVERTISERS
                </h2>

                {/* Horizontal Green Line below title */}
                <div className="w-12 h-1 rounded-full bg-[#00BB1F] mt-4 mb-6" />

                {/* Body Copy */}
                <p className="text-white/90 text-sm sm:text-base leading-relaxed font-normal">
                  Lynxmobi is committed as a global intelligent data-driven marketing service profession to provide results-driven services included performance marketing and industrial solutions integrating. We are dedicated to support enterprises in user growth, brand awareness and commercial monetization fields within the world.
                </p>
              </div>
            </RevealElement>

            {/* Vertical Green Accent Line on Far Right (matching reference image) */}
            <div className="hidden xl:block ml-8 shrink-0">
              <div className="w-1 h-36 rounded-full bg-[#00BB1F] shadow-sm shadow-emerald-400/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
