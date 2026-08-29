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
          className="font-sans text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-3xl"
        >
          Hey, I learn by building: writing the code, breaking it, figuring
          out why, and shipping it. Open-source author/maintainer of two published npm packages: REXA (<span className="text-[#00f0ff] font-mono font-medium">rexa-agent</span>) and Somoy (<span className="text-[#00f0ff] font-mono font-medium">@subhamoy/somoy</span>), both MIT-licensed. Still a Computer Science student, still
          figuring plenty out — but the three cards below are where that habit
          actually goes.
        </motion.p>

        {/* ─── What I Do Grid ─── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl"
        >
          {/* Card 1: Backend Development */}
          <div
            data-cursor-hover
            className="group rounded-2xl border border-white/[0.08] border-t-2 border-t-[#00f0ff]/80 bg-white/[0.02] p-8 hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/[0.03] hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all duration-300"
          >
            <span className="inline-block text-xs font-mono tracking-widest text-[#00f0ff] uppercase mb-2">01 // Architecture</span>
            <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-[#00f0ff] transition-colors">
              Backend Development
            </h3>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Building server-side systems with Node.js, Express, PostgreSQL,
              Redis, and BullMQ. I care about how data flows, how queues
              behave under load, and why things break in production.
            </p>
          </div>

          {/* Card 2: GenAI Engineering */}
          <div
            data-cursor-hover
            className="group rounded-2xl border border-white/[0.08] border-t-2 border-t-[#a855f7]/80 bg-white/[0.02] p-8 hover:border-[#a855f7]/40 hover:bg-[#a855f7]/[0.03] hover:shadow-[0_0_25px_rgba(168,85,247,0.1)] transition-all duration-300"
          >
            <span className="inline-block text-xs font-mono tracking-widest text-[#a855f7] uppercase mb-2">02 // Intelligence</span>
            <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-[#a855f7] transition-colors">
              GenAI Engineering
            </h3>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Integrating LLMs into production backends — RAG pipelines with
              pgvector similarity search and async embedding jobs, plus
              LLM-powered analysis and generation with structured, cached output.
              I also build guardrails against prompt injection and jailbreak
              attempts.
            </p>
          </div>

          {/* Card 3: Agentic Harnesses & System Design */}
          <div
            data-cursor-hover
            className="group rounded-2xl border border-white/[0.08] border-t-2 border-t-[#22c55e]/80 bg-white/[0.02] p-8 hover:border-[#22c55e]/40 hover:bg-[#22c55e]/[0.03] hover:shadow-[0_0_25px_rgba(34,197,94,0.1)] transition-all duration-300"
          >
            <span className="inline-block text-xs font-mono tracking-widest text-[#22c55e] uppercase mb-2">03 // Autonomous Systems</span>
            <h3 className="text-xl font-heading font-bold mb-3 text-white group-hover:text-[#22c55e] transition-colors">
              Agentic Harnesses & System Design
            </h3>
            <p className="text-sm text-white/60 font-sans leading-relaxed">
              Building autonomous CLI agent harnesses and SDKs — dynamic tool-calling
              loops, Docker-sandboxed non-root execution, verified state re-reading,
              input/output guardrails with secret scanning, host/sandbox git trust
              boundaries, and OS credential vaults (`keytar`).
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}