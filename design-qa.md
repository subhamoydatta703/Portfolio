# Portfolio implementation QA

final result: passed

Reviewed 24 October 2026. The production preview is running at http://localhost:3000.

## Visual source and implementation

- Source: the approved MagicPath portfolio at `https://designs.magicpath.ai/v1/fiercely-time-8546?embed=true`.
- Source capture: `design/qa/reference-desktop.png`, 1200 × 3836 pixels; viewport capture: `design/qa/reference-desktop-viewport.png`, 1200 × 900.
- Final implementation: `design/qa/final-1200.png`, 1200 × 4139 pixels, and `design/qa/final-390.png`, 390 × 6327 pixels.
- Desktop viewport: 1200 × 900 CSS pixels; mobile: 390 × 844. Device scale factor: 1. Screenshots contain page content without browser chrome. No density rescaling was used.
- Full and focused comparisons: `design/qa/comparison-full.png`, `comparison-hero.png`, `comparison-projects.png`, `comparison-skills.png`, `comparison-about.png`, and `comparison-contact.png`. The reference is on the left and implementation on the right.
- Final region captures: `design/qa/final-contributions.png`, `final-skills.png`, `final-writing.png`, `final-about.png`, `final-contact.png`, and `somoy-neutral.png`.
- Default screenshot state: additional projects collapsed, AI & Agent category selected, reduced motion enabled so every section is visible for full-page comparison. Normal-motion behavior was tested separately.

## Approved changes beyond the published MagicPath revision

The public MagicPath revision predates changes explicitly requested during implementation. These are intentional, rather than visual drift:

1. The locally prepared Contributions styling uses the same two-column rhythm and fine dividers as About, with compact totals and a borderless heatmap. No individual repository, issue or PR details are displayed.
2. Contributions now comes directly after Projects, followed by Skills, Writing, About and Contact. Section numbers follow that order.
3. Writing contains three distinct published DEV articles with real links, dates, tags and reading times; the footer also links to the DEV profile.
4. Fully off-screen sections fade to zero opacity in either scroll direction; visible neighboring content remains part of the natural page flow.
5. Somoy uses `projects/Screenshot 2026-10-24 000607.png`, copied unchanged to `public/projects/somoy.png`. The screenshot frame is dark neutral (`#1a1a1a`) and has no added border. Original image hashes match.

These changes account for the total page-height difference. The public reference could not receive the final Contributions styling because MagicPath's external-agent API quota was exhausted; implementation used the saved local revision.

## Required fidelity surfaces

### Typography

Arial/Helvetica sans-serif, regular hero weight, heading scale, line heights and letter spacing match the approved prototype. The hero headline and supporting copy wrap as in the source at the same desktop viewport. Small link arrows use accessible Lucide icons rather than text glyphs; this is a minor, intentional icon implementation difference.

### Spacing and layout

The 1240px maximum container, 40px desktop gutters, 24px mobile gutters, three-column desktop projects, responsive category selector and two-column About/Contact layouts were retained. Source and implementation measurements at 1200px agree exactly for the unchanged sections:

| Section | Source height | Implementation height |
| --- | ---: | ---: |
| Projects | 700.46875px | 700.46875px |
| Skills | 570px | 570px |
| About | 599.640625px | 599.640625px |
| Contact | 413.015625px | 413.015625px |

The hero portrait remains capped at 280px on desktop and 210px on mobile, shrinking with its tablet grid track when necessary. No page overflow was found at 320, 390, 768 or 1440px.

The explicit tilt check (`design/qa/alignment-results.json`) found no rotation, skew or perspective on the page, sections, portrait or project frames. At 1440px all section dividers run from x=140 to x=1300; at 1200px from x=40 to x=1160; at 390px from x=24 to x=366. The hero's asymmetrical composition is part of the approved design.

### Colors and tokens

The off-white `#fcfcfa` surface, `#262923` primary text, muted gray/olive text, pale green selected skill category and thin gray-green dividers match the source. The Contributions chart reuses the muted green palette. Somoy's earlier red treatment was removed as requested.

### Images

