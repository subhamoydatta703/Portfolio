"use client";

import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { glassCardBase } from "../lib/classes";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "./Icons";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "subhamoydatta703@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <footer
      id="contact"
      className="py-16 sm:py-20"
    >
      <SectionHeading  title="Get In Touch" />

      <div className={`p-8 sm:p-10 ${glassCardBase} hover:border-white/[0.2] space-y-8 shadow-xl shadow-black/40`}>
        <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
          Currently looking for an AI/ML or backend engineering internship to
          build on the work I've shipped so far. I'm always open to
          collaborating on agent and RAG systems — if you're building at a
          product company in the space, I'd love to talk.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#18181b]/90 hover:bg-zinc-700 text-white text-sm font-mono transition-colors border border-white/[0.1] shadow-sm"
          >
            <Mail className="w-4 h-4 text-[#5B8DFF]" />
            <span>{email}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-sm font-mono transition-colors shadow-sm"
            title="Copy email address"
            aria-label="Copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-sans text-xs sm:text-sm font-medium">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-zinc-400" />
                <span className="font-sans text-xs sm:text-sm">Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-400">
          <a
            href="https://github.com/subhamoydatta703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#5B8DFF] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/subhamoy-datta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#5B8DFF] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/codebysubhamoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#5B8DFF] transition-colors"
          >
            <XIcon className="w-4 h-4" />
            <span>Twitter</span>
          </a>

          <a
            href="https://leetcode.com/u/26W5VCTCTA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#5B8DFF] transition-colors"
          >
            <LeetCodeIcon className="w-4 h-4" />
            <span>LeetCode</span>
          </a>

          <a
            href="https://drive.google.com/file/d/15dmF8ILRUQKQm7NBvosj_QlJHCEoK0K-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#5B8DFF] transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>

      <div className="pt-10 pb-20 text-center text-xs text-zinc-500 font-mono">
        &copy; {new Date().getFullYear()} Subhamoy Datta · GenAI Backend Developer
      </div>
    </footer>
  );
}