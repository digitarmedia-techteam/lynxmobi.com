"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";
interface PlatformShare {
  name: string;
  share: number;
  cpa: string;
  color: string;
  reach: string;
}

const onboardingSteps = [
  {
    step: "01",
    phase: "Hours 00 – 02",
    title: "KYC & Creative Pre-Screen",
    desc: "In-house policy auditors review app package, privacy URLs, and creative hooks to eliminate compliance rejection risks.",
    deliverable: "Risk Assessment Clearance Certificate",
  },
  {
    step: "02",
    phase: "Hours 02 – 06",
    title: "Multi-Currency Credit Line",
    desc: "Seamless setup of flexible corporate credit lines supporting USD, EUR, SGD, HKD with single consolidated monthly invoicing.",
    deliverable: "Zero Pre-Fund Deposit Lock",
  },
  {
    step: "03",
    phase: "Hours 06 – 18",
    title: "Direct Agency Whitelisting",
    desc: "Direct submission through LynxMobi's tier-1 agency consoles on Google Premier, Meta, and TikTok bypassing general queues.",
    deliverable: "Elevated Daily Spend Limit ($50K+ Day 1)",
  },
  {
    step: "04",
    phase: "Hours 18 – 24",
    title: "Live Handover & 24/7 Slack Squad",
    desc: "Credentials provisioned, tracking pixels verified, and dedicated bilingual partner managers on standby in private channels.",
    deliverable: "Full Account Ownership & 99.8% Uptime",
  },
];

