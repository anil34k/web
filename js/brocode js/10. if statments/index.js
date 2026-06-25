//  if statemnt = if a condition is true it will execute some code if not, do something else

// let age = 22;

// if (age >= 18){
//     console.log("You are an adult");
// }
// else{
//     console.log("You are not an adult");
// }

// let lience = 18;
// let hasliencve = true;

// if (lience >= 18){
//     console.log("You are eligible to drive");
//     if (hasliencve){
//         console.log("You have your license");
//     }
//     else{
//         console.log("You don't have your license ");
//     }
// }
// else{
//     console.log("You cannot drive");
// }
const mytext = document.getElementById("mytext");
const mysubmit = document.getElementById("mybutton");
const result = document.getElementById("resultelement");
let age;

mysubmit.onclick = function(){
    age = Number(mytext.value);
    if(age >= 100){
    result.textContent = "your too old to enter this site";
}
else if(age == 0){
    result.textContent = "you can't enter this site you were just born";
}
else if(age <= 18){
    result.textContent = "you are not old enough to enter this site";
}
else if(age < 0){
    result.textContent = "invalid age";
}
else{
    result.textContent = "you must be 18+ to enter this site";
}
}
