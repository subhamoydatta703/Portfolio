"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, FileText } from "lucide-react";
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
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500">
          <Mail className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Get In Touch
        </h2>
      </div>

      {/* Main Contact Container - 120 FPS High-Performance Translucent Glass & Hover Lift */}
      <div className="p-8 sm:p-10 rounded-2xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-white/[0.2] hover:bg-[#18181b]/95 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 transition-all duration-200 ease-out space-y-8 shadow-xl shadow-black/40">
        <p className="text-base text-zinc-300 max-w-2xl leading-relaxed">
          Always open to discussing production AI architectures, backend systems,
          open-source collaborations, and engineering opportunities.
        </p>

        {/* Email Copy + Mailto Box */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-[#18181b]/90 hover:bg-zinc-700 text-white text-sm font-mono transition-all border border-white/[0.1] shadow-sm hover:scale-[1.02] active:scale-[0.98]"
          >
            <Mail className="w-4 h-4 text-amber-400" />
            <span>{email}</span>
            <ArrowUpRight className="w-4 h-4 text-zinc-400" />
          </a>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.1] bg-white/[0.04] hover:bg-white/[0.08] text-zinc-300 hover:text-white text-sm font-mono transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98]"
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

        {/* Social Links Row */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-400">
          <a
            href="https://github.com/subhamoydatta703"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/subhamoy-datta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>

          <a
            href="https://x.com/codebysubhamoy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <XIcon className="w-4 h-4" />
            <span>Twitter</span>
          </a>

          <a
            href="https://leetcode.com/u/26W5VCTCTA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
          >
            <LeetCodeIcon className="w-4 h-4" />
            <span>LeetCode</span>
          </a>

          <a
            href="https://drive.google.com/file/d/15dmF8ILRUQKQm7NBvosj_QlJHCEoK0K-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-amber-400 transition-colors"
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
