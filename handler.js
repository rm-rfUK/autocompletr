
const fs = require('fs');

function handler (request, response) {
  var endpoint = request.url;
  console.log(endpoint);
  if (endpoint === "/") {
    response.writeHead(200, {"Content-Type": "text/html"});

    fs.readFile(__dirname + '/index.html', function(error, file) {
      if (error) {
        return console.log(error);
      }
      response.end(file);
    });
  // } else if (endpoint === ".css") {
      // response.writeHead(200, {"Content-Type": appropriate type });
     // do the thing
 }
}

module.exports = handler;
