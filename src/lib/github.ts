import "server-only";
import snapshot from "@/data/github-snapshot.json";
import { parseGitHubCalendar, type GitHubActivityData, type PullRequestTotals } from "./github-calendar";

const username = "subhamoydatta703";
const requestOptions = {
  headers: {
    "User-Agent": "SubhamoyDattaPortfolio",
    Accept: "application/vnd.github+json",
  },
  next: { revalidate: 86400 },
};

async function fetchCalendar() {
  const response = await fetch(`https://github.com/users/${username}/contributions`, {
    ...requestOptions,
    headers: { "User-Agent": "SubhamoyDattaPortfolio", Accept: "text/html" },
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`GitHub calendar returned ${response.status}`);
  return parseGitHubCalendar(await response.text(), new Date().toISOString().slice(0, 10));
}

async function fetchPullRequestTotals(): Promise<PullRequestTotals> {
  // Course/assessment submissions are not counted as project contributions.
  const query = [
    "is:pr",
    `author:${username}`,
    `-user:${username}`,
    "-repo:100xdevs-bootcamp-1/JavaScript-Assignments",
    "-repo:rohit-ups/Take-Home-Assignment-The-Untested-API",
  ].join(" ");
  const response = await fetch(`https://api.github.com/search/issues?q=${encodeURIComponent(query)}&per_page=100`, {
    ...requestOptions,
    signal: AbortSignal.timeout(8000),
  });
  if (!response.ok) throw new Error(`GitHub PR search returned ${response.status}`);
  const data: {
    total_count?: number;
    incomplete_results?: boolean;
    items?: { state: string; pull_request?: { merged_at?: string | null } }[];
  } = await response.json();
  if (!Array.isArray(data.items) || data.incomplete_results || data.total_count !== data.items.length || data.items.some((item) => !item.pull_request)) {
    throw new Error("Incomplete GitHub pull request results");
  }
  return {
    total: data.items.length,
    merged: data.items.filter((item) => item.pull_request?.merged_at).length,
    open: data.items.filter((item) => item.state === "open").length,
    updatedAt: new Date().toISOString().slice(0, 10),
  };
}

/** Daily cached public data; a verified, dated snapshot survives network failures. */
export async function getGitHubActivity(): Promise<GitHubActivityData> {
  const [calendar, pullRequests] = await Promise.allSettled([fetchCalendar(), fetchPullRequestTotals()]);
  return {
    calendar: calendar.status === "fulfilled" ? calendar.value : snapshot.calendar,
    pullRequests: pullRequests.status === "fulfilled" ? pullRequests.value : snapshot.pullRequests,
  };
}
