// ----------- EXAMPLE 1 <h1> -----------

// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
document.getElementById("box1").append(newH1);
// document.getElementById("box1").prepend(newH1);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newH1);
document.getElementById("box1").removeChild(newH1);


// ----------- EXAMPLE 2 <a> -----------

// STEP 1 CREATE THE ELEMENT
const newLink = document.createElement("a");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newLink.textContent = "goggle";
newLink.href = "https://google.com";
newLink.target = "_blank";
newLink.id = "myLink";
newLink.style.color = "blue";
newLink.style.textDecoration = "none";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newLink);
// document.body.prepend(newLink);
document.getElementById("box1").append(newLink);
// document.getElementById("box1").prepend(newLink);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newLink, box2);

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newLink, boxes[0]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("box1").removeChild(newLink);


// ----------- EXAMPLE 3 <li> -----------

// STEP 1 CREATE THE ELEMENT
const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const banana = document.getElementById("banana");
// document.getElementById("fruits").insertBefore(newListItem, banana);

// const listItems = document.querySelectorAll("#fruits li");
// document.getElementById("fruits").insertBefore(newListItem, listItems[4]);

// REMOVE HTML ELEMENT
// document.body.removeChild(newLink);
// document.getElementById("fruits").removeChild(newListItem);