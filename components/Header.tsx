"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { navigationConfig } from "@/data/navigation";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3 sm:py-3.5"
            : "bg-white/85 backdrop-blur-md border-b border-slate-200/40 py-4 sm:py-5"
        )}
      >
        <div className="container-editorial flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link href="/" className="group flex items-center select-none py-1">
            <img
              src="/lynx-logo.png"
              alt="LynxMobi"
              className="h-6 sm:h-7 md:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Right: Navigation (Only Home, Services, and About) */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navigationConfig.mainNav.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || (item.children && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors cursor-pointer",
                        isActive
                          ? "text-[#0052ff] bg-blue-50/60"
                          : "text-slate-800 hover:text-[#0052ff] hover:bg-slate-100/60"
                      )}
                    >
                      <span>{item.title}</span>
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-200",
                          servicesDropdownOpen ? "rotate-180 text-[#0052ff]" : "text-slate-400"
                        )}
                      />
                    </button>

                    {/* Services Dropdown Flyout - Simple clean text links only */}
                    <div
                      className={cn(
                        "absolute top-full right-0 sm:left-0 min-w-[230px] pt-2 transition-all duration-200 z-50",
                        servicesDropdownOpen
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                    >
                      <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-2xl p-2 space-y-0.5">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-4 py-2.5 rounded-xl text-sm font-semibold text-slate-800 hover:text-[#0052ff] hover:bg-blue-50/60 transition-colors"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-colors",
                    isActive
                      ? "text-[#0052ff] bg-blue-50/60"
                      : "text-slate-800 hover:text-[#0052ff] hover:bg-slate-100/60"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 rounded-full bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
}
