// Normalized script for all pages.


// Display or hide menu in mobile format.
const nav = document.querySelector("header nav");
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener("click", () => {
    nav.classList.toggle("hidden");
});

