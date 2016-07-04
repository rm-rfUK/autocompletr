var createTrieGraph = require('./algorithmTrie');

//Tie all the functions together to actually do the autocomplete!


//take data from words.txt and split on each new line to make array of words, to be used to create trie graph

function makeArray(string){
  var arrayWords = string.split('\n');
  return arrayWords;
};


//convert array element into string
function stringifyArray(input){
  return input.join(',');
}

function randomWordsFromArray(autocompletedWordsArray) {
  var numberWordsWantReturned = 3;
  var arrayLength = autocompletedWordsArray.length;
  var randomWordsArray = [];

  if (arrayLength > numberWordsWantReturned) {
    for(var i = 1; i <= numberWordsWantReturned; i++) {
      var randomIndex = Math.floor(Math.random() * arrayLength);
      var chosenWord = autocompletedWordsArray[randomIndex];
      randomWordsArray.push(chosenWord);
    }
    return randomWordsArray;
  } else {
    return autocompletedWordsArray;
  }
}

//render all the data connecting all the functions together
function renderData(input, searchWord){ //input = fileAsString(data)
  var arrayWords = makeArray(input);
  var createTrie = createTrieGraph(arrayWords);
  // console.log(createTrie);  //Done!
  var autocompletedWordsArray = createTrie.autoComplete(searchWord);  //returns the matches from trie graph search
  console.log(autocompletedWordsArray);  //Yup, a lot of words, needs to be cut down!
  var selectedWordsFromArray = randomWordsFromArray(autocompletedWordsArray);
  console.log(selectedWordsFromArray);
  var result = stringifyArray(selectedWordsFromArray);
  console.log(result); //Working, but needs to be rendered!!

}


//export functions;  I think I really only need to export the renderData() here!
module.exports = renderData;
