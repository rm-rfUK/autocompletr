const fs = require('fs');
const querystring = require('querystring');

const renderData = require('./algorithmTrie.js');
const loadfile = require('./loadfile');


function handler(request, response) {
  const endpoint = request.url;
  if (endpoint === '/') {
    renderIndexHtml(request, response);
// } else if (endpoint === ".css") {
      // response.writeHead(200, {"Content-Type": appropriate type });
     // do the thing
  } else if (endpoint.includes('/create-response')) {
    createResponse(request, response);
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
  let allTheData = '';

  request.on('data', function (chunkOfData) {
      allTheData += chunkOfData;
  });
  request.on('end', function () {
    console.log(allTheData);
    const convertedData = querystring.parse(allTheData);
    console.log(convertedData);
    response.writeHead(205, {'Location': '__dirname + "/index.html"'});
    response.end();
  });
}

function readFile() {

}

module.exports = handler;
