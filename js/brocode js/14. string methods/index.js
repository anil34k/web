// string methods = allow you to manipulate and work with text (strings)

let userName = "BroCode";

// charAt() - returns the character at the specified index
console.log(userName.charAt(2)); // "o"

// indexOf() - returns the index of the first occurrence of a character
console.log(userName.indexOf("o")); // 2

// lastIndexOf() - returns the index of the last occurrence of a character
console.log(userName.lastIndexOf("o")); // 4

// length - returns the length of the string
console.log(userName.length); // 7

// trim() - removes whitespace from both ends of a string
let userNameWithSpace = "   BroCode   ";
userNameWithSpace = userNameWithSpace.trim();
console.log(userNameWithSpace); // "BroCode"

// toUpperCase() - converts a string to uppercase letters
console.log(userName.toUpperCase()); // "BROCODE"

// toLowerCase() - converts a string to lowercase letters
console.log(userName.toLowerCase()); // "brocode"

// repeat() - returns a new string with a specified number of copies of the string
console.log(userName.repeat(3)); // "BroCodeBroCodeBroCode"

// startsWith() - checks if a string starts with specified characters
let resultStart = userName.startsWith("B");
console.log(resultStart); // false

// endsWith() - checks if a string ends with specified characters
let resultEnd = userName.endsWith("e");
console.log(resultEnd); // false

// includes() - checks if a string contains specified characters
let resultIncludes = userName.includes("o");
console.log(resultIncludes); // false

// replaceAll() - replaces all occurrences of a string with another string
let phoneNumber = "123-456-7890";
phoneNumber = phoneNumber.replaceAll("-", "");
console.log(phoneNumber); // "1234567890"

// padStart() - pads a string at the start with another string until it reaches a given length
let num = "5";
num = num.padStart(5, "0");
console.log(num); // "00005"
