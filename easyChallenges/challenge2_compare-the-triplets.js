function compareTriplets(a, b) {
    const aliceArray = a;
    const bobArray = b;
    let aliceTotal = 0; 
    let bobTotal = 0;
    
    // both arrays have length of 3 so aliceArray.length 
    // or bobArray.length will both work
    for (let i = 0; i < aliceArray.length; i++) {
        if (aliceArray[i] > bobArray[i]) {
            aliceTotal++; // alice gets a point
        } else if (aliceArray[i] < bobArray[i]) {
            bobTotal++; // bob gets a point
        } else {
            continue; // they both get zero points so skip
        }
    }
    console.log([aliceTotal, bobTotal])
}

compareTriplets([17, 28, 30], [99, 16, 8])