// type converstion =  change the datatype of a value to another datatype (string , number , boolean , undefined , null , BigInt)

// let age = window.prompt("how old are you ?");
// age = Number(age);
// age += 1;
// console.log(age, typeof age);

let x ; // if empty    0 'number' // if there is only variable then will get 'NaN' (Not a Number)
let y ; // if empty    string // if there is only variable then will get undefined string
let z ; // if empty    false 'boolean' // if there is only variable then will get false 'boolean'

x = Number(x);
y = String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);