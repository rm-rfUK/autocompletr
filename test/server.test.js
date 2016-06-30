const tape = require('tape');
const shot = require('shot');
const handler = require('../src/handler.js');


tape('test a GET request to the / endpoint', t => {
  shot.inject(handler, {method: 'get', url: '/'}, (res) => {
    t.equal(res.statusCode, 200, '/ has status code of 200');
    t.ok(res.payload.includes('<title>Autocompletr</title>'), 'finds the index.html file');
    t.equal(res.headers['Content-Type'], 'text/html', "correct file type");
    t.end();
  });
});

tape('test a GET request for the url that we wont be handling', t => {
  shot.inject(handler, {method: 'get', url: '/dshfsdfnvskjdnhvjkdf'}, (res) => {
    t.equal(res.statusCode, 404, '/dshfsdfnvskjdnhvjkdf throws a 404 error');
    t.end();
  });
})

tape('test to see if a GET request returns content', t => {
  shot.inject(handler, {method: 'get', url: '/create-response'}, res => {
    t.equal(res.statusCode, 205, '/ has status code of 205');
    t.end();
  });
})
