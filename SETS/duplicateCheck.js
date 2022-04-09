
const checkDuplicate = (arr)=>{
  const set = new Set(arr)
  console.log(set.size < arr.length)
}

checkDuplicate([1,2,3,4,5])
checkDuplicate([1,1,2,3,4,4,5,6,4,6])