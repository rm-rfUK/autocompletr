var algorithmTrie = require('./algorithmTrie');

//Tie all the functions together to actually do and render the autocomplete!


//take data from words.txt and split on each new line to make array of words, to be used to create trie graph

function makeArray(string){
  var arrayWords = string.split('\n');
  return arrayWords;
};


//convert array element into string
function stringifyArray(input){
  return input.join(',');
}

/render all the data connecting all the functions together
function renderData(input, searchWord){ //input = fileAsString(data)
  var array = makeArray(input);
  var createTrie = createTrie(arrayWords);
  var matches = findMatchesArray(array, word);  //returns the matches from trie graph search
  return stringifyArray(matches);
}


//export functions;  I think I really only need to export the renderDataFnc here!
module.exports = {
  makeArrayFunction: makeArray,
  findMatchesArrayFnc: findMatchesArray,
  stringifyArrayFnc: stringifyArray,
  renderDataFnc: renderData
};
