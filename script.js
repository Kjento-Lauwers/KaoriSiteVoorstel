const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");

/* hamburger */
const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* scroll animatie */
sections.forEach(section => {
    section.style.opacity = 0;
    section.style.transform = "translateY(40px)";
    section.style.transition = "all 0.6s ease";
});

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 100;

        if (scrollY >= top) {
            current = section.getAttribute("id");
        }

        /* animatie */
        const visible = section.getBoundingClientRect().top;
        if (visible < window.innerHeight - 80) {
            section.style.opacity = 1;
            section.style.transform = "translateY(0)";
        }
    });

    /* actieve link */
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

    /* navbar effect */
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
