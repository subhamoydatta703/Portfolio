"use client";

import { useState } from "react";
import { skillCategories } from "@/lib/skills";

export default function SkillsSection() {
  const [active, setActive] = useState(0);
  const category = skillCategories[active];

  return (
    <section id="skills" className="skills wrap" aria-labelledby="skills-heading" data-reveal>
      <div className="section-head">
        <h2 id="skills-heading">Skills &amp; tools<span> / 03</span></h2>
        <p>Technologies and engineering practices<br />I use across my projects.</p>
      </div>
      <div className="skills-browser">
        <div className="skill-categories" role="group" aria-label="Skill categories">
          {skillCategories.map((item, index) => (
            <button key={item.label} type="button" className={active === index ? "skill-category is-active" : "skill-category"} aria-pressed={active === index} aria-controls="skill-details" onClick={() => setActive(index)}>
              <span>{item.label}</span><span className="skill-category-count">{String(item.skills.length).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div id="skill-details" className="skill-details" aria-labelledby="active-skill-heading">
          <div className="skill-detail-heading"><h3 id="active-skill-heading">{category.label}</h3><span>{category.skills.length} entries</span></div>
          <ul className="skill-items" key={active}>{category.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