All six supplied project screenshots are used; no placeholder or invented project interface remains. Screenshots retain their proportions with `object-fit: contain`. The existing profile avatar retains its original crop and square frame. All visible and expanded project images loaded successfully. The latest somoy image and border treatment were separately inspected in `design/qa/somoy-neutral.png`.

### Copy and data

Approved hero, About, availability and contact copy is retained. REXA is labelled v2.0.0. All eight technical skill categories and 55 entries are preserved; the two published-package contribution entries were removed from Skills at the user's request and the packages remain represented in Projects. Full original project details and links are preserved in `src/data/project-details.json`.

GitHub data comes from the public calendar and external-project PR search, with a dated verified fallback. The visible snapshot has 1,526 calendar contributions and 4 external project PRs: 2 merged and 2 open. Course/assessment submissions are excluded from the project PR total. External content uses server-side daily caching and local fallbacks. DEV duplicate titles are shown once.

## Interaction and responsive checks

Browser results: `design/qa/browser-results.json`; final layout and somoy style confirmation: `design/qa/final-state.json`.

- REXA, DocSense and Marin are featured. More projects expands somoy, Resumark and ShelfLife on the same page; Show fewer projects collapses them.
- Collapsed projects are inert and removed from keyboard interaction; the button exposes `aria-expanded` and `aria-controls`.
- All eight skill category buttons select their corresponding lists, covering all 55 entries.
- Work/About/Contact anchors, the hero resume link, email `mailto:` destination and all five social/profile links use the expected destinations.
- Writing uses three distinct actual DEV article links, dates and reading times.
- Heatmap cells use real dates, counts and intensity levels. The mobile chart scrolls inside its own region without overflowing the page.
- The skip link works; native links/buttons expose visible focus states.
- Normal-motion tests assert opacity is exactly 0 below the viewport, 1 when visible, 0 after scrolling back up, and 0 once fully above the viewport.
- More projects animates open and closed. Reduced-motion mode leaves all content visible and disables the motion transitions.
- Desktop, tablet, 390px and 320px layouts pass. No application console errors or page exceptions remain.

## Fix history

1. **P1, fixed — heatmap hydration error.** Mixed text/value children in SVG `<title>` elements caused React hydration errors. Titles and descriptions now receive single string values. Subsequent production-browser checks report no hydration or console errors.
2. **P2, fixed — sections remained faintly visible.** The prototype used 18% minimum opacity. The reveal now calculates entry and exit progress, reaches zero off-screen and removes its own previous translation from layout measurements to avoid feedback jitter. Browser checks confirm full visibility transitions in both directions.
3. **Requested visual refinement, completed — somoy asset and frame.** Replaced the initial npm screenshot with the newly supplied dark screenshot and removed the red background/border treatment. Focused capture confirms `rgb(26, 26, 26)` and a zero-width border.

No actionable P0/P1/P2 findings remain. Full-page and focused comparisons were inspected; mobile and updated Writing/Contributions regions were also inspected individually.

## Validation

- Production build: passed.
- TypeScript: passed.
- ESLint: passed without warnings.
- Skill uniqueness guard: passed, 8 categories / 55 skills.
- GitHub calendar parser tests: 3 passed, including malformed/incomplete response rejection.
- Playwright behavior, responsive layout, motion and console checks: passed.
- Latest somoy source-file hash comparison: passed.

The checks verify the implemented experience and the stated keyboard/motion behavior; they do not claim a complete WCAG conformance audit.

## Final Product Design audit

The seven-step recheck is saved in `design-audit.md`, with fresh screenshots under `design/qa/audit/`. One additional P2 issue was found and fixed: faint secondary text. The shared muted colour is now `#68725e` (4.92:1 against the page), and selected category counts use `#616a56` (4.76:1 on their selected background). This intentionally strengthens readability within the approved olive-grey palette. Pre-fix evidence is in `design/qa/audit-before/`; post-fix browser, responsive and console checks passed.

The final header retains exactly Work, About and Contact. The new charcoal/off-white SVG favicon, PNG fallback and Apple touch icon all load successfully. These are the latest reviewed states; no actionable P0/P1/P2 issue remains.
