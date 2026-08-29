"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GithubIcon, LinkedinIcon, XIcon } from "../ui/SocialIcons";
import MagneticButton from "../ui/MagneticButton";
import { FileText, Code2, ArrowUpRight } from "lucide-react";

const subtitles = [
  "GenAI Backend Developer",
  "Open-Source Author & Maintainer",
  "RAG & LLM Systems",
  "AI Agents & Orchestration",
  "Production Backends",
  "Computer Science Student",
];

export default function Hero() {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % subtitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.5 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring" as const, damping: 25, stiffness: 100 },
    },
  };

  const firstName = "SUBHAMOY".split("");
  const lastName = "DATTA".split("");

  const socials = [
    { icon: GithubIcon, href: "https://github.com/subhamoydatta703", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/subhamoy-datta", label: "LinkedIn" },
    { icon: XIcon, href: "https://x.com/codebysubhamoy", label: "X / Twitter" },
  ];

  return (
    <section
      id="hero"
      data-section
      className="relative w-full min-h-screen flex flex-col justify-center px-4 md:px-12 lg:px-24 py-24 md:py-28 overflow-hidden transition-colors duration-700 hover:bg-white/[0.02]"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative z-10 mt-24 md:mt-0"
      >

        {/* Large Name */}
        <div className="text-6xl md:text-[8rem] lg:text-[11rem] font-heading font-black leading-[0.85] tracking-tighter">
          <div className="overflow-hidden py-1">
            <motion.div className="flex text-white" variants={item}>
              {firstName.map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block hover:text-[#00f0ff] transition-colors duration-200"
                  whileHover={{ y: -10, transition: { type: "spring" as const, stiffness: 400, damping: 10 } }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          </div>
          <div className="overflow-hidden py-1">
            <motion.div className="flex text-[#00f0ff]" variants={item}>
              {lastName.map((char, i) => (
                <span key={i} className="inline-block">
                  {char}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Rotating subtitle */}
        <motion.div variants={item} className="mt-8 h-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={subtitleIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" as const }}
              className="text-xl md:text-2xl font-sans text-[#00f0ff] font-medium tracking-wide"
            >
              {subtitles[subtitleIndex]}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="mt-8 text-lg md:text-xl text-white/60 max-w-2xl font-sans leading-relaxed"
        >
          I&apos;m Subhamoy Datta — a GenAI Backend Developer building and deploying
          production AI systems: RAG pipelines, LLM-powered backends, and agent
          orchestration. Open-source author/maintainer of two published npm packages:
          REXA (<span className="text-[#00f0ff] font-mono font-medium">rexa-agent</span>) and Somoy (<span className="text-[#00f0ff] font-mono font-medium">@subhamoy/somoy</span>), both MIT-licensed.
        </motion.p>

        {/* DSA & Competitive Programming highlights */}
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/file/d/15dmF8ILRUQKQm7NBvosj_QlJHCEoK0K-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#00f0ff]/40 hover:bg-[#00f0ff]/10 hover:shadow-[0_0_18px_rgba(0,240,255,0.15)] transition-all duration-300 group"
          >
            <FileText className="w-4 h-4 text-white/50 group-hover:text-[#00f0ff] transition-colors" />
            <span className="text-sm font-sans text-white/70 group-hover:text-white transition-colors">Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#00f0ff] transition-colors" />
          </a>
          <a
            href="https://leetcode.com/u/26W5VCTCTA"
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:border-[#a855f7]/40 hover:bg-[#a855f7]/10 hover:shadow-[0_0_18px_rgba(168,85,247,0.15)] transition-all duration-300 group"
          >
            <Code2 className="w-4 h-4 text-white/50 group-hover:text-[#a855f7] transition-colors" />
            <span className="text-sm font-sans text-white/70 group-hover:text-white transition-colors">LeetCode</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/40 group-hover:text-[#a855f7] transition-colors" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div variants={item} className="mt-10 flex gap-5">
          {socials.map((social) => (
            <MagneticButton key={social.label} strength={0.4}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                data-cursor-hover
                className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:border-[#00f0ff] hover:bg-[#00f0ff]/10 hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-300"
              >
                <social.icon className="w-5 h-5 text-white/60" />
              </a>
            </MagneticButton>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={item} className="mt-16">
          <button
            onClick={() => {
              const el = document.getElementById("about");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            data-cursor-hover
            aria-label="Scroll to About section"
            className="animate-bounce inline-flex flex-col items-center opacity-40 hover:opacity-100 transition-opacity duration-300 cursor-none focus:outline-none group"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono mb-2 group-hover:text-[#00f0ff] transition-colors">
              Scroll
            </span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-[#00f0ff] to-transparent" />
          </button>
        </motion.div>
      </motion.div>

      {/* ─── Floating Particles (pure CSS) ─── */}
      <div className="absolute top-1/4 right-[15%] w-2 h-2 bg-[#00f0ff]/30 rounded-full animate-[float_6s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute top-1/3 right-[25%] w-1 h-1 bg-[#a855f7]/40 rounded-full animate-[float_8s_ease-in-out_infinite_1s] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[10%] w-1.5 h-1.5 bg-white/20 rounded-full animate-[float_7s_ease-in-out_infinite_2s] pointer-events-none" />
      <div className="absolute top-[60%] left-[8%] w-1 h-1 bg-[#00f0ff]/20 rounded-full animate-[float_9s_ease-in-out_infinite_0.5s] pointer-events-none" />
      <div className="absolute top-[20%] left-[20%] w-1.5 h-1.5 bg-[#a855f7]/20 rounded-full animate-[float_10s_ease-in-out_infinite_3s] pointer-events-none" />

      {/* ─── Ambient gradient blobs ─── */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-bl from-[#00f0ff]/8 to-transparent rounded-full blur-[90px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[45vw] h-[45vw] bg-gradient-to-tr from-[#a855f7]/6 to-transparent rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
    </section>
  );
}
