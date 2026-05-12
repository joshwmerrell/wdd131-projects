let menuWord = document.getElementById("menu-word");
let menu = document.getElementById("menu");

menu.classList.toggle("hidden");

menuWord.addEventListener("click", (event) => {
    menu.classList.toggle("hidden");
});