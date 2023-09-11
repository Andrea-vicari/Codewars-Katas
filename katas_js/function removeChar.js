function removeChar(str){
     
    var newPhrase = "";
     for (var i = 1;i<(str.length)-1;i++){
                
              newPhrase = newPhrase + str.charAt(i);
               
     }
    return newPhrase;   
   };
   console.log(removeChar("eloquent"));