"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  tag?: string;
  title: string | React.ReactNode;
  subtitle?: string | React.ReactNode;
  align?: "left" | "center" | "right";
  theme?: "light" | "dark";
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

export function SectionHeading({
  tag,
  title,
  subtitle,
  align = "left",
  theme = "light",
  className,
  tagClassName,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("flex flex-col max-w-4xl", alignmentClasses[align], className)}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase",
            isDark
              ? "bg-white/10 text-blue-400 border border-white/15"
              : "bg-blue-50 text-[#0052ff] border border-blue-100",
            tagClassName
          )}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff] animate-pulse" />
          {tag}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08]",
          isDark ? "text-white" : "text-[#090a10]",
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "mt-5 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl",
            isDark ? "text-slate-400" : "text-slate-600",
            subtitleClassName
          )}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
