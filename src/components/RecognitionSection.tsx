import React from "react";
import { Trophy, Award } from "lucide-react";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-500">
          <Trophy className="w-5 h-5" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Honors &amp; Recognition
        </h2>
      </div>

      {/* Recognition Card - 120 FPS High-Performance Translucent Glass */}
      <div className="p-8 rounded-2xl border border-white/[0.08] bg-[#121215]/85 bg-gradient-to-b from-white/[0.03] to-transparent shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] hover:border-amber-500/40 hover:bg-[#18181b]/95 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 transition-all duration-200 ease-out flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md shadow-black/40">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-inner">
            <Award className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold text-white">
                Winner
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/25 font-semibold shadow-[inset_0_1px_0_0_rgba(251,191,36,0.15)]">
                1st Place
              </span>
            </div>
            <p className="text-base text-zinc-200 font-medium">
              Frontend Odyssey: The Interactive Web Experience Challenge
            </p>
            <p className="text-sm text-zinc-400">
              Indian Institute of Technology (IIT), Patna (hosted via Unstop)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
