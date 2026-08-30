import { User, Cpu, ShieldCheck, Server, Cloud } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { glassCardBase } from "../lib/classes";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <SectionHeading title="About Me" />

      <div className="space-y-3 text-zinc-300 leading-relaxed text-sm sm:text-base mb-10">
        <p>
          Hi, I'm Subhamoy — I build production-style AI systems: RAG
          pipelines, LLM-powered backend architectures, and agent
          orchestration. I've published two MIT-licensed npm packages —{" "}
          <span className="font-mono text-[#5B8DFF] font-medium">rexa-agent</span>{" "}
          (a Docker-sandboxed CLI coding agent) and{" "}
          <span className="font-mono text-[#5B8DFF] font-medium">
            @subhamoy/somoy
          </span>{" "}
          (a provider-agnostic TypeScript agent SDK). I'm currently studying
          Computer Science (AI &amp; ML) at Brainware University, and looking
          for an internship where this is the day-to-day work.
        </p>
        <p className="text-zinc-400">Here are a few things about me:</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}
        >
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#5B8DFF] group-hover:border-[#5B8DFF]/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <Cpu className="w-4 h-4" />
            </div>
            <span>Agent Harness &amp; Orchestration</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Building provider-agnostic model execution engines with Zod-typed
            tool I/O and typed RunResult failure states instead of
            exceptions. Implementing loop detection, agent handoffs with
            complete transcript transfer, and dynamic tool-calling loops with
            strict host vs sandbox git trust boundaries.
          </p>
        </div>

        <div
          className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}
        >
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#5B8DFF] group-hover:border-[#5B8DFF]/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>Agent Security &amp; Guardrails</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Enforcing isolated execution within non-root Docker sandboxes
            with strict command containment. Pausing execution for explicit
            user confirmation on consequential actions like git operations,
            dependency installs, and file deletions. Implementing
            input/output guardrails with automated secret scanning and
            OS-level credential storage via keytar.
          </p>
        </div>

        <div
          className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}
        >
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#5B8DFF] group-hover:border-[#5B8DFF]/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <Server className="w-4 h-4" />
            </div>
            <span>GenAI Backend Dev</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Designing production LLM-powered backends: multi-modal ingestion
            pipelines across PDF, URL, YouTube, and raw text, pgvector for
            semantic similarity search, and asynchronous Redis/BullMQ
            embedding pipelines. Backing it with Redis-based rate limiting,
            high-throughput result caching, and Express/Node APIs built to
            hold up under real load.
          </p>
        </div>

        <div
          className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}
        >
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-[#5B8DFF] group-hover:border-[#5B8DFF]/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <Cloud className="w-4 h-4" />
            </div>
            <span>Cloud &amp; Open Source</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Shipping and maintaining two MIT-licensed npm packages —
            rexa-agent and @subhamoy/somoy — from architecture through
            publishing. Deploying and running services on AWS, Vercel, and
            Render, with Docker Compose for containerized environments
            across development and production.
          </p>
        </div>
      </div>
    </section>
  );
}