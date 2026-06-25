// We can use either event or e


// let handleSubmit = (event) => {
//     event.preventDefault()
//     console.log("Hello");
// }

let handleSubmit = (e) => {
    e.preventDefault()
    //     console.log(event); // Submitevent()
    //     console.log(event.target) //target - form
    console.log(e.target[0]); // target 1st inpuit field
    console.log((e.target[1].value)); // collect input value

    //calling by ID name 
    let fname = e.target[0].value
    let lname = e.target[1].value
    //console.log(fname,lname)

    let myname = document.getElementById('myname')

    myname.innerText = `My name is ${fname} ${lname}`
}

let ageCalculate = (e) => {
    e.preventDefault()

    let ageprint = document.getElementById('ageprint')
    let user = e.target[0].value;
    let dob = e.target[1].value;
    // console.log(name,dob);

    let dob_year = dob.slice(0, 4)
    let dateObj = new Date()
    let age = dateObj.getFullYear() - dob_year

    // console.log(`${user} age is ${age}`)
    ageprint.innerText = `${user} age is ${age}`
}


let validation = (e) => {
    e.preventDefault()

    let inputField = e.target
    let password = e.target[1]
    let hari = document.getElementById('hari')
    // console.log(inputField[0].value);

    if (inputField[0].value === "" || inputField[0].value === null) {
        // console.error("Email Field is Empty")
        inputField[0].style.border = "solid 2px red"
        hari.innerHTML = `<p style="color:red">
            email Field is empty
        </p>`
    } else {
        console.log(`Email : ${inputField[0].value}`);


        if (password.value === "" || password.value === null) {
            // console.error("Password field is empty")
            hari.innerHTML = `<p style="color: red">
            password field is empty
            </p>`
            password.style.border = "solid 2px red"
        } else {
            console.log(`Password : ${password.value}`);
            password.style.border = "solid 2px green"

            hari.innerHTML = `
            <ul type="none" style="color: red"></ul>`
        }
    }
}