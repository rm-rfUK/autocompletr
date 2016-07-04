const fs = require('fs');
const querystring = require('querystring');

const readFileAsString = require('./loadFile');
const renderData = require('./render');

function handler(request, response) {
  const endpoint = request.url;
  if (endpoint === '/') {
    renderIndexHtml(request, response);
  } else if (endpoint.includes("/get-content=")) {
    createResponse(request, response);
  } else if (endpoint.includes('style.css')) {
    response.writeHead(200, {'Content-Type': 'text/css'});
    fs.readFile(__dirname + '/../style.css', function(error, file) {
      if (error) {
        return console.log(error);
      }
        response.end(file);
    });
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
  let searchWord = request.url.split("=")[1];
  console.log(searchWord);
    readFileAsString(__dirname + '/../words.txt', function(fileAsString){
      var output = renderData(fileAsString, searchWord); //from render.js
      console.log(output);
      response.writeHead(200, {"Content-Type":"text/plain"});
      response.write(output);
      response.end();
    });
}

module.exports = handler;
