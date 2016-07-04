var createTrieGraph = require('./algorithmTrie');

//Tie all the functions together to actually do the autocomplete!

//take data from words.txt and split on each new line to make array of words, to be used to create trie graph and then search for randomly selected autocompleted words array.

//render all the data connecting all the functions together

function renderData(input, searchWord){ //input = fileAsString(data)
  var arrayWords = makeArray(input);
  var createTrie = createTrieGraph(arrayWords);
  var autocompletedWordsArray = createTrie.autoComplete(searchWord);  //returns the matches from trie graph search
  var selectedWordsFromArray = randomWordsFromArray(autocompletedWordsArray);
  var result = stringifyArray(selectedWordsFromArray);
  return result;
}

function makeArray(string){
  var arrayWords = string.split('\n');
  return arrayWords;
};

//convert array element into string
function stringifyArray(input){
  return input.join(',');
}

function randomWordsFromArray(autocompletedWordsArray) {
  var numberWordsWantReturned = 5;
  var arrayLength = autocompletedWordsArray.length;
  var randomWordsArray = [];

  if (arrayLength > numberWordsWantReturned) {
    for(var i = 1; i <= numberWordsWantReturned; i++) {
      var randomIndex = Math.floor(Math.random() * autocompletedWordsArray.length);
      var chosenWord = autocompletedWordsArray[randomIndex];
      randomWordsArray.push(chosenWord);
      autocompletedWordsArray.splice(randomIndex, 1);
    }
    return randomWordsArray;
  } else {
    return autocompletedWordsArray;
  }
}

module.exports = renderData;
