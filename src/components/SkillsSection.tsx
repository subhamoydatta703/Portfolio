"use client";

import { useState } from "react";
import { Code2 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { glassCardBase, techPillClass } from "../lib/classes";

interface SkillCategory {
  label: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "AI & Agent",
    skills: [
      "Agentic Harness & Multi-Agent System Design",
      "Tool-/Function-Calling Systems",
      "Multi-Provider LLM Integration",
      "Agent Loops & Handoffs",
      "Zod Schema I/O",
      "Typed RunResult Failure States",
      "Loop Detection",
      "Host vs Sandbox Git Trust Boundaries",
      "Gemini API",
      "OpenAI API",
      "Tavily API",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Bun & Node.js",
      "Express.js",
      "Next.js & React",
      "Vite",
      "REST API Design",
      "CLI Tooling",
      "API Integration",
      "BullMQ",
      "Queue-Based Architecture",
      "Asynchronous Processing",
      "Redis Caching",
    ],
  },
  {
    label: "Databases",
    skills: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Redis",
      "Neo4j (Cypher)",
      "SQL",
      "Database Design",
    ],
  },
  {
    label: "Auth & Security",
    skills: [
      "Clerk",
      "JWT",
      "OAuth 2.0",
      "bcryptjs",
      "Webhook Verification (Svix)",
      "OS Credential Vaults (keytar)",
      "Guardrails & Secret Scanning",
      "Sandboxed execution",
    ],
  },
  {
    label: "Cloud & Infra",
    skills: ["AWS", "Docker", "Docker Compose", "Vercel", "Render"],
  },
  {
    label: "Languages",
    skills: ["TypeScript", "Python", "JavaScript", "Java"],
  },
  {
    label: "Tools",
    skills: ["Git", "GitHub", "Postman", "Prisma ORM"],
  },
  {
    label: "Contributions",
    skills: [
      "rexa-agent — published npm package (MIT), 125+ downloads",
      "@subhamoy/somoy — published npm package (MIT), 1,000+ downloads",
    ],
  },
];

export default function SkillsSection() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <SectionHeading id="skills-heading" title="Technical Stack & Architecture" />

      <div className="flex flex-wrap gap-2 mb-6">
        {skillCategories.map((cat, idx) => (
          <button
            key={cat.label}
            onClick={() => setActive(idx)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-mono font-medium border transition-colors whitespace-nowrap ${
              active === idx
                ? "bg-[#5B8DFF]/10 border-[#5B8DFF]/40 text-[#5B8DFF]"
                : "bg-white/[0.03] border-white/[0.08] text-zinc-400 hover:text-zinc-200 hover:border-white/[0.2]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={`p-7 sm:p-8 ${glassCardBase} shadow-md shadow-black/40`}>
        <div className="flex flex-wrap gap-2.5">
          {skillCategories[active].skills.map((skill) => (
            <span key={skill} className={techPillClass}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}