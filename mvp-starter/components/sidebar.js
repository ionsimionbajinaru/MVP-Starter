/**
 * Dashboard sidebar component.
 */
export function renderSidebar(container) {
  if (!container) return;

  container.innerHTML = `
    <nav class="sidebar">
      <h3>Navigation</h3>
      <ul>
        <li><a class="active" href="#">Overview</a></li>
        <li><a href="#">Leads</a></li>
        <li><a href="#">Experiments</a></li>
        <li><a href="#">Settings</a></li>
      </ul>
    </nav>
  `;
}
