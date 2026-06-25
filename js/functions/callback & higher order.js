// ========== SERIES 1: function without parameters and without return type ==========
function demo1() {
    console.log('this is my 1st example of function');
}

function execute(callback) {
    callback();
}

execute(demo1)

// ========== SERIES 2: function with parameters and without return type ==========
function myname(user) {
    console.log(user)
}

function executeWithName(callback, name) {
    callback(name);
}

// executeWithName(myname) // undefined
executeWithName(myname, 'anil') // anil
executeWithName(myname, 'kali') // kali

// ========== SERIES 3: function without parameters & with return value ==========
function num() {
    let a = 100
    let b = 200
    let sum = a + b
    let res = `${a} + ${b} = ${sum}`

    return res
}

function getResult(callback) {
    return callback();
}

let x = getResult(num)
console.log(x)
console.log(getResult(num))

// ========== SERIES 4: function with parameters and with return type ==========
function add2num(a, b) {
    let sum = a + b
    return `the sum of ${a} and ${b} is ${sum}`
}

function calculateAndPrint(callback, num1, num2) {
    let result = callback(num1, num2);
    console.log(result);
}

calculateAndPrint(add2num, 10, 20) // the sum of 10 and 20 is 30
calculateAndPrint(add2num, 100, 200) // the sum of 100 and 200 is 300
