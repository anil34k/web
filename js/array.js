let arr = [10, 'hi', true, { fname: 'anil' }[10, 20, 30]]
console.log(arr)
console.log(typeof arr)
console.log(arr.length)
console.log(arr[1])
console.log(typeof arr[1])

// modification (CRUD)
// create an array
let arr2 = [10, 20, 30, 40, 50]
console.log(arr2)
console.log(typeof arr2)
console.log(arr2.length)

// add the new element in the array
// syntax: arrayname[index] = newvalue
arr2[6] = 'hi'
console.log(arr2)

// update the element in the array
// syntax: arrayname[index] = newvalue
arr2[2] = 'bye'
console.log(arr2)

// delete the element in the array
// syntax: delete arrayname[index]
delete arr2[3]
console.log(arr2)

// array programs
let colors = ['red', 'green', 'black']
console.log(colors)

console.warn('using for loop')
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i])
}

console.warn('using for of loop')
for (let key of colors) {
    console.log(key)
}

console.warn('using foreach loop')
colors.forEach((element) => {
    console.log(element)
})

// wap to print only even numbers from the array

let numbers = [10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i])
    }
}

console.warn('using for of loop')
for (let key of numbers) {
    if (key % 2 == 0) {
        console.log(key)
    }
}

console.warn('using foreach loop')
numbers.forEach((element) => {
    if (element % 2 == 0) {
        console.log(element)
    }
})

// wap to print only even numbers from the array and result store it in tthe array without using the built-in methods 
let numbers1 = [10, 15, 20, 25, 30, 35, 40, 45, 50]
console.log(numbers1)

console.warn('using for loop')
let evenNumbers = []
for (let i = 0; i < numbers1.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers[evenNumbers.length] = numbers[i]
    }
}
console.log(evenNumbers)

console.warn('using for of loop')
let evenNumbers1 = []
for (let key of numbers1) {
    if (key % 2 == 0) {
        evenNumbers1[evenNumbers1.length] = key
    }
}
console.log(evenNumbers1)


// wap to print only the number from this array 
console.warn('using for loop')
let arr3 = [10, 'hi', true, 500, null, 'bye']
for (let i = 0; i < arr3.length; i++) {
    if (typeof arr3[i] === 'number') {
        console.log(arr3[i])
    }
}

console.warn('using for of loop')
for (let key of arr3) {
    if (typeof key === 'number') {
        console.log(key)
    }
}
