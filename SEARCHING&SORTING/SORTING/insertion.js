
const swap = (arr,idx1,idx2)=>{
  let temp = arr[idx1]
  arr[idx2] = arr[idx2]
  arr[idx2] = temp
}

const insertionSort = (items)=>{
  const len = items.length 
  let value , i , j 
  for(i = 0 ; i < len ; i++){
    // value is the current value
    value = items[i]
    // we compare a value and its previous values and find if it is above it or below and swap accordingly
    for( j = i -1 ; j > - 1 && items[j] > value ; j-- ){
      // Once the condition is met , we swap the values 
      items[j+1] = items[j] 
    }
    // after that , we then have a new value as our current value
    items[j+1] = value
  }
  console.log(items)
}

insertionSort([6,8,1,4,2,5,3,7])