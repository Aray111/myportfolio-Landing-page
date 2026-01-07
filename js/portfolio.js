import { projects } from "./data/projects.js";

const grid = document.getElementById("projectsGrid");
const filterButtons = document.querySelectorAll(".portfolio-filters button");

let activeFilter = "all";

/* =========================
   RENDER PROJECTS
========================= */

function renderProjects(list) {
    grid.innerHTML = "";

    if (list.length === 0) {
        grid.innerHTML = `
            <p class="empty-state">
              No projects found.
            </p>
        `;
        return;
    }

    list.forEach(project => {
                const card = document.createElement("div");
                card.className = "portfolio-card";

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

                <a 
                  href="${project.live}" 
                  target="_blank" 
                  rel="noopener"
                  class="btn"
                >
                  View Live
                </a>
            </div>
        `;

        grid.appendChild(card);
    });
}

/* =========================
   FILTER LOGIC
========================= */

function getFilteredProjects() {
    if (activeFilter === "all") return projects;

    return projects.filter(project =>
        project.tags.includes(activeFilter)
    );
}

/* =========================
   INIT
========================= */

renderProjects(projects);

/* =========================
   EVENTS
========================= */

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        activeFilter = button.dataset.filter.toLowerCase();

        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        renderProjects(getFilteredProjects());
    });
});