addEventListeners();

function addEventListeners(){
  var letters = document.getElementById('typed-letters');
  letters.addEventListener('keyup', getWords);
  var button = document.getElementById('button');
  button.addEventListener('click', display);
}

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

function display() {
  var text = document.getElementById('typed-letters');
  document.getElementById('display-content').innerHTML = text.value;
}
