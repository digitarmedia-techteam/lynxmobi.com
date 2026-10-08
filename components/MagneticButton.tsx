"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "dark" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  strength?: number;
  icon?: React.ReactNode;
  ariaLabel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  strength = 0.35,
  icon,
  ariaLabel,
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = (clientX - centerX) * strength;
    const distanceY = (clientY - centerY) * strength;
    setPosition({ x: distanceX, y: distanceY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variantStyles = {
    primary:
      "bg-[#0052ff] hover:bg-[#003dc2] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 border border-transparent",
    dark: "bg-[#090a10] hover:bg-black text-white shadow-lg shadow-black/20 border border-white/10",
    white: "bg-white hover:bg-slate-50 text-[#090a10] shadow-md border border-slate-200",
    outline:
      "bg-transparent text-[#090a10] border border-slate-300 hover:border-[#0052ff] hover:text-[#0052ff] hover:bg-blue-50/30",
    ghost: "bg-transparent text-slate-700 hover:text-[#0052ff] hover:bg-blue-50/50 border border-transparent",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3.5 text-sm tracking-wide",
    lg: "px-8 py-4.5 text-base tracking-wide",
  };

  const content = (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 select-none overflow-hidden cursor-pointer",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2 font-semibold">
        {children}
        {icon && (
          <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            {icon}
          </span>
        )}
      </span>
      {/* Subtle shine backdrop */}
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} aria-label={ariaLabel} className="inline-block">
      {content}
    </button>
  );
}
