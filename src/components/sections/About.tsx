"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
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
          Hey,
          I learn by building: writing the code, breaking it, figuring
          out why, and shipping it. Still a Computer Science student, still
          figuring plenty out — but the three cards below are where that habit
          actually goes.
        </motion.p>

        {/* ─── What I Do Grid ─── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        >
          {/* Card 1: Backend Development */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#00f0ff]/20 hover:bg-[#00f0ff]/[0.02] transition-all duration-300">
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">
              Backend Development
            </h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Building server-side systems with Node.js, Express, PostgreSQL,
              Redis, and BullMQ. I care about how data flows, how queues
              behave under load, and why things break in production.
            </p>
          </div>

          {/* Card 2: GenAI Engineering */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#a855f7]/20 hover:bg-[#a855f7]/[0.02] transition-all duration-300">
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">
              GenAI Engineering
            </h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Integrating LLMs into production backends — RAG pipelines with
              pgvector similarity search and async embedding jobs, plus
              LLM-powered analysis and generation with structured, cached output.
              I also build guardrails against prompt injection and jailbreak
              attempts.
            </p>
          </div>

          {/* Card 3: Agent Orchestration */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#22c55e]/20 hover:bg-[#22c55e]/[0.02] transition-all duration-300">
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">
              AI Agent Orchestration
            </h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Building AI agents from the ground up — tool-calling and reasoning
              loops, sandboxed command execution, and input/output/tool guardrails
              that keep agents safe to run autonomously, with a provider-agnostic
              interface and typed, structured outputs.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}