// // Write a program that takes a single parameter from the command
// ine, a number, and rolls that many six-sided dice. For example,
// the following is a sample output of the program.

// // node dice-roller.js 3
// // Rolled 3 dice: 2, 6, 5
// // To generate a random number, you'll have to use the built-in
// Math.random.

let args = process.argv[2];

function rollOneDie() {
  return Math.ceil(Math.random() * 6);
}

function moreThanOneDie(numberOfDice) {
  let dieResult = [];
  for (i = 0; i < numberOfDice; i++) {
    dieResult.push(rollOneDie());
  }
  return dieResult;
}

moreThanOneDie(args);

var array = endStatement(moreThanOneDie(args));
function endStatement(arr) {
  var statement = "";
  for (var i = 0; i < arr.length; i++) {
    if (i < arr.length - 1) {
      statement += arr[i] + ", ";
    } else {
      statement += arr[i];
    }
  }
  return statement;
}

console.log("Rolled " + args + " dice: " + array);
