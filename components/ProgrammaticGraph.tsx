"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Cpu,
  TrendingUp,
  SlidersHorizontal,
  Layers,
  Zap,
} from "lucide-react";

interface IndustryData {
  name: string;
  avgCPM: string;
  winRate: string;
  latency: string;
  volumeMultiplier: number;
  points: { hour: string; bids: number; ecpm: number; yieldScore: number }[];
}

const industries: Record<string, IndustryData> = {
  gaming: {
    name: "Mobile Gaming & IAP",
    avgCPM: "$1.42",
    winRate: "38.4%",
    latency: "11.2ms",
    volumeMultiplier: 1.4,
    points: [
      { hour: "00:00", bids: 420, ecpm: 1.15, yieldScore: 84 },
      { hour: "04:00", bids: 310, ecpm: 0.98, yieldScore: 78 },
      { hour: "08:00", bids: 580, ecpm: 1.34, yieldScore: 91 },
      { hour: "12:00", bids: 840, ecpm: 1.58, yieldScore: 96 },
      { hour: "16:00", bids: 920, ecpm: 1.62, yieldScore: 98 },
      { hour: "20:00", bids: 1050, ecpm: 1.48, yieldScore: 94 },
      { hour: "23:59", bids: 760, ecpm: 1.28, yieldScore: 89 },
    ],
  },
  ecommerce: {
    name: "Global E-Commerce & DTC",
    avgCPM: "$2.18",
    winRate: "34.1%",
    latency: "13.1ms",
    volumeMultiplier: 1.2,
    points: [
      { hour: "00:00", bids: 350, ecpm: 1.65, yieldScore: 79 },
      { hour: "04:00", bids: 240, ecpm: 1.42, yieldScore: 72 },
      { hour: "08:00", bids: 690, ecpm: 2.15, yieldScore: 88 },
      { hour: "12:00", bids: 980, ecpm: 2.45, yieldScore: 94 },
      { hour: "16:00", bids: 1120, ecpm: 2.58, yieldScore: 97 },
      { hour: "20:00", bids: 940, ecpm: 2.22, yieldScore: 90 },
      { hour: "23:59", bids: 510, ecpm: 1.85, yieldScore: 82 },
    ],
  },
  fintech: {
    name: "FinTech & Banking Apps",
    avgCPM: "$3.85",
    winRate: "29.7%",
    latency: "10.8ms",
    volumeMultiplier: 0.9,
    points: [
      { hour: "00:00", bids: 210, ecpm: 2.95, yieldScore: 82 },
      { hour: "04:00", bids: 180, ecpm: 2.70, yieldScore: 76 },
      { hour: "08:00", bids: 520, ecpm: 3.75, yieldScore: 92 },
      { hour: "12:00", bids: 780, ecpm: 4.10, yieldScore: 95 },
      { hour: "16:00", bids: 830, ecpm: 4.25, yieldScore: 99 },
      { hour: "20:00", bids: 610, ecpm: 3.65, yieldScore: 89 },
      { hour: "23:59", bids: 340, ecpm: 3.15, yieldScore: 84 },
    ],
  },
  streaming: {
    name: "Social, OTT & Streaming",
    avgCPM: "$1.85",
    winRate: "42.1%",
    latency: "9.9ms",
    volumeMultiplier: 1.6,
    points: [
      { hour: "00:00", bids: 610, ecpm: 1.45, yieldScore: 86 },
      { hour: "04:00", bids: 420, ecpm: 1.25, yieldScore: 80 },
      { hour: "08:00", bids: 780, ecpm: 1.75, yieldScore: 90 },
      { hour: "12:00", bids: 950, ecpm: 1.95, yieldScore: 93 },
      { hour: "16:00", bids: 1190, ecpm: 2.10, yieldScore: 98 },
      { hour: "20:00", bids: 1350, ecpm: 2.25, yieldScore: 99 },
      { hour: "23:59", bids: 920, ecpm: 1.80, yieldScore: 91 },
    ],
  },
};

const simulatedAuctions = [
  { id: "AUC-9041", exchange: "Google AdX", country: "US", ecpm: "$1.48", latency: "11.2ms", status: "Won" },
  { id: "AUC-9042", exchange: "AppLovin MAX", country: "DE", ecpm: "$1.92", latency: "10.4ms", status: "Won" },
  { id: "AUC-9043", exchange: "Unity Ads", country: "JP", ecpm: "$2.15", latency: "12.8ms", status: "Won" },
  { id: "AUC-9044", exchange: "Magnite CTV", country: "UK", ecpm: "$3.40", latency: "13.6ms", status: "Won" },
  { id: "AUC-9045", exchange: "Mintegral", country: "KR", ecpm: "$1.30", latency: "9.8ms", status: "Won" },
  { id: "AUC-9046", exchange: "BIGO Ads", country: "BR", ecpm: "$0.95", latency: "12.1ms", status: "Won" },
];

