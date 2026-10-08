"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Video,
  Gamepad2,
} from "lucide-react";

interface ROASDataPoint {
  day: string;
  traditional: number;
  lynxmobi: number;
  phase: string;
}

const roasData: ROASDataPoint[] = [
  { day: "Day 01", traditional: 1.1, lynxmobi: 1.25, phase: "Launch & Benchmark" },
  { day: "Day 15", traditional: 1.35, lynxmobi: 1.85, phase: "Hook Testing" },
  { day: "Day 30", traditional: 1.45, lynxmobi: 2.60, phase: "Playable Scaling" },
  { day: "Day 45", traditional: 1.52, lynxmobi: 3.45, phase: "Lookalike Refinement" },
  { day: "Day 60", traditional: 1.58, lynxmobi: 4.20, phase: "Omnichannel Synergy" },
  { day: "Day 75", traditional: 1.62, lynxmobi: 4.85, phase: "Cross-Border Scale" },
  { day: "Day 90", traditional: 1.65, lynxmobi: 5.35, phase: "Market Leadership" },
];

const creativeFormats = [
  {
    id: "playable",
    title: "3D Interactive Playable Ads",
    icon: <Gamepad2 className="w-5 h-5 text-[#0052FF]" />,
    ctr: "8.6%",
    hookRate: "64%",
    cvr: "26.4%",
    fatigueLife: "45 Days",
    summary: "In-house WebGL/HTML5 micro-games simulating gameplay with zero install friction. Drives 3x higher Day-7 user retention.",
    tag: "Highest LTV",
  },
  {
    id: "ugc",
    title: "Localized UGC Video Reels",
    icon: <Video className="w-5 h-5 text-purple-600" />,
    ctr: "5.8%",
    hookRate: "52%",
    cvr: "19.8%",
    fatigueLife: "18 Days",
    summary: "Native creators in North America, APAC, and LATAM filming native trend hooks, real testimonials, and viral lifestyle shorts.",
    tag: "Viral Velocity",
  },
  {
    id: "motion",
    title: "Dynamic Motion Graphic Ads",
    icon: <Sparkles className="w-5 h-5 text-amber-500" />,
    ctr: "4.2%",
    hookRate: "41%",
    cvr: "14.5%",
    fatigueLife: "25 Days",
    summary: "High-production 2D/3D kinetic typography, animated UI workflows, and dynamic localized call-outs tuned to regional platforms.",
    tag: "Brand Prestige",
  },
];

const squadRoles = [
  {
    role: "Senior AdTech Growth Lead",
    location: "San Francisco / Singapore",
    tasks: "Daily budget pacing, algorithmic RTB allocation, multi-channel cross-pollination.",
    kpi: "Target ROAS > 4.5x",
    status: "Active 24/7",
  },
  {
    role: "Native Creative Director",
    location: "Tokyo / London / São Paulo",
    tasks: "Cultural nuance auditing, native vernacular scripting, viral hook ideation.",
    kpi: "1,200+ Assets / Mo",
    status: "Active 24/7",
  },
  {
    role: "3D Playable Ad Engineer",
    location: "Seoul / Berlin",
    tasks: "Sub-2MB WebGL interactive builds, end-card gamification, instant load optimization.",
    kpi: "<1s Load Latency",
    status: "Active 24/7",
  },
  {
    role: "MMP & Data Telemetry Scientist",
    location: "Toronto / Sydney",
    tasks: "AppsFlyer/Adjust SKAN 4.0 cohort modeling, anti-fraud telemetry, incrementality testing.",
    kpi: "99.9% Attribution Match",
    status: "Active 24/7",
  },
];

