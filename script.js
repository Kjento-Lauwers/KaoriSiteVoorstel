const nav = document.getElementById("nav");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

/* HAMBURGER */
menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

/* ACTIEVE LINK */
window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (scrollY >= top) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});

/* MODAL */
function openModal(title) {
    document.getElementById("modal").style.display = "flex";
    document.getElementById("modal-title").innerText = title;
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
