// rest parameters = (...rest) allow a function work with a variable
//                   number of arguments by bundling them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

function openFridge(...foods){
    console.log(...foods);
}
function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

//openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

// example 2

function getAverage(...numbers){
    let total = 0;
    for(let number of numbers){
        total += number;
    }
    return total/numbers.length;
}

console.log(getAverage(1, 2, 3, 4, 5));

//example 3

function combineStrings(...strings){
    return strings.join(" ");
}

console.log(combineStrings("hello", "world", "this", "is", "javascript"));

