
function solution(str){

// Setting variables  
 var char = "";
 var charNext = "";
 const underForOdd = "_"
 var arrayOriginal = [];
 var arraySplit = [];

// This block generates the arrayOriginal
  for (let i=0;i<(str.length);i++){
    char = str[i];
    arrayOriginal.push(char)
    
  }

  console.log(arrayOriginal)

// Test if arrayOriginal is EVEN length
  if (arrayOriginal.length % 2 == 0){

    // First lap 1st and 2nd element
    for (let i=0;i<arrayOriginal.length;i+=2){
      char = arrayOriginal[i];
      charNext = arrayOriginal[i+1];
      console.log(i);
     arraySplit.push(char + charNext);
  
    }
    
    return(arraySplit);      
    
   }
   
// Here arrayOriginal is ODD length
  else{
    
    arrayOriginal.push(underForOdd);
    
        // First lap 1st and 2nd element
        for (let i=0;i<arrayOriginal.length;i+=2){
          char = arrayOriginal[i];
          charNext = arrayOriginal[i+1];
          console.log(i);
         arraySplit.push(char + charNext);
      
        }
        
        return(arraySplit); 
  }

}
solution("fig");