"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TopPanel } from "./TopPanel";
import { BottomPanel } from "./BottomPanel";
import { Navigation } from "./Navigation";
import { ProfileImage } from "./ProfileImage";
import { CRTOverlay } from "./CRTOverlay";
import { siteConfig } from "@/lib/config";
import type { SectionId, ExperienceEntry, ProjectEntry } from "@/lib/types";
import { AboutSection } from "@/sections/AboutSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { TechExpertiseSection } from "@/sections/TechExpertiseSection";
import { ContactSection } from "@/sections/ContactSection";
import { ResumeSection } from "@/sections/ResumeSection";

interface PortfolioProps {
  experiences: ExperienceEntry[];
  projects: ProjectEntry[];
}

export function Portfolio({ experiences, projects }: PortfolioProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <AboutSection key="about" />;
      case "experience":
        return <ExperienceSection key="experience" entries={experiences} />;
      case "projects":
        return <ProjectsSection key="projects" entries={projects} />;
      case "expertise":
        return <TechExpertiseSection key="expertise" />;
      case "contact":
        return <ContactSection key="contact" />;
      case "resume":
        return <ResumeSection key="resume" />;
      default:
        return <AboutSection key="about" />;
    }
  };

  return (
    <div className="h-dvh w-screen flex flex-col overflow-hidden bg-crt-black">
      <div className="flex flex-col h-full w-full crt-frame border-x border-crt-border bg-crt-bg animate-flicker relative z-10">
        <CRTOverlay />

        {/* ═══ TOP PANEL (fixed) ═══ */}
        <div className="shrink-0">
          <TopPanel />
        </div>

        {/* ═══ MIDDLE PANEL (fills remaining space) ═══ */}
        <div className="flex-1 flex flex-col md:flex-row border-b border-t border-crt-border min-h-0 overflow-hidden">
          {/* Left: Profile Image */}
          <div className="relative z-30 hidden md:block md:w-[38%] lg:w-[35%] border-r border-crt-border shrink-0 overflow-hidden">
            <ProfileImage />
          </div>

          {/* Right: Navigation + Content */}
          <div className="relative z-30 flex-1 flex flex-col min-h-0 min-w-0 p-4">
            {/* Tagline (pinned) */}
            <h2 className="shrink-0 text-base sm:text-lg md:text-xl font-medium text-crt-text-bright leading-snug tracking-wide text-glow">
              {siteConfig.tagline}
            </h2>

            {/* Navigation (pinned) */}
            <div className="shrink-0">
              <Navigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>

            {/* Section Content — ONLY scrollable zone */}
            <div className="flex-1 min-h-0 overflow-y-auto mt-1 pr-1">
              <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
            </div>

            {/* Persistent email CTA (pinned) */}
            {activeSection !== "contact" && (
              <div className="shrink-0 mt-3 pt-3 border-t border-crt-border">
                <div className="inline-block bg-crt-email-bg px-4 py-2 group">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[10px] sm:text-xs text-crt-email-text tracking-wider font-bold"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ═══ BOTTOM PANEL (fixed) ═══ */}
        <div className="shrink-0">
          <BottomPanel />
        </div>
      </div>
    </div>
  );
}
