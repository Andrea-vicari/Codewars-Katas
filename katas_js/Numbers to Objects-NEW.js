/*
let x = 118;
let y = x.toString()
console.log(y)
*/

function numObj(s){

    let newObject = {}
    let middleArray = [];
    let finalArray = [];

    for(let i =0;i<s.length;i++){
        let x = s[i];
        let y = x.toString();
        middleArray.push(y)
    }
  // console.log(middleArray);

    for(let i =0;i<middleArray.length;i++){

        newObject = {[middleArray[i]]:String.fromCharCode(middleArray[i])}

        finalArray.push(newObject);


       }
     //  console.log(finalArray);
       return finalArray;
}


numObj([118,117,120])

/* tests
numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}])
 */