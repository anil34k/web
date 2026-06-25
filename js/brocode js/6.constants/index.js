// constants(const) =  a variables that cant be changed

const pi = 3.14159; // constant (can't be changed)
let radius;          // variable (can be changed)
let circumference;

// pi = 13213.3

// radius = window.prompt("Enter the radius of the circle");

document.getElementById('mysubmit').onclick = function(){
    radius = document.getElementById('mytext').value;
    radius = Number(radius);
    circumference = 2 * pi * radius;
    document.getElementById('myh3').textContent = circumference + 'cm';

}