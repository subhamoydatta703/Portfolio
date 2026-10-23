import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import assert from "node:assert/strict";
import test from "node:test";
import ts from "typescript";

const source = readFileSync(new URL("../src/lib/github-calendar.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 } });
const exports = {};
runInNewContext(compiled.outputText, { exports });
const { parseGitHubCalendar } = exports;

function calendarFixture() {
  return Array.from({ length: 365 }, (_, index) => {
    const date = new Date(Date.UTC(2025, 9, 24) + index * 86400000).toISOString().slice(0, 10);
    const count = index === 0 ? 1 : index === 182 ? 3 : index === 364 ? 5 : 0;
    const text = count === 0 ? "No contributions" : `${count} contribution${count === 1 ? "" : "s"}`;
    return `<td data-level="${count ? 1 : 0}" data-date="${date}"></td><tool-tip>${text} on the day.</tool-tip>`;
  });
}

test("preserves actual dates and counts when GitHub returns calendar rows out of date order", () => {
  const fixture = calendarFixture();
  const result = parseGitHubCalendar(fixture.reverse().join("\n"), "2026-10-23");
  assert.equal(result.days.length, 365);
  assert.equal(result.total, 9);
  assert.equal(result.days[0].date, "2025-10-24");
  assert.equal(result.days[0].count, 1);
  assert.equal(result.days[182].count, 3);
  assert.equal(result.days[364].date, "2026-10-23");
  assert.equal(result.days[364].count, 5);
});

test("rejects incomplete, duplicated and date-gapped calendars instead of showing inaccurate activity", () => {
  const fixture = calendarFixture();
  assert.throws(() => parseGitHubCalendar("<html>Rate limit exceeded</html>", "2026-10-23"), /Incomplete/);
  assert.throws(() => parseGitHubCalendar([...fixture, fixture[0]].join("\n"), "2026-10-23"), /Incomplete/);
  assert.throws(() => parseGitHubCalendar(fixture.filter((_, index) => index !== 100).join("\n"), "2026-10-23"), /date gap/);
});

test("rejects unknown intensity levels and unexpected tooltip content", () => {
  const fixture = calendarFixture().join("\n");
  assert.throws(() => parseGitHubCalendar(fixture.replace('data-level="1"', 'data-level="9"'), "2026-10-23"), /Unrecognized/);
  assert.throws(() => parseGitHubCalendar(fixture.replace("1 contribution on the day.", "Unknown activity"), "2026-10-23"), /Unrecognized/);
});
