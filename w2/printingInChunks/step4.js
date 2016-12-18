
var https = require('https');

function getHTML(options, callback) {
  https.get(options, function(response) {
    response.on('data', callback)
  });
}

var callbackPrint = function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, callbackPrint);