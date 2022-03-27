
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

const medianFxn = (array)=>{
  const len = array.length 
  console.log(len);
  // console.log(Math.floor(len/2),"len");
  if(len % 2 === 1){
    console.log("\n",array[Math.floor(len/2)]) 
  }else{
    console.log(("\n",(array[len/2]) + (array[len/2 -1] ))/2) 
  }
}

medianFxn([1,2,4,8,16,32,64,128])

medianFxn([1,2,3,4,5,6,7,8,9,10,11])

const medianArrays = (arr1,arr2,pos)=>{
  if(pos <= 0) {
    return -1
   
  }
  if (pos ===1) console.log((arr1[0] + arr2[0])  / 2)
  if (pos == 2) console.log(Math.max(arr1[0],arr2[0]) + Math.min(arr1[1] , arr2[1])) / 2 

  const median1  = medianArrays(arr1), median2 = medianArrays(arr2)

  if(median1 == median2) console.log(median1)

  const offset = pos % 2 == 0 ? 1 : 0 , 
  offsetMin = Math.floor(pos / 2) - offset , 
  offsetPlus = Math.floor(pos /2) + offset 

  if (median1 < median2 ){
    console.log(medianArrays(arr1.slice(offsetMin), arr2.slice(offsetMin), offsetPlus))
  }else{
    console.log(medianArrays(arr2.slice(offsetMin), arr1.slice(offsetMin), offsetPlus))
  }
}

// console.log(medianArrays([1 , 2 , 3 ], [4 , 5 , 6 ], 3 )) 
// console.log(medianArrays([11 , 23 , 24 ], [32 , 33 , 450 ], 3 )) 
// console.log(medianArrays([1 , 2 , 3 ], [2 , 3 , 5 ], 3 )) 

const commonEle = (narray)=>{
  // The hasmap is used to store the similar element of our arrays 
  let hashmap = {} ,
  last , answer = []

  for (let i = 0 , nlen = narray.length ; i < nlen ; i++){
    // we iterate over the main array and first store all the values in the first sub array and use it as a reference for comparison
    const curr = narray[i]
    last = null 
    for( let j = 0 , currLen = curr.length ; j < currLen ; j++){
      // so we iterate again to pass over the first array and use the values as reference
      const currEle = curr[j] 
      if(last != currEle){
        // if the current array is not null , we use this consition because as you know we have many arrays , so we will need to make sure that no array is null before even checking the values 
        if (!hashmap[currEle]){
          hashmap[currEle] = 1 
        }else{
          hashmap[currEle]++
        }
      }
      last = currEle
    }
  }
  for (let prop in hashmap ){
    if(hashmap[prop] == narray.length){
      answer.push(parseInt(prop))
    }
  }
}