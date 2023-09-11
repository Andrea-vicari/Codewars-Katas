/*
see this kata
https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19

*/

// See the fifference between the STANDARD Person and a CUSTOm Person
// Se the use of a static METHOD, which can called directly by Person.greetExtraTerrestrials()

 class Person {

  constructor(firstName = "John", lastName = "Doe", age = 0, gender ="Male"){

     this.firstName=firstName;
     this.lastName=lastName;
     this.age=age;
     this.gender=gender;
 
   }
 
   sayFullName(){
     return `${this.firstName} ${this.lastName}`;
   }
   
  static greetExtraTerrestrials (raceName){
   
    return `Welcome to Planet Earth ${raceName}`
    // No good (Use of  this)
    //return `Welcome to Planet Earth ${this.raceName}`
}

 }

