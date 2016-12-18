var array = [10, 2, 5, 1, 9];
console.log(array.sort(compareNumbers));

function compareNumbers(a, b) {
  return a - b;
}
