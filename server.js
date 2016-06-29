const http = require('http');
const handler = require('./handler.js');
const server = http.createServer(handler);
const fs = require('fs');
const querystring = require('querystring');

const port = 3000;
server.listen(port);

console.log(`Server running on http://localhost:${port}`);

// const allTheData = 'HHH';
//
// request.on('data', function (chunkOfData) {
//
//     allTheData += chunkOfData;
// });
//
// request.on('end', function () {
//
//     console.log(allTheData);
//     response.end();
// });

// request.on('end', function () {
//
//     var convertedData = querystring.parse(allTheData);
//     console.log(convertedData);
//     response.end();
// });
