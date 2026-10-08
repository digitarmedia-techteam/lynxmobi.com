"use client";

import React from "react";
import { Marquee } from "./Marquee";
import { RevealElement } from "./RevealElement";

// High-fidelity partner logo components matching the provided reference
export function PartnerIntegrations() {
  const topRowPartners = [
    {
      id: "appsflyer",
      name: "AppsFlyer",
      logo: (
        <div className="flex items-center gap-3">
          {/* AppsFlyer 4-diamond logo icon */}
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 4L25 11L18 18L11 11L18 4Z" fill="#00C48C" />
            <path d="M25 11L32 18L25 25L18 18L25 11Z" fill="#00A3FF" />
            <path d="M11 11L18 18L11 25L4 18L11 11Z" fill="#00C48C" />
            <path d="M18 18L25 25L18 32L11 25L18 18Z" fill="#00A3FF" />
          </svg>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#00A3FF]">
            Apps<span className="text-[#00C48C]">Flyer</span>
          </span>
        </div>
      ),
    },
    {
      id: "adjust",
      name: "ADJUST",
      logo: (
        <div className="flex items-center gap-3">
          {/* Adjust Ribbon A Logo */}
          <svg className="w-7 h-7 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 24L16 6L25 24H19.5L16 16.5L12.5 24H7Z"
              fill="#090A10"
            />
            <path
              d="M16 10L21 21H11L16 10Z"
              fill="#090A10"
              fillOpacity="0.15"
            />
            <circle cx="16" cy="19" r="2.5" fill="#090A10" />
          </svg>
          <span className="text-2xl sm:text-3xl font-black tracking-wider text-[#090A10]">
            ADJUST
          </span>
        </div>
      ),
    },
    {
      id: "branch",
      name: "branch",
      logo: (
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Tree Branch nodes */}
            <path d="M18 32V14M18 14L10 8M18 14L26 8M18 22L11 17M18 20L25 15" stroke="#475569" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="10" cy="8" r="3" fill="#00A3FF" />
            <circle cx="26" cy="8" r="3" fill="#00A3FF" />
            <circle cx="18" cy="6" r="3.5" fill="#3B82F6" />
            <circle cx="11" cy="17" r="2.5" fill="#60A5FA" />
            <circle cx="25" cy="15" r="2.5" fill="#60A5FA" />
          </svg>
          <span className="text-2xl sm:text-3xl font-normal tracking-tight text-[#334155] font-sans">
            branch
          </span>
        </div>
      ),
    },
    {
      id: "firebase",
      name: "Google Firebase",
      logo: (
        <div className="flex items-center gap-3">
          <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none">
            <path d="M4.5 18.5L8 3.5L12 9.5L4.5 18.5Z" fill="#FFA000" />
            <path d="M4.5 18.5L14 3.5L17.5 9L4.5 18.5Z" fill="#F57C00" />
            <path d="M19.5 18.5L12 9.5L4.5 18.5H19.5Z" fill="#FFCA28" />
          </svg>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1E293B]">
            Firebase
          </span>
        </div>
      ),
    },
    {
      id: "meta",
      name: "Meta Partner",
      logo: (
        <div className="flex items-center gap-3">
          <svg className="w-8 h-8 shrink-0 text-[#0081FB]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16.96 5.5c-1.84 0-3.32.96-4.96 3.03C10.36 6.46 8.88 5.5 7.04 5.5 3.75 5.5 1 8.35 1 12.02c0 4.19 3.09 7.48 6.94 7.48 2.05 0 3.75-1.07 5.06-2.93 1.31 1.86 3.01 2.93 5.06 2.93 3.85 0 6.94-3.29 6.94-7.48 0-3.67-2.75-6.52-6.04-6.52zm-9.92 11.5c-2.43 0-4.44-2.19-4.44-4.98 0-2.79 2.01-4.98 4.44-4.98 1.48 0 2.76.88 3.96 2.65-1.57 2.37-2.88 4.54-3.96 7.31zm9.92 0c-1.08-2.77-2.39-4.94-3.96-7.31 1.2-1.77 2.48-2.65 3.96-2.65 2.43 0 4.44 2.19 4.44 4.98 0 2.79-2.01 4.98-4.44 4.98z" />
          </svg>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0081FB]">
            Meta
          </span>
        </div>
      ),
    },
  ];

  const bottomRowPartners = [
    {
      id: "kochava",
      name: "KOCHAVA ★",
      logo: (
        <div className="flex items-center gap-2">
          <span className="text-2xl sm:text-3xl font-black tracking-widest text-[#090A10]">
            KOCHAVA
          </span>
          <span className="text-2xl sm:text-3xl text-[#E11D48] leading-none">
            ★
          </span>
        </div>
      ),
    },
    {
      id: "singular",
      name: "singular",
      logo: (
        <div className="flex items-center gap-3">
          {/* Singular swirl icon */}
          <svg className="w-8 h-8 shrink-0" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="14" stroke="#0075FF" strokeWidth="3" strokeDasharray="18 10" />
            <path
              d="M18 9C13.0294 9 9 13.0294 9 18C9 22.9706 13.0294 27 18 27C22.9706 27 27 22.9706 27 18"
              stroke="#0075FF"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
            <circle cx="18" cy="18" r="4" fill="#0075FF" />
          </svg>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0075FF] font-sans">
            singular
          </span>
        </div>
      ),
    },
    {
      id: "skadnetwork",
      name: "SKAdNetwork",
      logo: (
        <div className="flex items-center gap-2.5">
          {/* Apple Logo */}
          <svg className="w-7 h-7 shrink-0 fill-[#090A10]" viewBox="0 0 24 24">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.66-.82 1.11-1.96.99-3.1-.96.04-2.12.64-2.8 1.44-.6.69-1.12 1.84-0.98 2.95 1.07.08 2.14-.54 2.79-1.29z" />
          </svg>
          <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#090A10]">
            SKAdNetwork
          </span>
        </div>
      ),
    },
    {
      id: "applovin",
      name: "AppLovin",
      logo: (
        <div className="flex items-center gap-2.5">
          <svg className="w-7 h-7 shrink-0 text-[#0066FF]" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.3l7.5 4.1-3.2 1.8-7.5-4.1 3.2-1.8zm-8 6.1l7 3.8v7.4l-7-3.8V10.4zm9 11.2v-7.4l7-3.8v7.4l-7 3.8z" />
          </svg>
          <span className="text-2xl sm:text-3xl font-black tracking-tight text-[#0F172A]">
            AppLovin
          </span>
        </div>
      ),
    },
    {
      id: "unity",
      name: "Unity Ads",
      logo: (
        <div className="flex items-center gap-3">
          <svg className="w-7 h-7 shrink-0 fill-[#090A10]" viewBox="0 0 24 24">
            <path d="M10.77 2.05l-8.7 5.03v10.05l8.7 5.03 8.7-5.03V7.08l-8.7-5.03zm6.65 13.91l-6.65 3.84-6.65-3.84V8.42l6.65-3.84 6.65 3.84v7.54z" />
          </svg>
          <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#090A10]">
            Unity<span className="font-light text-slate-500 ml-1">Ads</span>
          </span>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-slate-100 overflow-hidden select-none">
      <div className="container-editorial mb-12 sm:mb-16">
        <RevealElement animation="fade-up">
          <div className="text-center flex flex-col items-center">
            {/* Header: INTEGRATIONS WITH PARTNERS */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-wider text-[#0052FF]">
              INTEGRATIONS WITH PARTNERS
            </h2>

            {/* Vibrant Green Accent Line directly below the header */}
            <div className="w-16 h-1.5 sm:w-20 sm:h-2 rounded-full bg-[#00BB1F] mt-4 shadow-sm shadow-emerald-400/30" />
          </div>
        </RevealElement>
      </div>

      {/* Ticker Rows Container */}
      <div className="space-y-8 sm:space-y-10">
        {/* UPPER ROW: Moves to LEFT automatically */}
        <div className="relative py-2">
          <Marquee
            direction="left"
            speed={28}
            pauseOnHover={true}
            fadeEdges={true}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-12 sm:gap-16 px-4">
              {topRowPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="px-8 py-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[220px] sm:min-w-[260px] cursor-pointer"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </Marquee>
        </div>

        {/* LOWER ROW: Moves to RIGHT automatically */}
        <div className="relative py-2">
          <Marquee
            direction="right"
            speed={28}
            pauseOnHover={true}
            fadeEdges={true}
            className="overflow-hidden"
          >
            <div className="flex items-center gap-12 sm:gap-16 px-4">
              {bottomRowPartners.map((partner) => (
                <div
                  key={partner.id}
                  className="px-8 py-5 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg hover:border-blue-400 hover:scale-105 transition-all duration-300 flex items-center justify-center min-w-[220px] sm:min-w-[260px] cursor-pointer"
                >
                  {partner.logo}
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}
