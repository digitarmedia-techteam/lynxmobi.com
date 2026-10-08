"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { RevealElement } from "./RevealElement";

export function PublishersSection() {
  const publisherCards = [
    {
      id: "direct-demands",
      title: "DIRECT DEMANDS",
      description:
        "Global direct advertisers and well-known ad networks that meet the needs of various types of mobile traffic.",
    },
    {
      id: "in-app-bidding",
      title: "IN-APP BIDDING",
      description:
        "Our in-app bidding technology and LAT estimation capability can help you maximize the value of every ad unit.",
    },
    {
      id: "quality-ad-content",
      title: "QUALITY AD CONTENT",
      description:
        "Our optimization strategies are based on comprehensive data analytics and multi-dimensional user tags delivering quality ad content tailored to your users.",
    },
    {
      id: "achieve-higher-revenue",
      title: "ACHIEVE HIGHER REVENUE",
      description:
        "Earn and grow with our monetization platform. Easily create, manage, analyze and optimize your campaigns, including transparent, visualized data to achieve higher revenue goals",
    },
    {
      id: "impactful-ad-formats",
      title: "IMPACTFUL AD FORMATS",
      description:
        "Interactive Ads/ Rewarded Videos/ Native Ads/ Banner Ads/ Splash Ads",
    },
    {
      id: "analytics-insights",
      title: "ANALYTICS AND INSIGHTS",
      description:
        "Monitor the performance of each offer in real-time with dashboards and feedback to publishers in time",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#14C371] via-[#0EB363] to-[#08964F] py-20 sm:py-28 lg:py-32 select-none">
      {/* Subtle organic light reflections in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-emerald-300/30 blur-3xl" />
      </div>

      <div className="container-editorial relative z-10">
        {/* Header: FOR PUBLISHERS & Subtitle */}
        <RevealElement animation="fade-up">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-widest uppercase">
              FOR PUBLISHERS
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base font-bold text-white/95 tracking-wider uppercase">
              AD MONETIZATION AND GROWTH FOR YOUR REVENUE
            </p>
          </div>
        </RevealElement>

        {/* 3x2 White Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {publisherCards.map((card, idx) => (
            <RevealElement
              key={card.id}
              animation="fade-up"
              delay={0.08 * idx}
              className="h-full"
            >
              <div className="h-full bg-white rounded-2xl p-7 sm:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-start">
                {/* Title in Cobalt Blue */}
                <h3 className="text-base sm:text-lg font-black tracking-wider text-[#0052FF] uppercase leading-snug">
                  {card.title}
                </h3>

                {/* Vibrant Green Accent Line */}
                <div className="w-8 h-1 rounded-full bg-[#00BB1F] mt-2.5 mb-4 shrink-0" />

                {/* Description Body */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>
            </RevealElement>
          ))}
        </div>

        {/* Center CTA Button: START > */}
        <RevealElement animation="fade-up" delay={0.4}>
          <div className="mt-12 sm:mt-14 flex justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0040CC] text-white font-extrabold text-sm tracking-widest uppercase shadow-xl shadow-emerald-950/20 hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span>START</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[3]" />
            </Link>
          </div>
        </RevealElement>
      </div>
    </section>
  );
}
