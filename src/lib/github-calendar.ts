export interface GitHubDay {
  date: string;
  level: number;
  count: number;
}

export interface GitHubCalendar {
  days: GitHubDay[];
  total: number;
  updatedAt: string;
}

export interface PullRequestTotals {
  total: number;
  merged: number;
  open: number;
  updatedAt: string;
}

export interface GitHubActivityData {
  calendar: GitHubCalendar;
  pullRequests: PullRequestTotals;
}

/** Read the public GitHub calendar, retaining its real dates and intensity levels. */
export function parseGitHubCalendar(html: string, updatedAt: string): GitHubCalendar {
  const dayPattern = /<td\b([^>]*data-date="[^"]+"[^>]*)><\/td>\s*<tool-tip\b[^>]*>([^<]*)<\/tool-tip>/g;
  const days: GitHubDay[] = [];

  for (const match of html.matchAll(dayPattern)) {
    const date = match[1].match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
    const level = Number(match[1].match(/data-level="(\d+)"/)?.[1]);
    const tooltip = match[2].trim();
    const countMatch = tooltip.match(/^(\d+) contributions? on /);
    const count = countMatch ? Number(countMatch[1]) : /^No contributions on /.test(tooltip) ? 0 : NaN;
    if (!date || !Number.isInteger(level) || level < 0 || level > 4 || !Number.isInteger(count) || count < 0) {
      throw new Error("Unrecognized GitHub contribution day");
    }
    days.push({ date, level, count });
  }

  days.sort((a, b) => a.date.localeCompare(b.date));
  if (days.length < 350 || days.length > 371 || new Set(days.map((day) => day.date)).size !== days.length) {
    throw new Error("Incomplete GitHub contribution calendar");
  }
  const firstTime = Date.parse(`${days[0].date}T00:00:00Z`);
  days.forEach((day, index) => {
    if (Date.parse(`${day.date}T00:00:00Z`) !== firstTime + index * 86400000) {
      throw new Error("GitHub contribution calendar has a date gap");
    }
  });

  return { days, total: days.reduce((sum, day) => sum + day.count, 0), updatedAt };
}
