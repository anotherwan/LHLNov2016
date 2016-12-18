/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

function joinList(list) {
  var words = "";
  for (var i = 0; i < list.length; i++) {
    words += list[i];
    if (i < list.length - 1) {
      words += ", ";
    }
  } return words;
}
var concepts = joinList(conceptList);
// Write your code here...

console.log("Today I learned about " + concepts + ".");

