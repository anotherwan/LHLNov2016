
var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

var concepts = joinList(conceptList);
function joinList(input) {
  var output = "";
  for(var i = 0; i < input.length; i++) {
    if (i < input.length -1) {
     output += input[i] + ", ";
    } else {
      output += input[i];
    }
  }
  return output;
}

console.log("Today I learned about " + concepts + ".");


