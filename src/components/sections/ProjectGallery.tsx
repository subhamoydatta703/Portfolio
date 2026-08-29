"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";

const projects = [
  {
    id: "01",
    title: "REXA",
    type: "Autonomous CLI Coding Agent · npm",
    desc: "REXA is an autonomous coding agent built to close the gap between AI chat assistants and a developer who actually gets things done. Instead of following a fixed script, REXA plans its own path through a task — inspecting your repository, editing code, running commands, and even researching solutions on the web — deciding what it needs next based on what it's already found, until the task is genuinely finished. Safety was as much a design goal as capability: REXA runs inside a non-root Docker sandbox so it can investigate freely, but consequential actions like Git operations, package installs, or file deletion pause for explicit confirmation. Every exchange passes through input/output guardrails with secret scanning, and credentials are stored in an OS-level vault (keytar). Published on npm as rexa-agent.",
    links: {
      live: "https://www.npmjs.com/package/rexa-agent",
      repo: "https://github.com/subhamoydatta703/REXA",
      liveLabel: "npm Package",
    },
    tech: [
      "TypeScript",
      "Bun",
      "Docker Compose",
      "Gemini API",
      "Tavily API",
      "keytar",
      "Agent Harness",
      "Secret Scanning",
    ],
    gradient: "from-[#00f0ff]/15 via-[#00f0ff]/5 to-transparent",
    accentColor: "#00f0ff",
  },

  {
    id: "02",
    title: "somoy",
    type: "TypeScript AI Agent SDK · npm",
    desc: "A transparent AI agent SDK exposing an inspectable think→act→observe loop, provider-agnostic behind a single ModelProvider interface (Gemini, OpenAI, offline MockProvider). Uses Zod-typed tool I/O and structured outputs, typed RunResult failure states instead of exceptions, built-in loop detection, agent handoffs with transcript transfer and chain tracking, and input/output/tool guardrails for safe execution. Published on npm as @subhamoy/somoy.",
    links: {
      live: "https://npmjs.com/package/@subhamoy/somoy",
      repo: "https://github.com/subhamoydatta703/Agent-SDK",
      liveLabel: "npm Package",
    },
    tech: [
      "TypeScript",
      "Bun",
      "Gemini API",
      "OpenAI",
      "Zod",
      "Agent Loops",
      "Handoffs",
    ],
    gradient: "from-[#a855f7]/15 via-[#a855f7]/5 to-transparent",
    accentColor: "#a855f7",
  },

  {
    id: "03",
    title: "DocSense",
    type: "RAG Document Intelligence",
    desc: "RAG-based secure document intelligence platform for PDF, URL, YouTube transcript, and raw text ingestion. Combines pgvector similarity search with an async Redis/BullMQ embedding pipeline for grounding answers, input/output guardrails, and network-level request verification, plus Redis-backed rate limiting and result caching, AWS S3 storage, and Clerk auth.",
    links: {
      live: "https://docsense-app.vercel.app",
      repo: "https://github.com/subhamoydatta703/DocSense",
    },
    tech: [
      "React",
      "Vite",
      "TypeScript",
      "Express.js",
      "LangChain",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "BullMQ",
      "Gemini API",
      "AWS S3",
    ],
    gradient: "from-[#22c55e]/15 via-[#22c55e]/5 to-transparent",
    accentColor: "#22c55e",
  },

  {
    id: "04",
    title: "Resumark",
    type: "AI Resume Analysis",
    desc: "Upload a resume and receive Gemini-generated feedback: summary, skills, ATS score, formatting feedback, and suggested roles. Backed by an async BullMQ/Redis pipeline, with Redis-backed rate limiting and caching, and resumes stored in AWS S3. Clerk auth secures the flow.",
    links: {
      live: "https://resumark-webapp.vercel.app",
      repo: "https://github.com/subhamoydatta703/Resumark",
    },
    tech: [
      "Bun",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "AWS S3",
      "Gemini API",
    ],
    gradient: "from-[#eab308]/15 via-[#eab308]/5 to-transparent",
    accentColor: "#eab308",
  },
];

export default function ProjectGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineWidth = useTransform(scrollYProgress, [0, 0.3], ["0%", "100%"]);

  return (
    <section
      id="work"
      data-section
      ref={sectionRef}
      className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 flex flex-col overflow-hidden transition-colors duration-700 hover:bg-white/[0.02]"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 z-10">
        <div>
          <p className="text-[#00f0ff] text-xs tracking-[0.3em] uppercase font-mono mb-4">
            {"// Featured Projects"}
          </p>
          <h2 className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.85] tracking-tighter">
            <span className="text-white">Selected</span>
            <br />
            <span className="text-[#00f0ff]">Works</span>
          </h2>
        </div>

        <p className="text-white/30 max-w-xs mt-8 md:mt-0 font-sans text-base leading-relaxed">
          A curated selection of projects spanning RAG pipelines, AI agent
          orchestration, and production-grade LLM backends.
        </p>
      </div>

      {/* Animated horizontal rule */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-px bg-[#00f0ff] mb-16 opacity-30"
      />

      {/* Project Cards */}
      <div className="grid grid-cols-1 gap-6 w-full z-10">
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const fromLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group relative w-full min-h-[16rem] rounded-2xl overflow-hidden border border-white/[0.08] bg-[#0a0a0a] hover:bg-[#0e0e0e] hover:border-white/[0.2] transition-all duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
    >
      {/* Hover gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      <div className="relative z-10 p-6 md:p-10 flex flex-col justify-start gap-5">
        {/* Header: id + type */}
        <div className="flex items-center gap-4">
          <span
            className="text-5xl md:text-6xl font-heading font-black leading-none opacity-[0.15] group-hover:opacity-30 transition-opacity duration-300"
            style={{ color: project.accentColor }}
          >
            {project.id}
          </span>
          <p
            className="font-sans font-semibold tracking-widest text-xs uppercase"
            style={{ color: project.accentColor }}
          >
            {project.type}
          </p>
        </div>

        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-white/60 max-w-4xl text-base lg:text-lg group-hover:text-white/85 transition-colors duration-300 leading-relaxed font-sans">
          {project.desc}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.03] text-white/60 group-hover:text-white/80 group-hover:border-white/[0.18] hover:!border-[#00f0ff]/40 hover:!text-white transition-all duration-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Two distinct, visually separated links: live + repo */}
        <div className="flex flex-wrap gap-4 mt-2">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label={`${project.title} ${(project.links as { liveLabel?: string }).liveLabel || "live demo"}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/60 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] group/live transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:text-[#00f0ff] transition-colors" />
            <span className="text-sm font-sans text-white/70 group-hover:text-white transition-colors">
              {(project.links as { liveLabel?: string }).liveLabel || "Live Demo"}
            </span>
          </a>

          <a
            href={project.links.repo}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            aria-label={`${project.title} GitHub repository`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 hover:shadow-[0_0_18px_rgba(168,85,247,0.15)] group/repo transition-all duration-300"
          >
            <GithubIcon className="w-4 h-4 group-hover:text-[#a855f7]" />
            <span className="text-sm font-sans text-white/60 group-hover:text-white transition-colors">
              GitHub Repo
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
