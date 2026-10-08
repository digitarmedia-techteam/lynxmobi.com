"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tv,
  Smartphone,
  Radio,
  BarChart3,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
  ArrowRight,
  MonitorPlay,
  Share2,
} from "lucide-react";

type FormatId = "native" | "video" | "cross-device";

interface FormatInfo {
  id: FormatId;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  vcr: string;
  viewability: string;
  avgLift: string;
  householdReach: string;
  devices: string[];
  features: string[];
}

const ctvFormats: FormatInfo[] = [
  {
    id: "video",
    title: "CTV High-Definition Video",
    badge: "Big Screen Immersion",
    tagline: "Unskippable 15s & 30s premium living-room commercial storytelling",
    description:
      "Full-screen 4K/1080p high-definition video ads broadcast directly onto smart TVs during premium streaming content. Delivers unparalleled emotional impact and brand prestige.",
    vcr: "98.4%",
    viewability: "99.2%",
    avgLift: "+46%",
    householdReach: "200M+",
    devices: ["Samsung Smart TV", "LG webOS", "Roku TV", "Fire TV", "Apple TV"],
    features: [
      "100% Unskippable Living Room Placements",
      "Dynamic Audio & 4K Ultra-HD Rendering",
      "Household IP & Geo-Fenced Targeting",
      "Brand-Safe Premium Publisher Supply",
    ],
  },
  {
    id: "native",
    title: "CTV Native Home-Screen Ads",
    badge: "Non-Intrusive Integration",
    tagline: "Seamlessly integrated smart TV UI banners and featured app slots",
    description:
      "Native interactive display placements embedded directly in smart TV home screens, content launchers, and curated OTT channel guides before playback begins.",
    vcr: "94.8%",
    viewability: "98.7%",
    avgLift: "+38%",
    householdReach: "165M+",
    devices: ["Xiaomi PatchWall", "Samsung Smart Hub", "LG Home Dashboard", "Roku Homescreen"],
    features: [
      "High-Visibility First-Screen Impressions",
      "Interactive One-Click Remote Controls",
      "Zero Interruptions to Viewer Content",
      "Direct Deep-Linking into Brand Apps",
    ],
  },
  {
    id: "cross-device",
    title: "Cross-Device Household Graph",
    badge: "Full-Funnel Omnichannel",
    tagline: "Synchronized sequential storytelling from Smart TV to Mobile & Tablet",
    description:
      "Unified household identity mapping that connects the living-room big screen with personal smartphones, laptops, and tablets for immediate clickable conversions.",
    vcr: "96.2%",
    viewability: "97.9%",
    avgLift: "+54%",
    householdReach: "185M+",
    devices: ["Smart TVs", "iPhones & Android", "iPads & Tablets", "Laptops & Desktops"],
    features: [
      "Deterministic Household IP Resolution",
      "Sequential Retargeting within 24h",
      "QR Code & Second-Screen Companion Links",
      "Full MMP Attribution (AppsFlyer/Adjust)",
    ],
  },
];

const streamingPlatforms = [
  { name: "Samsung Ads", type: "OEM Smart TV", share: "Top OEM" },
  { name: "LG Ads Solutions", type: "OEM webOS", share: "Global Leader" },
  { name: "Roku", type: "Streaming Platform", share: "80M+ Actives" },
  { name: "Amazon Fire TV", type: "OTT Ecosystem", share: "Prime Audiences" },
  { name: "Xiaomi TV", type: "Global OEM", share: "APAC & EMEA" },
  { name: "Apple TV", type: "Premium OTT", share: "High-LTV Cohorts" },
  { name: "Netflix Ads", type: "SVOD Tier", share: "Global Hit Shows" },
  { name: "Hulu", type: "Streaming Network", share: "US Prime Tier" },
  { name: "YouTube TV", type: "Live Streaming", share: "Connected Living" },
];

