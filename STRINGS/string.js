//gives you the index of the character at n position 
console.log('dog'.charAt(0));

// gives you the range of characters from a certain position to another 
// it takes 2 paramaeters , 1 is the starting and the second is the last 
console.log('Youtube'.substring(3,7));

// searching strings 
console.log("Dragon Ball".indexOf('gon'));

// counting xharacters in a string
// const str = "He's my king a beatiful woman from this day until his last day"
// let count = 0 
// let position = str.indexOf('a')
// while(position !== -1){
//   count++
//   position = str.indexOf('a')
// }

// console.log(count); // 6

console.log("Dragon Ball".startsWith('Dra'));
console.log("Dragon Ball".endsWith('Dra'));

const test1  = "She will be my wife and we will be there for each other till the day we take our last breath"

console.log(test1.split(" "));

test1.replace("wife","woman")
console.log(test1);

// Regular expression
const reg = /\d+/ // any digit 
console.log(reg.test("432"))
console.log(reg.test("ghj326723b"))
console.log(reg.test("fcgvhjb"))

console.log("\n");
const reg1 = /^\d+$/ // only numeric character
console.log(reg1.test("432"))
console.log(reg1.test("ghj326723b"))
console.log(reg1.test("fcgvhjb"))

// floating numeric character 
console.log("\n");
const reg2 = /^[0-9]*.[0-9]*[1-9]+$/
console.log(reg2.test("234"));
console.log(reg2.test("23.4"));

// Only alpha numeric characters
const reg3 = /[a-zA-Z0-9]/
console.log("\n");
console.log(reg3.test("This is aweful"));
console.log(reg3.test("Charlie1230"));

