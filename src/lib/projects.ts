import type { StaticImageData } from "next/image";
import rexa from "../../public/projects/rexa.png";
import docsense from "../../public/projects/docsense.png";
import marin from "../../public/projects/marin.png";
import somoy from "../../public/projects/somoy.png";
import resumark from "../../public/projects/resumark.png";
import shelflife from "../../public/projects/shelflife.png";
import originalDetails from "@/data/project-details.json";

export interface PortfolioProject {
  name: string;
  kind: string;
  version?: string;
  description: string;
  tags: string;
  repo: string;
  url?: string;
  action?: string;
  screenshot: StaticImageData;
  imageAlt: string;
  theme: string;
  /** Original technical details and links retained from the previous site. */
  details: (typeof originalDetails)[number];
}

function details(title: string) {
  const project = originalDetails.find((item) => item.title === title);
  if (!project) throw new Error(`Missing original project details: ${title}`);
  return project;
}

export const featuredProjects: PortfolioProject[] = [
  {
    name: "REXA",
    kind: "CLI coding agent",
    version: "v2.0.0",
    description:
      "A coding agent with Plan and Act modes, Docker isolation and guardrails for code execution.",
    tags: "TypeScript · Bun · Docker",
    repo: "REXA",
    url: "https://npmjs.com/package/rexa-agent",
    action: "Package",
    screenshot: rexa,
    imageAlt:
      "REXA v2.0.0 terminal showing its agent harness and Plan and Act modes",
    theme: "rexa",
    details: details("REXA"),
  },
  {
    name: "DocSense",
    kind: "Document intelligence",
    description:
      "Ask questions across PDFs, websites, YouTube videos and text. Built with semantic search and background processing.",
    tags: "pgvector · Redis · BullMQ · AWS S3",
    repo: "DocSense",
    url: "https://docsense-app.vercel.app",
    action: "Live demo",
    screenshot: docsense,
    imageAlt:
      "DocSense document intelligence homepage with supported document sources",
    theme: "docsense",
    details: details("DocSense"),
  },
  {
    name: "Marin",
    kind: "Voice AI companion",
    description:
      "A full-duplex voice companion with local Whisper transcription, interruption handling and emotion-aware speech.",
    tags: "Python · Whisper · Gemini · CUDA",
    repo: "Marin",
    screenshot: marin,
    imageAlt:
      "Marin voice companion showing hands-free listening and live transcript",
    theme: "marin",
    details: details("Marin"),
  },
];

export const moreProjects: PortfolioProject[] = [
  {
    name: "somoy",
    kind: "TypeScript agent SDK",
    description:
      "A provider-agnostic SDK for building agents with typed tools, handoffs and explicit failure states.",
    tags: "TypeScript · Zod · Gemini · OpenAI",
    repo: "Agent-SDK",
    url: "https://npmjs.com/package/@subhamoy/somoy",
    action: "Package",
    screenshot: somoy,
    imageAlt: "The @subhamoy/somoy package published on npm",
    theme: "somoy",
    details: details("somoy"),
  },
  {
    name: "Resumark",
    kind: "AI resume analysis",
    description:
      "Resume analysis with Gemini, asynchronous processing, authentication and cloud storage.",
    tags: "Express · PostgreSQL · BullMQ · AWS S3",
    repo: "Resumark",
    url: "https://resumark-webapp.vercel.app/",
    action: "Live demo",
    screenshot: resumark,
    imageAlt: "Resumark resume analysis homepage and document audit preview",
    theme: "resumark",
    details: details("Resumark"),
  },
  {
    name: "ShelfLife",
    kind: "Household inventory",
    description:
      "Pantry inventory and expiry tracking, with authenticated REST APIs and MongoDB storage.",
    tags: "Node.js · Express · MongoDB · JWT",
    repo: "Shelf-Life",
    url: "https://shelflifwebapp.vercel.app/",
    action: "Live demo",
    screenshot: shelflife,
    imageAlt: "ShelfLife household inventory sign-in screen",
    theme: "shelflife",
    details: details("ShelfLife"),
  },
];