export function CampaignManagementGraph() {
  const [selectedFormat, setSelectedFormat] = useState(creativeFormats[0]);
  const [hoveredPoint, setHoveredPoint] = useState<ROASDataPoint | null>(null);

  const svgWidth = 600;
  const svgHeight = 220;
  const paddingX = 45;
  const paddingY = 30;
  const maxROAS = 6.0;

  // Build SVG Points
  const lynxPoints = roasData
    .map((d, i) => {
      const x = paddingX + (i / (roasData.length - 1)) * (svgWidth - paddingX * 2);
      const y = svgHeight - paddingY - (d.lynxmobi / maxROAS) * (svgHeight - paddingY * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const tradPoints = roasData
    .map((d, i) => {
      const x = paddingX + (i / (roasData.length - 1)) * (svgWidth - paddingX * 2);
      const y = svgHeight - paddingY - (d.traditional / maxROAS) * (svgHeight - paddingY * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const lynxArea = `${paddingX},${svgHeight - paddingY} ${lynxPoints} ${
    svgWidth - paddingX
  },${svgHeight - paddingY}`;

  return (
    <div className="w-full space-y-10">
      {/* 1. Compounding ROAS Scaling Curve Deck */}
      <div className="rounded-3xl bg-[#090a10] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Proven Growth Model
              </span>
              <span className="text-xs font-mono text-slate-400">
                Average Client ROAS: <span className="text-white font-semibold">4.8x – 5.4x</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-3">
              Compounding ROAS Performance Curve
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              While traditional agency campaigns plateau due to creative fatigue, LynxMobi&apos;s dynamic creative rotation and algorithmic bidding drive compounding growth.
            </p>
          </div>

          {/* Metric Comparison Badges */}
          <div className="flex items-center gap-4 bg-white/5 p-3 rounded-2xl border border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#0052FF]" />
              <span className="text-xs font-bold text-white">LynxMobi Managed Squad (5.35x)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-slate-500" />
              <span className="text-xs font-semibold text-slate-400">Traditional Agency (1.65x)</span>
            </div>
          </div>
        </div>

        {/* Interactive SVG Chart */}
        <div className="pt-6 relative z-10">
          <div className="w-full overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 p-4">
            <div className="relative w-full h-56 sm:h-72">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="roasGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0052FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#0052FF" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Horizontal Guide Lines */}
                {[1, 2, 3, 4, 5].map((level) => {
                  const y = svgHeight - paddingY - (level / maxROAS) * (svgHeight - paddingY * 2);
                  return (
                    <g key={level}>
                      <line
                        x1={paddingX}
                        y1={y}
                        x2={svgWidth - paddingX}
                        y2={y}
                        stroke="rgba(255,255,255,0.06)"
                        strokeDasharray="4 4"
                      />
                      <text
                        x={paddingX - 10}
                        y={y + 3}
                        textAnchor="end"
                        fill="#64748B"
                        fontSize="9"
                        fontFamily="monospace"
                      >
                        {level}x
                      </text>
                    </g>
                  );
                })}

                {/* LynxMobi Shaded Area */}
                <polygon points={lynxArea} fill="url(#roasGradient)" />

                {/* Traditional Agency Line (dashed slate) */}
                <polyline
                  points={tradPoints}
                  fill="none"
                  stroke="#64748B"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                />

                {/* LynxMobi Curve Line (solid vibrant blue) */}
                <polyline
                  points={lynxPoints}
                  fill="none"
                  stroke="#0052FF"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Nodes & Labels */}
                {roasData.map((d, i) => {
                  const x = paddingX + (i / (roasData.length - 1)) * (svgWidth - paddingX * 2);
                  const y = svgHeight - paddingY - (d.lynxmobi / maxROAS) * (svgHeight - paddingY * 2);
                  const isHovered = hoveredPoint?.day === d.day;
                  return (
                    <g
                      key={i}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredPoint(d)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <circle
                        cx={x}
                        cy={y}
                        r={isHovered ? 7 : 4.5}
                        fill="#090a10"
                        stroke="#00C4FF"
                        strokeWidth="2.5"
                        className="transition-all"
                      />
                      <circle cx={x} cy={y} r="2" fill="#FFFFFF" />
                      <text
                        x={x}
                        y={svgHeight - 10}
                        textAnchor="middle"
                        fill="#94A3B8"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {d.day}
                      </text>
                    </g>
                  );
                })}
              </svg>

              {/* Hover Tooltip Overlay */}
              {hoveredPoint && (
                <div className="absolute top-4 right-4 p-3 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-xs">
                  <div className="font-bold text-white">{hoveredPoint.day} — {hoveredPoint.phase}</div>
                  <div className="text-emerald-400 font-bold mt-1">LynxMobi ROAS: {hoveredPoint.lynxmobi}x</div>
                  <div className="text-slate-400">Traditional Agency: {hoveredPoint.traditional}x</div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Key Milestone Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/10 mt-6 relative z-10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs font-mono text-[#0052FF] font-bold">STAGE 1 (DAYS 1-30)</div>
            <div className="text-sm font-bold text-white mt-1">Rapid Hook Discovery</div>
            <p className="text-xs text-slate-400 mt-1">Test 60+ variations of visual hooks and CTAs to identify high-converting winners.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs font-mono text-cyan-400 font-bold">STAGE 2 (DAYS 31-60)</div>
            <div className="text-sm font-bold text-white mt-1">Playable Ad Scaling</div>
            <p className="text-xs text-slate-400 mt-1">Deploy interactive 3D playable ads to double Day-7 retention and lower CAC.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs font-mono text-emerald-400 font-bold">STAGE 3 (DAYS 61-90)</div>
            <div className="text-sm font-bold text-white mt-1">Cross-Border Saturation</div>
            <p className="text-xs text-slate-400 mt-1">Scale budget across 200+ regions with automated anti-fatigue creative rotation.</p>
          </div>
        </div>
      </div>

      {/* 2. Interactive Creative Studio Matrix (Playables vs UGC vs Motion) */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10">
        <div className="flex items-center justify-between flex-wrap gap-4 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
            / Creative Studio Lab
          </span>
          <span className="text-xs font-semibold text-slate-500">1,200+ Localized Assets Produced Monthly</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#090a10] tracking-tight">
          High-Converting Format Benchmark & Fatigue Resistance
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Different stages of international user acquisition require distinct creative mechanics. Select a format below to inspect its performance telemetry.
        </p>

        {/* Format Selector Pills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {creativeFormats.map((fmt) => (
            <div
              key={fmt.id}
              onClick={() => setSelectedFormat(fmt)}
              className={`p-6 rounded-2xl cursor-pointer transition-all border ${
                selectedFormat.id === fmt.id
                  ? "bg-white border-[#0052FF] shadow-xl shadow-blue-500/10 ring-2 ring-[#0052FF]/20"
                  : "bg-white border-slate-200/90 hover:border-slate-300 shadow-sm"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                  {fmt.icon}
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-50 text-[#0052FF]">
                  {fmt.tag}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#090a10]">{fmt.title}</h4>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{fmt.summary}</p>
            </div>
          ))}
        </div>

        {/* Selected Format Telemetry Breakdown */}
        <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-4 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="text-lg font-black text-[#090a10]">{selectedFormat.title}</span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                Active In-House Squad Production
              </span>
            </div>
            <div className="text-xs text-slate-500 font-mono">Fatigue Resistance: <strong className="text-slate-800">{selectedFormat.fatigueLife}</strong></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1.5">
                <span>Click-Through Rate (CTR)</span>
                <span className="text-[#0052FF]">{selectedFormat.ctr}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${parseFloat(selectedFormat.ctr) * 10}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full rounded-full bg-[#0052FF]"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1.5">
                <span>3-Second Hook Retention</span>
                <span className="text-purple-600">{selectedFormat.hookRate}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: selectedFormat.hookRate }}
                  transition={{ duration: 0.6 }}
                  className="h-full rounded-full bg-purple-600"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-600 mb-1.5">
                <span>Install Conversion Yield (CVR)</span>
                <span className="text-emerald-600">{selectedFormat.cvr}</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${parseFloat(selectedFormat.cvr) * 3}%` }}
                  transition={{ duration: 0.6 }}
                  className="h-full rounded-full bg-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Dedicated Cross-Border Squad Architecture Live Monitor */}
      <div className="rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
            / Embedded Squad Architecture
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#090a10] tracking-tight">
          Your Dedicated Multi-Disciplinary Campaign Squad
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          We do not assign junior account reps. Every client is assigned a dedicated bilingual growth squad embedded directly into your expansion pipeline.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {squadRoles.map((member, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-[#0052FF] transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  {member.status}
                </span>
                <span className="text-[11px] font-mono font-semibold text-slate-400">
                  {member.kpi}
                </span>
              </div>
              <h4 className="text-base font-bold text-[#090a10] group-hover:text-[#0052FF] transition-colors">
                {member.role}
              </h4>
              <div className="text-xs text-slate-400 font-medium mt-1">{member.location}</div>
              <p className="text-xs text-slate-600 mt-3 leading-relaxed border-t border-slate-200/60 pt-3">
                {member.tasks}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
