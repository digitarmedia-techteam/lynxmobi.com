"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Marquee } from "./Marquee";
import { MagneticButton } from "./MagneticButton";
import { cn } from "@/lib/utils";

interface ContactCTAProps {
  className?: string;
}

export function ContactCTA({ className }: ContactCTAProps) {
  return (
    <section className={cn("relative overflow-hidden bg-[#090a10] text-white py-24 sm:py-32", className)}>
      {/* Cobalt Glow Accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-radial from-[#0052ff]/25 to-transparent blur-[120px] pointer-events-none" />

      {/* Multilingual Marquee Greeting Header */}
      <div className="border-y border-white/10 py-4 bg-white/[0.02] overflow-hidden">
        <Marquee speed={30} pauseOnHover={false} itemClassName="text-sm sm:text-base font-bold text-slate-400">
          {[
            { greeting: "Hello", badge: "Global Partnership", color: "text-blue-400" },
            { greeting: "你好", badge: "Mobile Advertising", color: "text-cyan-400" },
            { greeting: "こんにちは", badge: "Digital Marketing", color: "text-[#0052ff]" },
            { greeting: "Bonjour", badge: "Global Partnership", color: "text-blue-400" },
            { greeting: "Hola", badge: "Mobile Advertising", color: "text-cyan-400" },
            { greeting: "안녕하세요", badge: "Digital Marketing", color: "text-[#0052ff]" },
            { greeting: "Halo", badge: "Global Partnership", color: "text-blue-400" },
            { greeting: "नमस्ते", badge: "Mobile Advertising", color: "text-cyan-400" },
            { greeting: "مرحبًا", badge: "Digital Marketing", color: "text-[#0052ff]" },
            { greeting: "Привет", badge: "Global Partnership", color: "text-blue-400" },
            { greeting: "Hallo", badge: "Mobile Advertising", color: "text-cyan-400" },
            { greeting: "Olá", badge: "Digital Marketing", color: "text-[#0052ff]" },
          ].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 sm:gap-7">
              <span className="text-white font-black text-sm sm:text-base tracking-wide">
                {item.greeting}
              </span>
              <span className={cn("text-xs sm:text-sm uppercase tracking-widest font-extrabold", item.color)}>
                {item.badge}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff] shadow-xs shadow-blue-500 inline-block" />
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-editorial relative z-10 pt-16 sm:pt-20 text-center">
        {/* Oversized Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] max-w-4xl mx-auto">
          Start a wonderful journey and <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white">
            growth with us.
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We are committed to providing you with world-class integrated digital marketing, localized
          creative production, and tier-1 media buying across 200+ countries.
        </p>

        {/* Magnetic High-Impact CTA Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MagneticButton
            href="/contact"
            variant="primary"
            size="lg"
            className="text-base px-9 py-5"
            icon={<ArrowUpRight className="w-5 h-5" />}
          >
            Let&apos;s talk!
          </MagneticButton>

          <MagneticButton
            href="/services"
            variant="outline"
            size="lg"
            className="text-base px-8 py-5 text-white border-white/20 hover:border-white hover:text-white hover:bg-white/10"
          >
            Explore Services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
