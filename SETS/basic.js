
let exampleSet = new Set()

exampleSet.add(1)
exampleSet.add(2)
console.log(exampleSet)
exampleSet.add(3)
exampleSet.delete(2)
exampleSet.add(4)
console.log(exampleSet)

console.log(exampleSet.has(2))
console.log(exampleSet.has(3))

// The intersection function 

const intersection = (setA, setB) =>{
  const inter = new Set()
  for(let ele of setB){
    if(setA.has(ele)){
      inter.add(ele)
    }
  }
  console.log(inter)
}

const setA = new Set([1,2,3,4,5,6,7,8,9])
const setB = new Set([2,4,1,6,98,23])

intersection(setA,setB)

// The superset function 

const isSuperSet = (setC, subset)=>{
  for(let elem of subset){
    if(!(setC.has(elem))){
      return false
    }
  }
  return true
}

const setC = new Set([1,2,3,4,5,6,7,8,9])
const setD = new Set([2,4,1,6,9])

console.log(isSuperSet(setC,setB))
console.log(isSuperSet(setA,setB))
console.log(isSuperSet(setA,setD))

// The union element 
const unionSet = (setE,setF)=>{
  const union = new Set(setE)
  for(let el of setF){
    union.add(el)
  }
  console.log(union)
}

const setE = new Set([1,5,2,7])
const setF = new Set([4,6,1,8])

unionSet(setE,setF)

const difference = (setA,setB)=>{
  const diff = new Set(setA)
  for(let el of setB){
    diff.delete(el)
  }
  console.log(diff)
}

difference(setA,setB)