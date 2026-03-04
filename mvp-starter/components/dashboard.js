/**
 * Main dashboard content component.
 */
const stats = [
  { label: "Waitlist signups", value: "1,248", change: "+12%" },
  { label: "Activation rate", value: "36%", change: "+4%" },
  { label: "MRR", value: "$4,200", change: "+9%" },
  { label: "Churn", value: "3.1%", change: "-0.8%" },
];

const leads = [
  ["Acme Labs", "B2B SaaS", "Qualified"],
  ["Growth Pilot", "Marketing", "Contacted"],
  ["Fintrack", "Fintech", "Demo Booked"],
  ["Creator Flow", "Creator Tools", "New"],
];

export function renderDashboard(container) {
  if (!container) return;

  const statsCards = stats
    .map(
      (stat) => `
      <article class="card">
        <p class="muted">${stat.label}</p>
        <h3>${stat.value}</h3>
        <span class="badge">${stat.change}</span>
      </article>
    `
    )
    .join("");

  const rows = leads
    .map(
      (lead) => `
      <tr>
        <td>${lead[0]}</td>
        <td>${lead[1]}</td>
        <td>${lead[2]}</td>
      </tr>
    `
    )
    .join("");

  container.innerHTML = `
    <h1>Founder Dashboard</h1>
    <p class="muted">A simple overview of traction and pipeline performance.</p>

    <div class="stats-grid">${statsCards}</div>

    <div class="card table-wrap">
      <h3>Pipeline</h3>
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Category</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </div>

    <div class="card" style="margin-top: 1rem;">
      <h3>Growth chart</h3>
      <div class="chart-placeholder">Chart Placeholder Area</div>
    </div>
  `;
}
