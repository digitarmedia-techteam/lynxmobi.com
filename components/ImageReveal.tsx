"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ImageRevealProps {
  src: string;
  alt: string;
  aspectRatio?: string;
  className?: string;
  caption?: string;
  overlayText?: string;
}

export function ImageReveal({
  src,
  alt,
  aspectRatio = "aspect-[16/10]",
  className,
  caption,
  overlayText,
}: ImageRevealProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl bg-slate-100", className)}>
      <motion.div
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className={cn("relative w-full overflow-hidden", aspectRatio)}
      >
        <motion.img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-105",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          )}
        />
        {/* Subtle hover gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {overlayText && (
          <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <span className="text-sm font-semibold tracking-wide uppercase text-blue-300">
              {overlayText}
            </span>
          </div>
        )}
      </motion.div>

      {caption && (
        <p className="mt-3 text-xs uppercase tracking-wider text-slate-500 font-medium">
          {caption}
        </p>
      )}
    </div>
  );
}
