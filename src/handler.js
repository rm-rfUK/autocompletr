const fs = require('fs');
const querystring = require('querystring');
// var AlgorithmTrie = require('AlgorithmTrie');
// var wordsTrie = new AlgorithmTrie;

function handler(request, response) {
  const endpoint = request.url;
  if (endpoint === '/') {
    renderIndexHtml(request, response);
// } else if (endpoint === ".css") {
      // response.writeHead(200, {"Content-Type": appropriate type });
     // do the thing
  } else if (endpoint.includes('/create-response')) {
    createResponse(request, response);
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

module.exports = handler;
