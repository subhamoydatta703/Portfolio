import React from "react";
import Image from "next/image";
import { FileText, ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, LeetCodeIcon } from "./Icons";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-white/[0.08]"
    >
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-8 mb-10">
        <div className="space-y-4">
          {/* Status Badge - High-Performance Translucent Glass */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#121215]/90 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] text-xs font-mono text-zinc-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">Available for Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Subhamoy Datta
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-amber-500">
            GenAI Backend Developer
          </p>
        </div>

        {/* Sung Jin-Woo Profile Image */}
        <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/[0.15] shadow-2xl shadow-amber-950/30 shrink-0 hover:scale-105 transition-transform duration-200">
          <Image
            src="/profile.png"
            alt="Subhamoy Datta"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 112px, 144px"
          />
        </div>
      </div>

      {/* Main Bio */}
      <p className="text-zinc-300 text-base sm:text-lg leading-relaxed max-w-3xl mb-10">
        Building and deploying production AI systems: RAG pipelines, LLM-powered
        backends, and agent orchestration. Open-source author/maintainer of two
        published npm packages:{" "}
        <a
          href="https://npmjs.com/package/rexa-agent"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm px-2 py-0.5 rounded-md bg-[#18181b]/80 text-amber-400 border border-white/[0.1] hover:border-amber-500 hover:bg-[#18181b] transition-all inline-block shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          rexa-agent
        </a>{" "}
        and{" "}
        <a
          href="https://npmjs.com/package/@subhamoy/somoy"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm px-2 py-0.5 rounded-md bg-[#18181b]/80 text-amber-400 border border-white/[0.1] hover:border-amber-500 hover:bg-[#18181b] transition-all inline-block shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          @subhamoy/somoy
        </a>
        , both MIT-licensed.
      </p>

      {/* Action Buttons with High-Performance Glass Styling */}
      <div className="flex flex-wrap items-center gap-3.5">
        <a
          href="https://drive.google.com/file/d/15dmF8ILRUQKQm7NBvosj_QlJHCEoK0K-/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-medium text-sm transition-all shadow-lg shadow-amber-950/40 hover:scale-[1.02] active:scale-[0.98] border-t border-white/20"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
          <ArrowUpRight className="w-4 h-4 opacity-75" />
        </a>

        <a
          href="https://github.com/subhamoydatta703"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-[#18181b] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/subhamoy-datta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-[#18181b] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://x.com/codebysubhamoy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-[#18181b] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          <XIcon className="w-4 h-4" />
          <span>Twitter</span>
        </a>

        <a
          href="https://leetcode.com/u/26W5VCTCTA"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-[#18181b] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          <LeetCodeIcon className="w-4 h-4" />
          <span>LeetCode</span>
        </a>

        <a
          href="mailto:subhamoydatta703@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent hover:bg-[#18181b] hover:border-white/[0.18] text-zinc-300 hover:text-white text-sm font-medium transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]"
        >
          <Mail className="w-4 h-4" />
          <span>Contact</span>
        </a>
      </div>
    </section>
  );
}
