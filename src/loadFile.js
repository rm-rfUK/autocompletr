var fs = require('fs')

//function which reads the file only once (to be used on server.js)
function readFileAsString(filePath, callback) {
  //composed of the filepath (in this case, 'dictionary/words.txt') and a callback function
  // if(module.exports.fileAsString) {
  //   return callback(module.exports.fileAsString); // if the file already exists return it.
  // }
  // use readfile node module, file path is 'dictionary/words.txt', callback loads data from filepath .txt and stringefies it
  fs.readFile(filePath, function(error, data) {
    if (error) {
      return console.log(error);
    }
    const fileAsString = data.toString();
    // console.log(fileAsString);
    //converts data into string
    callback(fileAsString);//callback function exports data as string.
  });
}

module.exports = readFileAsString
  // readFileAsString //exporting to server.js
  // fileAsString: null //starting off with file as null as that it can be stringified and loaded into server memory
