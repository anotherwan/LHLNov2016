var planetMoons = {
mercury: 0,
venus: 0,
earth: 1,
mars: 2,
jupiter: 67,
saturn: 62,
uranus: 27,
mcdonalds    : 14
};

for (var planet in planetMoons) {
var numberOfMoons = planetMoons[planet];
var totalMoons =
console.log("Number of moons in the galaxy: " + numberOfMoons);
}

function sumOfMoons(planetMoons) {
var total = 0;
for (var moons in planetMoons) {
  if (planetMoons.hasOwnProperty(moons)) {
    total += planetMoons[moons];
  }
}
return total;
}

console.log(sumOfMoons(planetMoons));