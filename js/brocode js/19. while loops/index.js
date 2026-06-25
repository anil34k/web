// while loop = repeat some code while some condition is true

// while 

let username = "";

while (username === "" || username === null){
    username = window.prompt("Enter your username");
}

console.log(`Hello ${username}`);


// do while loop = do something at least once

let username1;

do{
    username1 = window.prompt("Enter your username");
}
while (username1 === "" || username1 === null);

console.log(`Hello ${username1}`);  

// example 2
// using while loop
let loogedin = false;
let username2 = "";
let password = "";

while(!loogedin){
    username2 = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username2 === "Anil" && password === "anil123"){
        loogedin = true;
        console.log("Logged in successfully");  
    }
    else{
        console.log("Invalid username or password");
    }
}

console.log("Welcome " + username2);

// using do while loop

let loggedin1 = true;
let username3 = "";
let password3 = "";

do {
    username3 = window.prompt("Enter your username");
    password3 = window.prompt("Enter your password");

    if(username3 === "Anil" && password3 === "anil123"){
        loggedin1 = true;
        console.log("Logged in successfully");
    }
    else{
        console.log("Invalid username or password");
    }
}
while(!loggedin1);

console.log("Welcome " + username3);