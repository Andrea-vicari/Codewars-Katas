function validatePIN (pin) {
    var isValid = true;
    const numRegex = /\d/g; //  Match all Numbers


  if(pin.length != 4 && pin.length != 6){
   // console.log("Troppo Lungo o corto");
    isValid = false;
    return isValid;
  }



else{
    let result = pin.match(numRegex).length;
    let pinLength = pin.length;
  // console.log(pinLength);
    if(result != pinLength){
    // console.log("Some non number present");
        isValid = false;
      return isValid;
    }
  else{
  // console.log("It should be ok");
    isValid = true;
      return isValid;
  }

}


}
validatePIN("123456")
/*
validatePIN("1") ,false, "Wrong output for '1'")
validatePIN("12"),false, "Wrong output for '12'")
validatePIN("123"),false, "Wrong output for '123'")
validatePIN("12345"),false, "Wrong output for '12345'")
validatePIN("1234567"),false, "Wrong output for '1234567'")
validatePIN("-1234"),false, "Wrong output for '-1234'")
validatePIN("1.234"),false, "Wrong output for '1.234'")
validatePIN("-1.234"),false, "Wrong output for '-1.234'")
validatePIN("00000000"),false, "Wrong output
validatePIN("a234"),false, "Wrong output for 'a234'")
validatePIN(".234"),false, "Wrong output for '.234'")

validatePIN("1234"),true, "Wrong output for '1234'");
validatePIN("0000"),true, "Wrong output for '0000'");
validatePIN("1111"),true, "Wrong output for '1111'");
validatePIN("123456"),true, "Wrong output for '123456'");
validatePIN("098765"),true, "Wrong output for '098765'");
validatePIN("000000"),true, "Wrong output for '000000'");
validatePIN("123456"),true, "Wrong output for '123456'");
validatePIN("090909"),true, "Wrong output for '090909'");
*/