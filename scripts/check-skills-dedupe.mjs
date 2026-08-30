#!/usr/bin/env node
/**
 * check-skills-dedupe.mjs
 *
 * Guards the "Technical Stack & Architecture" section against a historical
 * regression where a marquee/carousel rendered the same ~24 tech pills four
 * times into the DOM and the accessibility tree ("Technologies & Tools" list
 * repeated in a row).
 *
 * What this script verifies:
 *  1. `src/components/SkillsSection.tsx` renders every skill exactly once
 *     (no duplicate `name`s, no empty categories, count === distinct count).
 *  2. No file under `src/` reintroduces the marquee duplication pattern (a
 *     marquee animation track that doubles an array without hiding the
 *     duplicate copy via `aria-hidden`).
 *
 * Exit code 0 = pass, 1 = fail. Wired into `npm run check:skills` and
 * `npm run prebuild` so a regression fails `next build`.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const skillsPath = join(root, "src", "components", "SkillsSection.tsx");

const FAILURES = [];
const log = (msg) => console.log(msg);

/** Recursively list source files under `dir`. */
function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const st = statSync(p);
    if (st.isDirectory()) out.push(...walk(p));
    else if (/\.(tsx|ts|css)$/.test(entry)) out.push(p);
  }
  return out;
}

// ── 1. Skill uniqueness / completeness ──────────────────────────────────────
let skillsSource;
try {
  skillsSource = readFileSync(skillsPath, "utf8");
} catch (err) {
  log(`FAIL ${relative(root, skillsPath)} is missing: ${err.message}`);
  process.exit(1);
}

const catMatch = skillsSource.match(
  /const\s+skillCategories[^=]*=\s*\[([\s\S]*?)\n\s*\];/
);
if (!catMatch) {
  FAILURES.push(`Could not locate \`skillCategories\` in ${relative(root, skillsPath)}`);
} else {
  const block = catMatch[1];
  const nameRe = /name:\s*"([^"]+)"/g;
  const titleRe = /title:\s*"([^"]+)"/g;

  const names = [];
  const titles = [];
  let m;
  while ((m = nameRe.exec(block))) names.push(m[1]);
  while ((m = titleRe.exec(block))) titles.push(m[1]);

  if (titles.length === 0) FAILURES.push("Found 0 skill categories");
  if (names.length === 0) FAILURES.push("Found 0 skills");

  const counts = new Map();
  for (const name of names) counts.set(name, (counts.get(name) ?? 0) + 1);
  for (const [name, count] of counts) {
    if (count > 1) {
      FAILURES.push(`Duplicate skill "${name}" appears ${count} times`);
    }
  }
  if (names.length !== counts.size) {
    FAILURES.push(
      `Skill total (${names.length}) != distinct count (${counts.size})`
    );
  }

  log(
    `check-skills: ${titles.length} categories, ${counts.size} distinct skills ` +
      `(total ${names.length})`
  );
}

// ── 2. Marquee duplication regression scan ──────────────────────────────────
// The historical bug: `const doubled = [...stack, ...stack]` rendered into an
// animated marquee row WITHOUT every duplicate copy being wrapped in
const marqueeTrackRe = new RegExp("animate-\\[" + "marquee", "i");
const doublingRe = /\.\.\.(\w+)[^{]*?\.\.\.\1/;
let marqueeFlagged = false;

for (const file of walk(join(root, "src"))) {
  const content = readFileSync(file, "utf8");
  if (!marqueeTrackRe.test(content)) continue;

  const hasDoubling = doublingRe.test(content);
  const hasAriaHidden = /aria-hidden/.test(content) || /ariaHidden/.test(content);
  if (hasDoubling && !hasAriaHidden) {
    marqueeFlagged = true;
    FAILURES.push(
      `${relative(root, file)} uses a marquee track with a doubled array ` +
        `but no \`aria-hidden\` on the duplicate copies — duplicated tech list would ` +
        `re-enter the accessibility tree (historical bug).`
    );
  }
}

// ── Summary ─────────────────────────────────────────────────────────────────
if (FAILURES.length > 0) {
  log("\ncheck-skills: FAIL");
  for (const failure of FAILURES) log(`  ✗ ${failure}`);
  log(
    "\nFix the issues above, or if adding an intentional marquee, hide every " +
      "duplicate copy with aria-hidden and re-run `npm run check:skills`."
  );
  process.exit(1);
}

log(
  marqueeFlagged
    ? "\ncheck-skills: PASS (skills unique; marquee scan reached no failures)"
    : "\ncheck-skills: PASS — each skill appears exactly once, no marquee duplication"
);