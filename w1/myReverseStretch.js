/*Write a program that takes any number of command line arguments,
all strings, and reverses them before outputting them one at a time
to the console.

Do NOT use JavaScript's Array.prototype.reverse or Array.prototype.join
functions to solve this problem.

Assuming the program is named reverse.js, the following are a few
example runs.

node reverse.js 1 fish 2 fish
1
hsif
2
hsif
*/

var words = process.argv;

function reverseWord(input) {
  var newString = "";
  for (var i = input.length - 1; i >= 0; i--) {
    newString += input[i];
  }
  return newString;
}

function wordsInArray(arr) {
  for (var i = 2; i < arr.length; i++) {
    console.log(reverseWord(arr[i]));
  }
}

wordsInArray(words)


// wordsInArray(["safd","asdgasdf","asdfasfas","asdfasdfas","sdfasd","fasadf","af","ad"])
// console.log(reverseWord(words[i]));
// console.log(reverseWord(words[3]));
