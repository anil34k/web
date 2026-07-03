// arrays of objects = arrays that contain multiple objects
//                     can access/modify properties of objects in the array

const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "orange", color: "orange", calories: 45 },
{ name: "banana", color: "yellow", calories: 105 },
{ name: "coconut", color: "white", calories: 159 },
{ name: "pineapple", color: "yellow", calories: 37 }];

// console.log(fruits[0].calories);
fruits.push({ name: "water", color: "blue", calories: 0 }); //add at last
fruits.pop(); //remove from last
fruits.splice(1, 2); //remove from index 1 for 2 elements

console.log(fruits);
console.log("==============================");

for (const fruit of fruits) {
    console.log(fruit);
}


console.log("==============================");
for (const fruit of fruits) {
    console.log(fruit.name);
}

//----------------- forEach method --------------------- 
console.log("==============================");
fruits.forEach(fruit => console.log(fruit)); //for each element execute this function

//--------------------- map method --------------------- 
console.log("==============================");
const fruitNames = fruits.map(fruit => fruit.name);
console.log(fruitNames);

//--------------------- filter method --------------------- 
console.log("==============================");
const highCalorieFruits = fruits.filter(fruit => fruit.calories >= 100);
console.log(highCalorieFruits);

//--------------------- reduce method --------------------- 
console.log("==============================");
const totalCalories = fruits.reduce((total, fruit) => total + fruit.calories, 0);
console.log(totalCalories);

const maxFruit = fruits.reduce((max, fruit) => 
                                fruit.calories > max.calories ? 
                                fruit : max);

const minFruit = fruits.reduce((min, fruit) => 
                                fruit.calories < min.calories ? 
                                fruit : min);

console.log(maxFruit);
console.log(minFruit);