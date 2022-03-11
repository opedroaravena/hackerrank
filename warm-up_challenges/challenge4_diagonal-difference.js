/*
function diagonalDifference(a, b, c){
    
          var mediaLtoR = a[0] + b[1] + c[2]
          var mediaRtoL = a[2] + b[1] + c[0]

    console.log(Math.abs(mediaLtoR - mediaRtoL))
}

diagonalDifference([11, 2, 4],[4, 5, 6],[10, 8, -12])
*/
// function diagonalDifference(matrix){
//     const length = matrix.length
//     let diagonal1 = 0,
//         diagonal2 = 0 

//     for(var i = 0; i < length; i++){
//         diagonal1 += matrix[i][i]

//         diagonal2 += matrix[length -1 - i][i]
//     }
//     console.log(Math.abs(diagonal1 - diagonal2))
// }

// diagonalDifference([11, 2, 4],[4, 5, 6],[10, 8, -12])

function diagonalDifference(matrix) {
    // length of input matrix.
     const length = matrix.length;
     let diagonal1 = 0, diagonal2 = 0;
   
     // Looping through the array and summing the diagonals.
     for(let i = 0; i < length; i++){
       // Calculating the primary diagonal.
         diagonal1 += matrix[i][i];
       // Reversing the second dimension of array to calculate secondary diagonal.
         diagonal2 += matrix[length -1 - i][i]
     }
     // return absolute difference value.
     console.log(Math.abs(diagonal1 - diagonal2));  
 
 }

diagonalDifference([11, 2, 4],[4, 5, 6],[10, 8, -12])
