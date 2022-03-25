
console.log(Number.MAX_VALUE, 'maximum value')
console.log(Number.EPSILON , 'epsilon');
console.log(Number.MAX_SAFE_INTEGER,'maximum integer');

// test for primarility 

const isPrime = (n)=>{
  if(n <=1) {
    console.log(n," is not a prime number");
  }else{
    for (let i = 2 ; i < n ; i++){
      if(n % i == 0) {
        console.log(n," is not a prime number");
      }
      
    }
    
    console.log(n," is a prime number");
  
  }
}

// const primeFac = (n)=>{
//   while(n%2 == 0){
//     console.log(2);
//     n /=2
//   }
//   for(let )
// }


isPrime(20)