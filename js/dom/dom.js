let changecontent = () => {
    let msz = document.getElementById('msz')
    msz.innerText = 'i love python'
    // msz.style.color = 'red'
    // msz.style.background = 'yellow'
    msz.style.cssText =
        `color: red;
        background: yellow;`
}

let spiders = () => {
    let text = document.getElementsByClassName('text')
    let whitecolor = 'color:white'
    text[0].style.cssText = `${whitecolor}; background:orange`
    text[1].style.color = 'blue'
    text[2].style.cssText = `${whitecolor}; background:green`
}

let demo = () => {
    let div = document.getElementById('div')
    console.log(div.className)
    console.log(div.classList)
}