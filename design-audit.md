# Product Design audit — 24 October 2026

Overall result: passed after fixing secondary-text contrast.

Reviewed the running portfolio at http://localhost:3000 using the Product Design audit workflow and user-authorized Playwright. Screenshots below were captured and inspected during this audit. The implementation was also compared with the approved MagicPath design; detailed comparison evidence is in `design-qa.md`.

## Findings

**Fixed: faint text.** Before the audit, project tags measured 2.84:1 contrast, project-type labels 3.69:1, section descriptions 3.88:1 and the introduction 4.39:1 against the page background. Secondary text now uses the same olive-grey palette at `#68725e`, giving 4.92:1. Selected category counts use `#616a56`, giving 4.76:1 on their selected background. No layout dimensions changed. Before/after measurements are in `design/qa/audit-before/results.json` and `design/qa/audit/results.json`.

**Confirmed: no tilt.** Page, section and image transforms have no rotation, skew or perspective at 1440, 1200 and 390px. Section dividers share their left and right edges. The asymmetrical hero is intentional. Measurements: `design/qa/alignment-results.json`.

**Confirmed: content and arrangement.** Hero → Projects → Contributions → Skills → Writing → About → Contact. Header links remain Work, About and Contact. Contributions is not duplicated inside Skills, and no individual issue/PR/repository list is displayed.

## Steps reviewed

| Step | Surface | Health |
| --- | --- | --- |
| 1 | Hero/header | Passed: role, copy, avatar, availability, navigation, GitHub and resume. |
| 2 | Projects | Passed: three featured projects; three additional projects expand and collapse; all supplied screenshots load. |
| 3 | Contributions | Passed: compact verified totals, actual heatmap, consistent dividers, no individual contribution details. |
| 4 | Skills | Passed: eight selectable categories covering all 55 technical skills. |
| 5 | Writing | Passed: three distinct real DEV articles, dates, reading times and destinations. |
| 6 | About | Passed: aligned introduction, education, internship interests and recognition. |
| 7 | Contact | Passed: Email action, grouped profiles, consistent availability, resume and back-to-top link. |

### 1. Hero

![Hero](design/qa/audit/01-hero.png)

### 2. Projects

![Projects](design/qa/audit/02-projects.png)

### 3. Contributions

![Contributions](design/qa/audit/03-contributions.png)

### 4. Skills

![Skills](design/qa/audit/04-skills.png)

### 5. Writing

![Writing](design/qa/audit/05-writing.png)

### 6. About

![About](design/qa/audit/06-about.png)

### 7. Contact

![Contact](design/qa/audit/07-contact.png)

## Behavior and asset verification

- No application console errors or page exceptions.
- No page-level overflow at 320, 390, 768 or 1440px.
- Sections reach zero opacity off-screen, fully appear in view and reverse when scrolling back. Reduced-motion mode keeps content visible.
- More projects animates in both directions, exposes its state and prevents focus from entering collapsed content.
- All skill category selections render the expected entries.
- Resume, email, all five profile links and the three article destinations match the intended sources.
- SVG favicon, PNG fallback and Apple touch icon all return HTTP 200. The charcoal/off-white S mark replaces the cyan icon.
- Somoy uses the newly supplied dark screenshot, unchanged, with a dark neutral frame and no added border.

Results: `design/qa/browser-results.json`, `design/qa/audit/results.json`, and `design/qa/final-state.json`. Fresh mobile screenshots are in `design/qa/audit/`.

## Limits

The audit covers the visible layout, sampled text contrast, keyboard entry, motion preferences and tested browser interactions. It is not a complete WCAG certification or a test with every assistive technology. GitHub and DEV data use daily caching and dated local fallbacks; their external contents can change independently.

No blocking design or interaction issue remains in the reviewed scope.
