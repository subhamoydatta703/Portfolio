import { Code2 } from "lucide-react";
import type { ComponentType } from "react";
import SectionHeading from "./SectionHeading";
import { glassCardBase } from "../lib/classes";
import {
  TypeScriptIcon,
  BunIcon,
  DockerIcon,
  GeminiIcon,
  OpenAIIcon,
  TavilyIcon,
  AgentLoopIcon,
  GitTrustIcon,
  ScanSecretIcon,
  ZodIcon,
  PostgresIcon,
  RedisIcon,
  AwsIcon,
  ClerkIcon,
  KeyIcon,
  JwtIcon,
  NextjsIcon,
  ExpressIcon,
  LangChainIcon,
  MongoIcon,
  TailwindIcon,
  NpmIcon,
} from "./Icons";

interface Skill {
  name: string;
  icon: ComponentType<{ className?: string }>;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & Agentic Systems",
    skills: [
      { name: "Gemini API", icon: GeminiIcon },
      { name: "OpenAI API", icon: OpenAIIcon },
      { name: "Tavily API", icon: TavilyIcon },
      { name: "LangChain", icon: LangChainIcon },
      { name: "Agent Loops & Handoffs", icon: AgentLoopIcon },
      { name: "Zod Schema I/O", icon: ZodIcon },
      { name: "Host Git Trust Boundaries", icon: GitTrustIcon },
    ],
  },
  {
    title: "Backend & Full-Stack",
    skills: [
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Bun & Node.js", icon: BunIcon },
      { name: "Next.js & React", icon: NextjsIcon },
      { name: "Express.js & Vite", icon: ExpressIcon },
      { name: "PostgreSQL & pgvector", icon: PostgresIcon },
      { name: "Redis & BullMQ Queues", icon: RedisIcon },
      { name: "MongoDB & Prisma ORM", icon: MongoIcon },
      { name: "Tailwind CSS", icon: TailwindIcon },
    ],
  },
  {
    title: "Security, Cloud & Tooling",
    skills: [
      { name: "Docker", icon: DockerIcon },
      { name: "AWS", icon: AwsIcon },
      { name: "JWT & OAuth 2.0 Auth", icon: JwtIcon },
      { name: "Clerk Authentication", icon: ClerkIcon },
      { name: "OS Credential Vault (keytar)", icon: KeyIcon },
      { name: "Input/Output Secret Scanning", icon: ScanSecretIcon },
      { name: "npm Package Publishing", icon: NpmIcon },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-16 sm:py-20 border-b border-white/[0.08]"
    >
      <SectionHeading
        icon={Code2}
        id="skills-heading"
        title="Technical Stack & Architecture"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((cat, idx) => (
          <div
            key={cat.title}
            className={`p-7 ${glassCardBase} hover:border-white/[0.2] flex flex-col justify-between shadow-md shadow-black/40`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-6 pb-3 border-b border-white/[0.08]">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400">
                  {cat.title}
                </h3>
                <span className="text-[10px] font-mono text-zinc-500">
                  0{idx + 1}
                </span>
              </div>

              <ul className="space-y-3.5">
                {cat.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center gap-3 text-sm text-zinc-300 group"
                  >
                    <div className="p-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-colors shrink-0 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]">
                      <skill.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
