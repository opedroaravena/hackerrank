function miniMaxSum(arr) {
  var min = Math.min(...arr);
  var max = Math.max(...arr);

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === max) {
        arr.splice(i, 1);
      }
    }
    var sumMax = arr.reduce((partialSum, a) => partialSum + a, 0);
    
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] === min) {
        arr.splice(i, 1)
        arr.push(i, min)

      }
    }
    var sumMin = arr.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sumMax, sumMin)
}
miniMaxSum([7, 69, 2 , 221 , 8974]);
