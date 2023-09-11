/*
Check if a string (first argument, str) ends with the given ending string (second argument, ending).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function solution(str, ending) {
    // Set as constant the difference length between str e ending
    const differenceLenght = str.length - ending.length;
    
    // Set the final result (boolean) to ex. TRUE
    var result = true;

    for(let i=ending.length;i>0;i--){

        if(str.charAt((i-1)+differenceLenght) != ending.charAt(i-1)){
            return result = false;
        }
        else{result = true}
                
    }
    return result;
  }
  
  solution(':-)', ':-(')
