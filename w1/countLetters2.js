

function countIndices(inputString) {
  var output = {};

  inputString = inputString.toLowerCase();
  for (var i = 0; i < inputString.length; i++) {
    if (!(inputString[i] in output)) {
      output[inputString[i]] = [];
    }
    output[inputString[i]].push(i);
  }

  return output;
}
//console.log(countIndices("lighthouse in the house"));
console.log(countIndices(process.argv[2]));
