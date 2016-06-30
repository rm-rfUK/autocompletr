const http = require('http');
const handler = require('./handler.js');
const server = http.createServer(handler);
const fs = require('fs');

const port = 3000;
server.listen(port);

console.log(`Server running on http://localhost:${port}`);
