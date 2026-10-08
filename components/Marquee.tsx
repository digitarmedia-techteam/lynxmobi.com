"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children?: React.ReactNode;
  items?: (string | React.ReactNode)[];
  direction?: "left" | "right";
  speed?: number; // duration in seconds
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
  fadeEdges?: boolean;
}

export function Marquee({
  children,
  items,
  direction = "left",
  speed = 30,
  pauseOnHover = true,
  className,
  itemClassName,
  fadeEdges = true,
}: MarqueeProps) {
  const content = items ? (
    <div className="flex items-center gap-8 shrink-0">
      {items.map((item, idx) => (
        <span
          key={idx}
          className={cn(
            "inline-flex items-center gap-8 text-sm md:text-base font-medium uppercase tracking-wider text-slate-500 whitespace-nowrap",
            itemClassName
          )}
        >
          {item}
          <span className="w-1.5 h-1.5 rounded-full bg-[#0052ff]/60 inline-block" />
        </span>
      ))}
    </div>
  ) : (
    <div className={cn("flex items-center gap-8 shrink-0", itemClassName)}>{children}</div>
  );

  return (
    <div
      className={cn(
        "group relative flex overflow-hidden select-none w-full",
        fadeEdges && "[mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 items-center gap-8 min-w-max",
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={
          {
            "--marquee-duration": `${speed}s`,
          } as React.CSSProperties
        }
      >
        {content}
        {content}
      </div>
    </div>
  );
}
