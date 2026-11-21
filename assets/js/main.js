// MOBILE NAVIGATION
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        menuToggle.classList.toggle("active");
    });
}

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks?.classList.remove("active");
        menuToggle?.classList.remove("active");
    });
});

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".section, .about-card, .skill-card, .project-card"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {
        element.classList.add("reveal");
        observer.observe(element);
    });
}

// CURRENT YEAR
const yearElement = document.querySelector("#current-year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
