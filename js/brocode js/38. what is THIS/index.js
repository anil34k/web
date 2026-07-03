// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name

// doesnt work with arrow functions because they dont have their own this

const person1 = {
    name: "Spongebob",
    favFood: "hamburgers",
    sayHello: function(){console.log(`Hi! I am ${this.name}`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Patrick",
    favFood: "pizza",
    sayHello: () => console.log(`Hi! I am ${this.name}`), // error will come here because 'this' is not defined for arrow functions
    eat: () => console.log(`${this.name} is eating ${this.favFood}`) // error will come here because 'this' is not defined for arrow functions
}

person1.eat();
person2.eat();
