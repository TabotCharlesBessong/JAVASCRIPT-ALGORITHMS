// The function above will enable us to swap our values so as to rearrange them
const swap = (arr,idx1, idx2)=>{
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

const permute =  (arr , start , end)=>{
  if(start == end) console.log(arr)
  else{
    for(let i = start ; i < end + 1 ; i++){
      swap(arr,start,i)
      permute(arr,start + 1, end)
      swap(arr,start,i)
    }
  }
}

const permuteArray = (arr)=>{
  permute(arr,0,arr.length - 1)
}

permuteArray(["A","B","C"])