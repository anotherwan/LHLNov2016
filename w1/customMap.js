
'use strict'


function map(data, _cb) {
  var output = [];
  for (var i=0; i < data.length; i++) {
    var newValue = _cb(data[i]);
    output.push(newValue);

  }
  return output;
}

function elm(word) {
  return word.length

}


console.log(map(["ground", "control", "to", "major", "tom"], elm));
