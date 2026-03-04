/**
 * Multi-step signup form component with basic validation.
 */
export function renderSignupForm(container) {
  if (!container) return;

  const state = {
    step: 1,
    name: "",
    email: "",
    idea: "",
  };

  const validateStep = () => {
    const errors = {};
    if (state.step === 1) {
      if (!state.name.trim()) errors.name = "Name is required.";
      if (!state.email.trim()) {
        errors.email = "Email is required.";
      } else if (!/^\S+@\S+\.\S+$/.test(state.email)) {
        errors.email = "Enter a valid email.";
      }
    }

    if (state.step === 2 && state.idea.trim().length < 10) {
      errors.idea = "Please provide at least 10 characters.";
    }

    return errors;
  };

  const view = (errors = {}) => `
    <div class="multi-step card">
      <div class="step-indicator">
        <span class="step-pill ${state.step === 1 ? "active" : ""}">Step 1</span>
        <span class="step-pill ${state.step === 2 ? "active" : ""}">Step 2</span>
        <span class="step-pill ${state.step === 3 ? "active" : ""}">Step 3</span>
      </div>

      ${state.step === 1 ? stepOne(errors) : ""}
      ${state.step === 2 ? stepTwo(errors) : ""}
      ${state.step === 3 ? stepThree() : ""}

      <div class="form-actions">
        <button class="btn btn-secondary" type="button" data-action="back" ${state.step === 1 ? "disabled" : ""}>Back</button>
        <button class="btn btn-primary" type="button" data-action="next">${state.step === 3 ? "Finish" : "Next"}</button>
      </div>
    </div>
  `;

  const stepOne = (errors) => `
    <div class="form-grid">
      <div class="input-field">
        <label for="name">Full name</label>
        <input id="name" name="name" value="${escapeHtml(state.name)}" placeholder="Jane Founder" />
        ${errors.name ? `<small>${errors.name}</small>` : ""}
      </div>
      <div class="input-field">
        <label for="email">Email</label>
        <input id="email" name="email" value="${escapeHtml(state.email)}" placeholder="jane@startup.com" />
        ${errors.email ? `<small>${errors.email}</small>` : ""}
      </div>
    </div>
  `;

  const stepTwo = (errors) => `
    <div class="form-grid">
      <div class="input-field">
        <label for="idea">What product idea are you validating?</label>
        <textarea id="idea" name="idea" rows="4" placeholder="We're building...">${escapeHtml(state.idea)}</textarea>
        ${errors.idea ? `<small>${errors.idea}</small>` : ""}
      </div>
    </div>
  `;

  const stepThree = () => `
    <div class="form-grid">
      <p><strong>You're all set.</strong> Confirm your details and click Finish.</p>
      <p><span class="muted">Name:</span> ${escapeHtml(state.name)}</p>
      <p><span class="muted">Email:</span> ${escapeHtml(state.email)}</p>
      <p><span class="muted">Idea:</span> ${escapeHtml(state.idea)}</p>
    </div>
  `;

  const render = (errors = {}) => {
    container.innerHTML = view(errors);
    bindEvents();
  };

  const bindEvents = () => {
    container.querySelector("#name")?.addEventListener("input", (event) => {
      state.name = event.target.value;
    });

    container.querySelector("#email")?.addEventListener("input", (event) => {
      state.email = event.target.value;
    });

    container.querySelector("#idea")?.addEventListener("input", (event) => {
      state.idea = event.target.value;
    });

    container.querySelector("[data-action='back']")?.addEventListener("click", () => {
      state.step = Math.max(1, state.step - 1);
      render();
    });

    container.querySelector("[data-action='next']")?.addEventListener("click", () => {
      const errors = validateStep();
      if (Object.keys(errors).length) {
        render(errors);
        return;
      }

      if (state.step === 3) {
        container.innerHTML = `
          <div class="card">
            <h3>Thanks for signing up 🎉</h3>
            <p class="muted">We'll reach out once your founder dashboard is ready.</p>
          </div>
        `;
        return;
      }

      state.step += 1;
      render();
    });
  };

  render();
}

function escapeHtml(text) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
