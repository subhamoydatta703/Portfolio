"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Resumark",
    type: "AI-Powered Resume Analyzer",
    desc: "Upload a resume and receive ATS scoring, AI-powered feedback, and improvement suggestions. Built with PostgreSQL, Redis caching, BullMQ background workers, AWS S3 storage, and Gemini AI integration.",
    link: "https://resumark-webapp.vercel.app",
    tech: [
      "TypeScript",
      "Node.js",
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
    id: "02",
    title: "ShelfLife",
    type: "Inventory Management System",
    desc: "A web application for managing inventory and tracking product shelf life. Built with backend APIs, database integration, and inventory workflows to help users manage products efficiently.",
    link: "https://shelf-life-webapp.vercel.app",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
    ],
    gradient: "from-[#a855f7]/15 via-[#a855f7]/5 to-transparent",
    accentColor: "#a855f7",
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
          A curated selection of projects spanning full-stack development, AI
          integration, and creative frontend storytelling.
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
      <div className="grid grid-cols-1 gap-8 w-full z-10">
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
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      initial={{ opacity: 0, x: fromLeft ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full rounded-2xl overflow-hidden border border-white/[0.04] bg-[#0a0a0a] hover:bg-[#0e0e0e] transition-colors duration-500"
    >
      {/* Hover gradient */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left: Project Info */}
        <div className="flex-1 max-w-3xl">
          <div className="flex items-center gap-4 mb-5">
            <span
              className="text-5xl md:text-7xl font-heading font-black leading-none opacity-[0.06]"
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

          <h3 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-white/80 group-hover:text-white transition-colors duration-300">
            {project.title}
          </h3>

          <p className="text-white/35 max-w-xl text-base lg:text-lg group-hover:text-white/60 transition-colors duration-500 leading-relaxed">
            {project.desc}
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-2 mt-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] font-mono tracking-wider uppercase px-3 py-1 rounded-full border border-white/[0.08] bg-white/[0.02] text-white/40 group-hover:text-white/60 group-hover:border-white/[0.12] transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Arrow */}
        <div className="shrink-0">
          <div
            className="w-14 h-14 rounded-full border flex items-center justify-center transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/5"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            <ArrowUpRight className="w-6 h-6 text-white/40 group-hover:text-white transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
          </div>
        </div>
      </div>
    </motion.a>
  );
}
