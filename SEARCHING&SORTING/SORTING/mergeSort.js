
// Mergesort works by dividing the array into subarrays until each array has one element.
// Then, each subarray is concatenated (merged) in a sorted order

const merge = (left,right)=>{
  const res = []
  let leftIdx = 0 , righIdx = 0

  while(leftIdx < left.length && righIdx < right.length){
    if(left[leftIdx] < right[righIdx] ){
      res.push(left[leftIdx++])
    }else{
      res.push(right[righIdx++])
    }
  }

  let leftRem = left.slice(leftIdx),
  rightRem = right.slice(righIdx)

  return res.concat(leftRem).concat(rightRem)
}


const mergeSort = (array)=>{
  if(array.length < 2 ){
    return array
  }
  const midPoint = Math.floor((array.length)/2)
  let leftArray = array.slice(0,midPoint),
  rightArray = array.slice(midPoint)

  return merge(mergeSort(leftArray),mergeSort(rightArray))
}

mergeSort([6,1,23,4,2,3])