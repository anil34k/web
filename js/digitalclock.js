let digital_clock=()=>{
    let display=document.getElementsByClassName('display')

    let dateobj=new Date()
    let date= dateobj.toLocaleDateString()
    let time=dateobj.toLocaleTimeString()

    display[0].innerText=date
    display[1].innerText=time
}