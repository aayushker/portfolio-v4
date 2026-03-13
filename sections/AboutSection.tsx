"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

export function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="text-xs tracking-[0.15em] text-crt-text-dim uppercase">
        ABOUT // PERSONAL DOSSIER
      </div>
      <p className="text-sm leading-relaxed text-crt-text tracking-wide">
        {siteConfig.about}
      </p>

      <div className="pt-2">
        <div className="inline-block bg-crt-email-bg px-4 py-2.5 group">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-xs sm:text-sm text-crt-email-text tracking-wider font-bold"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
