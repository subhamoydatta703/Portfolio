import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Subhamoy Datta - Backend, GenAI & Agentic Systems",
  description:
    "Subhamoy Datta builds and publishes agentic systems, develops RAG pipelines, and deploys LLM-powered backend systems. Explore projects, open-source contributions and technical skills.",
  openGraph: {
    title: "Subhamoy Datta - Backend, GenAI & Agentic Systems",
    description: "Agent harnesses, orchestration, RAG pipelines and LLM-powered backend systems.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.svg?v=2", type: "image/svg+xml", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
