import Hero from "@/components/Hero";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Header from "@/components/portfolio/Header";
import ScrollReveal from "@/components/portfolio/ScrollReveal";
import GitHubActivity from "@/components/portfolio/GitHubActivity";
import { getGitHubActivity } from "@/lib/github";
import { getPublishedArticles } from "@/lib/writing";
import WritingSection from "@/components/portfolio/WritingSection";
import "@/components/portfolio/portfolio.css";
import "@/components/portfolio/layout-refinements.css";
import "@/components/portfolio/github-activity.css";
import "@/components/portfolio/writing.css";

export const revalidate = 86400;

export default async function Home() {
  const [github, articles] = await Promise.all([getGitHubActivity(), getPublishedArticles()]);

  return (
    <ScrollReveal>
      <a className="skip-link" href="#home">Skip to content</a>
      <Header />
      <main id="home" tabIndex={-1}>
        <Hero />
        <ProjectsSection />
        <GitHubActivity activity={github} />
        <SkillsSection />
        <WritingSection articles={articles} />
        <AboutSection />
      </main>
      <ContactSection />
    </ScrollReveal>
  );
}
