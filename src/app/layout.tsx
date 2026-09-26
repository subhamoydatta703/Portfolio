import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subhamoy Datta — GenAI & Agentic Systems Engineer",
  description:
    "Portfolio of Subhamoy Datta. GenAI & Agentic Systems Engineer building autonomous agent harnesses, RAG pipelines, and full-stack applications. Open-source author of rexa-agent and @subhamoy/somoy. B.Tech CSE (AI & ML).",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans antialiased bg-[#09090b] text-zinc-300 min-h-screen selection:bg-amber-500/20 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
