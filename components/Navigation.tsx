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
    <nav className="flex flex-col gap-0.5 py-3">
      {navItems.map((item) => {
        const isActive = activeSection === item.id;
        const isResume = item.id === "resume";

        return (
          <button
            key={item.id}
            onClick={() => {
              if (isResume) {
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "Aayushker_Singh_Resume.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                return;
              }
              onSectionChange(item.id as SectionId);
            }}
            className={`
              relative text-left text-xs sm:text-sm tracking-wider py-1 px-1
              transition-colors duration-200 cursor-pointer
              ${
                isActive
                  ? "text-crt-text-bright text-glow-sm font-medium"
                  : "text-crt-text-muted hover:text-crt-text"
              }
            `}
          >
            <span className="flex items-center gap-2">
              {isActive ? (
                <motion.span
                  layoutId="nav-bullet"
                  className="text-crt-text-bright text-glow-sm"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 30,
                  }}
                >
                  •
                </motion.span>
              ) : (
                <span className="text-transparent">•</span>
              )}
              {item.label}
              {isResume && (
                <span className="text-crt-text-dim text-[10px] ml-1">↓</span>
              )}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
