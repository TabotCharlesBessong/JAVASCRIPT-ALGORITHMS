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