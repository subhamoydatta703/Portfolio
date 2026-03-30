import type { Metadata } from "next";
import { Space_Grotesk, Inter, Outfit } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import NavigationBar from "@/components/ui/NavigationBar";
import CustomCursor from "@/components/ui/CustomCursor";
import PageLoader from "@/components/ui/PageLoader";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Subhamoy Datta — Full Stack Developer & AI Explorer",
  description:
    "Portfolio of Subhamoy Datta. Full Stack Web Developer (MERN Stack), B.Tech CSE (AI & ML). DSA problem solver on Codeforces. Building production-grade web experiences with AI integrations.",
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
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${outfit.variable} dark`}
    >
      <body className="relative font-sans antialiased bg-[#050505] text-white overflow-x-hidden min-h-screen grain-overlay">
        <SmoothScrollProvider>
          <PageLoader />
          <CustomCursor />
          <NavigationBar />
          <main className="relative z-20 w-full min-h-screen flex flex-col">
            {children}
          </main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
