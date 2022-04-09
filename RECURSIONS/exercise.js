
// converting from one base to another
const tenTobin = (n)=>{
  let bin = "";
  const binHelper = (n)=>{
    if(n < 2){
      bin +=n
      return 
    }else{
      // Here for example in the case of our 15 , when we devide by 2 , after flooring it , we get 7 , 
      // But upon calling the function , the if part is not executed so its is called , this time with the remainder which is one and is the add to our bin variable 
      binHelper(Math.floor(n / 2 ))
      binHelper(n % 2)
    }
  }
  binHelper(n)

  console.log(bin)
}

tenTobin(45)