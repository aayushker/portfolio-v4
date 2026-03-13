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
      <div className="grid grid-cols-3 items-center px-4 py-2.5 border-b border-crt-border">
        <span className="text-sm sm:text-base tracking-[0.2em] text-white font-semibold text-glow-sm">
          {siteConfig.name}
        </span>
        <span className="text-[10px] sm:text-xs tracking-wider text-crt-text text-center uppercase font-medium text-glow-sm">
          {siteConfig.signal}
        </span>
        <div className="flex justify-end">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
            fill="none"
            className="text-crt-text"
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
      <div className="flex items-start justify-between px-4 py-3">
        <div>
          <div className="text-[10px] sm:text-xs tracking-[0.2em] text-crt-text uppercase mb-1.5 font-semibold text-glow-sm">
            {siteConfig.role}
          </div>
          <div className="text-2xl sm:text-3xl font-normal tracking-wider text-white text-glow-bright animate-text-flicker">
            {date}
          </div>
        </div>
        <SkillMatrix />
      </div>
    </div>
  );
}
