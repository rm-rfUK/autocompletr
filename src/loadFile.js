module.exports = loadFile


function readFile(filePath, callback) {
  fs.readFile(filePath, function(err, data) {
    if(err) throw err;
    module.exports.string = data.toString();
    callback();
  });
}
