"use client";

import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const sectionIds = ["hero", "about", "skills", "projects", "recognition", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Use IntersectionObserver: 0 forced reflows, runs off-main-thread
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (visibleEntries.length > 0) {
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -40% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Throttled bottom check using requestAnimationFrame
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 60
          ) {
            setActiveSection("contact");
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
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
