"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { skills } from "@/lib/config";

const MAX_LEVEL = 10;

export function SkillMatrix() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % skills.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const skill = skills[index];
  const safeLevel = Math.min(Math.max(skill.level, 0), MAX_LEVEL);

  return (
    <div className="text-right min-w-[158px] sm:min-w-[186px] pt-0.5">
      <div className="font-display text-[9px] sm:text-[10px] tracking-[0.22em] text-crt-text-bright uppercase mb-0.5 font-semibold text-glow-sm">
        SKILL
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="font-display"
        >
          <div className="text-[9px] sm:text-[11px] tracking-[0.16em] text-crt-text-bright uppercase mb-1 font-semibold text-glow-sm">
            {skill.name}
          </div>
          <div className="flex items-center justify-end gap-1.5 leading-none">
            <span className="flex items-center gap-[2px]">
              {Array.from({ length: MAX_LEVEL }).map((_, i) => {
                const isFilled = i < safeLevel;
                return (
                  <span
                    key={i}
                    className={`inline-block h-[8px] sm:h-[9px] w-[5px] sm:w-[6px] border ${
                      isFilled
                        ? "bg-crt-text-bright border-crt-text-bright/85 shadow-[0_0_4px_rgba(233,244,250,0.45)]"
                        : "bg-transparent border-crt-border-bright/70"
                    }`}
                  />
                );
              })}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.12em] text-crt-text-bright">
              {skill.level}/10
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
