

// Print matrix in a spiral approach 
const M = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]
]

const spiral = (M)=>{
  let top = 0 , left = 0 , btm = M.length - 1 , right = M[0].length - 1 

  while (top < btm && left < right  ){
    for (let col = 0 ; col < right ; col++) console.log(M[top][col])
    top++
    for( let row = top ; row <= btm ; row++) console.log(M[row][right])
    right--
    if( top <= btm ){
      for(let col = right ;  col >= 0 ; col--) console.log(M[btm][col])
      btm--
    }
    if( left <= right ){
      for(let row = btm ;  row >= 0 ; row--) console.log(M[row][left])
      left++ 
    }
  }
}

spiral(M)