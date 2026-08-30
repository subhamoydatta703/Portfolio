"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  XIcon,
  LeetCodeIcon,
} from "./Icons";

const navItems = [
  { name: "About", id: "about", num: "01" },
  { name: "Projects", id: "projects", num: "02" },
  { name: "Recognition", id: "recognition", num: "03" },
  { name: "Contact", id: "contact", num: "04" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/subhamoydatta703",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/subhamoy-datta",
    icon: LinkedinIcon,
  },
  {
    name: "X",
    href: "https://x.com/codebysubhamoy",
    icon: XIcon,
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/26W5VCTCTA",
    icon: LeetCodeIcon,
  },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems.map((item) => document.getElementById(item.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white">
          <a href="#">Subhamoy Datta</a>
        </h1>
        <h2 className="mt-3 text-lg lg:text-xl font-medium tracking-tight text-[#b45309]">
          GenAI Backend Developer
        </h2>
        <p className="mt-4 max-w-xs text-sm leading-normal text-white/55">
          Building and deploying production AI systems: RAG pipelines,
          LLM-powered backends, and agent orchestration. B.Tech CSE (AI &amp; ML) student.
        </p>

        <div className="mt-6">
          <a
            href="https://drive.google.com/file/d/15dmF8ILRUQKQm7NBvosj_QlJHCEoK0K-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#b45309] text-white text-xs font-medium tracking-wider uppercase hover:bg-[#92400e] transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </a>
        </div>

        <nav className="hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max space-y-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className={`group flex items-center py-1 text-xs uppercase tracking-widest transition-colors ${
                      isActive ? "text-white font-medium" : "text-white/40 hover:text-white/80"
                    }`}
                  >
                    <span
                      className={`mr-3 font-mono text-[11px] ${
                        isActive ? "text-[#b45309]" : "text-white/20 group-hover:text-[#b45309]"
                      }`}
                    >
                      {item.num}.
                    </span>
                    <span className="relative">
                      {item.name}
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#b45309]" />
                      )}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-white/40 hover:text-[#b45309] transition-colors"
              aria-label={`${social.name} (opens in a new tab)`}
            >
              <social.icon className="w-5 h-5" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
