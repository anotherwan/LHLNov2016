'use strict'

const request = require('request');
const fs = require('fs');
const config = require('./config');
const GITHUB_USER = config.username;
const GITHUB_TOKEN = config.token;

const args = process.argv.slice(2);

const getRepoContributors = function (repoOwner, repoName, cb) {
  const requestURL = `https://${GITHUB_USER}:${GITHUB_TOKEN}@api.github.com/repos/${repoOwner}/${repoName}/contributors`
  request.get({
      url: requestURL,
    },
    cb);
}

const downloadImageByURL = function (url, filePath) {
  request
    .get(url)
    .pipe(fs.createWriteStream(filePath))
}

if (args.length !== 2) {
  console.log("Error: an argument was not entered!")
} else {
  getRepoContributors(args[0], args[1], function (error, response, body){
    console.log("Errors: " + error);
    console.log("HTTP Status Code: " + response.statusCode);
    let data   = JSON.parse(body);
    data.forEach(user) {
      if (user.hasOwnProperty('avatar_url')) {
        downloadImageByURL(user.avatar_url, `avatars/${user.login}.jpg`);
      }
    };
}
{}