// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()         // ELEMENT OR NULL
// 2. document.getElementsByClassName() // HTML COLLECTION
// 3. document.getElementsByTagName()   // HTML COLLECTION
// 4. document.querySelector()          // ELEMENT OR NULL
// 5. document.querySelectorAll()       // NODELIST

// ----------- 1. document.getElementById() -----------
// const myHeading = document.getElementById("my-heading");
// console.log(myHeading);

// ----------- 2. document.getElementsByClassName() -----------
// const fruits = document.getElementsByClassName("fruits");
// Array.from(fruits).forEach(fruit => {
//     fruit.style.backgroundColor = "yellow";
// });

// ----------- 3. document.getElementsByTagName() -----------
// const h4Elements = document.getElementsByTagName("h4");
// const liElements = document.getElementsByTagName("li");
// //method 1
// // for(let h4Element of h4Elements){
// //     h4Element.style.backgroundColor = "yellow";
// // }
// // for(let liElement of liElements){
// //     liElement.style.backgroundColor = "lightgreen";
// // }
// //method 2
// Array.from(h4Elements).forEach(h4Element => {
//     h4Element.style.backgroundColor = "yellow";
// });
// Array.from(liElements).forEach(liElement => {
//     liElement.style.backgroundColor = "lightgreen";
// });

// ----------- 4. document.querySelector() -----------
// const element = document.querySelector("ul");
// element.style.backgroundColor = "yellow";

// ----------- 5. document.querySelectorAll() -----------
const foods = document.querySelectorAll("li");

foods.forEach(food => {
    food.style.backgroundColor = "yellow";
});