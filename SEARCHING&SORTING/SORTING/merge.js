// Mergesort works by dividing the array into subarrays until each array has one element. Then, each subarray is concatenated (merged) in a sorted order

// The function below helps us merge the function by arranging them in order
const merge = (left , right)=>{
  let results = [], leftIndex = 0 , rightIndex = 0
  while(leftIndex < left.length && rightIndex < right.length ){
    if(left[leftIndex] < right[rightIndex]) results.push(left[leftIndex++])
    else results.push(right[rightIndex++])
  }
  let leftRem = left.slice(leftIndex), rightRem = right.slice(rightIndex)
  
  // ADD the remaining result to the array 
  return results.concat(leftRem).concat(rightRem)
}

const mergeSort = (array)=> {

  if(array.length<2) return array; // Base case: array is now sorted since it'sjust 1 element
 
  // we devide the array into 2
   const midpoint = Math.floor((array.length)/2),
   left = array.slice(0, midpoint),
   right = array.slice(midpoint);
 
  console.log(merge(mergeSort(left), mergeSort(right)))
  }
  mergeSort([6,1,23,4,2,3]); // [1, 2, 3, 4, 6, 23]