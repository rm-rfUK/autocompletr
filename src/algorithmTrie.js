function Trie(key) {
  this.key = key;
  this.value;
}

Trie.prototype.put = function (name, value) {

  var node = this,
    nameLength = name.length,
    i = 0,
    currentLetter;

  //loop zips through the collection:
  //if the node exists, make it current and proceed
  //if not, we create it, make it current and proceed
  for (i = 0; i < nameLength; i++) {
    currentLetter = name[i];
    node = node[currentLetter] || (node[currentLetter] = new Trie(currentLetter));
  }

  node.value = value;
  node.name = name;

};

Trie.prototype.get = function (name) {

  var node = this,
    nameLength = name.length,
    i, node;

  //same idea, zip through the collection
  //in this case we break if we hit a dead end
  for (i = 0; i < nameLength; i++) {
    if (!(node = node[name[i]])) break;
  }

  //only when the loop went over all letters will we find a value
  //if not, well, we don't find anything
  return (i === nameLength) ? node.value : 'not found';
};
