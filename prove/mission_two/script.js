const lightAndDarkModeButtonId = "light-and-dark-mode-button";

// Create and place a light and dark mode button for the page.
const newButton = document.createElement("button");
newButton.textContent = "Light Mode";
newButton.style.color = "#6e6e6e";
newButton.style.border = "solid 1px lightgray";
newButton.id = lightAndDarkModeButtonId;
document.body.prepend(newButton);

// Listen for a button click.
document.getElementById(lightAndDarkModeButtonId).addEventListener("click", changeMode);

// Change mode when button is clicked.
function changeMode() {
    const darkModeCss = "html {filter: invert(1) brightness(0.83);} #university {filter: invert(1);} #byui-logo {filter: invert(1) grayscale(1) brightness(2) invert(1);}";
    const style = "dark-mode";
    if (document.getElementById(style)) {
        document.getElementById(style).remove();
        document.getElementById(lightAndDarkModeButtonId).textContent = "Light Mode";
    }
    else {
        const darkModeStyle = document.createElement("style");
        darkModeStyle.textContent = darkModeCss;
        darkModeStyle.id = style;
        document.body.appendChild(darkModeStyle);
        document.getElementById(lightAndDarkModeButtonId).textContent = "Dark Mode";
    }
}