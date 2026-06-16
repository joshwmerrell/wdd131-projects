const cards = [
    {
        id: "card1",
        name: "Snortleblat",
        class: "Swamp Beast Diplomat",
        level: 5,
        health: 100,
        imageSrc: "snortleblat.webp",
        imageAlt: "Image of Snortlat the swamp beast diplomat."
    }
];

const cardsSection = document.querySelector("#cards");

function buildCards() {
    cards.forEach((card) => {
        const cardTemplate = `
            <article id="${card.id}" class="card">
                <img class="card-image" src="${card.imageSrc}" alt="${card.imageAlt}" />
                <div class="card-title-div">
                    <h2>${card.name}</h2>
                </div>
                <div class="card-content">
                    <p><b>Class:</b> ${card.class}</p>
                    <p><b>Level:</b> ${card.level}</p>
                    <p><b>Health:</b> ${card.health}</p>
                    <button class="card-action-button" value="health" aria-controls="${card.id}">Attacked</button>
                    <button class="card-action-button" value="level" aria-controls="${card.id}">Level Up</button>
                </div>
            </article>
        `;
        cardsSection.innerHTML += cardTemplate;
    });
};

buildCards();


cardsSection.addEventListener("click", (e) => {
    const cardButtonPress = event.target.className === "card-action-button";
    if (cardButtonPress) {
        const button = event.target;
        const cardId = button.ariaControlsElements[0].id;
        const cardObject = cards.find(card => card.id);
        const attacked = button.value === "health";
        const levelUp = button.value === "level";
        if (attacked) {
            cardObject.health -= 20;
            if (cardObject.health <= 0) {
                cardObject.health = 0;
                alert("Character died.");
            }
        };
        if (levelUp) {
            cardObject.level += 1;
        };
        cardsSection.innerHTML = ``;
        buildCards();
    }
});