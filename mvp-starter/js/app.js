import { renderNavbar } from "../components/navbar.js";
import { renderSignupForm } from "../components/form.js";
import { renderSidebar } from "../components/sidebar.js";
import { renderDashboard } from "../components/dashboard.js";

/**
 * App bootstrap: mount components based on page containers.
 */
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar(document.getElementById("navbar-root"));

  const formRoot = document.getElementById("signup-form-root");
  if (formRoot) renderSignupForm(formRoot);

  const sidebarRoot = document.getElementById("sidebar-root");
  if (sidebarRoot) renderSidebar(sidebarRoot);

  const dashboardRoot = document.getElementById("dashboard-root");
  if (dashboardRoot) renderDashboard(dashboardRoot);
});
