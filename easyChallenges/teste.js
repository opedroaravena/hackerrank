function diagonalDifference(arr) {
    
    let result = [0,0]
    for(let i = 0; i < arr.length; i++){
        //getting diagonal value from left to right
        let a = arr[i][i]
        //getting diagonal value from right to left
        let b = arr[i][arr.length - i - 1]
        //using the two numbers to find the abs. difference
        result = result[0] + a - result[1] + b
        return Math.abs(result)
    }
}