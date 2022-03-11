function simpleArraySum(arr){
    //let sum will serve as a counter to add a total
    //number everytime our for loop iterate the array
    //that was passed as a parameter in our function.
    let sum = 0 

    for(var i = 0; i < arr.length; i++){
         sum += arr[i]
    }
    return sum
 }

 simpleArraySum([1,3,4,5,3,2,1])
 //output: 19