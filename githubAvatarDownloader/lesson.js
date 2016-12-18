
var request = require('request');
// var config = require('./config');

function getFromGithub (path, callback) {
  request.get({
    url: 'http://api.github.com/' + path ,
    auth: {
      user: 'anotherwan',
      pass: '6449edc1b538d8c627ad81dd97eaccee9e4dd012'
    },
    headers: {
      'User-Agent': 'Firefox'
    }
  }, function (error, response, body) {
    if (!error && response.statusCode == 200) {

      var data = JSON.parse(body)
      callback(data);
    } else {
      // didn't get an http response
      console.log(error);
      // got an https response, but not status == 200
      console.log(response);
    }
  })
}

module.exports = getFromGithub;