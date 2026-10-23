import type { GitHubActivityData } from "@/lib/github-calendar";
import { portfolio } from "@/lib/portfolio";
import LinkArrow from "./LinkArrow";

const dayMs = 86400000;
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export default function GitHubActivity({ activity }: { activity: GitHubActivityData }) {
  const { calendar, pullRequests } = activity;
  const firstDate = new Date(`${calendar.days[0].date}T00:00:00Z`);
  const startTime = firstDate.getTime() - firstDate.getUTCDay() * dayMs;
  const cells = calendar.days.map((day) => {
    const date = new Date(`${day.date}T00:00:00Z`);
    return { ...day, week: Math.floor((date.getTime() - startTime) / (dayMs * 7)), weekday: date.getUTCDay() };
  });
  const weeks = Math.max(...cells.map((cell) => cell.week)) + 1;
  const monthLabels: { week: number; month: string }[] = [];
  let previousMonth = "";
  for (let week = 0; week < weeks; week++) {
    const month = monthNames[new Date(startTime + week * 7 * dayMs).getUTCMonth()];
    if (month !== previousMonth) monthLabels.push({ week, month });
    previousMonth = month;
  }

  return (
    <section id="open-source" className="open-source wrap" aria-labelledby="open-source-heading" data-reveal>
      <div className="section-head"><h2 id="open-source-heading">Contributions<span> / 02</span></h2><a className="textlink" href={portfolio.github} target="_blank" rel="noreferrer">View GitHub <LinkArrow /></a></div>
      <div className="contribution-overview">
        <p className="contribution-intro">Alongside my own projects,<br className="contribution-linebreak" /> I contribute to open source.</p>
        <div className="contribution-summary">
          <dl className="oss-totals"><div><dt>Pull requests</dt><dd>{pullRequests.total}</dd></div><div><dt>Merged</dt><dd>{pullRequests.merged}</dd></div><div><dt>Open</dt><dd>{pullRequests.open}</dd></div></dl>
          <p className="oss-scope">Contributions to projects outside my own repositories.</p>
        </div>
      </div>
      <figure className="github-calendar">
        <figcaption><span>GitHub activity</span><span>{calendar.total.toLocaleString("en-US")} contributions · past year</span></figcaption>
        <div className="github-chart-scroll" tabIndex={0} aria-label="GitHub contribution calendar. Scroll horizontally on small screens.">
          <svg className="github-chart" viewBox={`0 0 ${40 + weeks * 14} 126`} role="img" aria-labelledby="github-chart-title github-chart-description">
            <title id="github-chart-title">Subhamoy Datta’s GitHub contribution heatmap</title>
            <desc id="github-chart-description">{`${calendar.total} contributions from ${calendar.days[0].date} to ${calendar.days[calendar.days.length - 1].date}. Darker green indicates more contributions. Data fetched from GitHub on ${calendar.updatedAt}.`}</desc>
            {monthLabels.map((label) => <text key={label.week} x={40 + label.week * 14} y="12" className="github-axis">{label.month}</text>)}
            {[{ row: 1, label: "Mon" }, { row: 3, label: "Wed" }, { row: 5, label: "Fri" }].map(({ row, label }) => <text key={label} x="0" y={24 + row * 14 + 9} className="github-axis">{label}</text>)}
            {cells.map((cell) => <rect key={cell.date} x={40 + cell.week * 14} y={24 + cell.weekday * 14} width="11" height="11" rx="2" className={`github-cell level-${cell.level}`}><title>{`${cell.date}: ${cell.count} ${cell.count === 1 ? "contribution" : "contributions"}`}</title></rect>)}
          </svg>
        </div>
        <div className="github-calendar-footer">
          <span>Updated <time dateTime={calendar.updatedAt}>{formatDate(calendar.updatedAt)}</time></span>
          <div className="github-legend" aria-label="Legend: light to dark green means fewer to more contributions"><span>Less</span>{[0, 1, 2, 3, 4].map((level) => <span key={level} className={`legend-cell level-${level}`} aria-hidden="true" />)}<span>More</span></div>
        </div>
      </figure>
    </section>
  );
}
