"use client";

import { useState } from "react";
import type { ComponentType } from "react";
import {
  FolderGit2,
  ArrowUpRight,
  Copy,
  Check,
  Terminal,
  Cpu,
  Layers,
  FileCheck2,
  Sparkles,
} from "lucide-react";
import {
  TypeScriptIcon,
  BunIcon,
  DockerIcon,
  GeminiIcon,
  SearchIcon,
  KeyIcon,
  OpenAIIcon,
  ZodIcon,
  PostgresIcon,
  RedisIcon,
  S3Icon,
  ClerkIcon,
  GithubIcon,
  NpmIcon,
} from "./Icons";
import SectionHeading from "./SectionHeading";
import { projectCardTail, techPillClass } from "../lib/classes";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  isFeatured?: boolean;
  installCmd?: string;
  icon: ComponentType<{ className?: string }>;
  tech: { name: string; icon: ComponentType<{ className?: string }> }[];
  links: {
    label: string;
    href: string;
    icon?: ComponentType<{ className?: string }>;
  }[];
}

const projects: Project[] = [
  {
    title: "REXA",
    subtitle: "Autonomous CLI Coding Agent",
    badge: "npm: rexa-agent",
    isFeatured: true,
    installCmd: "npx rexa-agent",
    icon: Terminal,
    description:
      "Published npm package (rexa-agent). TypeScript, Bun, Docker Compose, Gemini API, Tavily API, keytar. Runs in a non-root Docker sandbox; input/output guardrails with secret scanning; OS-level credential vault; pauses for confirmation on consequential actions (git ops, installs, deletes).",
    tech: [
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Bun", icon: BunIcon },
      { name: "Docker Compose", icon: DockerIcon },
      { name: "Gemini API", icon: GeminiIcon },
      { name: "Tavily API", icon: SearchIcon },
      { name: "keytar Vault", icon: KeyIcon },
    ],
    links: [
      {
        label: "npm Package",
        href: "https://npmjs.com/package/rexa-agent",
        icon: NpmIcon,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/REXA",
        icon: GithubIcon,
      },
    ],
  },
  {
    title: "somoy",
    subtitle: "TypeScript AI Agent SDK",
    badge: "npm: @subhamoy/somoy",
    isFeatured: true,
    installCmd: "npm i @subhamoy/somoy",
    icon: Cpu,
    description:
      "Published npm package (@subhamoy/somoy). Provider-agnostic (Gemini, OpenAI, offline MockProvider), Zod-typed tool I/O, typed RunResult failure states instead of exceptions, loop detection, agent handoffs with transcript transfer.",
    tech: [
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Bun", icon: BunIcon },
      { name: "Gemini API", icon: GeminiIcon },
      { name: "OpenAI", icon: OpenAIIcon },
      { name: "Zod", icon: ZodIcon },
    ],
    links: [
      {
        label: "npm Package",
        href: "https://npmjs.com/package/@subhamoy/somoy",
        icon: NpmIcon,
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/Agent-SDK",
        icon: GithubIcon,
      },
    ],
  },
  {
    title: "DocSense",
    subtitle: "RAG Document Intelligence Platform",
    badge: "Full-Stack RAG Platform",
    isFeatured: false,
    icon: Layers,
    description:
      "PDF/URL/YouTube/text ingestion, pgvector similarity search, async Redis/BullMQ embedding pipeline, AWS S3, Clerk auth.",
    tech: [
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "PostgreSQL", icon: PostgresIcon },
      { name: "pgvector", icon: PostgresIcon },
      { name: "Redis", icon: RedisIcon },
      { name: "BullMQ", icon: BunIcon },
      { name: "AWS S3", icon: S3Icon },
      { name: "Clerk", icon: ClerkIcon },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://docsense-app.vercel.app",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/DocSense",
        icon: GithubIcon,
      },
    ],
  },
  {
    title: "Resumark",
    subtitle: "AI Resume Analysis Platform",
    badge: "Async AI Pipeline",
    isFeatured: false,
    icon: FileCheck2,
    description:
      "Gemini-generated feedback, async BullMQ/Redis pipeline, AWS S3, Clerk auth.",
    tech: [
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Redis", icon: RedisIcon },
      { name: "BullMQ", icon: BunIcon },
      { name: "AWS S3", icon: S3Icon },
      { name: "Gemini API", icon: GeminiIcon },
      { name: "Clerk", icon: ClerkIcon },
    ],
    links: [
      {
        label: "Live Demo",
        href: "https://resumark-webapp.vercel.app",
      },
      {
        label: "GitHub Repo",
        href: "https://github.com/subhamoydatta703/Resumark",
        icon: GithubIcon,
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
      // ignore
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
      <span className="text-amber-300">{text}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-zinc-500 hover:text-zinc-300 shrink-0 ml-1" />
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
        icon={FolderGit2}
        title="Featured Projects"
        trailing={
          <span className="text-xs font-mono text-zinc-500 hidden sm:inline-block">
            Open Source &amp; Systems
          </span>
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p) => {
          const Icon = p.icon;
          return (
            <article
              key={p.title}
              className={`p-7 sm:p-8 rounded-2xl border ${
                p.isFeatured
                  ? "border-white/[0.12] bg-[#121215]/90 bg-gradient-to-b from-white/[0.04] to-transparent shadow-xl shadow-black/50"
                  : "border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent shadow-md shadow-black/40"
              } ${projectCardTail}`}
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-start items-start justify-between gap-3 sm:gap-4 mb-4">
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-amber-400 shrink-0 shadow-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-white tracking-tight truncate">
                          {p.title}
                        </h3>
                        {p.isFeatured && (
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs font-mono text-zinc-400 truncate">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  {p.badge && (
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 font-medium shadow-[inset_0_1px_0_0_rgba(251,191,36,0.15)] self-start whitespace-nowrap max-w-full sm:shrink-0">
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
                  {p.tech.map((t) => (
                    <span
                      key={t.name}
                      className={techPillClass}
                    >
                      <t.icon className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{t.name}</span>
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-3 border-t border-white/[0.08]">
                  {p.links.map((link) => {
                    const LinkIcon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-zinc-300 hover:text-amber-400 transition-colors group"
                      >
                        {LinkIcon && <LinkIcon className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 transition-colors" />}
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-amber-400 transition-colors" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
