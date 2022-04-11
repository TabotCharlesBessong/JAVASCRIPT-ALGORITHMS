// This algorithm takes from element 0 to element n-1 and compare one after the other , 
// The i = 0 element is looped and compared with all the other element 

const swap = (arr,idx1,idx2)=>{
  let temp = arr[idx1]
  arr[idx2] = arr[idx2]
  arr[idx2] = temp
}

const bubbleMin = (arr)=>{
  for(let i = 0 , arrLen = arr.length; i < arrLen ; i++){
    for(let j = 0 ; j< i ; j++){
      if(arr[i] < arr[j]) swap(arr,i,j)
    }
  }
  return arr
}





    
  



console.log(bubbleMin([6,1,2,3,4,5,8,7]))
