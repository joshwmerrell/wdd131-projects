const recipeCards = [
    {
        id: "card1",
        name: "Apple Crisp",
        description: "The apple crisp recipe is a simple yet delicious fall dessert that's great served warm with vanilla ice cream.",
        catagories: [
            "dessert",
            "fruit"
        ],
        rating: [4, 1],
        imageAlt: "Image of Apple Crisp with Vanilla Ice Cream in a bowl.",
        imageSrc: "images/apple-crisp.jpg"
    }
];

const recipes = document.querySelector("#recipes");
// recipeCards.forEach(card => {
//     // Create catagories template for the recipe card.
//     const catagories = card.catagories;
//     const catagoryButtons = ``;
//     catagories.forEach(catagory => {
//         catagoryButtons.innerHtml += `<button>${catagory}</button>`;
//     });

//     // Create star rating html for the recipe card.
//     const amountOfFullStars = card.rating[0];
//     const amountOfEmptyStars = card.rating[1];
//     const ratingFullStarTemplate = `
//         <span aria-hidden="true" class="icon-star">⭐</span>
//     `;
//     const ratingEmptyStarTemplate = `
//         <span aria-hidden="true" class="icon-star-empty">☆</span>
//     `;
//     const ratingStars = ``;
//     for (let i = 0; i < amountOfFullStars; i++) {
//        ratingStars.innerHtml += ratingFullStarTemplate; 
//     }
//     for (let i = 0; i < amountOfEmptyStars; i++) {
//        ratingStars.innerHtml += ratingEmptyStarTemplate; 
//     }

//     // Apply the catagories and star rating to the recipe card template.
//     // The recipe card template
//     const recipeCard = `
//         <article id="${card.id}" class="recipe-card">
//             <img src="${card.imageSrc}" alt="${card.imageAlt}">
//             <span
//                 class="food-catagories"
//             >
//                 ${catagoryButtons}
//             </span>
//             <h2>${card.name}</h2>
//             <span
//                 class="recipe-rating"
//                 role="img"
//                 aria-label="Rating: ${amountOfFullStars} out of ${amountOfFullStars + amountOfEmptyStars} stars."
//             >
//                 ${ratingStars}
//             </span>
//             <p class="food-description" aria-hidden="true">${card.description}</p>
//         </article>
//     `;
//     recipes.innerHTML += recipeCard;
// });

// const templateLiteral = `
//     <article id="" class="recipe-card">
//         <img src="" alt="">
//         <span
//             class="food-catagories"
//         >
//             <button>dessert</button>
//             <button>fruit</button>
//         </span>
//         <h2></h2>
//         <span
//             class="food-rating"
//             role="img"
//             aria-label="Rating: 4 out of 5 stars."
//         >
//         </span>
//         <p class="food-description" aria-hidden="true"></p>
//     </article>
// `;