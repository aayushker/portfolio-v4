"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/lib/config";

export function TechExpertiseSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="font-display tracking-[0.17em] uppercase flex items-center gap-2 mb-4">
        <span className="text-[11px] text-crt-text-bright text-glow-sm">TECHNICAL EXPERTISE</span>
        <span className="text-[10px] text-crt-text-dim">CAPABILITY MATRIX</span>
      </div>

      <div className="space-y-3">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: i * 0.08 }}
            className="space-y-1.5"
          >
            <div className="text-[10px] text-crt-glow tracking-[0.2em] uppercase text-glow-sm font-medium">
              ┌ {group.category}
            </div>
            <div className="flex flex-wrap gap-1.5 pl-2 border-l border-crt-border">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-crt-text border border-crt-border px-2.5 py-1 tracking-wide hover:border-crt-border-bright hover:text-crt-text-bright transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
