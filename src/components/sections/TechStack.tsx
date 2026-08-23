"use client";

import { motion } from "framer-motion";

const stack = [
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
  "Zod",
  "Structured Outputs",
  "Agent Orchestration",
  "Neo4j",
  "Cypher",
  "Clerk",
  "JWT",
  "OAuth 2.0",
  "AWS S3",
  "Docker",
  "Containerization",
  "REST APIs",
  "Gemini API",
  "Java",
  "Python (ML/Data)",
  "Git",
];

function Pills({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...stack, ...stack];
  const rowClasses = `flex min-w-full shrink-0 gap-4 pr-4 ${
    reverse
      ? "animate-[marquee_48s_linear_infinite_reverse]"
      : "animate-[marquee_48s_linear_infinite]"
  }`;

  return (
    <div className="relative flex overflow-hidden w-full">
      <div className={rowClasses}>
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="text-sm md:text-base font-sans font-medium whitespace-nowrap text-white/70 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#00f0ff]/40 hover:text-white hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] px-5 py-2.5 rounded-xl transition-all duration-300 cursor-default shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
      <div aria-hidden className={rowClasses}>
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-dup-${i}`}
            className="text-sm md:text-base font-sans font-medium whitespace-nowrap text-white/70 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] px-5 py-2.5 rounded-xl shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechStack() {
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
      id="tech-stack"
      data-section
      className="relative w-full min-h-screen py-32 px-4 md:px-12 lg:px-24 flex flex-col justify-center overflow-hidden transition-colors duration-700 hover:bg-white/[0.02]"
    >
      {/* Ambient gradient blob */}
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-gradient-to-bl from-[#a855f7]/6 to-transparent rounded-full blur-[85px] pointer-events-none" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.15 }}
        className="relative z-10 w-full"
      >
        {/* Section header */}
        <motion.p
          variants={itemVariants}
          className="text-[#00f0ff] text-xs tracking-[0.3em] uppercase font-mono mb-4"
        >
          {"// Toolbox"}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-8"
        >
          <span className="text-white">Tech</span>{" "}
          <span className="text-cyan-accent">Stack</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-16">
          <p className="text-white/30 max-w-2xl font-sans text-base leading-relaxed">
            The languages, databases, and frameworks I reach for when building
            backend systems, RAG pipelines, and AI agents.
          </p>
        </motion.div>
      </motion.div>

      {/* Marquee rows */}
      <div className="relative z-10 w-full space-y-6 py-4">
        <Pills />
        <Pills reverse />
      </div>
    </section>
  );
}