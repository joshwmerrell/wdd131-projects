import { mainMenu } from "./pages.js";
import { steps } from "./pages.js";

// The page content to update with each and every page.
const pageContent = document.querySelector("#content");


// Scripts for main menu.

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
    const buttons = `<section id="mainmenu-buttons">` + mainMenu.decisions.reduce((buttons, decision) => {return buttons + `<button value="${decision.nextStep}">&emsp;&emsp;${decision.label}&emsp;&emsp;</button>`}, ``) + `</section>`;
    // The main menu content.
    const mainMenuContent = `<main id="mainmenu">` + title + intro + buttons + `</main>`;
    // Set page as main menu.
    pageContent.innerHTML = mainMenuContent;
}
openMainMenu();

// Main menu button presses.
const mainMenuButtons = document.querySelector("#mainmenu-buttons");
mainMenuButtons.addEventListener("click", event => {
    // Open the beginning step when press "Brave" and close the game when press "Flee".
    const pressBrave = event.target.value === "step_0";
    const pressFlee = event.target.value === "exit";
    if (pressBrave) {
        // Open step_0.
        openStep(event.target.value);
    }
    else if (pressFlee) {
        window.close();
    }
});


// Scripts for steps.

// Display or hide menu in mobile format.
const mobileNav = document.querySelector("#mobile-nav");
const navIcon = document.querySelector("#nav-icon");
navIcon.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
});

// Upon making a decision, update the content of the page with the next step.
function openStep(nextStep) {
    // The step's page content is made up of the header, image, title, narration, call_to_action, and decisions.
    // Decide decision making method.
    // Determine if another step is unlocked by this step.
}