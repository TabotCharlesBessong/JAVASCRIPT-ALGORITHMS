
// The map method will iterate over the array 
[1,2,3,4,5,6,7,8,9,10].map((value)=>{
  console.log(value ** 2)
})

// const array1 = [1,2,4,8,16,32,64,128]
// let val1
// array1.filter((val)=>{
//   return val1 =  val > 30
//   console.log(val1);
// })

// The reduce method combines all element in the array , almost like summing them up
const sum1 = [1,2,3,4,5,6,7,8,9].reduce((prev, next , index , array )=>{
  return prev + next
})

console.log(sum1 , "summing with the reduce method");

// we can also give it an innitial value 
// such a method is very good for inventory and goods related stuffs

const sum2 = [1,2,3,4,5,6,7,8,9].reduce((prev, next , index , array )=>{
  return prev + next
}, 11)
console.log(sum2 , "summing with the reduce method with an innitial Value");