export function CTVArchitectureGraph() {
  const [activeFormat, setActiveFormat] = useState<FormatId>("video");
  const currentFormat = ctvFormats.find((f) => f.id === activeFormat)!;

  return (
    <div className="rounded-3xl bg-[#090A10] text-white border border-white/10 p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden relative select-none">
      {/* Background Ambient Glow */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header & Telemetry Pill */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-white/10 relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Tv className="w-3.5 h-3.5 text-purple-400" />
            <span>Connected TV (CTV) Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
            Living-Room Immersion & Multi-Device Sync
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-1 max-w-2xl">
            Interactive breakdown of high-impact CTV video formats, native UI integrations, and cross-device sequential attribution.
          </p>
        </div>

        {/* Live Engine Status */}
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
          <div className="relative">
            <span className="w-3 h-3 rounded-full bg-emerald-400 block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping absolute inset-0 opacity-75" />
          </div>
          <div className="text-left">
            <div className="text-[11px] uppercase tracking-wider font-bold text-slate-400">
              Supply Pipeline Status
            </div>
            <div className="text-xs font-bold text-emerald-300 flex items-center gap-1.5">
              <span>99.9% IVT-Free Verified</span>
              <ShieldCheck className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Format Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-8 relative z-10">
        {ctvFormats.map((format) => {
          const isSelected = activeFormat === format.id;
          return (
            <button
              key={format.id}
              onClick={() => setActiveFormat(format.id)}
              className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between cursor-pointer ${
                isSelected
                  ? "bg-gradient-to-br from-purple-900/40 via-blue-900/30 to-slate-900/50 border-purple-500/60 shadow-lg shadow-purple-500/10 scale-[1.02]"
                  : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06] hover:border-white/20 text-slate-300"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${
                    isSelected
                      ? "bg-purple-500 text-white"
                      : "bg-white/10 text-slate-400"
                  }`}
                >
                  {format.badge}
                </span>
                {format.id === "video" && <MonitorPlay className="w-4 h-4 text-purple-400" />}
                {format.id === "native" && <Layers className="w-4 h-4 text-blue-400" />}
                {format.id === "cross-device" && <Share2 className="w-4 h-4 text-emerald-400" />}
              </div>
              <div className="text-base sm:text-lg font-bold text-white mt-1">
                {format.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Screen Showcase & Telemetry */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFormat}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10"
        >
          {/* Left Column: Interactive TV Mockup Display */}
          <div className="lg:col-span-7 flex flex-col justify-between rounded-3xl bg-black/60 border border-white/15 p-6 sm:p-8 relative overflow-hidden">
            {/* TV Screen Top Bezel */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
              <div className="flex items-center gap-2 font-mono">
                <Radio className="w-4 h-4 text-purple-400 animate-pulse" />
                <span className="text-white font-semibold">STREAM-FEED // 4K-UHD</span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] uppercase font-bold text-slate-300">
                Living Room Mode
              </span>
            </div>

            {/* Simulated TV Display Content */}
            <div className="my-6 relative rounded-2xl overflow-hidden border border-white/10 bg-slate-950 p-6 sm:p-8 min-h-[260px] flex flex-col justify-between">
              {/* Dynamic Overlay Graphic based on active format */}
              {activeFormat === "video" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/30 flex items-center justify-center text-purple-400">
                      <MonitorPlay className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-purple-400">
                        Unskippable Video Ad Stream
                      </div>
                      <div className="text-lg font-bold text-white">
                        Full-Screen 4K Video Commercial
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                    Reaching co-viewing audiences during prime-time OTT broadcasts with uncompromised sound, cinema-quality visuals, and 98%+ completion rates.
                  </p>
                  <div className="flex items-center gap-2 pt-2">
                    <span className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <span className="bg-gradient-to-r from-purple-500 to-blue-500 w-[98%] h-full block rounded-full" />
                    </span>
                    <span className="text-[11px] font-mono text-purple-300 shrink-0">98.4% VCR</span>
                  </div>
                </div>
              )}

              {activeFormat === "native" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        Smart TV UI Integration
                      </div>
                      <div className="text-lg font-bold text-white">
                        Home-Screen Featured Launcher Card
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                    Prime home-screen positioning shown immediately when the smart TV powers on. Viewers interact with 1-click remote navigation with zero disruptive overlays.
                  </p>
                  <div className="grid grid-cols-3 gap-2 pt-2">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">Interaction</div>
                      <div className="text-sm font-bold text-blue-300">1-Click Remote</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">CTR Benchmark</div>
                      <div className="text-sm font-bold text-blue-300">3.8x Lift</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-center">
                      <div className="text-[10px] text-slate-400 uppercase font-semibold">User Experience</div>
                      <div className="text-sm font-bold text-blue-300">100% Native</div>
                    </div>
                  </div>
                </div>
              )}

              {activeFormat === "cross-device" && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Household Device Sync
                      </div>
                      <div className="text-lg font-bold text-white">
                        Sequenced Living Room to Mobile Retargeting
                      </div>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg">
                    Deterministic IP mapping triggers instant mobile companion ads while viewers watch TV, allowing effortless scan-to-download and in-app purchases.
                  </p>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10 text-xs">
                    <div className="flex items-center gap-2">
                      <Tv className="w-4 h-4 text-purple-400" />
                      <span>Smart TV Impression</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-emerald-400" />
                      <span>Mobile Action</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                    <span className="font-bold text-emerald-400">+54% Conversion</span>
                  </div>
                </div>
              )}

              {/* Device Ecosystem Footprint */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-2">
                <span className="text-[11px] text-slate-400 uppercase font-bold mr-1">
                  Supported Displays:
                </span>
                {currentFormat.devices.map((device, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-slate-300"
                  >
                    {device}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Format Summary */}
            <div className="text-xs text-slate-400">
              <span className="font-semibold text-white">Pillar Highlight: </span>
              {currentFormat.tagline}
            </div>
          </div>

          {/* Right Column: Key Performance Metrics & Capabilities */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* 4 Performance Metric Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2 text-purple-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <BarChart3 className="w-3.5 h-3.5" />
                  <span>Completion (VCR)</span>
                </div>
                <div className="text-3xl font-black text-white">{currentFormat.vcr}</div>
                <div className="text-[11px] text-slate-400 mt-1">Verified full watch-through</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2 text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Viewability</span>
                </div>
                <div className="text-3xl font-black text-white">{currentFormat.viewability}</div>
                <div className="text-[11px] text-slate-400 mt-1">MRC living room standard</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Brand Lift</span>
                </div>
                <div className="text-3xl font-black text-white">{currentFormat.avgLift}</div>
                <div className="text-[11px] text-slate-400 mt-1">Audience recall & search surge</div>
              </div>

              <div className="p-5 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-1">
                  <Radio className="w-3.5 h-3.5" />
                  <span>Addressable TVs</span>
                </div>
                <div className="text-3xl font-black text-white">{currentFormat.householdReach}</div>
                <div className="text-[11px] text-slate-400 mt-1">Global household universe</div>
              </div>
            </div>

            {/* Feature Checklist */}
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
              <div className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">
                Core Execution Capabilities
              </div>
              <ul className="space-y-3">
                {currentFormat.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-slate-200">
                    <span className="w-5 h-5 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-400 flex items-center justify-center shrink-0 text-xs font-bold">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Bottom Ecosystem Marquee / Supported OEM Platforms */}
      <div className="mt-10 pt-8 border-t border-white/10 relative z-10">
        <div className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4 text-center sm:text-left">
          Direct Programmatic Integrations Across Premier CTV Ecosystems
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-2.5">
          {streamingPlatforms.map((platform, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-purple-400/40 hover:bg-white/[0.06] transition-all text-center group"
            >
              <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                {platform.name}
              </div>
              <div className="text-[9px] uppercase tracking-wider text-slate-500 mt-0.5">
                {platform.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
