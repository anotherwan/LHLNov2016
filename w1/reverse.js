var input = process.argv[2];

if (input) {
  var original = console.log(reverse(input));
}


function reverse(original) {
  return original.split('').reverse().join('');
}
