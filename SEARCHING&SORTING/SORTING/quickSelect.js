
// Quickselect is a selection algorithm to find the kth smallest element in an unordered list.
// Quickselect uses the same approach as a quicksort algorithm. A pivot is chosen, and the
// array is partitioned. Instead of recursing both sides like quicksort, however, it recurses
// only the side for the element. This reduces the complexity from O(nlog2(n)) to O(n).
// Quickselect is implemented in the following code:

const arr =  [1,3,3,-2,3,14,7,8,1,2,2]

const quickSelectInPlace = ()=>{
  const p = partition(A,l,h,k)
  if(p== (k-1) ){
    return A[p]
  }else if(p > (k-1) ){
    return quickSelectInPlace(A,l,p-1,k)
  }else{
    return quickSelectInPlace(A,p+1,h,k)
  }
}

const medianQuickSelect = ()=>{
  return quickSelectInPlace(arr,0,arr.length-1,Math.floor(arr.length/2))
}

quickSelectInPlace(arr,0,arr.length-1,5)