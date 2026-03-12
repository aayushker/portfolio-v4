"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "@/lib/config";

function getProgressBar(level: number, max: number = 10): string {
  return "*".repeat(level) + "*".repeat(max - level);
}

function getFilledBar(level: number, max: number = 10): { filled: string; empty: string } {
  return { filled: "*".repeat(level), empty: "*".repeat(max - level) };
}

export function SkillMatrix() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const skill = skills[index];

  return (
    <div className="text-right min-w-[180px] sm:min-w-[230px]">
      <div className="text-[9px] sm:text-[10px] tracking-[0.15em] text-crt-text-dim uppercase mb-1">
        SKILL
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="font-mono"
        >
          <div className="text-[10px] sm:text-xs tracking-wider text-crt-text-muted uppercase mb-0.5">
            {skill.name}
          </div>
          <div className="text-xs sm:text-sm flex items-center justify-end gap-1">
            <span className="text-crt-text-bright text-glow-sm tracking-[0.1em]">
              {getFilledBar(skill.level).filled}
            </span>
            <span className="text-crt-text-dim tracking-[0.1em]">
              {getFilledBar(skill.level).empty}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
