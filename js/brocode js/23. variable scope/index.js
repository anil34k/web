// variable scope = where a variable is recognized and accessible (local vs global)

// example 1

let x = 10; //global variable


function display1(){
    let x = 100; //local variable (will not affect the global variable x)
    console.log(x); //prints the local variable x
}
// display1();  

function display2(){
    x = 30;  // affects the global variable x
    console.log(x); //prints the local variable x
}
display2();
// console.log(x);


//example 2

let a = 1; //global variable

function outer(){
    let b = 2; //global variable

    function inner(){
        let c = 3; //local variable
        console.log(a,b,c);
    }
    inner();
}
outer();