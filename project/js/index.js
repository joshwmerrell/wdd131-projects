import { mainMenu } from "./pages.js";
import { steps } from "./pages.js";

// The page content to update with each and every page.
const pageContent = document.querySelector("#content");

// Upon open, load in the main menu page.
function openMainMenu() {
    // The main menu content is made up of the title, intro, and buttons.
    // The title is made up of an image and 3 words.
    const titleImage =  `<img src="${mainMenu.title.imageSrc}" alt="${mainMenu.title.imageAlt}">`;
    const titleWords =  `
                        <div>
                            <h1>${mainMenu.title.words[0]}</h1>
                            <h1 class="fullword">${mainMenu.title.words[1]}</h1>
                            <h1 class="fullword">${mainMenu.title.words[2]}</h1>
                        </div>
                        `;
    const title = `<div id="mainmenu-title">` + titleImage + titleWords + `</div>`;
    // The intro.
    const intro = `<p id="mainmenu-intro">${mainMenu.introduction}</p>`;
    // The buttons.
    const buttons = mainMenu.decisions.reduce((buttons, decision) => {return buttons + `<button class="mainmenu-button" value="${decision.nextStep}">&emsp;&emsp;${decision.label}&emsp;&emsp;</button>`}, ``);
    // The main menu content.
    const mainMenuContent = `<main id="mainmenu">` + title + intro + buttons + `</main>`;
    // Set page as main menu.
    pageContent.innerHTML = mainMenuContent;
}
openMainMenu();


// Normalized script for all pages.


// Display or hide menu in mobile format.
const mobileNav = document.querySelector("#mobile-nav");
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});