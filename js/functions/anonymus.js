// ========== SERIES 1: function without parameters and without return type using anonymus function ==========
let demo1 = function() {
    console.log('this is my 1st example of function'); 
}
demo1()

// ========== SERIES 2: function with parameters and without return type using anonymus function ==========
let myname = function(user){
    console.log(user)
}
// myname() // undefined
myname('anil') // anil
myname('kali') // kali

// ========== SERIES 3: function without parameters & with return value using anonymus function ==========
let num = function(){
    let a= 100
    let b= 200
    let sum = a+b
    let res = `${a} + ${b} = ${sum}`

    return res
}
let x = num()
console.log(x)
console.log(num())

// ========== SERIES 4: function with parameters and with return type using anonymus function ==========
let add2num = function(a, b) {
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)
}
add2num(10, 20) // the sum of 10 and 20 is 30
add2num(100, 200) // the sum of 100 and 200 is 300
