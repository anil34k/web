// spread operator = ... allows an iterable such as an
//                   array or string to be expanded
//                   into separate elements
//                   (unpacks the elements)
//                   also used to copy/clone and combine the arrays

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maxNumber = Math.max(...numbers);
let minNumber = Math.min(...numbers);

console.log(maxNumber);
console.log(minNumber);
let username = "Bro Code";
let letters = [...username].join("-");

console.log(letters);

let fruits = ["apple", "banana", "orange", "mango"];
let vegitables = ["carrot", "potato", "tomato"];
let newfruits = [...fruits, ...vegitables];

console.log(newfruits);
