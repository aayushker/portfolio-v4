"use client";

import { motion } from "framer-motion";
import type { ProjectEntry } from "@/lib/types";

interface Props {
  entries: ProjectEntry[];
}

export function ProjectsSection({ entries }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="text-xs tracking-[0.15em] text-crt-text-dim uppercase">
        PROJECTS // ACTIVE DEPLOYMENTS
      </div>

      {entries.length === 0 ? (
        <p className="text-xs text-crt-text-dim tracking-wider">
          [ NO DATA AVAILABLE ]
        </p>
      ) : (
        <div className="space-y-3">
          {entries.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="border border-crt-border p-3 space-y-2 hover:border-crt-border-bright transition-colors"
            >
              {/* Header */}
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-[9px] text-crt-text-dim tracking-wider shrink-0">
                    PROJECT:
                  </span>
                  <span className="text-xs sm:text-sm text-crt-text-bright font-medium tracking-wide text-glow-sm">
                    {project.title}
                  </span>
                </div>
                <span className="text-[8px] sm:text-[9px] text-crt-text-dim tracking-wider shrink-0">
                  {project.type}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-crt-text leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-1">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs text-crt-text-muted border border-crt-border px-1.5 py-0.5 tracking-wider"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2 pt-1">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-xs text-crt-text border border-crt-border-bright px-2.5 py-1.5 tracking-wider hover:text-crt-text-bright hover:border-crt-text-bright transition-colors"
                  >
                    [ ACCESS REPOSITORY ]
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] sm:text-xs text-crt-text border border-crt-border-bright px-2.5 py-1.5 tracking-wider hover:text-crt-text-bright hover:border-crt-text-bright transition-colors"
                  >
                    [ DEPLOY LIVE NODE ]
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
