import { ArrowDownRight } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import LinkArrow from "./portfolio/LinkArrow";
import PortraitToggle from "./portfolio/PortraitToggle";

export default function Hero() {
  return (
    <section className="hero wrap" aria-labelledby="hero-heading">
      <div className="hero-copy">
        <p className="availability"><span aria-hidden="true" />Open to internships</p>
        <h1 id="hero-heading">Backend Engineer.<br />GenAI &amp;<br />Agentic Systems.</h1>
        <p className="intro">
          Building and publishing agentic systems, from agent harnesses to
          orchestration, and developing and deploying RAG pipelines and
          LLM-powered backend systems.
        </p>
        <div className="actions">
          <a className="button" href="#work">View my work <ArrowDownRight className="link-arrow" aria-hidden="true" /></a>
          <a className="textlink" href={portfolio.github} target="_blank" rel="noreferrer">GitHub <LinkArrow /></a>
          <a className="textlink" href={portfolio.resume} target="_blank" rel="noreferrer">Resume <LinkArrow /></a>
        </div>
      </div>
      <PortraitToggle />
    </section>
  );
}
