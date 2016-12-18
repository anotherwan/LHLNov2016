var words = process.argv;

function movingFirstLetter(input) {
  var newWord = "";
  switch (input[0]) {
    case "a":
      return newWord + input + "way";
      break;
    case "e":
      return newWord + input + "way";
      break;
    case "i":
      return newWord + input + "way";
      break;
    case "o":
      return newWord + input + "way";
      break;
    case "u":
      return newWord + input + "way";
      break;
    case "y":
      return newWord + input + "way";
      break;
    default:
      for (var i = 1; i < input.length; i++) {
        if (i === input.length -1) {
          return newWord + input[i] + input[0] + "ay";
        } else {
        newWord += input[i];
        }
      }
      return newWord;
  }
}

function numberOfWords(arr) {
  for (var i = 2; i < arr.length; i++) {
    console.log(movingFirstLetter(arr[i]));
  }
}

numberOfWords(words);