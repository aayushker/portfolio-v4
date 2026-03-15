"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const aboutMetadata = [
  { label: "STATUS", value: "OPEN TO OPPORTUNITIES" },
  { label: "FOCUS", value: "BACKEND, GENAI, SYSTEM DESIGN" },
  { label: "STACK", value: "NEXT.JS, DJANGO, POSTGRESQL, TYPESCRIPT" },
  { label: "LOCATION", value: "INDIA" },
];

const quickStats = [
  { label: "PROBLEMS SOLVED", value: "700+" },
  { label: "PROJECTS BUILT", value: "DEVFOOLU, FOODY, RETROELECTRO" },
  { label: "INTERESTS", value: "SEARCH, EMBEDDINGS, ARCHITECTURE" },
];

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-3.5"
    >
      <div className="font-display tracking-[0.17em] uppercase flex items-center gap-2 mb-2">
        <span className="text-[11px] text-crt-text-bright text-glow-sm">
          ABOUT
        </span>
        <span className="text-[10px] text-crt-text-dim">PERSONAL DOSSIER</span>
      </div>
      <p className="text-[14px] sm:text-[15px] leading-[1.55] text-crt-text tracking-[0.03em] mt-1.5">
        {siteConfig.about}
      </p>

      <div className="border border-crt-border bg-[linear-gradient(to_bottom,rgba(12,18,25,0.45),rgba(7,11,16,0.78))] px-3 py-2.5 sm:px-3.5 sm:py-3 space-y-3">
        <div className="font-display tracking-[0.18em] uppercase flex items-center gap-2 mb-1">
          <span className="text-[10px] text-crt-text-bright text-glow-sm">
            METADATA
          </span>
          <span className="text-[9px] text-crt-text-dim">CURRENT PROFILE</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
          {aboutMetadata.map((item) => (
            <div key={item.label} className="min-w-0">
              <div className="font-display text-[9px] tracking-[0.18em] text-crt-text-muted uppercase mb-0.5">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.06em] text-crt-text-bright leading-[1.45] break-words">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border border-crt-border bg-[linear-gradient(to_bottom,rgba(11,17,23,0.4),rgba(7,11,16,0.76))] px-3 py-2.5 sm:px-3.5 sm:py-3 space-y-2">
        <div className="font-display tracking-[0.18em] uppercase flex items-center gap-2 mb-1">
          <span className="text-[10px] text-crt-text-bright text-glow-sm">
            MISSION
          </span>
          <span className="text-[9px] text-crt-text-dim">
            OPERATING PHILOSOPHY
          </span>
        </div>
        <p className="text-[11px] sm:text-[12px] leading-[1.55] text-crt-text tracking-[0.04em]">
          Building reliable software systems and AI-powered tools that turn
          complexity into usable products.
        </p>
      </div>

      <div className="border border-crt-border bg-[linear-gradient(to_bottom,rgba(12,18,25,0.45),rgba(7,11,16,0.78))] px-3 py-2.5 sm:px-3.5 sm:py-3 space-y-3">
        <div className="font-display tracking-[0.18em] uppercase flex items-center gap-2 mb-1">
          <span className="text-[10px] text-crt-text-bright text-glow-sm">
            QUICK STATS
          </span>
          <span className="text-[9px] text-crt-text-dim">SNAPSHOT</span>
        </div>

        <div className="space-y-2">
          {quickStats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col sm:flex-row sm:items-start sm:gap-2.5"
            >
              <div className="font-display text-[9px] sm:text-[10px] tracking-[0.14em] uppercase text-crt-text-muted shrink-0 sm:min-w-[132px] sm:pt-[2px]">
                {item.label}
              </div>
              <div className="text-[10px] sm:text-[11px] text-crt-text-bright tracking-[0.06em] leading-[1.45]">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-1.5">
        <div className="inline-block bg-crt-email-bg px-4 py-2.5 group border border-crt-border-bright/70">
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-display text-[10px] sm:text-xs text-crt-email-text tracking-[0.12em] font-semibold"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
