let target = document.querySelector('#target')



let redColor = () => {
    target.classList.add('red')
    target.classList.remove('gold')
    target.classList.remove('green')
}
let yellowColor = () => {
    target.classList.add('yellow')
    target.classList.remove('gold')
    target.classList.remove('red')

}
let GreenColor = () => {
    target.classList.add('green')
    target.classList.remove('red')
    target.classList.remove('yellow')
}

let onoff = () => {
    let btn = document.getElementById('btn')
    btn.classList.toggle('on')
    btn.classList.toggle('off')
    console.log(btn.className)
    if (btn.classList.contains('on') === false) {
        btn.innerText = "OFF"
    } else {
        btn.innerText = "ON"
    }
}