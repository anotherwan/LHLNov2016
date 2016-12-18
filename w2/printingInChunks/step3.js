
var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function(response) {
    response.on('data', function (data) {
      console.log(data);

    })
  })
}

var options = {host: 'sytantris.github.io',
  path: '/http-examples/step1.html'}
getAndPrintHTML(options);
