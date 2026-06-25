// example probmem
if(true){
    console.log("hello");
}
else{
    console.log("bye");
}

// wap tocheck whether a number is even or not
let num = 11;
if(num % 2 == 0){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is odd`);
}

//example problem 2
let rcb = 'win the ipl';
if(rcb == 'win the ipl'){
    console.log(`e sala cup namde`)
}
else{
    console.log(`mundisala sala cup namde`)
}

// wap to check whether a person is eligible for voting or not
let age = prompt('enter your age');
if(age >= 18){
    console.log(`you are eligible for voting`);
}
else{
    console.log(`you are not eligible for voting`);
}

// wap to check the given number is positive or negative

let num1 = 0
if (num1 > 0){
    console.log(`${num1} is positive`)
} 
else if (num1 < 0){
    console.log(`${num1} is negative`)
}

else{
    console.log(`${num1} is neither positive or negative`)
}

// example 3
let num2 = 'abc'
if(typeof num2 === 'number'){
    if (num%2==0){
        console.log(`${num2} is even number`)
    }
    else {
        console.log(`${num2} is odd number`)
    }
}
else {
    console.log(`${num2} is not a number (NaN)`)
}

// login system
let username = 'anilkali'
let password = 'anil2004'
if (username === 'anilkali'){
    if (String(password) === 'anil2004'){
        console.log(`welcome`)
    }
    else {
        console.log(`invalid password`)
    }
}
else {
    console.log(`user not found`)
}

// switch case
// example 1
let signal = 'red'
switch(signal){
    case 'red':
        console.log(`stop`);
        break;
    case 'yellow':
        console.log(`get ready`);
        break;
    case 'green':
        console.log(`go`);
        break;
    default:
        console.log(`invalid signal`);
}

// for loop
// to print number 1 to 5
for(let i = 1; i <= 5; i++){
    console.log(i);
}

// wap to print even numbers between 20-30 using for loop
for(let i = 20; i <= 30; i++){
    if(i % 2 == 0){
        console.log(i);
    }   
}

// wap to print multiplication table of 5
let num3 = 5;
for(let i = 1; i <= 10; i++){
    console.log(`${num3} x ${i} = ${num3 * i}`);
}

// while loop
let num4 = 1;
while(num4 <= 10){
    console.log(num4);
    num4++;
}