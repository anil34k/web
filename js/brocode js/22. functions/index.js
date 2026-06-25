// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

function happyBirthday(username, age){ // username & age are parameters, also called arguments
    console.log(`Happy birthday ${username}`); // username will be replaced with the argument passed here
    console.log(`You are ${age} years old`); // age will be replaced with the argument passed here
}

happyBirthday("Sowjanya", 25); // arguments passed here
happyBirthday("Anil", 30); // arguments passed here

function add(x,y){
    return x + y;
}

function sub(x,y){
    return x - y;
}

function mul(x,y){
    return x * y;
}

function div(x,y){
    return x / y;
}

console.log(add(10,20));
console.log(sub(10,20));
console.log(mul(10,20));
console.log(div(10,20));

function isEven(number){
    if(number % 2 === 0){
        return console.log("Even");
    }
    else{
        return console.log("Odd");
    }
}
isEven(10);
isEven(11);

//using ternary operator

function isEvenTernary(number1){
    return number1 % 2 === 0 ? "Even" : "Odd"
}
console.log(isEvenTernary(12));

//

function isValidEmail(email){
    if(email.includes("@") && email.includes(".")){
        return true;
    }
    else{
        return false;
    }
}
console.log(isValidEmail("anilkumar@gmail.com"));