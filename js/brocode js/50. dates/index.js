// Date objects = contain a number that represents milliseconds since Jan 1 1970
//                can format and get details of date and time

//  Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
const date = new Date(); // present day date
const year = date.getFullYear(); // returns 4 digit year
const month = date.getMonth(); // 0-11
const day = date.getDate(); // returns 1-31
const dayofweek = date.getDay(); // returns 0-6
const hour = date.getHours(); // 0-23
const minute = date.getMinutes(); // 0-59
const second = date.getSeconds(); // 0-59
const ms = date.getMilliseconds(); // 0-999
const date1 = new Date(0); // epoch time
const date2 = new Date(170000000000); // given ms time


console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(second);
console.log(ms);
console.log(date1);
console.log(date2);

