"use client";

import { motion } from "framer-motion";
import { navItems } from "@/lib/config";
import type { SectionId } from "@/lib/types";

interface NavigationProps {
  activeSection: SectionId;
  onSectionChange: (id: SectionId) => void;
}

export function Navigation({
  activeSection,
  onSectionChange,
}: NavigationProps) {
  return (
    <nav className="grid grid-cols-6 gap-1.5 py-1 min-w-0">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;

        return (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id as SectionId)}
            className={`
              font-display relative w-full min-w-0 text-left uppercase tracking-[0.14em]
              text-[10px] sm:text-[11px] px-2 sm:px-3 py-2 border
              transition-all duration-150 cursor-pointer
              ${
                isActive
                  ? "text-crt-text-bright border-crt-border-bright bg-[linear-gradient(to_bottom,rgba(214,231,240,0.14),rgba(92,122,136,0.14))] shadow-[inset_0_0_0_1px_rgba(237,245,250,0.22),0_0_10px_rgba(107,164,186,0.15)] text-glow-sm"
                  : "text-crt-text border-crt-border-bright/85 bg-[linear-gradient(to_bottom,rgba(18,26,34,0.54),rgba(8,12,16,0.9))] hover:text-crt-text-bright hover:border-crt-border-bright"
              }
            `}
            aria-pressed={isActive}
          >
            <span className="flex items-center justify-between gap-2 leading-none min-w-0">
              <span className="flex items-center gap-2 min-w-0">
                <motion.span
                  layoutId="nav-led"
                  className={`inline-block h-2 w-2 border ${
                    isActive
                      ? "border-crt-text-bright bg-crt-text-bright shadow-[0_0_8px_rgba(226,245,252,0.8)]"
                      : "border-crt-border-bright bg-transparent"
                  }`}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                />
                <span className="truncate">{item.label}</span>
              </span>
              <span className="text-crt-text-bright/90 text-[9px] sm:text-[10px] shrink-0 tracking-[0.12em]">
                CH {navItems.indexOf(item) + 1}
              </span>
            </span>
            {isActive && (
              <span className="pointer-events-none absolute right-1.5 top-1/2 h-3.5 w-[2px] -translate-y-1/2 bg-crt-text-bright/85 shadow-[0_0_6px_rgba(237,245,250,0.65)]" />
            )}
          </button>
        );
      })}
    </nav>
  );
}
