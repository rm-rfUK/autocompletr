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
  console.log('SEARCH', searchWord);
  var arrayWords = makeArray(input);
  // console.log(arrayWords);
  var createTrie = createTrieGraph(arrayWords);
  var matches =  createTrie.autoComplete(searchWord);  //returns the matches from trie graph search
  // console.log(matches);
  var result = stringifyArray(matches);
  // console.log(result);
}


//export functions;  I think I really only need to export the renderDataFnc here!
module.exports = renderData;
