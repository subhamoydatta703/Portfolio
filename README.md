# Subhamoy Datta — Portfolio


> **Live Preview:** [subhamoydatta.com](https://subhamoydattaportfolio.vercel.app/)

A cinematic, high-performance portfolio website built with modern web technologies. Designed to provide a flawless "weightless DOM" scrollytelling experience, capturing the essence of deep-space aesthetics without utilizing costly WebGL/3D libraries. It combines cutting-edge React paradigms, powerful generic CSS utility systems, and Framer Motion's robust API.

## Features 

* **Cinematic Scrollytelling:** Leverages Lenis for butter-smooth scroll hijacking and Framer Motion for scroll-linked animations. 
* **High-Performance Architecture:** Purely DOM-based animations, achieving blazing fast metrics with zero 3D dependencies constraint. 
* **Dynamic Aesthetics:** Deep-space style visual language complete with a static grain overlay, neon accents, and responsive hover-glow sections. 
* **Fully Responsive:** Painstakingly optimized to deliver 60fps on both ultra-wide monitors and memory-constrained mobile devices. 
* **Type-Safe:** Written and strictly configured in 100% TypeScript. 

## Technology Stack 

| Category         | Technology                 |
| ---------------- | -------------------------- |
| **Framework**    | [Next.js 15+](https://nextjs.org/) (App Directory) |
| **Language**     | [TypeScript](https://www.typescriptlang.org/)     |
| **Styling**      | [Tailwind CSS v4](https://tailwindcss.com/)       |
| **Animations**   | [Framer Motion](https://www.framer.com/motion/)   |
| **Scroll Engine**| [Lenis](https://lenis.studiofreight.com/)         |
| **Icons**        | [Lucide React](https://lucide.dev/)               |

## Getting Started 

### Prerequisites
Make sure you have Node.js (v18+) and npm installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/subhamoydatta703/portfolio.git
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   *Note: If you run into dependency resolution issues, you can strictly install using `npm install --legacy-peer-deps`.*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the site on your local machine.

## Built Commands
* `npm run dev`: Launch the Next.js development server.
* `npm run build`: Build a minified production bundle.
* `npm run start`: Start the production server based on the built files.
* `npm run typecheck`: Run TypeScript compiler to check for static typing errors.
* `npm run lint`: Run Next ESLint.

## Designing Philosophy & Layout Sections 

* **Hero Section:** Serves as the high-impact landing with massive typographic elements highlighting DSA, Codeforces execution, and Full-Stack capability.
* **Project Works:** Handcrafted cards with generic `hover-zoom` implementations. Links dynamically navigate to code previews.
* **About Scope:** Translucent glassmorphism tech stack highlighting technical acumen across front-end rendering engines and backend API design.
* **Socials/Contact Action:** Seamless formless CTA directing organic network reach to Github, LinkedIn, and Email copy-clip implementations.

## Quality & Accessibility

* **Deduplicated tech stack:** The "Technical Stack & Architecture" section renders each skill exactly once — no marquee/carousel duplication leaking into source view or the accessibility tree. A regression was historically caused by marquee tracks doubling the tech list into readable DOM.
* **Enforced on every build:** `npm run check:skills` (`scripts/check-skills-dedupe.mjs`) verifies every skill is unique, all categories are non-empty, and no marquee duplication pattern exists under `src/`. It runs automatically via `prebuild`, so a regression will fail `next build`.

## License & Copyright

All structural and design elements created expressly for this repository unless otherwise noted.  
© 2026 Subhamoy Datta. All rights reserved. 
