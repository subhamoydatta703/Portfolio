"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { featuredProjects, moreProjects, type PortfolioProject } from "@/lib/projects";
import { portfolio } from "@/lib/portfolio";
import LinkArrow from "./portfolio/LinkArrow";

function ProjectCard({ project, index, extra = false }: { project: PortfolioProject; index: number; extra?: boolean }) {
  return (
    <article className={extra ? "project extra-project" : "project"} data-reveal={extra ? undefined : true} style={extra ? { transitionDelay: `${index * 70}ms` } : undefined} aria-labelledby={`project-${project.theme}`}>
      <div className={`project-image screenshot-frame screenshot-${project.theme}`}>
        <Image src={project.screenshot} alt={project.imageAlt} sizes="(max-width: 600px) calc(100vw - 76px), (max-width: 1000px) calc((100vw - 104px) / 2), 340px" />
      </div>
      <div className="project-title">
        <h3 id={`project-${project.theme}`}>{project.name}</h3>
        {project.version && <span className="version">{project.version}</span>}
        <span className="kind">{project.kind}</span>
      </div>
      <p>{project.description}</p>
      <small className="tags">{project.tags}</small>
      <div className="project-links">
        <a href={`${portfolio.github}/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`${project.name} source code`}>Source <LinkArrow /></a>
        {project.url && <a href={project.url} target="_blank" rel="noreferrer" aria-label={`${project.name} ${project.action?.toLowerCase()}`}>{project.action} <LinkArrow /></a>}
      </div>
    </article>
  );
}

export default function ProjectsSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="work" className="work wrap" aria-labelledby="projects-heading">
      <div className="section-head" data-reveal>
        <h2 id="projects-heading">Selected projects<span> / 01</span></h2>
        <p>Agentic systems, RAG pipelines<br />and AI-powered backends.</p>
      </div>
      <div className="project-grid featured-grid">
        {featuredProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} />)}
      </div>
      <div className="more-projects-control">
        <button type="button" className="more-projects-button" aria-expanded={showMore} aria-controls="additional-projects" onClick={() => setShowMore((open) => !open)}>
          {showMore ? "Show fewer projects" : "More projects"}
          <Plus aria-hidden="true" className={showMore ? "expand-icon is-open" : "expand-icon"} />
        </button>
      </div>
      <div id="additional-projects" className={showMore ? "projects-expansion is-open" : "projects-expansion"} inert={!showMore} aria-hidden={!showMore}>
        <div className="expansion-clip">
          <div className="project-grid additional-grid">
            {moreProjects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} extra />)}
          </div>
        </div>
      </div>
    </section>
  );
}
