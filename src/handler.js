const fs = require('fs');
const querystring = require('querystring');
const dummy = require('./dummy');
// var AlgorithmTrie = require('AlgorithmTrie');
// var wordsTrie = new AlgorithmTrie;

function handler(request, response) {
  const endpoint = request.url;
  //console.log(endpoint);
  if (endpoint === '/') {
    renderIndexHtml(request, response);
// } else if (endpoint === ".css") {
      // response.writeHead(200, {"Content-Type": appropriate type });
     // do the thing
  } else if (endpoint.includes("/get-content=")) {
    createResponse(request, response);
  } else if (endpoint.includes('request.js')) {
    response.writeHead(200, {'Content-Type': 'text/js'});
    fs.readFile(__dirname + '/../request.js', function(error, file) {
      if (error) {
        return console.log(error);
      }
        response.end(file);
    });
  } else {
    response.writeHead(404);
    response.end('OH NO!');
  }
}

function renderIndexHtml(request, response) {
  response.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile(__dirname + '/../index.html', function(error, file) {
    if (error) {
      return console.log(error);
    }
      response.end(file);
  });
}

function createResponse(request, response) {
  let letterString = request.url.split("=")[1];
  //Kara to put function in here :)
  let arrayOfWords = dummy(letterString);
  let stringOfWords = JSON.stringify(arrayOfWords);
  response.writeHead(200, {"Content-Type":"text/plain"});
  response.write(stringOfWords);
  response.end();
}

module.exports = handler;
