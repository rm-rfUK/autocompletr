  var letters = document.getElementById('typed-letters');
  // letters.addEventListener('keyup', getWords);
  var button = document.getElementById('submit-button');
  button.addEventListener('click', getWords);

function getWords(e){
  e.preventDefault();
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
    console.log(xhr.responseText);
    //what it looks like? make/split into an array
      // for(var x = 0; x < result.length; x++){
      //   var table = document.getElementById('suggestions');
      //   var row = table.insertRow(x + 1);
      //   var cell = row.insertCell(0);
      //   cell.innerHTML = result[x];
      // }
    }
  }
  xhr.open("GET", "/get-content=" + letters.value);
  xhr.send();
}

function display() {
document.getElementById('display-content').innerHTML = text.value;
}
