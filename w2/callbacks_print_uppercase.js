var getHTML = require('./w2d1/step1.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/w2d1/callbacks/print_uppercase.js'
};

function printUpperCase (html) {
  console.log();

}

getHTML(requestOptions, printUpperCase);