export function GlobalMediaGraph() {
  const [activeBudgetTier, setActiveBudgetTier] = useState<number>(50000);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  // Platform allocation distribution based on budget tier
  const platforms: PlatformShare[] = [
    { name: "Google Premier", share: 30, cpa: "$2.15", color: "#4285F4", reach: "2.8M" },
    { name: "Meta Business", share: 25, cpa: "$1.95", color: "#0081FB", reach: "2.4M" },
    { name: "TikTok for Business", share: 22, cpa: "$1.35", color: "#FE2C55", reach: "3.1M" },
    { name: "Apple Search Ads", share: 11, cpa: "$3.40", color: "#000000", reach: "850K" },
    { name: "Alternative OEM & DSP", share: 12, cpa: "$0.95", color: "#0052FF", reach: "1.9M" },
  ];

  const estimatedInstalls = Math.round((activeBudgetTier / 1.75) * 1.15).toLocaleString();
  const estimatedImpressions = (activeBudgetTier * 140).toLocaleString();

  return (
    <div className="w-full space-y-10">
      {/* 1. Omnichannel Media Budget Allocator Deck */}
      <div className="rounded-3xl bg-[#090a10] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Glowing background lights */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Portfolio Simulator
              </span>
              <span className="text-xs font-mono text-slate-400">
                Coverage: <span className="text-white font-semibold">200+ Global Regions</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-3">
              Omnichannel Global Media Allocator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Simulate blended cross-network acquisition output across Google, Meta, TikTok, Apple, and alternative media pipelines.
            </p>
          </div>

          {/* Budget Presets */}
          <div className="flex items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {[20000, 50000, 100000, 250000].map((tier) => (
              <button
                key={tier}
                type="button"
                onClick={() => setActiveBudgetTier(tier)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeBudgetTier === tier
                    ? "bg-[#0052FF] text-white shadow-md shadow-blue-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                ${tier >= 1000 ? `${tier / 1000}k` : tier}
              </button>
            ))}
          </div>
        </div>

        {/* Simulated Output Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 border-b border-white/10 relative z-10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Selected Monthly Spend</div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">
              ${activeBudgetTier.toLocaleString()}
            </div>
            <div className="text-[11px] text-slate-400 font-semibold mt-1">Single Monthly Invoice</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Projected High-LTV Installs</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-400 mt-1">{estimatedInstalls}</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +32% vs Single-Channel
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Total Ad Impressions</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 mt-1">{estimatedImpressions}</div>
            <div className="text-[11px] text-slate-400 font-semibold mt-1">Global Tier-1 & Tier-2 Reach</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Blended Target CPA</div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">$1.68</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1">Cross-Platform Synergies</div>
          </div>
        </div>

        {/* Multi-Platform Horizontal Distribution Graph */}
        <div className="pt-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Optimal Budget Allocation Ratio
            </span>
            <span className="text-xs font-mono text-slate-400">Algorithmic Balance</span>
          </div>

          {/* Stacked Percentage Bar */}
          <div className="w-full h-8 rounded-xl overflow-hidden flex bg-white/10 p-1 border border-white/10 gap-1">
            {platforms.map((plat, i) => (
              <motion.div
                key={plat.name}
                initial={{ width: 0 }}
                animate={{ width: `${plat.share}%` }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                style={{ backgroundColor: plat.color }}
                className="h-full rounded-lg relative group cursor-pointer flex items-center justify-center overflow-hidden"
              >
                <span className="text-[11px] font-bold text-white tracking-wider px-1 truncate">
                  {plat.share}%
                </span>
              </motion.div>
            ))}
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mt-4">
            {platforms.map((plat) => (
              <div
                key={plat.name}
                className="p-3 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2.5"
              >
                <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: plat.color }} />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-white truncate">{plat.name}</div>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {plat.share}% • Avg CPA {plat.cpa}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Interactive 24-Hour VIP Onboarding Pipeline */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
            / VIP Account Architecture
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100/80 text-[#0052FF]">
            <Clock className="w-3.5 h-3.5" /> Guaranteed 24-Hour SLA
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#090a10] tracking-tight">
          Fast-Track VIP Account Provisioning Workflow
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Skip 3–4 week self-serve verification backlogs. LynxMobi provisions battle-tested, authorized tier-1 agency lines in 4 rapid stages.
        </p>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {onboardingSteps.map((s, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-6 rounded-2xl transition-all cursor-pointer border ${
                activeStepIndex === idx
                  ? "bg-white border-[#0052FF] shadow-xl shadow-blue-500/10 ring-2 ring-[#0052FF]/20"
                  : "bg-white border-slate-200/90 hover:border-slate-300 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700">
                  {s.step}
                </span>
                <span className="text-xs font-bold text-[#0052FF]">{s.phase}</span>
              </div>
              <h4 className="text-base font-bold text-[#090a10] leading-snug">{s.title}</h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{s.desc}</p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{s.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Side-by-Side Account Benchmark (Agency vs Self-Serve) */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm overflow-hidden">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
            / Comparison Benchmark
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#090a10] tracking-tight">
          Standard Self-Serve vs. LynxMobi VIP Agency Line
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Why enterprise brands and top app developers rely on agency tier lines instead of vulnerable direct accounts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Column 1: Self Serve */}
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-4 pb-3 border-b border-slate-200">
              <AlertTriangle className="w-4 h-4 text-amber-500" /> Standard Self-Serve Account
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Strict initial daily spend caps ($50 - $250/day limit on Day 1).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>High risk of algorithmic false-positive account freezes during sudden scaling.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Automated ticket support with 7–14 day response delays for policy appeals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-500 font-bold shrink-0">✕</span>
                <span>Foreign credit card friction and currency conversion exchange penalties.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: LynxMobi VIP Agency */}
          <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-200/80 relative">
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 rounded-full bg-[#0052FF] text-white text-[10px] font-black uppercase tracking-wider">
                Recommended
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-[#0052FF] mb-4 pb-3 border-b border-blue-200/80">
              <ShieldCheck className="w-4 h-4 text-[#0052FF]" /> LynxMobi Authorized Agency Line
            </div>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-800 font-medium">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Unlimited or $50K+/day whitelisted spend caps from launch day.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Direct partner white-hat umbrella shielding accounts from sudden disruption.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Sub-2h priority ticket escalation with direct regional partner reps.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Centralized multi-currency credit lines (USD/EUR/SGD/HKD) with unified monthly invoicing.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
