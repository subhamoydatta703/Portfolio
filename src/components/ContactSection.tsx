import { ArrowUp } from "lucide-react";
import { portfolio } from "@/lib/portfolio";
import LinkArrow from "./portfolio/LinkArrow";

export default function ContactSection() {
  const profiles = [
    { label: "LinkedIn", href: portfolio.linkedin },
    { label: "GitHub", href: portfolio.github },
    { label: "X", href: portfolio.x },
    { label: "LeetCode", href: portfolio.leetcode },
    { label: "DEV", href: portfolio.dev },
  ];

  return (
    <footer id="contact" className="footer wrap" aria-labelledby="contact-heading" data-reveal>
      <div className="contact-grid">
        <div className="contact-intro">
          <span className="eyebrow">CONTACT</span>
          <h2 id="contact-heading">Let’s talk.</h2>
          <p>Have an internship opportunity or a project in mind? I’d be glad to hear about it.</p>
          <div className="contact-availability"><span aria-hidden="true" />Open to internships</div>
        </div>
        <div className="contact-options">
          <span className="eyebrow">GET IN TOUCH</span>
          <div className="contact-primary"><a className="button" href={`mailto:${portfolio.email}`}>Email <LinkArrow /></a></div>
          <div className="contact-elsewhere">
            <span className="eyebrow">FIND ME ELSEWHERE</span>
            <div>{profiles.map((profile) => <a key={profile.label} href={profile.href} target="_blank" rel="noreferrer">{profile.label} <LinkArrow /></a>)}</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>{portfolio.name}</span>
        <div><a href={portfolio.resume} target="_blank" rel="noreferrer">Resume <LinkArrow /></a><a href="#home">Back to top <ArrowUp className="link-arrow" aria-hidden="true" /></a></div>
      </div>
    </footer>
  );
}
