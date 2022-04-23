
const findTwoSum = (arr,sum)=>{
  for(let i = 0 , len = arr.length ; i  < len ; i++ ){
    for(let j = i+1; j < len ; j++ ){
      if(arr[i] + arr[j] === sum) console.log('There are two values that sum up to the sum ')
    }
    
  }
  console.log('There are no two values that sum up to the sum ')
  
  // return false
}

findTwoSum([5,4,89,32,13,25,4],45)