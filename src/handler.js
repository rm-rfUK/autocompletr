const fs = require('fs');
const querystring = require('querystring');

function handler (request, response) {
  var endpoint = request.url;
  if (endpoint === '/') {
    response.writeHead(200, {'Content-Type': 'text/html'});

    fs.readFile(__dirname + '/public/index.html', function(error, file) {
      if (error) { throw error; }
        response.end(file);
      });
    // } else if (endpoint === ".css") {
        // response.writeHead(200, {"Content-Type": appropriate type });
       // do the thing
    // } else if (endpoint === '/create-response') {
      } else if (endpoint.includes('/create-response')) {
        let allTheData = '';
        request.on('data', function (chunkOfData) {
          allTheData += chunkOfData;
        });

      request.on('end', function () {
        console.log(allTheData);
        const convertedData = querystring.parse(allTheData);
        console.log(convertedData);
        response.writeHead(205, {'Location': '__dirname + "/public/index.html"'});
        response.end();
      });
    }
}


module.exports = handler;
