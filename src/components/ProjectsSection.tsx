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
    installCmd: "npm i -g rexa-agent",
    description:
      "Published npm package (rexa-agent) with 125+ downloads. A single-agent coding harness with a 60-step tool loop, Plan/Act modes, and plan reflection that discards flawed tool calls before they run. Commands execute in a non-root Docker sandbox; a separate guardrail model checks every input and output, secrets are caught by regex and entropy scanning, credentials stay in the OS vault, and consequential actions (git ops, installs, deletes) pause for confirmation.",
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
      "Published npm package (@subhamoy/somoy) with 1,000+ downloads. Provider-agnostic (Gemini, OpenAI, offline MockProvider) with Zod-typed tool I/O, typed RunResult failure states instead of exceptions, loop detection, and agent handoffs with transcript transfer.",
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
      "PDF, URL, YouTube, and text ingestion with pgvector similarity search, Gemini-based input/output guardrails, and step-back query rewriting. An async Redis/BullMQ pipeline handles ingestion, with AWS S3 for storage and Clerk for auth.",
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
    title: "Marin",
    subtitle: "Real-Time Voice AI Companion",
    badge: "Voice AI",
    isFeatured: false,
    description:
      "A hands-free, full-duplex voice companion in Python. Silero VAD handles turn-taking with real-time barge-in, local Whisper transcription and emotion2vec speech-emotion recognition run in parallel on CUDA, Gemini writes the replies, and sentence-pipelined Edge-TTS speaks them with mood-driven rate and pitch.",
    tech: [
      "Python",
      "Silero VAD",
      "Whisper",
      "emotion2vec",
      "Gemini API",
      "Edge-TTS",
      "CUDA",
    ],
    links: [
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/Marin",
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

function ProjectCard({
  p,
  compact = false,
  className = "",
}: {
  p: Project;
  compact?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`${compact ? "p-6 sm:p-7" : "p-7 sm:p-8"} rounded-2xl border ${
        p.isFeatured
          ? "border-white/[0.12] bg-[#121215]/90 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl shadow-black/50"
          : "border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent shadow-md shadow-black/40"
      } ${projectCardTail} ${className}`}
    >
      <div>
        {/* Compact cards stack the badge above the title so every title,
            subtitle, and description starts at the same left edge. */}
        <div
          className={
            compact
              ? "flex flex-col-reverse items-start gap-3 mb-4"
              : "flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4"
          }
        >
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
          <ProjectCard key={p.title} p={p} />
        ))}
      </div>
    </section>
  );
}