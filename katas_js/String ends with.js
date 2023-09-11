/*
solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
solution('abcde', 'cde'), true)
solution('abcde', 'abc'), false)
*/


    function solution(str, ending){
        
    var tester;
    if (ending.charAt(ending.length-1) == ""){
    return tester = false;
    }

    for(let i=ending.length-1;i>=0;i--){
    let differenceLength = str.length - ending.length;
    let lastEnding = ending.charAt(i);
    let lastStart = str.charAt(i+differenceLength);
           
    if (lastEnding == lastStart && lastEnding != ""){
        // set tester to true
        tester = true;
    }
    else{
        tester = false;
        // set tester to false
    }
    }
    return tester;

    }
solution('abc', '');

