function toCamelCase(str) {
  // Variables
  var middleArray = [];
  var finalArray = [];
  var finalString = "";

  // For-Cycle that puts each char of str into middleArray
  for (let i=0;i<str.length;i++){
    middleArray.push(str.charAt(i));
   }

  // For-Cycle to check each element of middleArray 
  for (let i=0;i<middleArray.length;i++){

    // KEY=> if the char BEFORE [i-1] is " ",transform [i]
    // into UPPERCASE and put into FINAL ARRAY

    if(middleArray[i-1] == "_" || middleArray[i-1] == "-"){
     
        finalArray.pop(middleArray[i-1]) // Remove the _ or -
       finalArray.push(middleArray[i].toUpperCase()); // Set Uppercase the char next the the _ or -
    }
    
    else{finalArray.push(middleArray[i]);}
        
  }

  console.log(finalArray.join(" "))
      
    return finalArray.join(" ");
  /*
  // For-Cycle that puts each element of finalArray (Ok Upper & Lower)
  // into the final string
  for(let i=0;i<finalArray.length;i++){
    finalString =  finalString + finalArray[i];
    
  }
  console.log(finalString);
  return finalString;
  */

}


toCamelCase("The_cat_Was-pippi");