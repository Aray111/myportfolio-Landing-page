document.addEventListener("DOMContentLoaded", () => {
    const skeletonWrapper = document.querySelector(".skeleton-wrapper");
    if (skeletonWrapper) {
        skeletonWrapper.remove();
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".portfolio-filters button");
    const cards = document.querySelectorAll(".portfolio-card");
    const grid = document.querySelector(".portfolio-grid");

    let isFiltering = false;

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            if (isFiltering) return;
            isFiltering = true;

            // 1. Active button
            filterButtons.forEach(b => b.classList.remove("active"));
            button.classList.add("active");

            const filter = button.dataset.filter;

            // 2. Save grid position BEFORE
            const gridTopBefore = grid.getBoundingClientRect().top;

            // 3. Filter cards
            cards.forEach(card => {
                const tags = card.dataset.tags || "";
                card.style.display =
                    filter === "all" || tags.includes(filter) ?
                    "flex" :
                    "none";
            });

            // 4. Restore scroll position
            requestAnimationFrame(() => {
                const gridTopAfter = grid.getBoundingClientRect().top;
                const diff = gridTopAfter - gridTopBefore;

                if (diff !== 0) {
                    window.scrollTo({
                        top: window.scrollY + diff,
                        behavior: "auto"
                    });
                }

                isFiltering = false;
            });
        });
    });
});