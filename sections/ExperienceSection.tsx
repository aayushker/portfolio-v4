"use client";

import { motion } from "framer-motion";
import type { ExperienceEntry } from "@/lib/types";

interface Props {
  entries: ExperienceEntry[];
}

export function ExperienceSection({ entries }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="text-xs tracking-[0.15em] text-crt-text-dim uppercase">
        EXPERIENCE // SERVICE RECORD
      </div>

      {entries.length === 0 ? (
        <p className="text-xs text-crt-text-dim tracking-wider">
          [ NO DATA AVAILABLE ]
        </p>
      ) : (
        <div className="space-y-4">
          {entries.map((entry, i) => (
            <motion.div
              key={entry.slug}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="border-l-2 border-crt-border-bright pl-3 space-y-1.5"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-[10px] text-crt-glow text-glow-sm font-medium">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-xs sm:text-sm text-crt-text-bright font-medium tracking-wide">
                  {entry.company}
                </span>
              </div>
              <div className="text-[10px] sm:text-xs text-crt-text-muted tracking-wider uppercase">
                {entry.role} — {entry.duration}
              </div>
              <p className="text-xs sm:text-sm text-crt-text leading-relaxed">
                {entry.description}
              </p>
              {entry.highlights.length > 0 && (
                <ul className="space-y-0.5 pt-1">
                  {entry.highlights.map((h, j) => (
                    <li
                      key={j}
                      className="text-[11px] sm:text-xs text-crt-text-dim flex items-start gap-1.5"
                    >
                      <span className="text-crt-border-bright mt-[2px] shrink-0">
                        ▸
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
