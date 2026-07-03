// HIDE/SHOW HTML

// ---------- EXAMPLE 1: using display ----------
const myButton1 = document.getElementById("myButton1");
const myImg1 = document.getElementById("myImg1");

myButton1.addEventListener("click", event => {
    if(myImg1.style.display === "none"){
        myImg1.style.display = "block";
        myButton1.textContent = "Hide (Display)";
    }
    else{
        myImg1.style.display = "none";
        myButton1.textContent = "Show (Display)";
    }
});

// ---------- EXAMPLE 2: using visibility ----------
const myButton2 = document.getElementById("myButton2");
const myImg2 = document.getElementById("myImg2");

myButton2.addEventListener("click", event => {
    if(myImg2.style.visibility === "hidden"){
        myImg2.style.visibility = "visible";
        myButton2.textContent = "Hide (Visibility)";
    }
    else{
        myImg2.style.visibility = "hidden";
        myButton2.textContent = "Show (Visibility)";
    }
});
