import Image from "next/image";
import { FileText, ArrowUpRight } from "lucide-react";
import { ghostButtonClass } from "../lib/classes";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 sm:pt-28 sm:pb-20 border-b border-white/[0.08]"
    >
      {/* Identity */}
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 mb-6">
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/[0.1] bg-[#121215]/90 text-xs font-mono text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-medium">Available for Opportunities</span>
          </div>
          <div>
            <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
              Subhamoy Datta
            </h1>
            <p className="mt-1 text-lg sm:text-xl font-medium text-[#5B8DFF]">
              GenAI Backend Engineer
            </p>
          </div>
        </div>
        {/* Profile Image — kept small and quiet so it supports the
           identity block instead of competing with it */}
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/[0.1] shrink-0">
          <Image
            src="/profile.png"
            alt="Subhamoy Datta"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 80px, 96px"
          />
        </div>
      </div>
      {/* Main Hero Content */}
      <div className="max-w-5xl">
        <h2 className="text-xl sm:text-2xl font-medium tracking-tight text-white">
          Backend systems, AI agents, and the infrastructure that ties them together.
        </h2>
        <p className="mt-3 text-lg text-zinc-400 leading-relaxed max-w-xl">
          CS (AI & ML) student who builds GenAI backend systems and ships them — agent orchestration, RAG pipelines, reliable infrastructure.
        </p>
      </div>
      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3.5 mt-8">
        <a
          href="https://drive.google.com/file/d/15d6Fk9toIkEkzm0N2XRjlgNQ8OBt6Gmb/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-white font-medium text-sm border border-white/[0.12] bg-[#5B8DFF] hover:bg-[#4677EE] transition-colors"
        >
          <FileText className="w-4 h-4" />
          <span>Resume</span>
          <ArrowUpRight className="w-4 h-4 opacity-75" />
        </a>
        <a
          href="https://github.com/subhamoydatta703"
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButtonClass}
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/subhamoy-datta"
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButtonClass}
        >
          LinkedIn
        </a>
        <a href="mailto:subhamoydatta703@gmail.com" className={ghostButtonClass}>
          Contact
        </a>
        <a
          href="https://leetcode.com/u/26W5VCTCTA"
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButtonClass}
        >
          LeetCode
        </a>
        <a
          href="https://x.com/codebysubhamoy"
          target="_blank"
          rel="noopener noreferrer"
          className={ghostButtonClass}
        >
          Twitter
        </a>
      </div>
    </section>
  );
}