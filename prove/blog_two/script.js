const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];

articles.forEach((article) => {

	const bookArticle = `
		<article class="book-review">
			<hr>
			<p class="book-review-date"><i>${article.date}</i></p>
			<p class="book-review-ages">${article.ages}</p>
			<p class="book-review-genre">${article.genre}</p>
			<p class="book-review-rating">${article.stars}</p>
			<h2 class="book-review-title">${article.title}</h2>
			<img class="book-review-image" src="${article.imgSrc}" alt="${article.imgAlt}">
			<p class="book-review-description">${article.description}</p>
		</article>
	`;
	document.getElementsByTagName("main")[0].innerHTML += bookArticle;

	// // Before I learned about template literals, I originally built the HTML in javaScript propper code.
    // const bookDate = document.createElement("p");
    // bookDate.classList.toggle("book-review-date");
    // bookDate.innerText = article.date;

    // const bookAges = document.createElement("p");
    // bookAges.classList.toggle("book-review-ages");
    // bookAges.innerText = article.ages;

    // const bookGenre = document.createElement("p");
    // bookGenre.classList.toggle("book-review-genre");
    // bookGenre.innerText = article.genre;

    // const bookRating = document.createElement("p");
    // bookRating.classList.toggle("book-review-rating");
    // bookRating.innerText = article.stars;

    // const bookTitle = document.createElement("h2");
    // bookTitle.classList.toggle("book-review-title");
    // bookTitle.innerText = article.title;

    // const bookImage = document.createElement("img");
    // bookImage.classList.toggle("book-review-image");
    // bookImage.src = article.imgSrc;
    // bookImage.alt = article.imgAlt;

    // const bookDescription = document.createElement("p");
    // bookDescription.classList.toggle("book-review-description");
    // bookDescription.innerText = article.description;

    // const main = document.getElementsByTagName("main")[0];
    // const newArticle = document.createElement("article");
	// newArticle.classList.toggle("book-review");
    // newArticle.appendChild(document.createElement("hr"));
	// newArticle.appendChild(bookDate);
	// newArticle.appendChild(bookAges);
	// newArticle.appendChild(bookGenre);
	// newArticle.appendChild(bookRating);
	// newArticle.appendChild(bookTitle);
	// newArticle.appendChild(bookImage);
	// newArticle.appendChild(bookDescription);
	// main.appendChild(newArticle);

});