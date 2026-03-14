"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/lib/config";
import { SkillMatrix } from "./SkillMatrix";

function getFormattedDate(): string {
  const now = new Date();
  const day = String(now.getDate()).padStart(2, "0");
  const month = now.getMonth() + 1;
  const year = String(now.getFullYear()).slice(-2);
  return `Y D${day}-${month}.${year}`;
}

export function TopPanel() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(getFormattedDate());
  }, []);

  return (
    <div className="border-b border-crt-border">
      {/* Row 1: Name + Signal + Battery */}
      <div className="grid grid-cols-3 items-center px-3 sm:px-4 py-2 sm:py-2.5 border-b border-crt-border">
        <span className="font-display text-[11px] sm:text-[13px] tracking-[0.24em] text-crt-text-bright font-medium text-glow-sm leading-none uppercase">
          {siteConfig.name}
        </span>
        <span className="font-display text-[10px] sm:text-[11px] tracking-[0.2em] text-crt-text-bright text-center uppercase font-medium text-glow-sm leading-none">
          {siteConfig.signal}
        </span>
        <div className="flex justify-end">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            className="text-crt-text-bright"
          >
            <rect
              x="0.5"
              y="0.5"
              width="20"
              height="13"
              rx="2"
              stroke="currentColor"
              strokeWidth="1"
            />
            <rect
              x="21"
              y="4"
              width="2.5"
              height="6"
              rx="0.5"
              fill="currentColor"
            />
            <rect
              x="2.5"
              y="2.5"
              width="14"
              height="9"
              rx="1"
              fill="currentColor"
              opacity="0.7"
            />
          </svg>
        </div>
      </div>

      {/* Row 2: Role + Date + Skill Matrix */}
      <div className="flex items-start justify-between gap-3 px-3 sm:px-4 py-2 sm:py-2.5">
        <div className="min-w-0">
          <div className="font-display text-[9px] sm:text-[11px] tracking-[0.24em] text-crt-text-bright uppercase mb-1 font-semibold text-glow-sm">
            {siteConfig.role}
          </div>
          <div className="font-display text-[34px] sm:text-[45px] leading-none font-medium tracking-[0.11em] text-white text-glow-bright animate-text-flicker whitespace-nowrap">
            {date}
          </div>
        </div>
        <SkillMatrix />
      </div>
    </div>
  );
}
