import { Trophy, Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { glassCardBase } from "../lib/classes";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <SectionHeading  title="Honors & Recognition" />

      <div className={`p-8 ${glassCardBase} hover:border-[#5B8DFF]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-md shadow-black/40`}>
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-2xl bg-[#5B8DFF]/10 border border-[#5B8DFF]/30 flex items-center justify-center text-[#5B8DFF] shrink-0 shadow-inner">
            <Award className="w-7 h-7" />
          </div>

          <div className="space-y-1.5">
            <div className="flex items-center gap-3">
              <span className="text-lg sm:text-xl font-bold text-white">
                Winner
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#5B8DFF]/10 text-[#5B8DFF] border border-[#5B8DFF]/25 font-semibold shadow-[inset_0_1px_0_0_rgba(91,141,255,0.15)]">
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