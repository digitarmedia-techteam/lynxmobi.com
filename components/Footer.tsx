"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { navigationConfig } from "@/data/navigation";
import { servicesData } from "@/data/services";
import { companyData } from "@/data/company";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#090a10] text-white pt-20 pb-12 border-t border-white/10 select-none">
      <div className="container-editorial">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Left Column: Say hi & Let's connect */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-block mb-6 group">
                <img
                  src="/lynx-logo-white.png"
                  alt="LynxMobi"
                  className="h-8 sm:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>

              <h2 className="text-4xl sm:text-5xl font-black tracking-tight uppercase text-white mb-2">
                say hi!
              </h2>
              <p className="text-xs uppercase font-bold tracking-widest text-blue-400 mb-6">
                LET&apos;S CONNECT
              </p>

              <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
                Lynxmobi is a leading digital marketing partner with access to diverse traffic resources across major markets worldwide.

              </p>

              {/* Social and Direct Links */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.linkedin.com/company/lynxmobi-limited/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-[#0052ff] hover:border-[#0052ff] transition-all"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c.92 0 1.66-.74 1.66-1.66 0-.91-.74-1.66-1.66-1.66-.92 0-1.67.75-1.67 1.66 0 .92.75 1.66 1.67 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Columns: Sitemap, Services, Partnership Enquiry */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Sitemap Column */}
            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">
                SITEMAP
              </p>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Core Services Column */}
            <div>
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">
                SERVICES
              </p>
              <ul className="space-y-2.5 text-sm">
                {servicesData
                  .filter((svc) => svc.id !== "local-media" && svc.id !== "integrated" && svc.id !== "global-media")
                  .map((svc) => (
                    <li key={svc.id}>
                      <Link
                        href={`/services/${svc.slug}`}
                        className="text-slate-300 hover:text-white transition-colors"
                      >
                        {svc.shortTitle}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Partnership Enquiry Column */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-xs uppercase font-bold tracking-widest text-slate-400 mb-4">
                PARTNERSHIP ENQUIRY
              </p>
              <a
                href={`mailto:${navigationConfig.email}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-blue-400 transition-colors"
              >
                <span>{navigationConfig.email}</span>
                <ArrowUpRight className="w-4 h-4 text-[#0052ff]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-4">
            <p>© 2026 {companyData.name}. All rights reserved.</p>
            <span className="text-slate-700">•</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#0052ff] group-hover:text-white transition-all">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
