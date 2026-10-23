export interface SkillCategory { label: string; skills: string[]; }

export const skillCategories: SkillCategory[] = [
  {
    label: "AI & Agent",
    skills: [
      "Agentic Harness & Multi-Agent System Design",
      "Tool-/Function-Calling Systems",
      "Multi-Provider LLM Integration",
      "Agent Loops & Handoffs",
      "Zod Schema I/O",
      "Typed RunResult Failure States",
      "Loop Detection",
      "Host vs Sandbox Git Trust Boundaries",
      "Gemini API",
      "OpenAI API",
      "Tavily API",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering"
    ]
  },
  {
    label: "Frontend",
    skills: [
      "React",
      "Tailwind CSS"
    ]
  },
  {
    label: "Backend",
    skills: [
      "Bun & Node.js",
      "Express.js",
      "Next.js & React",
      "Vite",
      "REST API Design",
      "CLI Tooling",
      "API Integration",
      "BullMQ",
      "Queue-Based Architecture",
      "Asynchronous Processing",
      "Redis Caching"
    ]
  },
  {
    label: "Databases",
    skills: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "Redis",
      "Neo4j (Cypher)",
      "SQL",
      "Database Design"
    ]
  },
  {
    label: "Auth & Security",
    skills: [
      "Clerk",
      "JWT",
      "OAuth 2.0",
      "bcryptjs",
      "Webhook Verification (Svix)",
      "OS Credential Vaults (keytar)",
      "Guardrails & Secret Scanning",
      "Sandboxed execution"
    ]
  },
  {
    label: "Cloud & Infra",
    skills: [
      "AWS",
      "Docker",
      "Docker Compose",
      "Vercel",
      "Render"
    ]
  },
  {
    label: "Languages",
    skills: [
      "TypeScript",
      "Python",
      "JavaScript",
      "Java"
    ]
  },
  {
    label: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Prisma ORM"
    ]
  }
];
