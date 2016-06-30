const http = require('http');
const handler = require('./src/handler.js');
const fs = require('fs');
// const loadFile = require('./src/loadFile');

const server = http.createServer(handler);

const port = 3000;

server.listen(port);
console.log(`Server running on http://localhost:${port}`);

//read file as string and put in memory
// loadfile.loadFileAsString('dictionary/words.txt', function() {
//   server.listen(port);
//   console.log(`Server running on http://localhost:${port}`);
// })
