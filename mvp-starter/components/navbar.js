/**
 * Reusable top navigation component rendered on every page.
 */
export function renderNavbar(container) {
  if (!container) return;

  container.innerHTML = `
    <header class="site-nav">
      <div class="inner container">
        <a href="index.html"><strong>MVP Starter</strong></a>
        <nav class="nav-links">
          <a href="index.html#signup">Signup</a>
          <a href="dashboard.html">Dashboard</a>
          <a class="btn btn-primary" href="index.html#signup">Get started</a>
        </nav>
      </div>
    </header>
  `;
}
