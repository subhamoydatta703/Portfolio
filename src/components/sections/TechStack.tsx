"use client";

import { motion } from "framer-motion";

const categories = [
  {
    tag: "01 // AI & AGENTIC SYSTEMS",
    title: "AI & Agentic Systems",
    accentColor: "#00f0ff",
    gradient: "from-[#00f0ff]/15 via-[#00f0ff]/5 to-transparent",
    borderColor: "border-t-[#00f0ff]/80 hover:border-[#00f0ff]/40",
    skills: [
      "Autonomous Agent Harness & Multi-Agent Design",
      "RAG Document Intelligence & pgvector Search",
      "Tool- & Function-Calling Reasoning Loops",
      "Zod Output Schemas & Loop Detection",
    ],
  },
  {
    tag: "02 // AGENT SECURITY & GUARDRAILS",
    title: "Agent Security & Guardrails",
    accentColor: "#f43f5e",
    gradient: "from-[#f43f5e]/15 via-[#f43f5e]/5 to-transparent",
    borderColor: "border-t-[#f43f5e]/80 hover:border-[#f43f5e]/40",
    skills: [
      "Input/Output Guardrails & Secret Scanning",
      "Docker Non-Root Sandboxed Execution",
      "Host vs Sandbox Git Trust Boundaries",
      "OS Credential Vault Security (keytar)",
    ],
  },
  {
    tag: "03 // BACKEND & CLOUD DEPLOYMENT",
    title: "Backend & Cloud Infrastructure",
    accentColor: "#22c55e",
    gradient: "from-[#22c55e]/15 via-[#22c55e]/5 to-transparent",
    borderColor: "border-t-[#22c55e]/80 hover:border-[#22c55e]/40",
    skills: [
      "Production Node.js, Express & Bun Backends",
      "Cloud Deployment & Hosting (AWS, Vercel, Render)",
      "Async Event Queues (BullMQ & Redis)",
      "PostgreSQL, Prisma ORM & MongoDB",
    ],
  },
  {
    tag: "04 // OPEN SOURCE & PACKAGES",
    title: "Open Source & Package Publishing",
    accentColor: "#a855f7",
    gradient: "from-[#a855f7]/15 via-[#a855f7]/5 to-transparent",
    borderColor: "border-t-[#a855f7]/80 hover:border-[#a855f7]/40",
    skills: [
      "Open-source author/maintainer of two published npm packages",
      "Author of rexa-agent CLI coding harness (MIT)",
      "Author of @subhamoy/somoy agent SDK (MIT)",
      "Package architecture, typing & npm publishing",
    ],
  },
];

const pureTechStack = [
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Bun",
  "Express.js",
  "PostgreSQL",
  "pgvector",
  "Redis",
  "BullMQ",
  "MongoDB",
  "Prisma",
  "Docker Compose",
  "AWS S3",
  "Vercel",
  "Render",
  "Gemini API",
  "Tavily API",
  "LangChain",
  "Zod",
  "Clerk",
  "JWT",
  "OAuth 2.0",
  "REST APIs",
  "Git",
];

function TechPills({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...pureTechStack, ...pureTechStack];
  const animationClass = reverse
    ? "animate-[marquee_45s_linear_infinite_reverse] group-hover:[animation-play-state:paused]"
    : "animate-[marquee_45s_linear_infinite] group-hover:[animation-play-state:paused]";
  const rowClasses = `flex min-w-full shrink-0 gap-4 pr-4 ${animationClass}`;

  return (
    <div className="group/marquee relative flex overflow-hidden w-full py-2 [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
      <div className={rowClasses}>
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            data-cursor-hover
            className="text-sm md:text-base font-sans font-medium whitespace-nowrap text-white/75 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#00f0ff]/50 hover:text-white hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] px-5 py-2.5 rounded-xl transition-all duration-300 cursor-default shrink-0"
          >
            {tech}
          </span>
        ))}
      </div>
      <div aria-hidden className={rowClasses}>
        {doubled.map((tech, i) => (
          <span
            key={`${tech}-dup-${i}`}
            data-cursor-hover
            className="text-sm md:text-base font-sans font-medium whitespace-nowrap text-white/75 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/[0.08] hover:border-[#00f0ff]/50 hover:text-white hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] px-5 py-2.5 rounded-xl transition-all duration-300 cursor-default shrink-0"
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
        className="relative z-10 w-full mb-16"
      >
        {/* Section header */}
        <motion.p
          variants={itemVariants}
          className="text-[#00f0ff] text-xs tracking-[0.3em] uppercase font-mono mb-4"
        >
          {"// Capabilities & Stack"}
        </motion.p>
        <motion.h2
          variants={itemVariants}
          className="text-5xl md:text-8xl font-heading font-black uppercase leading-[0.85] tracking-tighter mb-8"
        >
          <span className="text-white">Skills &</span>{" "}
          <span className="text-cyan-accent">Tech Stack</span>
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-white/60 max-w-2xl font-sans text-base lg:text-lg leading-relaxed">
            Categorized core competencies across AI and agentic systems, agent security & guardrails, backend infrastructure, and open-source package publishing.
          </p>
        </motion.div>

        {/* ─── Categorized Skills Grid ─── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mb-16"
        >
          {categories.map((cat) => (
            <div
              key={cat.tag}
              data-cursor-hover
              className={`group rounded-2xl border border-white/[0.08] border-t-2 ${cat.borderColor} bg-white/[0.02] p-6 lg:p-7 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between`}
            >
              <div>
                <span
                  className="inline-block text-[11px] font-mono tracking-widest uppercase mb-3"
                  style={{ color: cat.accentColor }}
                >
                  {cat.tag}
                </span>
                <h3 className="text-lg font-heading font-bold mb-5 text-white group-hover:text-white transition-colors">
                  {cat.title}
                </h3>

                <ul className="space-y-3">
                  {cat.skills.map((skill, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs lg:text-sm font-sans text-white/70 leading-relaxed">
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ backgroundColor: cat.accentColor }}
                      />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Marquee rows for Technologies */}
      <div className="relative z-10 w-full space-y-4 py-4">
        <p className="text-xs font-mono tracking-widest uppercase text-white/30 px-2 mb-2">
          {"// Technologies & Tools"}
        </p>
        <TechPills />
        <TechPills reverse />
      </div>
    </section>
  );
}