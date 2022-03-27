

// Basic down counting
// recursions have an advantage over loops in the sense that they take less run time space
const countDown = (n)=>{
  if(n < 0){
    return
  }else{
    console.log(n,"\t")
    countDown(n-1)
  }
}

countDown(60)

// devide and conquer method 
// This is a programming approach to problem solving where the problem is broken down and accomplished step by step from one the component to another 

// 1. Fibonacci sequence
// 1.1 Iterative solution
const getNthFibo = (n)=>{
  if(n <= 1 ) return n
  let sum = 0 
  let last = 1 
  let lastLast = 0
  // This method is called iterative because we have a loop to help us
  for(let i = 1 ; i < n ; i++){
    // we always start with zero and 1 thats why the fibonocci of 1 and 2 are 1 and 1 
    sum = lastLast + last 
    // we will add the last last to the last and make sure we update them 
    lastLast = last 
    last = sum
  }
  console.log(sum,"Nth fibo")
}

getNthFibo(10)

// 1.2 Recursive -> Like the name indicate , a recursive function is one that calls it self for execution 

const getNthFiboV2 = (n)=>{
  if (n <= 1) console.log(n)
  let sum = 0 , last = 1 , lastLast = 0
  for(let i = 1 ; i < n ; i++ ){
    sum = lastLast + last
    lastLast = last
    last = sum
  }
  console.log(sum,"recursive fibo")
}

getNthFiboV2(23)

// There is still a better way to do this
const getNthFiboBetter = (n , lastLast , last)=>{
  if(n == 0) console.log(lastLast)
  if(n == 1) console.log(last)
  console.log(getNthFiboBetter(n-1, last , lastLast + last))
}

// getNthFiboBetter(10,0 ,1)

const getFibo = (n)=>{
  if(n <= 1) console.log(n)
  else return getFibo(n-1) + getFibo(n-2)
}

getFibo(10)