/*
Archers have gathered from all around the world to participate in the Arrow Function Faire. But the faire will only start if there are archers signed and if they all have enough arrows in their quivers - at least 5 is the requirement! Are all the archers ready?
*/

const archersReady = (archers) => {

  if (archers.length == 0){return false};

  const isPositive = (currentValue) => currentValue >= 5;

  return archers.every(isPositive);


}



/*
#Examples archersReady([1, 2, 3, 4, 5, 6, 7, 8]) returns false
(because there are archers with not enough arrows.)
*************
archersReady([5, 6, 7, 8]) returns true.
*/