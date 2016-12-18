// Write a program that takes any number of command line arguments,
// converts each to pig latin (the rules are in the next paragraph),
// then puts the translated words together into one sentence logged to
// the console.

// The true pig latin rules would be a bit difficult to implement,
// so let's simplify them. Convert a word to pig latin by taking its
// first letter, moving it to the end of the word, then adding "ay"
// after it all.

var words = process.argv;

function movingFirstLetter(input) {
  var newWord = "";
  for (var i = 1; i < input.length; i++) {
    if (i === input.length -1) {
      return newWord + input[i] + input[0] + "ay";
    } else {
    newWord += input[i];
    }
  }
  return newWord;
}

function numberOfWords(arr) {
  for (var i = 2; i < arr.length; i++) {
    console.log(movingFirstLetter(arr[i]));
  }
}

numberOfWords(words);