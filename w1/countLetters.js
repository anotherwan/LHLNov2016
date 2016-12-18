function countLetters(inputString) {
  var output = {};
  inputString = inputString.toLowerCase();
  for (var i = 0; i < inputString.length; i++) {
    if (inputString[i] !== ' ') {
      if (output[inputString[i]]) {
        output[inputString[i]]++;
      } else {
        output[inputString[i]] = 1;
    }
    }
  }
 return output;
}

console.log(countLetters(process.argv[2]));





































