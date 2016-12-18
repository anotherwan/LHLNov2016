function countLetterInWord(str) {
  let counts = {};
  str = str.toLowerCase();
  for (i = 0; i < str.length; i++) {
    if (str[i] !== "") {
      if (counts.hasOwnProperty(str[i])) {
        counts[str[i]]++
      } else {
        counts[str[i]] = 1
      }
    }
  }
  return counts;
}

function arrWords(arr) {
  let newString = "";
  for (i = 2; i < arr.length; i++) {
    newString += arr[i];
  }
  return countLetterInWord(newString);
}

args = process.argv
console.log(arrWords(args));