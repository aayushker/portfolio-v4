"use client";

import { motion } from "framer-motion";

export function ResumeSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="text-xs tracking-[0.15em] text-crt-text-dim uppercase">
        RESUME // DOCUMENT RETRIEVAL
      </div>

      <p className="text-xs sm:text-sm text-crt-text leading-relaxed tracking-wide">
        Download the latest compiled version of my professional dossier in
        portable document format.
      </p>

      <div className="border border-crt-border p-3 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-crt-text-dim tracking-wider">
            FILE:
          </span>
          <span className="text-[10px] text-crt-text tracking-wide">
            Aayushker_Singh_Resume.pdf
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-crt-text-dim tracking-wider">
            STATUS:
          </span>
          <span className="text-[10px] text-crt-glow text-glow-sm">READY</span>
        </div>
      </div>

      <a
        href="/resume.pdf"
        download="Aayushker_Singh_Resume.pdf"
        className="inline-block text-[10px] sm:text-xs text-crt-text-bright border border-crt-border-bright px-4 py-2 tracking-wider hover:text-crt-text-bright hover:border-crt-text-bright transition-colors text-glow-sm"
      >
        [ DOWNLOAD RESUME.PDF ]
      </a>

      <p className="text-[9px] text-crt-text-dim tracking-wider">
        Place resume at: /public/resume.pdf
      </p>
    </motion.div>
  );
}
