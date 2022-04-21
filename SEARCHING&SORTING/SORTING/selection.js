// Selection sorting works by scanning the elements for the smallest element and inserting it into the current position of the array. This algorithm is marginally better than bubble sort. Figure 10-6 shows this minimum selection process

const swap = (arr,idx1,idx2)=>{
  let temp = arr[idx1]
  arr[idx2] = arr[idx2]
  arr[idx2] = temp
}

const selectionSort = (items)=>{
  const len = items.length
  let min
  // we take an element and compare it with its nearest value
  for(let i= 0; i < len ; i++){
    min = i
    for( j = i+1 ; j< len ; j++){
      if(items[j] < items[min]){
        min = j
      }
    }
    if(i != min) {
      swap(items , i  , min)
      
    }
    
  }
  return items
}

console.log(selectionSort([6,1,23,4,2,3]))