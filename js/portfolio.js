// ===============================
// FILTER PROJECTS
// ===============================

const filterButtons = document.querySelectorAll(".portfolio-filters button");
const cards = document.querySelectorAll(".portfolio-card");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {

        // active button
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach((card) => {
            const tags = card.dataset.tags;

            if (filter === "all" || tags.includes(filter)) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});