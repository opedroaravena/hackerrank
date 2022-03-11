function miniMaxSum(arr) {

    let min = Math.min(...arr)
    let max = Math.max(...arr)
  
    var indexMin = arr.indexOf(min)
    if(indexMin > -1){
     arr.splice(indexMin,1)
     var sumMax = 0
      for(var i = 0; i < arr.length; i++){
        sumMax+=arr[i]
      }
    }
    arr.push(min)

    var indexMax = arr.indexOf(max)
    if(indexMax > -1){
     arr.splice(indexMax,1)
     var sumMin = 0
      for(var i = 0; i < arr.length; i++){
        sumMin+=arr[i]
      }
    }
    console.log(sumMin, sumMax)
}
miniMaxSum([1, 3, 5, 7, 9]);
