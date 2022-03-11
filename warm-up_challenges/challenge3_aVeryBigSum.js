function aVeryBigSum(arr){
    //let sum will serve as a counter to add a total
    //number everytime our for loop iterate the array
    //that was passed as a parameter in our function.
    let sum = 0 

    for(var i = 0; i < arr.length; i++){
         sum += arr[i]
    }
     console.log(sum)
 }

 aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005])