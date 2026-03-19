const sections = document.querySelectorAll("section");
const header = document.querySelector("header");

/* scroll animatie sections */
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", () => {

    /* fade-in sections */
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 80) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });

    /* navbar effect */
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});