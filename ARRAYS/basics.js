
let array1 = ["Banana","Apple","Orange","Grapes"]
console.log(array1);
array1.push("Coconuts")
console.log(array1);

// we have some 3 basic arrays method , one is the push method which push the added element to the end of the list 
// The pop method which will remove an element from the last index of the array 
// The shift method will remove the first element in the array 

// The for in method of iterating over array
for (let i in array1) console.log(array1[i],"\n");

// The for of method of iteration
// for this method unlike the above method , we need not pass the index of the array so as to print every element 
for (let fruit of array1) console.log("I ate -> ",fruit,"\n");

array1.shift()

// The for each method of the arrays
// Here we pass 2 parameters as we have a call back function 
array1.forEach((ele,index)=>{
  console.log("I love -> ",ele,"\n");
})


//  some of the arrays helper functions 
// 1.slice function  . This function helps us return only a portion of an array 
console.log(array1.slice(1,3),"Index of ");

// The splice method change the content of an array by removing old content and replacing it with the new one 



console.log(array1.splice(1,3));
const array2 = ["Pear","Avocado","Raspberry"]
// array1.concat()
// array1.concat(array2)
// console.log(array1);