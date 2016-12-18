var loopyLighthouse = function (range, multiples, words) {

  var i = range[0];

  for (i = range[0]; i <= range[1]; i++) {
    if ((i % multiples[0] === 0) && (i % multiples[1] === 0)) {
      console.log(words[0] + words[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i);
    }
  }
};
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);












/*
function loopyLighthouse([r1, r2], [m1, m2], ["w1", "w2"]) {
  for (var i = range[0]; i =< range[1]; i++) {
    if (i % multiples[0] === 0 && i % multiples[1] === 0) {
      console.log(words[0] + wwords[1]);
    } else if (i % multiples[0] === 0) {
      console.log(words[0]);
    } else if (i % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(i)
    }
  }
}
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
*/



//console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
/*
range should be an array of 2 numbers representing the start and end values
for the loop. multiples should be an array of 2 numbers representing the
multiples you want to replace with words. words should be an array of 2
strings representing the words that will replace the multiples.

function ageCalculator(name, yearOfBirth, currentYear) {
  var currentAge = (currentYear - yearOfBirth);
  return name + " is " + currentAge + " years old.";
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

for (var n = 0; n < 100; n++) {
  if (n % 3 === 0 && n % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (n % 3 === 0) {
    console.log("Loopy");
  } else if (n % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(n);
  }
}
*/