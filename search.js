var fs = require('fs');
var cache =[];

function getWords(letters){
  var input = letters;
  var letterIndex = input.length - 1;

  fs.readFile('example.txt', function(err, data) {
    if (err) throw err;
    if (cache.length === 0) {
      cache = data.toString().split("\n");
    };
    var filteredList = cache.filter(function(word){
      return word[letterIndex] === input[letterIndex];
    });
    console.log(filteredList);
    cache = filteredList;
  });
}

getWords("");
