"use client";

import React, { useEffect, useRef, useState } from "react";
import type Lenis from "lenis";
import { motion } from "framer-motion";
import {
  User,
  FolderGit2,
  Trophy,
  Mail,
  FileText,
  Code2,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
} from "./Icons";

export default function Dock() {
  const [activeSection, setActiveSection] = useState("hero");

  // While a dock click is animating, the scroll-spy is locked so the pill
  // stays on the clicked icon instead of flickering through intermediate
  // sections mid-flight.
  const navigationLock = useRef(false);
  const navigationToken = useRef(0);
  // After a click, the highlight stays pinned to that icon until the user
  // scrolls on their own (wheel / touch / keyboard).
  const pinnedSection = useRef<string | null>(null);

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "recognition", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // 40% of the viewport height — the visual reading line.
    const readingLine = () => window.innerHeight * 0.4;

    let ticking = false;
    const updateActive = () => {
      ticking = false;

      // Locked while a dock-click animation is running.
      if (navigationLock.current) return;

      // Keep the clicked icon highlighted until the user scrolls manually.
      if (pinnedSection.current) return;

      if (window.scrollY < 4) {
        setActiveSection("hero");
        return;
      }

      // Scroll-spy: the active section is the last one whose top has crossed
      // the reading line. Sections are in document order on the page.
      let current = sectionIds[0];
      for (const el of elements) {
        if (el.getBoundingClientRect().top <= readingLine()) {
          current = el.id;
        } else {
          break;
        }
      }

      // Snap to the last section at the very bottom of the page.
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActive);
        ticking = true;
      }
    };

    // Any deliberate user scroll releases the click-pin so the spy resumes.
    const releasePin = () => {
      pinnedSection.current = null;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    window.addEventListener("wheel", releasePin, { passive: true });
    window.addEventListener("touchstart", releasePin, { passive: true });
    window.addEventListener("keydown", releasePin);

    // Initial state at the top of the page.
    updateActive();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("wheel", releasePin);
      window.removeEventListener("touchstart", releasePin);
      window.removeEventListener("keydown", releasePin);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (!el) return;

    // Pin the clicked icon so no scroll-spy update can override it until the
    // user scrolls manually.
    pinnedSection.current = id;

    const token = ++navigationToken.current;
    navigationLock.current = true;

    // Release the lock only for the most recent navigation — a quick second
    // click wins and keeps its own highlight.
    const release = () => {
      if (navigationToken.current === token) {
        navigationLock.current = false;
      }
    };

    // Drive the scroll through the site's Lenis instance (published on window
    // by SmoothScroll.tsx). Fall back to native smooth scrolling when Lenis is
    // not mounted yet (first paint / reduced motion). A safety timer covers
    // animations that are interrupted and never fire onComplete.
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    if (lenis) {
      lenis.scrollTo(el, { duration: 1.2, onComplete: release });
      window.setTimeout(release, 1500);
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(release, 800);
    }
  };

  const navButtons = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code2 },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "recognition", label: "Recognition", icon: Trophy },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transform-gpu will-change-transform">
      <nav className="px-3.5 py-2.5 rounded-full border border-white/[0.12] bg-zinc-950/85 backdrop-blur-xl shadow-2xl shadow-black flex items-center gap-1.5 sm:gap-2">
        {navButtons.map((btn) => {
          const Icon = btn.icon;
          const isActive = activeSection === btn.id;
          return (
            <button
              key={btn.id}
              onClick={() => scrollTo(btn.id)}
              className="relative p-2.5 rounded-full transition-colors flex items-center justify-center text-zinc-400 hover:text-zinc-100"
              title={btn.label}
              aria-label={btn.label}
            >
              {isActive && (
                <motion.div
                  layoutId="activeDockPill"
                  className="absolute inset-0 rounded-full bg-zinc-800/90 border border-white/[0.15] backdrop-blur-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">
                <Icon
                  className={`w-4 h-4 transition-colors ${
                    isActive ? "text-amber-400" : "text-zinc-400"
                  }`}
                />
              </span>
            </button>
          );
        })}

        <div className="w-px h-5 bg-white/[0.1] mx-1 shrink-0" />

        <a
          href="https://github.com/subhamoydatta703"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-colors"
          title="GitHub"
          aria-label="GitHub"
        >
          <GithubIcon className="w-4 h-4" />
        </a>

        <a
          href="https://www.linkedin.com/in/subhamoy-datta"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-colors"
          title="LinkedIn"
          aria-label="LinkedIn"
        >
          <LinkedinIcon className="w-4 h-4" />
        </a>

        <a
          href="https://x.com/codebysubhamoy"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-zinc-400 hover:text-zinc-100 hover:bg-white/[0.05] transition-colors"
          title="Twitter (X)"
          aria-label="Twitter (X)"
        >
          <XIcon className="w-4 h-4" />
        </a>

        <a
          href="https://drive.google.com/file/d/15dmF8ILRUQKQm7NBvosj_QlJHCEoK0K-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-zinc-400 hover:text-amber-400 hover:bg-white/[0.05] transition-colors"
          title="Resume"
          aria-label="Resume"
        >
          <FileText className="w-4 h-4" />
        </a>
      </nav>
    </div>
  );
}
