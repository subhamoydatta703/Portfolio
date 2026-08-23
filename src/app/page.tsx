import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import ProjectGallery from "@/components/sections/ProjectGallery";
import AboutSection from "@/components/sections/About";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <article className="relative w-full">
      <Hero />

      <div className="relative z-30 bg-[#080808] shadow-[0_-30px_60px_rgba(0,0,0,0.6)]">
        <AboutSection />
      </div>
      <div className="relative z-20 bg-[#050505]">
        <ProjectGallery />
      </div>
      <div className="relative z-[15] bg-[#050505]">
        <TechStack />
      </div>



      <div className="relative z-40 bg-[#050505] shadow-[0_-30px_60px_rgba(0,0,0,0.6)]">
        <ContactSection />
      </div>
    </article>
  );
}
