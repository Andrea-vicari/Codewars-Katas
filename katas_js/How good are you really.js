function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    let result =0;
    for(let i=0;i<classPoints.length;i++){
        var a = classPoints[i];
        var b = result;
        result = a+b;

    }
    let average = result/classPoints.length;

    if (average<yourPoints){
        return true
    }
    else{return false}
}
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9)


/*
betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9) should return False"
*/