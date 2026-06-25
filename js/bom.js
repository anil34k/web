let singleclick = () => {
    console.log('single click')
}

let doubleclick = () => {
    console.log('double click')
}
// //////////////////////////////////////////////
let example1 = () => {
    let user = prompt('enter your name')
    if (user === '' || user === null) {
        let bool = confirm('do u want to exit..!')
        bool ? alert('thank you') : printname();
    } else {
        alert(`my name is ${user}`)
    }
}
// //////////////////////////////////////////////
let func1 = () => {
    console.log('hello')
}
// ///////////////////////////////////////
let func2 = () => {
    console.log(100)
}

let num = 1
let printname = () => {
    console.log(num++)
}

let resetnum = () => {
    num = 1
}

let printnumber = () => {
    let num = 1
    let p = setInterval(() => {
        console.log(num++)
    }, 1000)
    setTimeout(() => clearInterval(p), 10000)
}
