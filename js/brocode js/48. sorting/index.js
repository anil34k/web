// sort() = method used to sort elements of an array in place.
//          Sorts elements as strings in lexicographic order, not alphabetical.
//          lexicographic = (alphabet + numbers + symbols) as strings

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
// numbers.sort();
numbers.sort((a, b) => a - b); //ascending order
// numbers.sort((a, b) => b - a); //descending order

console.log(numbers);
