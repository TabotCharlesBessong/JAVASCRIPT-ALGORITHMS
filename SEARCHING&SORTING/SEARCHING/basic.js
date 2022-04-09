
// Linear search 
const linearSearch = (arr,n)=>{
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] == n){
      return true
    }
  }
  return false
}

console.log(linearSearch([1,2,3,4,5,6,7,8,9],4));
console.log(linearSearch([32,54,12,3,9,5,6,12,72],4));

