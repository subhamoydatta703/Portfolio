import { User, Cpu, ShieldCheck, Database } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { glassCardBase } from "../lib/classes";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <SectionHeading icon={User} title="About Me" />

      <div className="space-y-4 text-zinc-300 leading-relaxed text-base sm:text-lg mb-10">
        <p>
          I am a GenAI Backend Developer specializing in production AI systems:
          RAG pipelines, LLM-powered backend architectures, and agent
          orchestration. As an active open-source author and maintainer, I
          engineered and published two npm packages:{" "}
          <span className="font-mono text-amber-400 font-medium">rexa-agent</span>{" "}
          and{" "}
          <span className="font-mono text-amber-400 font-medium">
            @subhamoy/somoy
          </span>
          , both MIT-licensed. Currently pursuing B.Tech CSE (AI &amp; ML).
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}>
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-amber-400 group-hover:border-amber-500/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <Cpu className="w-4 h-4" />
            </div>
            <span>Agent Orchestration</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Building provider-agnostic model execution engines with Zod-typed tool I/O and typed RunResult failure states instead of exceptions. Implementing loop detection, agent handoffs with complete transcript transfer, and dynamic tool-calling loops with strict host vs sandbox git trust boundaries.
          </p>
        </div>

        <div className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}>
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-amber-400 group-hover:border-amber-500/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <Database className="w-4 h-4" />
            </div>
            <span>RAG &amp; Vector Search</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Designing production multi-modal ingestion pipelines across PDF, URL, YouTube, and raw text formats. Utilizing pgvector for semantic similarity indexing paired with an asynchronous Redis and BullMQ embedding pipeline. Incorporating Redis-backed rate limiting and high-throughput result caching.
          </p>
        </div>

        <div className={`group p-6 sm:p-7 ${glassCardBase} hover:border-white/[0.2] space-y-3 shadow-md shadow-black/40`}>
          <div className="flex items-center gap-3 text-white font-semibold text-base">
            <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-amber-400 group-hover:border-amber-500/40 transition-colors shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <span>Sandbox Security</span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors">
            Enforcing isolated execution within non-root Docker sandboxes with strict command containment. Pausing execution for explicit user confirmation on consequential actions like git operations, dependency installs, and file deletions. Implementing input/output guardrails with automated secret scanning and OS-level credential storage via keytar.
          </p>
        </div>
      </div>
    </section>
  );
}