export function ProgrammaticGraph() {
  const [selectedIndustry, setSelectedIndustry] = useState<string>("gaming");
  const [activeMetric, setActiveMetric] = useState<"bids" | "ecpm" | "yieldScore">("bids");
  const [liveAuctions, setLiveAuctions] = useState(simulatedAuctions);

  const currentData = industries[selectedIndustry];

  // Rotate simulated live bid stream
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveAuctions((prev) => {
        const nextId = `AUC-${Math.floor(9000 + Math.random() * 999)}`;
        const exchanges = ["Google AdX", "AppLovin MAX", "Unity Ads", "ironSource", "Magnite", "OpenX"];
        const countries = ["US", "DE", "JP", "UK", "FR", "SG", "AU"];
        const newAuction = {
          id: nextId,
          exchange: exchanges[Math.floor(Math.random() * exchanges.length)],
          country: countries[Math.floor(Math.random() * countries.length)],
          ecpm: `$${(0.85 + Math.random() * 2.2).toFixed(2)}`,
          latency: `${(9.5 + Math.random() * 4.2).toFixed(1)}ms`,
          status: "Won",
        };
        return [newAuction, ...prev.slice(0, 4)];
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  // Compute SVG polyline coordinates
  const maxVal = Math.max(...currentData.points.map((p) => p[activeMetric])) * 1.15;
  const minVal = Math.min(...currentData.points.map((p) => p[activeMetric])) * 0.85;
  const svgWidth = 600;
  const svgHeight = 220;
  const paddingX = 40;
  const paddingY = 30;

  const pointsString = currentData.points
    .map((p, idx) => {
      const x = paddingX + (idx / (currentData.points.length - 1)) * (svgWidth - paddingX * 2);
      const val = p[activeMetric];
      const y = svgHeight - paddingY - ((val - minVal) / (maxVal - minVal || 1)) * (svgHeight - paddingY * 2);
      return `${x},${y}`;
    })
    .join(" ");

  const areaString = `${paddingX},${svgHeight - paddingY} ${pointsString} ${
    svgWidth - paddingX
  },${svgHeight - paddingY}`;

  return (
    <div className="w-full space-y-10">
      {/* 1. Main Telemetry Deck */}
      <div className="rounded-3xl bg-[#090a10] border border-slate-800 p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
        {/* Glowing background ambient lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0052FF]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Live RTB Engine Active
              </span>
              <span className="text-xs font-mono text-slate-400">
                Decisioning: <span className="text-white font-semibold">{currentData.latency}</span>
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-3">
              Real-Time Bidding Telemetry & Yield Curve
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl">
              Predictive neural ranking dynamically modifies bids across 50+ attributes to maximize conversion LTV.
            </p>
          </div>

          {/* Industry Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 bg-white/5 p-1.5 rounded-2xl border border-white/10">
            {Object.entries(industries).map(([key, ind]) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedIndustry(key)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedIndustry === key
                    ? "bg-[#0052FF] text-white shadow-md shadow-blue-500/30"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {ind.name.split(" ")[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Real-Time KPIs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 py-6 border-b border-white/10 relative z-10">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Winning Win Rate</div>
            <div className="text-2xl sm:text-3xl font-black text-white mt-1">{currentData.winRate}</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="w-3 h-3" /> +14.2% vs Industry Benchmark
            </div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Effective eCPM</div>
            <div className="text-2xl sm:text-3xl font-black text-[#0052FF] mt-1">{currentData.avgCPM}</div>
            <div className="text-[11px] text-slate-400 font-semibold mt-1">Granular First-Price Clearing</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Avg RTB Latency</div>
            <div className="text-2xl sm:text-3xl font-black text-cyan-400 mt-1">{currentData.latency}</div>
            <div className="text-[11px] text-slate-400 font-semibold mt-1">Direct Server-to-Server Pipes</div>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
            <div className="text-xs uppercase font-bold text-slate-400">Fraud Rejection (IVT)</div>
            <div className="text-2xl sm:text-3xl font-black text-purple-400 mt-1">99.4%</div>
            <div className="text-[11px] text-emerald-400 font-semibold mt-1">Pre-Bid Bot Filtering</div>
          </div>
        </div>

        {/* Interactive Dynamic SVG Curve & Metric Switcher */}
        <div className="pt-6 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Selected Metric:</span>
              <div className="inline-flex rounded-xl bg-white/5 p-1 border border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveMetric("bids")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeMetric === "bids" ? "bg-[#0052FF] text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Bid Volume (k/sec)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMetric("ecpm")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeMetric === "ecpm" ? "bg-[#0052FF] text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Clearing eCPM ($)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMetric("yieldScore")}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    activeMetric === "yieldScore" ? "bg-[#0052FF] text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  Yield Score (0-100)
                </button>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-400">
              Showing 24h Pacing for <span className="text-white font-bold">{currentData.name}</span>
            </div>
          </div>

          {/* SVG Animated Chart */}
          <div className="w-full overflow-hidden rounded-2xl bg-white/[0.02] border border-white/10 p-4">
            <div className="relative w-full h-52 sm:h-64">
              <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`} className="w-full h-full preserve-3d" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0052FF" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#0052FF" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#0052FF" />
                    <stop offset="50%" stopColor="#00C4FF" />
                    <stop offset="100%" stopColor="#0052FF" />
                  </linearGradient>
                </defs>

                {/* Grid horizontal guidelines */}
                {[0.25, 0.5, 0.75].map((pct, i) => (
                  <line
                    key={i}
                    x1={paddingX}
                    y1={paddingY + pct * (svgHeight - paddingY * 2)}
                    x2={svgWidth - paddingX}
                    y2={paddingY + pct * (svgHeight - paddingY * 2)}
                    stroke="rgba(255,255,255,0.06)"
                    strokeDasharray="4 4"
                    strokeWidth="1"
                  />
                ))}

                {/* Shaded Area */}
                <polygon points={areaString} fill="url(#areaGradient)" />

                {/* Smooth Curve Line */}
                <polyline
                  points={pointsString}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data Points with pulsing glowing nodes */}
                {currentData.points.map((p, idx) => {
                  const x = paddingX + (idx / (currentData.points.length - 1)) * (svgWidth - paddingX * 2);
                  const val = p[activeMetric];
                  const y = svgHeight - paddingY - ((val - minVal) / (maxVal - minVal || 1)) * (svgHeight - paddingY * 2);
                  return (
                    <g key={idx}>
                      <circle cx={x} cy={y} r="5" fill="#090a10" stroke="#00C4FF" strokeWidth="2.5" />
                      <circle cx={x} cy={y} r="2" fill="#FFFFFF" />
                      <text
                        x={x}
                        y={svgHeight - 10}
                        textAnchor="middle"
                        fill="#64748B"
                        fontSize="10"
                        fontFamily="monospace"
                      >
                        {p.hour}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Live Auction Stream Feed (Simulated sub-15ms throughput) */}
        <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-mono font-semibold uppercase text-slate-400 flex items-center gap-2">
              <Activity className="w-3.5 h-3.5 text-[#0052FF]" /> Live Auction Clearing Stream (Global S2S Pipes)
            </span>
            <span className="text-xs font-mono text-emerald-400">142,850 queries/sec</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
            {liveAuctions.slice(0, 5).map((auc, i) => (
              <motion.div
                key={`${auc.id}-${i}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between text-xs"
              >
                <div>
                  <div className="font-mono font-bold text-white flex items-center gap-1.5">
                    <span className="px-1.5 py-0.5 rounded-md bg-[#0052FF]/30 text-blue-300 text-[10px]">
                      {auc.country}
                    </span>
                    {auc.exchange}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-0.5 font-mono">
                    {auc.latency} • {auc.ecpm}
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {auc.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Neural Decisioning Pipeline Architecture Diagram */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-black uppercase tracking-widest text-[#0052FF]">
            / Proprietary DSP Stack
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#090a10] tracking-tight">
          Sub-15ms Neural Decisioning Pipeline
        </h3>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
          Every ad impression request is parsed through 4 low-latency neural stages before returning a tailored bid price and dynamic creative snippet.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 mt-8">
          {[
            {
              step: "01",
              title: "Ad Exchange Request",
              desc: "Inbound auction notification ingested via high-bandwidth S2S endpoints from Google AdX, MAX & Unity.",
              time: "2.1ms",
              icon: <Layers className="w-5 h-5 text-[#0052FF]" />,
            },
            {
              step: "02",
              title: "Neural Feature Vector",
              desc: "User device context, geo-density, historical cohort LTV, and historical engagement scoring.",
              time: "4.8ms",
              icon: <Cpu className="w-5 h-5 text-purple-600" />,
            },
            {
              step: "03",
              title: "Predictive Bid Shaper",
              desc: "Dynamic bid modifier calculating win-probability curve against current publisher clearing rates.",
              time: "3.5ms",
              icon: <SlidersHorizontal className="w-5 h-5 text-emerald-600" />,
            },
            {
              step: "04",
              title: "DCO Assembly & Win",
              desc: "Personalized localized creative assembly, anti-fraud cryptographic token, and bid response return.",
              time: "1.9ms",
              icon: <Zap className="w-5 h-5 text-amber-500" />,
            },
          ].map((stage, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:border-[#0052FF] hover:shadow-lg transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {stage.step}
                </span>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
                  {stage.time}
                </span>
              </div>
              <div className="mb-3">{stage.icon}</div>
              <h4 className="text-base font-bold text-[#090a10] group-hover:text-[#0052FF] transition-colors">
                {stage.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
