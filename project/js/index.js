import {steps} from "./pages.js";

// Normalized script for all pages.


// Display or hide menu in mobile format.
const mobileNav = document.querySelector("#mobile-nav");
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});