function birthdayCakeCandles(candles) {
    var tallest = Math.max(...candles)
    var newArr = []
    for(var i = 0; i < candles.length; i++){
        if(tallest === candles[i]){
           newArr.push(candles[i])
        } 
    }
    return newArr.length
}
birthdayCakeCandles([3,3,2,1])