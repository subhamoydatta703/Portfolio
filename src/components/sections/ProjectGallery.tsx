"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";

const projects = [
  {
    id: "01",
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
    id: "02",
    title: "somoy",
    type: "TypeScript AI Agent SDK · npm",
    desc: "A transparent AI agent SDK exposing an inspectable think\u2192act\u2192observe loop, provider-agnostic behind a single ModelProvider interface (Gemini, OpenAI, offline MockProvider). Uses Zod-typed tool I/O and structured outputs, typed RunResult failure states instead of exceptions, built-in loop detection, agent handoffs with transcript transfer and chain tracking, and input/output/tool guardrails for safe execution. Published on npm as @subhamoy/somoy v0.1.7 (MIT).",
    links: {
      live: "https://npmjs.com/package/@subhamoy/somoy",
      repo: "https://github.com/subhamoydatta703/Agent-SDK",
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
    gradient: "from-[#00f0ff]/15 via-[#00f0ff]/5 to-transparent",
    accentColor: "#00f0ff",
  },

  {
    id: "04",
    title: "ShelfLife",
    type: "Household Inventory Tracker",
    desc: "Household inventory tracker for reducing waste. Ships JWT-authenticated accounts and a RESTful API for adding, updating, and monitoring inventory in real time.",
    links: {
      live: "https://shelf-life-webapp.vercel.app",
      repo: "https://github.com/subhamoydatta703/Shelf-Life",
    },
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "JavaScript"],
    gradient: "from-[#f97316]/15 via-[#f97316]/5 to-transparent",
    accentColor: "#f97316",
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
      className="group relative w-full min-h-[16rem] rounded-2xl overflow-hidden border border-white/[0.04] bg-[#0a0a0a] hover:bg-[#0e0e0e] transition-colors duration-300"
    >
      {/* Hover gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      <div className="relative z-10 p-6 md:p-10 flex flex-col justify-start gap-5">
        {/* Header: id + type */}
        <div className="flex items-center gap-4">
          <span
            className="text-5xl md:text-6xl font-heading font-black leading-none opacity-[0.08]"
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

        <h3 className="text-3xl md:text-4xl font-heading font-bold text-white/80 group-hover:text-white transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-white/35 max-w-4xl text-base lg:text-lg group-hover:text-white/60 transition-colors duration-300 leading-relaxed">
          {project.desc}
        </p>

        {/* Tech stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 group-hover:text-white/60 group-hover:border-white/[0.12] transition-all duration-300"
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
            aria-label={`${project.title} live demo`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_18px_rgba(0,240,255,0.15)] group/live transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4 group-hover:text-[#00f0ff]" />
            <span className="text-sm font-sans text-white/60 group-hover:text-white transition-colors">
              Live Demo
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
