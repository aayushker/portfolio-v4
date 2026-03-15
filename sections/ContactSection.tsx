"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config";

const contacts = [
  {
    label: "EMAIL",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "GITHUB",
    value: "github.com/aayushker",
    href: siteConfig.github,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/aayushker",
    href: siteConfig.linkedin,
  },
];

export function ContactSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="space-y-4"
    >
      <div className="font-display tracking-[0.17em] uppercase flex items-center gap-2 mb-4">
        <span className="text-[11px] text-crt-text-bright text-glow-sm">
          CONTACT
        </span>
        <span className="text-[10px] text-crt-text-dim">
          COMMUNICATION CHANNELS
        </span>
      </div>

      <div className="space-y-2.5">
        {contacts.map((contact, i) => (
          <motion.a
            key={contact.label}
            href={contact.href}
            target={contact.label !== "EMAIL" ? "_blank" : undefined}
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: i * 0.08 }}
            className="flex items-center gap-3 group py-1"
          >
            <span className="text-[10px] sm:text-xs text-crt-text-dim tracking-wider w-16 shrink-0 font-medium">
              {contact.label}
            </span>
            <span className="text-xs sm:text-sm text-crt-text group-hover:text-crt-text-bright transition-colors tracking-wide">
              {contact.value}
            </span>
            <span className="text-crt-text-bright text-[10px] opacity-0 group-hover:opacity-100 transition-opacity text-glow-sm">
              →
            </span>
          </motion.a>
        ))}
      </div>

      <div className="pt-2 border-t border-crt-border">
        <p className="text-xs text-crt-text-dim tracking-wide leading-relaxed">
          Open for collaboration on backend systems, AI/ML projects, and
          open-source contributions. Response time: ~24h.
        </p>
      </div>
    </motion.div>
  );
}
