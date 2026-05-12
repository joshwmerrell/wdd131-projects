let menuButton = document.getElementsByClassName("menu-btn")[0];
let nav = document.getElementsByTagName("nav")[0];

menuButton.addEventListener("click", toggleHideMenu);
function toggleHideMenu(event){
    menuButton.classList.toggle("change");
    nav.classList.toggle("hide");
}