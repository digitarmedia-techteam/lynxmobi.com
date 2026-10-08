"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  service: ServiceItem;
  className?: string;
  featured?: boolean;
}

export function ServiceCard({ service, className, featured = false }: ServiceCardProps) {
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl transition-all duration-500 overflow-hidden",
        "bg-white border border-slate-200/90 hover:border-[#0052ff] hover:shadow-2xl hover:shadow-blue-500/10",
        featured && "lg:col-span-2 bg-gradient-to-br from-white to-blue-50/30",
        className
      )}
    >
      {/* Subtle background glow on hover */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-blue-400/10 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div>
        {/* Top Header: Number and Arrow */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-black tracking-widest text-[#0052ff] bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            {service.number}
          </span>
          <div className="w-10 h-10 rounded-full bg-slate-100 group-hover:bg-[#0052ff] text-slate-700 group-hover:text-white flex items-center justify-center transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#090a10] tracking-tight group-hover:text-[#0052ff] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="mt-2 text-xs uppercase font-semibold tracking-wider text-slate-500">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
          {service.heroDescription}
        </p>
      </div>

      {/* Bottom Features and Key Metric */}
      <div className="mt-8 pt-6 border-t border-slate-100">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.capabilities.slice(0, 2).map((cap, i) => (
            <span
              key={i}
              className="text-[11px] font-semibold text-slate-700 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60"
            >
              {cap.title}
            </span>
          ))}
        </div>

        {service.keyStats && service.keyStats.length > 0 && (
          <div className="flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-black text-[#0052ff]">
              {service.keyStats[0].value}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              {service.keyStats[0].label}
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
