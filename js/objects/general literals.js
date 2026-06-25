let car = {
    name:"BMW",
    model:2020,
    color:"red"    
}
console.log(car)
console.log(typeof car)

// accessing the property from the object
// dot operator
// syntax : objectName.propertyName
console.log(car.name)
// bracket operator
// syntax : objectName["propertyName"]
console.log(car["name"])

// modification (CRUD (mongodb))
// create the object
 let person = {
    fname : 'anil',
    lname : 'kumar',
    age : 25
 }
 console.log(person)
 console.log(typeof person)

 //read the property from the object
//  syntax : objectName.propertyName
console.log(`${person.fname} is ${person.age} years old`)

// add new property to the object
// syntax : objectName.newpropertyName = newvalue
person.place = 'Bangalore'
console.log(person)

// update the property value in object
// syntax : objectName.propertyName = newValue
person.age = 26
console.log(person)

// delete the property from the object
// syntax : delete((keyword)) objectName.propertyName
delete person.lname
console.log(person)