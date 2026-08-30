"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projectCardTail, techPillClass } from "../lib/classes";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  isFeatured?: boolean;
  installCmd?: string;
  tech: string[];
  links: {
    label: string;
    href: string;
  }[];
}

const projects: Project[] = [
  {
    title: "REXA",
    subtitle: "Autonomous CLI Coding Agent",
    badge: "npm: rexa-agent",
    isFeatured: true,
    installCmd: "npx rexa-agent",
    description:
      "Published npm package (rexa-agent) [ADD: npm weekly downloads]. TypeScript, Bun, Docker Compose, Gemini API, Tavily API, keytar. Runs in a non-root Docker sandbox [ADD: median sandbox startup time]; input/output guardrails with secret scanning; OS-level credential vault; pauses for confirmation on consequential actions (git ops, installs, deletes).",
    tech: [
      "TypeScript",
      "Bun",
      "Docker Compose",
      "Gemini API",
      "Tavily API",
      "keytar Vault",
    ],
    links: [
      {
        label: "npm Package",
        href: "https://npmjs.com/package/rexa-agent",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/REXA",
      },
    ],
  },
  {
    title: "somoy",
    subtitle: "TypeScript AI Agent SDK",
    badge: "npm: @subhamoy/somoy",
    isFeatured: true,
    installCmd: "npm i @subhamoy/somoy",
    description:
      "Published npm package (@subhamoy/somoy) [ADD: npm weekly downloads]. Provider-agnostic (Gemini, OpenAI, offline MockProvider) with Zod-typed tool I/O [ADD: per tool-call round-trip time], typed RunResult failure states instead of exceptions, loop detection, agent handoffs with transcript transfer.",
    tech: [
      "TypeScript",
      "Bun",
      "Gemini API",
      "OpenAI",
      "Zod",
    ],
    links: [
      {
        label: "npm Package",
        href: "https://npmjs.com/package/@subhamoy/somoy",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/Agent-SDK",
      },
    ],
  },
  {
    title: "DocSense",
    subtitle: "RAG Document Intelligence Platform",
    badge: "Full-Stack RAG Platform",
    isFeatured: false,
    description:
      "PDF/URL/YouTube/text ingestion, pgvector similarity search [ADD: p95 query latency], async Redis/BullMQ embedding pipeline [ADD: documents ingested per minute], AWS S3, Clerk auth.",
    tech: [
      "TypeScript",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "BullMQ",
      "AWS S3",
      "Clerk",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://docsense-app.vercel.app",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/DocSense",
      },
    ],
  },
  {
    title: "Resumark",
    subtitle: "AI Resume Analysis Platform",
    badge: "Async AI Pipeline",
    isFeatured: false,
    description:
      "Gemini-generated feedback, async BullMQ/Redis pipeline [ADD: average analysis turnaround time], AWS S3, Clerk auth.",
    tech: [
      "TypeScript",
      "Redis",
      "BullMQ",
      "AWS S3",
      "Gemini API",
      "Clerk",
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://resumark-webapp.vercel.app",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/Resumark",
      },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard errors.
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#09090b]/80 hover:bg-[#18181b] text-zinc-300 hover:text-white text-xs font-mono border border-white/[0.08] transition-all shadow-inner"
      title="Copy command"
      aria-label="Copy command"
    >
      <span className="text-zinc-500">$</span>
      <span className="text-[#5B8DFF]">{text}</span>

      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-zinc-500 shrink-0 ml-1" />
      )}
    </button>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <SectionHeading
        title="Featured Projects"
        trailing={
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
            Open Source &amp; Systems
          </span>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <article
            key={p.title}
            className={`p-7 sm:p-8 rounded-2xl border ${
              p.isFeatured
                ? "border-white/[0.12] bg-[#121215]/90 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl shadow-black/50"
                : "border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent shadow-md shadow-black/40"
            } ${projectCardTail}`}
          >
            <div>
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {p.title}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    {p.subtitle}
                  </p>
                </div>

                {p.badge && (
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-[#5B8DFF]/30 bg-[#5B8DFF]/10 text-[#5B8DFF] font-medium self-start whitespace-nowrap max-w-full sm:shrink-0">
                    {p.badge}
                  </span>
                )}
              </div>

              {p.installCmd && (
                <div className="mb-5">
                  <CopyButton text={p.installCmd} />
                </div>
              )}

              <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                {p.description}
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((tech) => (
                  <span key={tech} className={techPillClass}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-5 pt-4 border-t border-white/[0.08]">
                {p.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs sm:text-sm font-medium text-zinc-300 hover:text-[#5B8DFF] transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}