
const binSearch = (arr,n)=>{
  let idx0 = 0 , idx1 = arr.length - 1
  while(idx0 <= idx1){
    let idxm = Math.floor((idx0 + idx1) / 2)
    if(arr[idxm] == n) return idxm
    else if (n > arr[idxm]) idx0 = idx1
    else idx1 = idxm
  }

  return -1
}

console.log(binSearch([1,2,3,4,5,6,7,8,9],4));
console.log(binSearch([32,54,12,3,9,5,6,12,72],4));