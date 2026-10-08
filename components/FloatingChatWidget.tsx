"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MessageSquareText, X, ArrowUpRight, Sparkles } from "lucide-react";

export function FloatingChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Contact Popover if open */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-88 rounded-3xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl p-5 text-slate-900 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Online Strategist
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-slate-700 p-1 rounded-full hover:bg-slate-100 transition-colors"
              aria-label="Close widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3">
            <h4 className="text-base font-extrabold text-[#090a10]">
              Ready to scale globally?
            </h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Connect with our cross-border media buyers and AdTech engineers for bespoke growth architecture.
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col gap-2">
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 px-4 rounded-xl bg-[#090a10] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#0052ff] transition-colors"
            >
              <span>Schedule Strategic Call</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="mailto:support@lynxmobi.com"
              className="w-full py-2 px-4 rounded-xl text-center text-xs font-semibold text-slate-600 hover:text-[#0052ff] hover:bg-slate-50 transition-colors"
            >
              support@lynxmobi.com
            </a>
          </div>
        </div>
      )}

      {/* Primary Floating Circle Button */}
      <div className="relative group">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Let's talk"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#090a10] text-white shadow-xl hover:shadow-2xl hover:bg-[#0052ff] flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-white/20"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform rotate-0 group-hover:rotate-90 duration-200" />
          ) : (
            <MessageSquareText className="w-6 h-6 transition-transform group-hover:scale-110 duration-200 fill-white" />
          )}
        </button>

        {/* Hover Pill Tooltip */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block whitespace-nowrap">
            <div className="px-3 py-1.5 rounded-full bg-[#090a10] text-white text-xs font-bold tracking-wide shadow-md border border-slate-800">
              Let&apos;s talk!
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
