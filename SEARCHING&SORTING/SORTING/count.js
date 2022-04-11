
// This is a whole different count method 
// It brings only unique values i.e no duplicate and arrange them after counting their occurence 

const countSort = (arr)=>{
  let hash = {} , count = []
  for(let i = 0 ; i < arr.length;i++){
    if(!hash[arr[i]]) hash[arr[i]] = 1
    else hash[arr[i]]++
  }

  for (let key in hash){
    for(let j = 0 ; j<hash[key]; j++) count.push(parseInt(key))
  }
  console.log(count)
}

countSort([6,1,23,2,3,2,1,2,2,3,3,1,123,123,4,2,3])