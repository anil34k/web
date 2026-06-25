const decreasbtn = document.getElementById('decbutton');
const resetbtn = document.getElementById('resetbutton');
const increasebtn = document.getElementById('incbutton');
const countlabel = document.getElementById('countlabel');

let count = 0;

increasebtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decbutton.onclick = function(){
    count--;
    countlabel.textContent = count;
}

resetbutton.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
