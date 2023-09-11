// Useful tips -- USE OF Number() FUNCTION
const quantityNumber = 12;
console.log(Number(quantityNumber)); // 12

const quantityString = "12";
console.log(Number(quantityString)); // 12

function sumMix(x){
    let result = 0;
    for (let i = 0; i < x.length; i++){
        var a = Number(x[i]);
        var b = result;
        result = a+b;
       }
 console.log(result)
    return result;
}
sumMix([9, 3, '7', '3'])


function sumArgs(value){

    let lunghezzaArgomenti = arguments.length; // con la 
    let result = 0;
    for (let i = 0; i < lunghezzaArgomenti; i++){
    var a = arguments[i];
    var b = result;
    result = a+b;
    };
    
   
    
    };
    
    sumArgs( 1, 2, 3, 4, 5, 6);