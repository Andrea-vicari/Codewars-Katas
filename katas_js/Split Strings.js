
function splitString(phrase){

// Setting variables  
 var char = "";
 var charNext = "";
 const underForOdd = "_"
 var arrayOriginal = [];
 var arraySplit = [];

// This block generates the arrayOriginal
  for (let i=0;i<(phrase.length);i++){
    char = phrase[i];
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
    
    console.log(arraySplit);      
    
   }
   
// Here arrayOriginal is ODD length
  else{
    console.log("DISPARI");
    arrayOriginal.push(underForOdd);
    
        // First lap 1st and 2nd element
        for (let i=0;i<arrayOriginal.length;i+=2){
          char = arrayOriginal[i];
          charNext = arrayOriginal[i+1];
          console.log(i);
         arraySplit.push(char + charNext);
      
        }
        
        console.log(arraySplit); 
  }

}
splitString("fig");