function staircase(n) {
    for(var i = 1; i <= n; i++){
        var hash = "#"
        var space = " "
        console.log(space.repeat(n-i) + hash.repeat(i))
    }
}
staircase(6)