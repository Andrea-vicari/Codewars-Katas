function Ship(draft,crew) {
  this.draft = draft;
  this.crew = crew;
 }
 

/// GOOD SOLUTION ADDED VIA PROTOTYPE  INTO THE OBJECT CONSTRUCTOTR, THE OBJECT METHOD "isWorthIt"
Ship.prototype.isWorthIt = function (){
  var goodShip = false
  var totalN = this.draft-((this.crew)*1.5)
  if (totalN>20){
    goodShip = true
  return goodShip
}
else {goodShip = false
  return goodShip}
}

new Ship(100,20)