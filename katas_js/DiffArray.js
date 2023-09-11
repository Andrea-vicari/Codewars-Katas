function arrayDiff(a, b) {
    // Clone both arrays
    let cloneA = [...a];
    let cloneB = [...b];

    //============= START CHECK IF B IS LENGTH 0
    let finalArray = cloneA;
    let bLengthChecker = false;
    // Set bLengthChecker to TRUE when arrayB.length is 0
    b.length == 0 ? bLengthChecker = true : bLengthChecker = false;
    bLengthChecker == true ? finalArray = [...a] : bLengthChecker = false;
    //============= END CHECK IF B IS LENGTH 0


    /*Function with 2 parameters:
    toCheck = the number to check if is equal
    whichArray = which array to filter withtoCheck
    */
    function filterArray (toCheck,whichArray){
     finalArray = whichArray.filter(element=>element!=toCheck);
     return finalArray;
    }

    /*Call the function on finalArray with each b[element] */
    for(let i=0;i<cloneB.length;i++){
    filterArray(cloneB[i],finalArray);
    }


    console.log(`AIHO!! ${finalArray}`);

    return finalArray;


}
arrayDiff([1,2,2,2,3,4,6,7,8],[2,3,6,7])


// OK arrayDiff([1,2],[1]) // should return [2]
arrayDiff([1,2,2,2,3],[2]) // should return  [1,3]
arrayDiff([1,3,6,7],[6])


/*
CODEWAR FAILED TEST
 Testing for arrayDiff([-14,-2,-9,4,-2,-10,-2,-13,-5,16,17,17],[-14,-2,-9,4,-2])
expected [ -10, -13, -5 ]
to deeply equal [ -10, -13, -5, 16, 17, 17 ]

*/


/*
Testing for arrayDiff([13,13,9,-18,10,-12,13,15,-5,20,1,7,4],[13,13,9,-18,10])
expected [ -12, 15, -5, 20 ]
to deeply equal [ -12, 15, -5, 20, 1, 7, 4 ]
*/