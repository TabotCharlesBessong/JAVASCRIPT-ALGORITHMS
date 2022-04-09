
const unique = (arr1 , arr2)=>{
  const set = new Set(arr1.concat(arr2))
  console.log(Array.from(set))
}

unique([1,1,2,3,4,4,5,6,4,6])
