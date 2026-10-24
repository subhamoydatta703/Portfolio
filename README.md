# Subhamoy Datta - Portfolio

Personal portfolio showcasing my work in backend engineering, GenAI and agentic systems: agent harnesses, orchestration, RAG pipelines and LLM-powered backend applications.

[GitHub](https://github.com/subhamoydatta703) · [LinkedIn](https://www.linkedin.com/in/subhamoy-datta) · [Writing on DEV](https://dev.to/itssubhamoy)

## Features

- Three featured projects (REXA, DocSense and Marin) with an animated expansion for somoy, Resumark and ShelfLife.
- Original project screenshots and links to source code, npm packages and deployed applications.
- GitHub contribution heatmap and aggregate open-source pull request statistics.
- Eight skill categories covering 55 technical skills.
- Published DEV articles with dates, reading times and direct links.
- Responsive layouts, keyboard focus states and scroll animations that reverse in both directions.
- Reduced-motion support, a matching favicon, and direct email, resume and social links.

## Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 16 App Router, React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 and custom CSS |
| Motion | Scroll-driven transforms and CSS transitions |
| Icons | Lucide React |
| External data | GitHub public endpoints and DEV API |

## Run locally

Requires Node.js 20.9+ and npm.

```sh
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To preview the production build:

```sh
npm run build
npm run start
```

No environment variables or API keys are required for the public data integrations.

## Page structure

The page follows this order: Hero → Selected projects → Contributions → Skills & tools → Writing → About → Contact.

The header keeps three primary links: **Work, About and Contact**. The resume link sits beside GitHub in the hero. Additional projects expand on the same page.

## Editing content

| Content | Location |
| --- | --- |
| Section order | [`src/app/page.tsx`](src/app/page.tsx) |
| Contact, resume and profile links | [`src/lib/portfolio.ts`](src/lib/portfolio.ts) |
| Project cards, screenshots and destinations | [`src/lib/projects.ts`](src/lib/projects.ts) |
| Project image files | [`public/projects/`](public/projects/) |
| Full project technical details | [`src/data/project-details.json`](src/data/project-details.json) |
| Skill categories | [`src/lib/skills.ts`](src/lib/skills.ts) |
| GitHub data fetching | [`src/lib/github.ts`](src/lib/github.ts) |
| DEV article fetching | [`src/lib/writing.ts`](src/lib/writing.ts) |
| Fallback data | [`src/data/`](src/data/) |
| Section styling | [`src/components/portfolio/`](src/components/portfolio/) |
| Global styles | [`src/app/globals.css`](src/app/globals.css) |
| Metadata and favicon references | [`src/app/layout.tsx`](src/app/layout.tsx) |

Replace screenshots in `public/projects/` and update their imports in `src/lib/projects.ts` when changing file names. Favicon assets live in `public/`, including the SVG, PNG and Apple touch-icon versions.

## Design and behavior

The interface uses Arial typography, an off-white background, charcoal text, muted olive accents and thin section dividers. Screenshots retain their original proportions.

Scroll progress drives section opacity and vertical movement in both directions. Fully off-screen sections reach zero opacity; reduced-motion preferences keep all content visible. The page uses natural scrolling and works without an animation library.

## External data

GitHub activity and DEV articles are fetched on the server and cached for 24 hours. Local snapshots in `src/data/` keep the page available if either service is unavailable; the heatmap displays its update date.

Pull request totals cover contributions to external projects, excluding the course and assessment repositories listed in `src/lib/github.ts`. Individual issues, pull requests and repository names are not displayed in the Contributions section. Writing shows up to three recent distinct article titles.

Deploy with a Next.js-compatible runtime to retain daily data revalidation.

## Files to commit

Keep `src/`, `public/`, `scripts/`, package files and configuration in version control. **`public/projects/` is required** because the site imports those screenshots during the build.

The root `/projects/` folder contains original source screenshots, and `/design/` contains local prototype and review artifacts. Both are ignored by `.gitignore` and are not needed to build the site. A temporary MagicPath upload archive such as `component.tgz` is also not a deployment asset.

## Checks and commands

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Check skill uniqueness and create a production build |
| `npm run start` | Serve the production build |
| `npm run typecheck` | Check TypeScript types |
| `npm run lint` | Run ESLint on source files and scripts |
| `npm test` | Test GitHub calendar parsing and invalid-data rejection |
| `npm run check:skills` | Verify unique technical skills and guard against duplicated marquee content |

The build runs `check:skills` automatically. Local visual review artifacts are optional and are not required for these checks.
