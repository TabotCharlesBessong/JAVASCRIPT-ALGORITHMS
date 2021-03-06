const swap = (arr,idx1,idx2)=>{
  let temp = arr[idx1]
  arr[idx2] = arr[idx1]
  arr[idx2] = temp
}

// Quicksort works by obtaining a pivot and partitioning the array around it (bigger
//   elements on one side and smaller elements on the other side) until everything is
//   sorted. The ideal pivot is the median of the array since it will partition the array
//   evenly but getting the median of an unsorted array linear time to compute. Hence,
//   a pivot is typically obtained by taking the median value of the first, middle, and last
//   elements in the partition. This sort is a recursive one and uses the divide-and-conquer
//   methodology to break the quadratic complexity barrier and get the time complexity
//   down to O(nlog2(n)). However, with a pivot that partitions everything on one side, the
//   time complexity is worse case: O(n2).


// The function below helps us section the array into 2 
const partition = (arr , left , right)=>{
  // our pivot position is the middle which is actually the average 
  // The pivot being the middle value
  // left is the start of the array and the right is last element of the array
  let pivot = arr[Math.floor((right + left) / 2)]
  // so we will keep doing this while the value in the index of 0 is less than taht at index n-1 since our objectif is to sort it
  while(left <= right){
    // while we keep on moving to the left without passing the left , we keep moving 

    // if the value of the pivot is greater than the value at the index of the left , we move to the next index to the right and continue with our comparison
    while(pivot > arr[left]) left++

    // if the value of the pivot is lesser than the value at the index of the right , we move to the next index to the left and continue with our comparison
    while(pivot < arr[right] ) right--
    if(left <= right){
      let temp = arr[left]
      arr[left] = arr[right]
      arr[right] = temp
      // swap(arr,right,left)
      left++
      right--
    }
  }
  return left
}

const quickSortHelper = (items, left , right)=>{
  let index 
  if (items.length > 1){
    index = partition(items,left,right)
    if(left < index - 1) quickSortHelper(items , left , index -  1)

    if(index < right) quickSortHelper(items, index , right)
  }
  return items
}

const quickSort = (items)=>{
  return quickSortHelper(items,0,items.length - 1)
}

console.log(quickSort([6,8,1,4,2,5,9,3,7]))