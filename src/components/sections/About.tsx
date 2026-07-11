"use client";

import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Bun",
  "Express.js",
  "PostgreSQL",
  "pgvector",
  "MongoDB",
  "Prisma",
  "Redis",
  "BullMQ",
  "RAG",
  "LangChain",
  "Vector Search",
  "Clerk",
  "JWT",
  "OAuth 2.0",
  "AWS S3",
  "Docker",
  "REST APIs",
  "Gemini API",
  "Git",
  "Java",
  "Python (ML/Data)",
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="about"
      data-section
      className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-center transition-colors duration-700 hover:bg-white/[0.02]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="relative z-10 w-full"
      >
        {/* Section label */}
        <motion.p
          variants={itemVariants}
          className="text-[#00f0ff] text-xs tracking-[0.3em] uppercase font-mono mb-4"
        >
          {"// Who Am I"}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-8xl font-heading font-black leading-[0.85] tracking-tighter mb-16"
        >
          <span className="text-white">WHO</span>{" "}
          <span className="text-cyan-accent">AM I</span>
        </motion.h2>

        {/* Bio */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-3xl"
        >
          Hey, I&apos;m{" "}
          <span className="text-white font-semibold">Subhamoy Datta</span> — a
          Computer Science student focused on backend and AI-integrated systems. I learn by
          building: writing the code, breaking it, figuring out why, and
          shipping it. Most of my work lives in APIs, databases, queues, and
          the layer where backend systems meet AI. I&apos;m not
          chasing titles — I&apos;m building things that work and understanding
          them deeply along the way.
        </motion.p>

        {/* ─── What I Do Grid ─── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl"
        >
          {/* Card 1: Backend Development */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#00f0ff]/20 hover:bg-[#00f0ff]/[0.02] transition-all duration-500">
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">
              Backend Development
            </h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Building server-side systems with Node.js, Express, PostgreSQL,
              Redis, and BullMQ. I care about how data flows, how queues
              behave under load, and why things break in production.
            </p>
          </div>

          {/* Card 2: DSA & Problem Solving */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#a855f7]/20 hover:bg-[#a855f7]/[0.02] transition-all duration-500">
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">
              DSA & Problem Solving
            </h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Consistently working through data structures and algorithms —
              arrays, trees, graphs, dynamic programming. Focused on building
              the kind of problem-solving depth that matters for real
              engineering work.
            </p>
          </div>

          {/* Card 3: AI Integration */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#22c55e]/20 hover:bg-[#22c55e]/[0.02] transition-all duration-500">
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">
              AI Integration
            </h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Integrating AI into backend systems — not researching models, but
              wiring them into real applications. Built Resumark using the
              Gemini API with job queues, caching, and structured output
              pipelines.
            </p>
          </div>
        </motion.div>

        {/* ─── Skills ─── */}
        <motion.div variants={itemVariants}>
          <p className="text-xs tracking-[0.3em] uppercase font-mono text-white/20 mb-6">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-3 max-w-4xl">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-sans font-medium text-white/70 bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.08] hover:border-[#00f0ff99] hover:text-white px-5 py-2.5 rounded-xl hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}