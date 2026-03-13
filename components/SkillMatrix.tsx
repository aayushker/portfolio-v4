"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "@/lib/config";

function getProgressBar(level: number, max: number = 10): string {
  return "*".repeat(level) + "*".repeat(max - level);
}

function getFilledBar(
  level: number,
  max: number = 10,
): { filled: string; empty: string } {
  return { filled: "*".repeat(level), empty: "*".repeat(max - level) };
}

export function SkillMatrix() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const skill = skills[index];

  return (
    <div className="text-right min-w-[200px] sm:min-w-[250px]">
      <div className="text-[3px] sm:text-xs tracking-[0.18em] text-crt-text uppercase mb-1.5 font-semibold text-glow-sm">
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
          <div className="text-xs sm:text-sm tracking-[0.14em] text-crt-text-bright uppercase mb-1 font-semibold text-glow-sm">
            {skill.name}
          </div>
          <div className="text-xs sm:text-base flex items-center justify-end gap-1.5">
            <span className="text-crt-text-bright text-glow-sm tracking-[0.14em]">
              {getFilledBar(skill.level).filled}
            </span>
            <span className="text-crt-text tracking-[0.14em]">
              {getFilledBar(skill.level).empty}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
