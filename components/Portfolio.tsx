"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { TopPanel } from "./TopPanel";
import { BottomPanel } from "./BottomPanel";
import { Navigation } from "./Navigation";
import { ProfileImage } from "./ProfileImage";
import { CRTOverlay } from "./CRTOverlay";
import { StartupLoader } from "./StartupLoader";
import { sectionHeadlines } from "@/lib/config";
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
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [loaderPhase, setLoaderPhase] = useState<
    "searching" | "locking" | "located"
  >("searching");

  useEffect(() => {
    const lockTimer = setTimeout(() => {
      setLoaderPhase("locking");
    }, 4000);

    const locateTimer = setTimeout(() => {
      setLoaderPhase("located");
    }, 4700);

    const doneTimer = setTimeout(() => {
      setLoaderVisible(false);
    }, 5700);

    return () => {
      clearTimeout(lockTimer);
      clearTimeout(locateTimer);
      clearTimeout(doneTimer);
    };
  }, []);

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
    <div className="h-dvh w-screen flex flex-col overflow-hidden bg-crt-black px-1.5 py-1.5 sm:p-2">
      <StartupLoader phase={loaderPhase} visible={loaderVisible} />

      <div
        className={`flex flex-col h-full w-full crt-frame crt-panel-surface border border-crt-border bg-crt-bg animate-flicker relative z-10 transition-opacity duration-500 ${
          loaderVisible ? "opacity-0" : "opacity-100"
        }`}
      >
        <CRTOverlay />

        {/* ═══ TOP PANEL (fixed) ═══ */}
        <div className="relative z-30 shrink-0">
          <TopPanel />
        </div>

        {/* ═══ MIDDLE PANEL (fills remaining space) ═══ */}
        <div className="flex-1 flex flex-col md:flex-row border-b border-t border-crt-border min-h-0 overflow-hidden">
          {/* Left: Profile Image */}
          <div className="relative z-30 hidden md:block md:w-[41%] lg:w-[39%] border-r border-crt-border shrink-0 overflow-hidden">
            <ProfileImage />
          </div>

          {/* Right: Content + Control Deck */}
          <div className="relative z-30 flex-1 flex flex-col min-h-0 min-w-0 p-3 sm:p-4 md:px-4 md:py-3.5 bg-[linear-gradient(to_bottom,rgba(16,24,33,0.35),rgba(8,12,17,0.95)),repeating-linear-gradient(0deg,rgba(164,188,199,0.035)_0,rgba(164,188,199,0.035)_1px,transparent_1px,transparent_3px)]">
            {/* Section Content Box */}
            <div className="flex-1 min-h-0 flex flex-col border border-crt-border-bright/70 bg-[linear-gradient(to_bottom,rgba(10,16,21,0.84),rgba(7,11,16,0.94))] px-3 py-3 sm:px-4 sm:py-3.5">
              <h2 className="font-display shrink-0 text-[17px] sm:text-[23px] md:text-[30px] font-medium text-crt-text-bright leading-[1.22] tracking-[0.055em] text-glow max-w-[96%] pr-2">
                {sectionHeadlines[activeSection]}
              </h2>

              <div className="flex-1 min-h-0 overflow-y-auto mt-2 pr-1.5">
                <AnimatePresence mode="wait">{renderSection()}</AnimatePresence>
              </div>
            </div>

            {/* Vertical CRT button stack */}
            <div className="shrink-0 mt-2.5 border border-crt-border bg-[linear-gradient(to_bottom,rgba(12,18,25,0.56),rgba(7,12,16,0.95))] p-2">
              <Navigation
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>
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
