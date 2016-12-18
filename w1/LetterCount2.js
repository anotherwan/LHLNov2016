function trackIndecesOneString(str) {
  let output = {};
  str = str.toLowerCase()
  for (let i = 0; i < str.length; i++) {
    if (!(output.hasOwnProperty(str[i]))) {
      output[str[i]] = [i];
    } else {
      output[str[i]].push(i);
    }
  }
  console.log(output);
}


const phrase = "lighthouse in the house"
console.log(trackIndecesOneString(phrase))