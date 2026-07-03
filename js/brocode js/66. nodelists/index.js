// NodeList = Static collection of HTML elements by (id, class, element)
//            Can be created by using querySelectorAll()
//            Similar to an array, but no (map, filter, reduce)
//            NodeList won't update to automatically reflect changes

// ---------- EXAMPLE 1: ADD HTML/CSS PROPERTIES ----------
let buttons1 = document.querySelectorAll(".myButtons1");

buttons1.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
});

// ---------- EXAMPLE 2: CLICK event listener ----------
let buttons2 = document.querySelectorAll(".myButtons2");

buttons2.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";
    });
});

// ---------- EXAMPLE 3: MOUSEOVER + MOUSEOUT event listener ----------
let buttons3 = document.querySelectorAll(".myButtons3");

buttons3.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons3.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

// ---------- EXAMPLE 4: ADD AN ELEMENT ----------
// ADD AN ELEMENT
const newButton = document.createElement("button"); //STEP 1
newButton.textContent = "Button 5"; //STEP 2
newButton.classList = "myButtons3";
document.body.appendChild(newButton); //STEP 3

buttons3 = document.querySelectorAll(".myButtons3");

console.log(buttons3);

// ---------- EXAMPLE 5: REMOVE AN ELEMENT ----------
buttons3.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        buttons3 = document.querySelectorAll(".myButtons3");
        console.log(buttons3);
    });
});
