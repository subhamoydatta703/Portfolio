import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import RecognitionSection from "@/components/RecognitionSection";
import ContactSection from "@/components/ContactSection";
import Dock from "@/components/Dock";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#09090b] text-zinc-300 selection:bg-amber-500/20 selection:text-white">
      {/* Absolute Tile-Cached Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      <main className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 md:px-14 pb-28">
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <RecognitionSection />
        <ContactSection />
      </main>

      {/* Floating Bottom Dock Navigation */}
      <Dock />
    </div>
  );
}
