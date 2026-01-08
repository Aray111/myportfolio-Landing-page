import { projects } from "./data/projects.js";

document.addEventListener("DOMContentLoaded", () => {
            const grid = document.getElementById("projectsGrid");
            const filterButtons = document.querySelectorAll(".filter-btn");

            // === RENDER PROJECTS ===
            projects.forEach(project => {
                        const card = document.createElement("div");
                        card.className = "portfolio-card";
                        card.dataset.tags = project.tags.join(" ");

                        card.innerHTML = `
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}">
      </div>

      <div class="card">
        <h3>${project.title}</h3>
        <p>${project.description}</p>

        <div class="tags">
          ${project.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>

        ${
          project.live !== "#"
            ? `<a href="${project.live}" target="_blank" class="btn">View Live</a>`
            : `<span class="btn disabled">Coming soon</span>`
        }
      </div>
    `;

    grid.appendChild(card);
  });

  const cards = document.querySelectorAll(".portfolio-card");

  // === FILTER ===
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach(card => {
        const tags = card.dataset.tags.split(" ");

        if (filter === "all" || tags.includes(filter)) {
          card.classList.remove("is-hidden");
        } else {
          card.classList.add("is-hidden");
        }
      });
    });
  });
});