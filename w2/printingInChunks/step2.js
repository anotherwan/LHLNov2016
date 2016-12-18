
var https = require('https');

function getAndPrintHTML(response) {
  var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step1.html'
};
  var output = [];
  https.get(requestOptions, function(response) {
    response.on('data', function (data) {
      console.log(data);
      output += data;
      })
  })
}

getAndPrintHTML();
