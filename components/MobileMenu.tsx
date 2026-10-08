"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ArrowUpRight, Mail } from "lucide-react";
import { navigationConfig } from "@/data/navigation";
import { MagneticButton } from "./MagneticButton";
import { Marquee } from "./Marquee";
import { companyData } from "@/data/company";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-[#090a10] text-white overflow-y-auto"
        >
          {/* Header Bar inside Mobile Menu */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
            <Link href="/" onClick={onClose} className="flex items-center">
              <img
                src="/lynx-logo-white.png"
                alt="LynxMobi"
                className="h-6 sm:h-7 w-auto object-contain"
              />
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8 flex flex-col justify-between">
            <nav className="flex flex-col space-y-4">
              {navigationConfig.mainNav.map((item, idx) => {
                if (item.children) {
                  return (
                    <div key={item.title} className="border-b border-white/10 pb-4">
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="flex items-center justify-between w-full text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors py-2 text-left"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`w-6 h-6 transition-transform duration-300 ${servicesOpen ? "rotate-180 text-[#0052ff]" : "text-slate-400"
                            }`}
                        />
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pl-4 mt-3 space-y-3 overflow-hidden"
                          >
                            {item.children.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                onClick={onClose}
                                className="block py-2 text-lg font-medium text-slate-300 hover:text-white transition-colors"
                              >
                                {sub.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    className="border-b border-white/10 pb-4"
                  >
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between text-2xl sm:text-3xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors py-2"
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight className="w-5 h-5 text-slate-500" />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions & Socials */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                  Direct Inquiries
                </p>
                <a
                  href={`mailto:${navigationConfig.email}`}
                  className="flex items-center gap-2 text-base font-medium text-white hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#0052ff]" />
                  {navigationConfig.email}
                </a>
              </div>

              <div>
                <MagneticButton
                  href="/contact"
                  onClick={onClose}
                  variant="primary"
                  className="w-full text-center"
                  icon={<ArrowUpRight className="w-4 h-4" />}
                >
                  Let&apos;s talk!
                </MagneticButton>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                {navigationConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs uppercase tracking-wider text-slate-400 hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Marquee Ticker at the bottom of mobile menu */}
          <div className="py-3 bg-[#0052ff] text-white">
            <Marquee speed={18} fadeEdges={false} itemClassName="text-xs font-bold text-white tracking-widest">
              {companyData.multilingualGreetings.map((greeting, i) => (
                <span key={i} className="inline-flex items-center gap-4">
                  {greeting} • LET&apos;S TALK! • GROWTH WITH US
                </span>
              ))}
            </Marquee>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
