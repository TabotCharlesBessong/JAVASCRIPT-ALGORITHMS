

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

const matrix = [
  [1,0,1],
  [0,0,1],
  [1,1,1]
]

const matricRotation = (mat)=>{
  const n = mat.length
  // const m = mat[0].length
  for(let x = 0  ; x < n / 2 ; x++ ){
    for(let y = 0 ; y < n -  x - 1 ; y++){
      // storing values in temporal variables
      const temp = mat[x][y] 
      // moving values from right to top 
      mat[x][y] = mat[y][n-1-x] 
      // moving values from bottom to right 
      mat[y][n-1-x] = mat[n-1-x][n-1-y]
      // move values from bottom to right 
      mat[n-1-x][n-1-y] = mat[n-1-y][x] 
      //  assign temp to the left
      mat[n-1-y][x] = temp
    }
  }
}

// matricRotation([
  // [1,0,1],
  // [0,0,1],
  // [1,1,1]
// ])

// console.log(matricRotation([
//   [1,0,1],
//   [0,0,1],
//   [1,1,1]
// ]))

matricRotation(matrix)

console.log(matrix);