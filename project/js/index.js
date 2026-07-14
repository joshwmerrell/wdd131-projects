import { mainMenu } from "./pages.js";
import { steps } from "./pages.js";
import { credits } from "./pages.js";

// The page content to update with each and every page.
const pageContent = document.querySelector("#content");


// Script to close game.
function closeGame() {
    // This may help me close the window programically rather than just window.close().
    window.open('', '_self').close();
}

// Script for main menu.

// Upon open and when navigating back to, load in the main menu page.
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
    // Set dynamic elements of the page that require an event listener.
    const mainMenuButtons = document.querySelector("#mainmenu-buttons");
    // Event listener for the main menu button presses.
    mainMenuButtons.addEventListener("click", event => {
        // Open the beginning step when press "Brave" and close the game when press "Flee".
        const pressBrave = event.target.value === "step_0";
        const pressFlee = event.target.value === "exit";
        if (pressBrave) {
            // Open step_0.
            openStep(event.target.value);
        }
        else if (pressFlee) {
            closeGame();
        }
    });
}
openMainMenu();



// Script for steps.

// Upon making a decision, update the content of the page with the next step.
function openStep(stepId) {
    // Find the next step oject with the step id.
    const nextStep = steps.find(step => step.id === stepId);
    // If the step unlocks a story path, update the specified decision object from hidden to not hidden.
    if (nextStep.unlockStory.unlock) {
        const targetStep = nextStep.unlockStory.step;
        const targetDecision = nextStep.unlockStory.decision;
        steps.find(step => step.id === targetStep).decisions.find(decision => decision.nextStep === targetDecision).hidden = false;
    }
    // The step's page content is made up of the header, main, and credits dialog. 
    // The header.
    const header = `
        <header>
            <a href="#" id="logo">
                <img src="assets/logo/logo_small.png">
            </a>
            <div>
                <button id="nav-icon">≡</button>
                <nav id="mobile-nav" class="hidden">
                    <button>Main Menu</button>
                    <button>Credits</button>
                    <button href="../index.html">Home Page</button>
                </nav>
                <nav id="non-mobile-nav">
                    <button>Main Menu</button>
                    <button>Credits</button>
                    <button href="../index.html">Home Page</button>
                </nav>
            </div>
        </header>`;
    // The main is made up of the image, title, narration, and the decisions w/ a call to action.
    // The image.
    const image = `<img id="step-image" src="${nextStep.imageSrc}" alt="${nextStep.imageAlt}"></img>`;
    // The title.
    const title = `<h1 id="step-title">${nextStep.title}</h1>`;
    // The narration.
    const narration = nextStep.narration.reduce((paragraphs, string) => {return paragraphs + `<p id="step-narration">${string}</p>`}, ``);
    // The call to action.
    const callToAction = `<p>${nextStep.call_to_action}</p>`;
    // The decision.
    let decisions = ``;
    if (nextStep.choiceType === "button") {
        decisions = `
            <div id="step-decisions">` +
                callToAction +
                nextStep.decisions.filter(decision => !decision.hidden).reduce((buttons, decision) => {return buttons + `<button value="${decision.nextStep}">${decision.label}</button>`}, ``) +
            `</div>`;
    }
    else if (nextStep.choiceType === "textInput") {
        decisions = `
            <div id="step-decisions">` +
                callToAction +
                `<div>
                    <input type="text">
                    <button><img src="assets/logo/logo_small.png" alt="Try this trail."></button>
                    <div id="decisions" class="hidden" value="${nextStep.decisions.filter(decision => !decision.hidden).reduce((steps, decision) => {return steps + decision.label}, ``)}"></div>
                </div>
            </div>`;
    }
    // The main.
    const main = `
        <main>` +
            image +
            title +
            narration +
            decisions +
        `</main>`;
    // The credits dialog.
    const creditsDialog = `
        <dialog>` +
            `<h2>${credits.title}</h2>` +
            credits.paragraphs.reduce((paragraphs, string) => {return paragraphs + `<p>${string}</p>`}, ``) +
            `<button class="close-dialog">X</button>` +
        `</dialog>`;
    // The step page content.
    const stepPageContent = header + main + creditsDialog;
    // Set page to step page.
    pageContent.innerHTML = stepPageContent;
    // Set dynamic elements of the page that require an event listener.
    const navIcon = document.querySelector("#nav-icon");
    const mobileNav = document.querySelector("#mobile-nav");
    const nonMobileNav = document.querySelector("#non-mobile-nav");
    const creditsModal = document.querySelector("dialog");
    const creditsModalExitButton = document.querySelector("dialog .close-dialog");
    const stepDecisions = document.querySelector("#step-decisions");
    const decisionTextBox = document.querySelector("#step-decisions div input");
    // Event listener to display or hide step nav in mobile format.
    navIcon.addEventListener("click", () => {
        mobileNav.classList.toggle("hidden");
    });
    // Event listeners for step nav options.
    mobileNav.addEventListener("click", navigationClick);
    nonMobileNav.addEventListener("click", navigationClick);
    function navigationClick(event) {
        const buttonToMainMenu = event.target.nodeName === "BUTTON" && event.target.innerText ==="Main Menu";
        const buttonToCredits = event.target.nodeName === "BUTTON" && event.target.innerText === "Credits";
        const buttonToHomePage = event.target.nodeName === "BUTTON" && event.target.innerText === "Home Page";
        if (buttonToMainMenu) {
            openMainMenu();
        }
        else if (buttonToCredits) {
            creditsModal.showModal();
        }
        else if (buttonToHomePage) {
            window.open('../index.html');
            closeGame();
        }
    }
    // Event listener to close credits.
    creditsModalExitButton.addEventListener("click", () => {
        creditsModal.close();
    });

    // Event listeners to proceed to the next step.
    stepDecisions.addEventListener("click", event => {
        const buttonToStep = event.target.nodeName === "BUTTON" && event.target.value !== "mainMenu";
        const buttonToMainMenu = event.target.nodeName === "BUTTON" && event.target.value === "mainMenu";
        const textBoxButtonToStep = event.target.nodeName === "IMG" && event.target.alt === "Try this trail.";
        if (buttonToStep) {
            openStep(event.target.value);
        }
        else if (buttonToMainMenu) {
            openMainMenu();
        }
        else if (textBoxButtonToStep) {
            searchViaTextInput();
        }
    });
    if (decisionTextBox) {
        decisionTextBox.addEventListener("keydown", () => {
            if (event.key === "Enter") {
                searchViaTextInput();
            }
        });
    }
    function searchViaTextInput() {
        const decisions = document.querySelector("#decisions").attributes.value.textContent;
        const textInputValid = decisions.toLowerCase().includes(decisionTextBox.value.toLowerCase()) && decisionTextBox.value !== "";
        if (textInputValid) {
            openStep(steps.find(step => step.choiceType === "textInput").decisions.filter(decision => !decision.hidden).find(decision => decision.label.toLowerCase().includes(decisionTextBox.value.toLowerCase())).nextStep);
        }
    }
}