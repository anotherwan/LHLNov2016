var rollDie = function() {
  return (Math.ceil(6 * Math.random()));
}

var numberOfDice = Number(process.argv[2]);
//onsole.log(numberOfDice);

if(isNaN(numberOfDice)) {
  console.log("What you have imputted is not a number.");
}
else {
var endStatement = "Rolled " + numberOfDice + " dice: ";
for (var i = 0; i < numberOfDice; i++) {
  endStatement += rollDie();
  if (i < numberOfDice -1) {
    endStatement += ", ";
  }
}
console.log(endStatement);
}
