// Write a program named password.js that takes a single command
// line argument, a string, and obfuscates it by applying the following
// rules.

// Every "a" in the string should be replaced with a "4".
// Every "e" in the string should be replaced with a "3".
// Every "o" (oh) in the string should be replaced with a "0" (zero).
// Every "l" (el) in the string should be replaced with a "1" (one).


var password = process.argv[2];

function obfuscate(inputString) { //this line is a function signature.
  var output = "";
  for (var i = 0; i < inputString.length; i++) {
    if(inputString[i] === "a") {
      output += "4";
    } else if (inputString[i] === "e") {
      output += "3";
    } else if (inputString[i] === "o") {
      output += "0";
    } else if (inputString[i] === "l") {
      output += "1";
    } else {
      output += inputString[i];
    }
  }
  return output;
}
console.log(obfuscate(password));