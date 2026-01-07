document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about-section");

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }
            });
        }, { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));
});
const progress = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = (scrollTop / docHeight) * 100;
    progress.style.width = percent + "%";
});
const aboutSections = document.querySelectorAll(".about-section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
    }
);

aboutSections.forEach((section) => {
    observer.observe(section);
});