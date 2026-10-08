"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  splitBy?: "words" | "chars";
}

export function RevealText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  as: Component = "span",
  splitBy = "words",
}: RevealTextProps) {
  const items = splitBy === "words" ? text.split(" ") : text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      y: "115%",
      opacity: 0,
      rotateZ: 1.5,
    },
    visible: {
      y: "0%",
      opacity: 1,
      rotateZ: 0,
      transition: {
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Component className={cn("inline-block", className)}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="inline-flex flex-wrap"
      >
        {items.map((item, index) => (
          <span key={index} className="inline-block overflow-hidden py-1">
            <motion.span variants={child} className="inline-block">
              {item}
            </motion.span>
            {splitBy === "words" && index < items.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.span>
    </Component>
  );
}
