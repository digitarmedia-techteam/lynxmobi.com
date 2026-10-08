"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { RevealElement } from "./RevealElement";

export function HeroSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const singleSetWidthRef = useRef(0);
  const currentXRef = useRef(0);
  const targetXRef = useRef(0);

  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const dragStartXRef = useRef(0);

  // Distinct LynxMobi custom assets representing LynxMobi core pillars
  const basePanels = [
    {
      id: "sincere",
      label: "/ Sincere",
      title: "100% Transparent Attribution",
      description: "Direct publisher contracts and uncompromised attribution integrity without hidden arbitrage.",
      image: "/lynx-sincere.jpg",
      position: "top-left",
    },
    {
      id: "innovation",
      label: "/ Innovation",
      title: "AI Real-Time Bidding",
      description: "Sub-millisecond programmatic decisioning leveraging proprietary neural ranking algorithms.",
      image: "/lynx-innovation.jpg",
      position: "top-left",
    },
    {
      id: "professional",
      label: "/ Professional",
      title: "Tier-1 Native Strategists",
      description: "Bilingual media buyers and regional cultural experts scaling brands across 200+ global territories.",
      image: "/lynx-professional.jpg",
      position: "top-left",
    },
    {
      id: "energetic",
      label: "/ Energetic",
      title: "24/7 Global Creator Agility",
      description: "Always-on campaign optimization cycles with real-time creator activations and viral distribution.",
      image: "/lynx-energetic.jpg",
      position: "top-left",
    },
    {
      id: "global",
      label: "/ Global Reach",
      title: "Cross-Border Scale",
      description: "Omnichannel digital infrastructure driving localized acquisition across North America, APAC & EMEA.",
      image: "/lynx-global.jpg",
      position: "top-left",
    },
    {
      id: "creative",
      label: "/ Creative",
      title: "Dynamic Creative Optimization",
      description: "In-house studio producing high-converting playable ads, UGC video reels, and interactive rich media.",
      image: "/lynx-creative.jpg",
      position: "top-left",
    },
    {
      id: "collaborative",
      label: "/ Collaborative",
      title: "Dedicated Squad Architecture",
      description: "Senior AdTech engineers and growth consultants embedded directly into your expansion pipeline.",
      image: "/lynx-team.jpg",
      position: "top-left",
    },
  ];

  // Triplicate array for smooth infinite continuous loop
  const displayPanels = [...basePanels, ...basePanels, ...basePanels];

  // Initialize and measure carousel width
  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current) {
        const singleWidth = trackRef.current.scrollWidth / 3;
        if (singleWidth > 0) {
          singleSetWidthRef.current = singleWidth;
          if (currentXRef.current === 0) {
            currentXRef.current = -singleWidth;
            targetXRef.current = -singleWidth;
            trackRef.current.style.transform = `translate3d(${-singleWidth}px, 0, 0)`;
          }
        }
      }
    };

    updateWidth();
    // Re-check after images may have settled
    const timer = setTimeout(updateWidth, 150);
    window.addEventListener("resize", updateWidth);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Continuous, 60fps/120fps GPU-accelerated automatic swipe loop
  useEffect(() => {
    let lastTimestamp = performance.now();

    const tick = (now: number) => {
      const delta = Math.min((now - lastTimestamp) / 16.67, 3);
      lastTimestamp = now;

      const singleWidth = singleSetWidthRef.current;

      if (!isDraggingRef.current) {
        // Automatic glide pace: 0.95px per frame normally; 0.5px on hover for a calm luxury cruise
        const autoSpeed = isHoveredRef.current ? 0.5 : 0.95;
        targetXRef.current += autoSpeed * delta;

        // Fluid spring-lerp for buttery smooth transitions
        currentXRef.current += (targetXRef.current - currentXRef.current) * Math.min(0.12 * delta, 1);
      }

      // Seamless infinite wrap (cards seamlessly loop without missing a pixel)
      if (singleWidth > 0) {
        while (currentXRef.current >= 0) {
          currentXRef.current -= singleWidth;
          targetXRef.current -= singleWidth;
          if (isDraggingRef.current) dragStartXRef.current -= singleWidth;
        }
        while (currentXRef.current <= -singleWidth) {
          currentXRef.current += singleWidth;
          targetXRef.current += singleWidth;
          if (isDraggingRef.current) dragStartXRef.current += singleWidth;
        }
      }

      // Direct GPU transform update
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${currentXRef.current}px, 0, 0)`;
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Manual smooth step buttons
  const handleStep = (direction: "left" | "right") => {
    const stepAmount = 350; // approximate card width
    if (direction === "right") {
      targetXRef.current += stepAmount;
    } else {
      targetXRef.current -= stepAmount;
    }
  };

  // Double-click triggers smooth leap
  const handleDoubleClick = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const isLeft = clickX < rect.width * 0.35;
    handleStep(isLeft ? "left" : "right");
  };

  // Mouse wheel and trackpad horizontal gestures
  const handleWheel = (e: React.WheelEvent) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 2) {
      targetXRef.current -= delta * 0.75;
    }
  };

  // Pointer Drag Handlers (touch & mouse swipe with inertia)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    startXRef.current = e.clientX;
    lastXRef.current = e.clientX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
    dragStartXRef.current = currentXRef.current;

    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const dt = Math.max(now - lastTimeRef.current, 1);
    const dx = e.clientX - lastXRef.current;
    velocityRef.current = dx / dt;

    lastXRef.current = e.clientX;
    lastTimeRef.current = now;

    const diff = e.clientX - startXRef.current;
    const newPos = dragStartXRef.current + diff;
    currentXRef.current = newPos;
    targetXRef.current = newPos;

    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${newPos}px, 0, 0)`;
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // ignore
    }

    // Apply natural momentum flick
    const inertia = Math.max(Math.min(velocityRef.current * 160, 600), -600);
    targetXRef.current += inertia;
  };

  return (
    <section className="relative overflow-hidden bg-white pt-0 pb-16 sm:pb-24">
      {/* THE FULL-WIDTH INTERACTIVE MOVING CAROUSEL SHOWCASE (Touching left and right edges) */}
      <div
        className="relative w-full overflow-hidden shadow-2xl bg-[#090a10] border-y border-slate-200/50 group select-none cursor-grab active:cursor-grabbing"
        onMouseEnter={() => {
          isHoveredRef.current = true;
        }}
        onMouseLeave={() => {
          isHoveredRef.current = false;
        }}
        onWheel={handleWheel}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        {/* Stepper Arrow Buttons */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleStep("left");
          }}
          aria-label="Swipe left"
          className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-xl text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 hover:scale-110 shadow-2xl hover:border-white/40 cursor-pointer"
        >
          <ChevronLeft className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleStep("right");
          }}
          aria-label="Swipe right"
          className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-xl text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 border border-white/20 hover:scale-110 shadow-2xl hover:border-white/40 cursor-pointer"
        >
          <ChevronRight className="w-5 sm:w-6 h-5 sm:h-6" />
        </button>

        {/* The GPU Hardware-Accelerated Continuous Carousel Track */}
        <div
          ref={trackRef}
          className="flex will-change-transform"
        >
          {displayPanels.map((panel, idx) => (
            <div
              key={`${panel.id}-${idx}`}
              className="relative flex-shrink-0 w-[250px] sm:w-[290px] md:w-[330px] lg:w-[370px] xl:w-[400px] h-[350px] sm:h-[390px] md:h-[420px] lg:h-[450px] xl:h-[470px] overflow-hidden border-r border-white/10 group/card select-none"
            >
              {/* Background Image - Clean, no popup on click */}
              <img
                src={panel.image}
                alt={panel.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/card:scale-108"
                loading="eager"
                draggable={false}
              />

              {/* Dark Vignette Overlay for crisp typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/30 pointer-events-none group-hover/card:from-black/75 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent pointer-events-none" />

              {/* Pillar Label: Clean typography at top without chip */}
              <div className="absolute top-6 sm:top-8 md:top-10 left-5 sm:left-7 z-20 pointer-events-none">
                <span className="text-sm sm:text-base md:text-lg font-bold tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] group-hover/card:text-[#FBBC00] transition-colors duration-300">
                  {panel.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Massive Serif Typography Overlay ("Begin Your Growth Journey") */}
        <div className="absolute bottom-5 sm:bottom-7 lg:bottom-9 left-0 right-0 z-20 pointer-events-none">
          <div className="container-editorial">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white tracking-tight leading-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)] select-none">
              Begin Your Growth Journey
            </h1>
          </div>
        </div>
      </div>

      {/* LOWER JOURNEY SECTION (Headline continuation + CTA) */}
      <div className="container-editorial relative z-10">
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-10 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Mission Description & Aligned Action Buttons */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <RevealElement animation="fade-up" delay={0.1}>
              <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-normal">
                We are committed to providing you with{" "}
                <strong className="font-bold text-[#090a10]">
                  Global Integrated Digital Marketing
                </strong>{" "}
                & AdTech growth architecture.
              </p>
            </RevealElement>

            <RevealElement animation="fade-up" delay={0.2}>
              <div className="flex items-center">
                {/* Cobalt Blue 'Let's talk!' CTA Button */}
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#0052FF] hover:bg-[#0040CC] text-white font-bold text-sm sm:text-base tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 hover:translate-y-[-1px] active:translate-y-0"
                >
                  <span>Let&apos;s talk!</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </RevealElement>

            {/* Keyword Pills / Editorial Quality Guarantee */}
            <RevealElement animation="fade-up" delay={0.3}>
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>Tier-1 Direct Media Buying</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-[#0052FF] flex-shrink-0" />
                  <span>AI Real-Time Optimization</span>
                </div>
              </div>
            </RevealElement>
          </div>

          {/* Right Column: Continuation of Giant Serif Headline */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <RevealElement animation="fade-up" delay={0.15}>
              <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.6rem] font-normal text-[#090a10] tracking-tight leading-tight select-none sm:whitespace-nowrap">
                Grow With Us.
              </h2>
            </RevealElement>

            <RevealElement animation="fade-up" delay={0.25}>
              <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Lynxmobi is a global mobile advertising platform offering user acquisition, app monetization, and creative solutions for advertisers and publishers worldwide.
              </p>
            </RevealElement>
          </div>
        </div>
      </div>
    </section>
  );
}
