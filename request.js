  var letters = document.getElementById('typed-letters');
  var button = document.getElementById('submit-button');
  button.addEventListener('click', getWords);

function getWords(e){
  e.preventDefault();
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){
    var result = xhr.responseText.split(",");
    console.log(result)
    var table = document.getElementById('suggestions');
    while (table.firstChild) {
      table.removeChild(table.firstChild);
    }
      for(var x = 0; x < result.length; x++){
        table.insertRow(0);
        var row = table.insertRow(x + 1);
        var cell = row.insertCell(0);
        cell.innerHTML = result[x];
        console.log(cell);
      }
    }
  }
  xhr.open("GET", "/get-content=" + letters.value);
  xhr.send();
}

function display() {
document.getElementById('display-content').innerHTML = text.value;
}
