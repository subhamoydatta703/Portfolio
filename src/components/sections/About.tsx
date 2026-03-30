"use client";

import { motion } from "framer-motion";

const skills = [
  "React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript",
  "JavaScript", "Java", "Python", "Tailwind CSS", "Git", "MySQL",
  "GenAI", "Gemini API", "REST APIs", "Postman",
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

        {/* Simple Bio */}
        <motion.p
          variants={itemVariants}
          className="font-sans text-lg md:text-xl text-white/50 leading-relaxed mb-12 max-w-3xl"
        >
          Hey! I&apos;m <span className="text-white font-semibold">Subhamoy Datta</span>, 
          a Full Stack Web Developer currently pursuing B.Tech in CSE with
          specialization in AI & ML. I love building things for the web 
          and solving challenging problems through code.
        </motion.p>

        {/* ─── What I Do Grid ─── */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 max-w-5xl"
        >
          {/* Card 1: Full Stack */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#00f0ff]/20 hover:bg-[#00f0ff]/[0.02] transition-all duration-500">
            
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">Full Stack Dev</h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Building web apps with the MERN stack — React, Node.js, Express, MongoDB. 
              From frontend animations to backend APIs.
            </p>
          </div>

          {/* Card 2: DSA & Competitive */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#a855f7]/20 hover:bg-[#a855f7]/[0.02] transition-all duration-500">
            
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">DSA & Codeforces</h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Actively solving data structures & algorithm problems. Competing 
              on Codeforces to sharpen my problem-solving skills.
            </p>
          </div>

          {/* Card 3: AI & ML */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 hover:border-[#22c55e]/20 hover:bg-[#22c55e]/[0.02] transition-all duration-500">
            
            <h3 className="text-lg font-heading font-bold mb-3 text-white/80">AI & ML</h3>
            <p className="text-sm text-white/40 font-sans leading-relaxed">
              Exploring Generative AI and machine learning. Integrating 
              Google Gemini into real-world applications.
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
