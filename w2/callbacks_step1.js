var https = require('https')

function getHTML (requestOptions, cb) {
  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');
    var output = "";

    response.on('data', function(chunk) {
        output += chunk;
    });

    response.on('end', function() {
        cb(output)
    });
  });
};

getHTML({
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  }, function(html) {
      console.log(html);
  });

module.exports = getHTML;

