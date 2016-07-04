const fs = require('fs');
const querystring = require('querystring');

const readFileAsString = require('./loadFile');
const renderData = require('./render');


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
    var searchWord = convertedData['inputString'];
    console.log(searchWord);

    readFileAsString(__dirname + '/../words.txt', function(fileAsString){
      var output = renderData(fileAsString, searchWord); //from render.js
  //   response.writeHead(200, {'Content-Type': 'text/plain'});
  //   response.end(output); //finish by giving back the result (word/s) from server
  });
  // This is my previous ending, lets hope it is not needed anymore!
    response.writeHead(205, {'Location': '__dirname + "/index.html"'});
    response.end();
  });
}


module.exports = handler;
