

for (var n = 100; n < 201; n++) {
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