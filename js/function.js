// functions

// function without parameters and without return type
function demo1() {
    console.log('this is my 1st example of function'); 
}
demo1()
console.log(typeof demo1); // function
demo1() // this is my 1st example of function

// function with parameters and without return type
function myname(user){
    console.log(user)
}
// myname() // undefined
myname('anil') // anil
myname('kali') // kali

function add() {
    let a = 10
    let b = 20
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)
}
add() // the sum of 10 and 20 is 30
// add() // the sum of 10 and 20 is 30


// wap to add 2 numbers using general function with parameters

function add2num(a, b) {
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)
}

add2num(10, 20) // the sum of 10 and 20 is 30
add2num(100, 200) // the sum of 100 and 200 is 300

// wap to print only the even numbers from 30-40 using general function with parameters

function evennum(start,end){
    console.warn(`even number from ${start} - ${end}`)
    for (i=start; i<=end;i++){
        if(i%2==0){
            console.log(i)
        }
    }
}
// evennum(30,40)

// function without parameter & without return value

function num(){
    let a= 100
    let b= 200
    let sum = a+b
    let res = `${a} + ${b} = ${sum}`

    return res
}

let x = num()
console.log(x)
console.log(num())

function userdata(fname,lname){
    // console.log(`hello ${fname} ${lname}`)
    return `hello ${fname} ${lname}`
}
let u1 = userdata('dingri','rani')
userdata()
console.log(userdata('dinga',420))


// wap to check even or odd number using the general function with parameter and return statment

function evenodd(num){
    if(num%2==0){
        return `${num} is even`
    }else{
        return `${num} is odd`
    }
    
    // return num%2==0 ? `${num} is even` : `${num} is odd`
}

let result1 = evenodd(10)
console.log(result1) // 10 is even

let result2 = evenodd(15)
console.log(result2) // 15 is odd

// wap to print square numbers using genegeral function with parameter and return statement

function squarenum(num){


    return `the square of ${num} is ${num*num}`
}
let res1 = squarenum(5)
console.log(res1) // the square of 5 is 25

// how to change the default value of parameter

function val(a=0) {
    console.log(a)
}
// val() // 0
// val(10) // 10
// val('hello') // hello
// val(true) // true

function func(a,b,c=420){
    var b = 'is'
    console.log(a,b,c)
}
func('dayulund')

// anonymous function

let a1 = function(){
    console.log('this is anonymous function')
}
console.log(a1) // [Function: a1]
a1() // this is anonymous function

let a2 = function(myname){
    console.log(`hello ${myname}`)
}
a2('anil') // hello anil
a2('kali') // hello kali
// ========== SERIES 1: function without parameters and without return type ==========

function printTable(){
    console.log('========== Multiplication Table ==========')
    for(let i = 1; i <= 10; i++){
        console.log(`5 x ${i} = ${5 * i}`)
    }
}
printTable()


// ========== SERIES 2: function with parameters and without return type ==========

function printMultiplicationTable(num, limit){
    console.log(`========== Table of ${num} ==========`)
    for(let i = 1; i <= limit; i++){
        console.log(`${num} x ${i} = ${num * i}`)
    }
}
printMultiplicationTable(7, 10)
printMultiplicationTable(3, 5)


// ========== SERIES 3: function without parameter & without return value ==========

function studentDetails(){
    let studentName = 'Anil Kumar'
    let studentAge = 20
    let studentRollNo = 101
    console.log(`Student Name: ${studentName}`)
    console.log(`Student Age: ${studentAge}`)
    console.log(`Student Roll No: ${studentRollNo}`)
}
studentDetails()


// ========== SERIES 4: function with parameter and return statement ==========

function checkVowel(char){
    let vowels = 'aeiouAEIOU'
    if(vowels.includes(char)){
        return `${char} is a vowel`
    }else{
        return `${char} is not a vowel`
    }
}

let resultV1 = checkVowel('a')
console.log(resultV1) // a is a vowel

let resultV2 = checkVowel('b')
console.log(resultV2) // b is not a vowel

let resultV3 = checkVowel('E')
console.log(resultV3) // E is a vowel