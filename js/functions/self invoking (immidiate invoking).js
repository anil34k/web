// ========== SERIES 1: function without parameters and without return type ==========
(function demo1() {
    console.log('this is my 1st example of function');
})();

// ========== SERIES 2: function with parameters and without return type ==========
(function myname(user) {
    console.log(user)
})('anil'); // anil

(function myname(user) {
    console.log(user)
})('kali'); // kali

// ========== SERIES 3: function without parameters & with return value ==========
let x = (function num() {
    let a = 100
    let b = 200
    let sum = a + b
    let res = `${a} + ${b} = ${sum}`

    return res
})();
console.log(x);

console.log((function num() {
    let a = 100
    let b = 200
    let sum = a + b
    let res = `${a} + ${b} = ${sum}`

    return res
})());

// ========== SERIES 4: function with parameters and with return type ==========
// For self-invoking functions that return a type, we usually assign them to a variable or log their outputs
let sum1 = (function add2num(a, b) {
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)
    return sum;
})(10, 20); // the sum of 10 and 20 is 30

let sum2 = (function add2num(a, b) {
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)
    return sum;
})(100, 200); // the sum of 100 and 200 is 300
