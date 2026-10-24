export default function AboutSection() {
  return (
    <section id="about" className="about wrap" aria-labelledby="about-heading" data-reveal>
      <div className="section-head"><h2 id="about-heading">About me<span> / 05</span></h2></div>
      <div className="about-grid">
        <div>
          <p className="about-lead">I&apos;m Subhamoy, a Computer Science student focused on backend engineering, GenAI and agentic systems.</p>
          <p className="about-education">B.Tech in Computer Science &amp; Engineering (AI &amp; ML)<br />Brainware University</p>
        </div>
        <div className="about-story">
          <p>My projects range from agent harnesses and orchestration to RAG pipelines and LLM-powered backend systems. I&apos;ve published REXA and somoy on npm, and built and deployed applications including DocSense and Resumark.</p>
          <p>I&apos;m looking for an internship where I can contribute to backend and AI systems, work with an engineering team, and deepen the experience I&apos;ve gained through these projects.</p>
          <div className="recognition"><span className="eyebrow">RECOGNITION</span><h3>1st place - Frontend Odyssey</h3><p>IIT Patna · Hosted on Unstop</p></div>
        </div>
      </div>
    </section>
  );
}
