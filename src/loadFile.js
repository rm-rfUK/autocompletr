var fs = require('fs')

module.exports = {
  readFileAsString,
  fileAsString: null
}



function readFileAsString(filePath, callback) {
  if(module.exports.fileAsString)
  fs.readFile(filePath, function(err, data) {
    if(err) throw err;
    module.exports.string = data.toString();
    callback();
  });
}
