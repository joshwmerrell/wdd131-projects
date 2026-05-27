// 1. Javascript arrays
const names = ["Nark", "Mathan", "Markaniel", "Mark-Nathan", "Nathan-Mark"];
console.log(names);
console.log(names[2]);
console.log(typeof(names[1]));

const grades = [89, 39, 55, 100];
console.log(grades);
console.log(grades[0]);
console.log(typeof(grades[1]));


// 2. Javascript objects
// A way to setup our own custom data type where we define key values.
// This would be way too convoluted to do many arrays for one subject.
const studentName = "Brother Merrell";
const studentClasses = ["WDD131", "REL250C"];
const studentGrades = [67, 88];
// Too fix this, we will create an object for a subject with all of its attributes defined within it.
const student = {
    // key/value pairs
    name: "Brother Merrell",
    classes: ["WDD131", "REL250C"],
    grades: [67, 88]
};
// Accessing object properties is as follows: objectName.keyName. This would give you the value associated with the keyName accessed.
console.log(student.name);


// 3. Array methods
names.forEach((name) => {
    // runs this function once per each item in the array.
    console.log(name);
});

// map function
const newNames = names.map((name) => {
    return name + " Mikael";
});
console.log(newNames);

// filter function
const filteredNames = names.filter((name) => {
    return name[0] === "M";
})
console.log(filteredNames);

// reduce function
const numbers = [125, 20, 5];
document.getElementById("output").innerHTML = numbers.reduce((total, num) => {
    return total - num;
});

// indexOf function
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const index = fruits.indexOf("Apple");
console.log(fruits);
console.log(index);

// template literals
const movie = {
    title: "Pirates of Outer Space!",
    genre: "SciFi",
    stars: ["James John", "Jacob Joplin"]
};
const movieSummary = `
  <div class="movie-summary">
    <h2>${movie.title}</h2>
    <p>${movie.genre} - ${movie.stars}</p>
  </div>
`;
document.getElementById("movie-list").innerHTML += movieSummary;

// javaScript Object
const car = {type:"Fiat", model:"500", color:"white"};
document.getElementById("car-object").innerHTML += `
    <p>Car object:</p>
    <p>${car.type}</p>
    <p>${car.model}</p>
    <p>${car.color}</p>
    `;



// function convert(grade) {
//     switch (grade){
//         case 'A':
//             points = 4;
//             break;
//         case 'B':
//             points = 3;
//             break;
//         case 'C':
//             points = 2;
//             break;
//         case 'D':
//             points = 1;
//             break;
//         case 'F':
//             points = 0;
//             break;
//         default:
//             alert('not a valid grade');
//     }
//     return points;
// }

// const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// const students = [
//     {last: 'Andrus', first: 'Aaron'},
//     {last: 'Masa', first:'Manny'},
//     {last: 'Tanda', first: 'Tamanda'}
// ];