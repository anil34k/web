//  how to accept user input
// 1. easy way = window.prompt()
// 2. professional way = html text box

// window.prompt
// let username;
// username = window.prompt("Enter your username");
// console.log(username);

// html text box
// getElementById

let username;

document.getElementById("mysubmit").onclick = function () { // when the button is clicked
    username = document.getElementById("myText").value; // get the user value from the text box
    document.getElementById("myh1").textContent = `hello ${username}`; // display the user value in the h1 tag
}

// 