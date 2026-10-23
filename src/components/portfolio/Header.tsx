import { portfolio } from "@/lib/portfolio";
import LinkArrow from "./LinkArrow";

export default function Header() {
  return (
    <header className="nav wrap">
      <a className="identity" href="#home">{portfolio.name}</a>
      <nav aria-label="Main navigation">
        <a href="#work">Work</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav-contact" href={`mailto:${portfolio.email}`}>
        Get in touch <LinkArrow />
      </a>
    </header>
  );
}
