function spinWords(string){
  let tester = "";
  let finalArray = [];

  // Split the string into an array
  let middleArray = string.split(' ');
  
  for(let i=0;i<middleArray.length;i++){
    // Set each elemnt as tester
    tester = middleArray[i];
    // If tester longher than 5 
    // Reverese the tester
    if(tester.length >= 5){
      let reversedString = '';

      for (let i = tester.length;i>=0;i--){
      var last = tester.charAt(i);
      reversedString = reversedString.concat(last);
      }
      // Put the reversed tester into array
      finalArray.push(reversedString);
    }
    else{
      finalArray.push(middleArray[i]);
    }

    
  }
   // Join final Array into final string 
   // separatin each word with " "
  return finalArray.join(" ");

}
spinWords("Hey fellow warriors")