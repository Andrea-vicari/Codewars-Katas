function getCount(str) {
    
    var frase = str;
    var counter = 0;

    for (let i=0;i<frase.length;i++){

        var test = frase.charAt(i)

        if (test == "a" || test == "e" || test == "i" || test == "o"|| test == "u"){
        
            counter = counter+1;

        }
        
        
    }
     
    
    return counter;
  }

  getCount("Bobby Raichi")