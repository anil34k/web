// array = a variable like structure that can hold
//         more than 1 value

let fruits = ["apple", "orange", "banana", "kiwi", "mango"];

// fruits.push("coconut"); // it is used to add the value at the end
// fruits.pop(); // it is used to remove the value from the end
// fruits.unshift("mango"); // it is used to add the value at the beginning
// fruits.shift(); // it is used to remove the value from the beginning

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numoffruits = fruits.length;
// let index = fruits.indexOf("apple");
// console.log(index);

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// fruits.sort(); //this is used to sort the values in ascending order
// fruits.reverse(); //this is used to reverse the values

for (let fruit of fruits) {
    console.log(fruit);
}