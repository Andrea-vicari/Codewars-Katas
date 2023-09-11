// Function that calculates the score
function score( dice ) {
  console.log(`This is ${dice} inside score function`)
      // Array of throws is dice
      let arrayOfThrows = dice;
      // Convert array to string
      let stringedThrows = arrayOfThrows.join(''); // "11111"
      // set a final score to 0
      var finalScore = 0;

      const double5bonus = 100;
      const double1bonus = 200;
      const singleFiveBonus = 50;
      const singleOneBonus = 100;

      let testObj = {
          single1:[false,0],
          single5:[false,0],
          double1:[false,0],
          double5:[false,0],
          triplet:[false,0],
          quad:[false,0],
          allEqual:[false,0]
          }

        // Regex (One for dice face)
          const regex1 = /1/g;
          const regex2 = /2/g;
          const regex3 = /3/g;
          const regex4 = /4/g;
          const regex5 = /5/g;
          const regex6 = /6/g;


      let objOfDup = {
              // Here obj receives prop and values from
              // arrayOfThrows.forEach()
              // Below Object method
              getInfo:function(){

                  for(let prop in objOfDup){

                      if(objOfDup[prop]==5){
                          testObj.allEqual[0] = true;
                          testObj.allEqual[1] = prop;
                              }
                      else if(objOfDup[prop]==4){
                          testObj.quad[0] = true;
                          testObj.quad[1] = prop;
                              }
                      else if(objOfDup[prop]==3){
                          testObj.triplet[0] = true;
                          testObj.triplet[1] = prop;
                              }
                      else if(objOfDup[prop]==2 && prop == 1){
                          testObj.double1[0] = true;
                          testObj.double1[1] = prop;
                          }
                      else if(objOfDup[prop]==2 && prop == 5){
                          testObj.double5[0] = true;
                          testObj.double5[1] = prop;
                          }

                      else if(objOfDup[prop]==1 && prop == 1){
                          testObj.single1[0]= true;
                          testObj.single1[1]= prop;
                          }
                      else if(objOfDup[prop]==1 && prop == 5){
                          testObj.single5[0]= true;
                          testObj.single5[1]= prop;
                          }
                      else{
                          // Do nothing
                      }
                  }

              }

      } // End of objOfDup

      arrayOfThrows.forEach(element => {
          objOfDup[element] = 0;
            });

      for(let property in objOfDup){
        switch (property) {
          case "1":
            objOfDup[1] = stringedThrows.match(regex1).length;
            break
            case "2":
            objOfDup[2] = stringedThrows.match(regex2).length;
            break
            case "3":
            objOfDup[3] = stringedThrows.match(regex3).length;
            break
            case "4":
            objOfDup[4] = stringedThrows.match(regex4).length;
            break
            case "5":
            objOfDup[5] = stringedThrows.match(regex5).length;
            break
            case "6":
            objOfDup[6] = stringedThrows.match(regex6).length;
            break
        }
      }


      objOfDup.getInfo();

      // ============ ALL EQUAL CASE
      if(testObj.allEqual[0]==true){
        let tester = testObj.allEqual[1];

        switch(tester){
          case "6":
              finalScore = 600;
              break
          case "5":
              finalScore = 600;
              break
          case "4":
              finalScore = 400;
              break
          case "3":
              finalScore = 300;
              break
          case "2":
              finalScore = 200;
              break
          case "1":
              finalScore = 1200;
              break


        }
      }

      // ============ QUAD CASE

      else if(testObj.quad[0]==true && testObj.single1[0] == true && testObj.single5[0] == false){
          let testQuad = testObj.quad[1];

          switch(testQuad){
              case "2":
              finalScore = 200+singleOneBonus;
              break
              case "3":
              finalScore = 300+singleOneBonus;
              break
              case "4":
              finalScore = 400+singleOneBonus;
              break
              case "5":
              finalScore = 550+singleOneBonus;
              break
              case "6":
              finalScore = 600+singleOneBonus;
              break
          }

      }

      else if(testObj.quad[0]==true && testObj.single1[0] == false && testObj.single5[0] == true){
          let testQuad = testObj.quad[1];

          switch(testQuad){
              case "1":
              finalScore = 1100+singleFiveBonus;
              break
              case "2":
              finalScore = 200+singleFiveBonus;
              break
              case "3":
              finalScore = 300+singleFiveBonus;
              break
              case "4":
              finalScore = 400+singleFiveBonus;
              break
              case "6":
              finalScore = 600+singleFiveBonus;
              break
          }

      }

      else if(testObj.quad[0]==true && testObj.single1[0] == false && testObj.single5[0] == false){
          let testQuad = testObj.quad[1];

          switch(testQuad){
              case "1":
              finalScore = 1100;
              break
              case "2":
              finalScore = 200;
              break
              case "3":
              finalScore = 300;
              break
              case "4":
              finalScore = 400;
              break
              case "5":
              finalScore = 550;
              break
              case "6":
              finalScore = 600;
              break
          }

      }

      // ============ TRIPLET CASE
      else if(testObj.triplet[0] == true && testObj.double1[0] == false && testObj.double5[0] == false){

        let tripletTester = testObj.triplet[1];
        switch(tripletTester){
            case"6":
              finalScore = 600;
            break
            case"5":
            finalScore = 500;
            break
            case"4":
              finalScore = 400;
            break
            case"3":
              finalScore = 300;
            break
            case"2":
              finalScore = 200;
            break
            case"1":
              finalScore = 1000;
            break
        }
            if(testObj.single1[0]==true && testObj.single5[0]==true){
              finalScore = finalScore +=150;
            }
            else if(testObj.single1[0]==false && testObj.single5[0]==true){
              finalScore = finalScore +=singleFiveBonus;
            }
            else if(testObj.single1[0]==true && testObj.single5[0]==false){
              finalScore = finalScore +=singleOneBonus;
            }
            else if(testObj.single1[0]==false && testObj.single5[0]==false){
              // do nothing here
            }

      }

    else if(testObj.triplet[0] == true && testObj.double1[0] == true && testObj.double5[0] == false){

        let tripletTester = testObj.triplet[1];
        switch(tripletTester){
            case"6":
              finalScore = 600+double1bonus;
            break
            case"5":
              finalScore = 500+double1bonus;
            break
            case"4":

              finalScore = 400+double1bonus;
            break
            case"3":

              finalScore = 300+double1bonus;
            break
            case"2":

              finalScore = 200+double1bonus;
            break

        }


      }

      else if(testObj.triplet[0] == true && testObj.double1[0] == false && testObj.double5[0] == true){

          let tripletTester = testObj.triplet[1];
          switch(tripletTester){
              case"6":
                finalScore = 600+double5bonus;
              break

              case"4":

                finalScore = 400+double5bonus;
              break
              case"3":

                finalScore = 300+double5bonus;
              break
              case"2":
                finalScore = 200+double5bonus;
              break
              case"1":
              finalScore = 500+double5bonus;
              break

          }


        }

      // ============ DOUBLE CASE
      else if(testObj.triplet[0] == false && testObj.double1[0] == true && testObj.double5[0] == false){
          finalScore = 200;
          if(testObj.single1[0]==true && testObj.single5[0]==true){
            finalScore = finalScore +=150;
          }
          else if(testObj.single1[0]==false && testObj.single5[0]==true){
            finalScore = finalScore +=singleFiveBonus;
          }
          else if(testObj.single1[0]==true && testObj.single5[0]==false){
            finalScore = finalScore +=singleOneBonus;
          }
          else if(testObj.single1[0]==false && testObj.single5[0]==false){
            // do nothing here
          }
          }
      else if(testObj.triplet[0] == false &&  testObj.double1[0] == false && testObj.double5[0] == true){
              finalScore = 100;
              if(testObj.single1[0]==true && testObj.single5[0]==true){
                finalScore = finalScore +=150;
              }
              else if(testObj.single1[0]==false && testObj.single5[0]==true){
                finalScore = finalScore +=singleFiveBonus;
              }
              else if(testObj.single1[0]==true && testObj.single5[0]==false){
                finalScore = finalScore +=singleOneBonus;
              }
              else if(testObj.single1[0]==false && testObj.single5[0]==false){
                // do nothing here
              }
          }
      else if(testObj.triplet[0] == false &&  testObj.double1[0] == true && testObj.double5[0] == true){
        finalScore = 300;
      }

      // ======== SINGLE CASE
      else if(testObj.single1[0]==true&&testObj.single5[0]==true){
          finalScore = 150;
      }
      else if(testObj.single1[0]==false&&testObj.single5[0]==true){
        finalScore = 50;
      }
      else if(testObj.single1[0]==true&&testObj.single5[0]==false){
        finalScore = 100;
      }
      else{
          console.log(`Your score is Zero!`)
      }

  // Final return zone
  console.log(`Inital Dice ==> ${stringedThrows}`);
  console.log(`Finalscore ==> ${finalScore}`);
 // document.getElementById("player1score").innerHTML = finalScore;
  return finalScore;

}
// End of TOTAl score( dice ) function

score([5,2,5,3,1,1])
