var letters = document.getElementById('typed-letters');
letters.addEventListener('keyup', getWords);

function getWords(){

  var xhr = new XMLHttpRequest();
  console.log(xhr);
  xhr.onreadystatechange = function () {

    if(xhr.readyState === 4 && xhr.status === 200){
      var result = JSON.parse(xhr.response);
      console.log(result);
      //what it looks like? make/split into an array
      for(var x = 0; x < result.length; x++){
        var table = document.getElementById('suggestions');
        var row = table.insertRow(x + 1);
        var cell = row.insertCell(0);
        cell.innerHTML = result[x];
      }
    }

  xhr.open('GET', url , true);
  xhr.send();
}}

var text = document.getElementById('typed-letters');

var button = document.getElementById('button');
button.addEventListener('click', display);

function display() {
document.getElementById('display-content').innerHTML = text.value;
}
