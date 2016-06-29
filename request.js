function getWords(letters){

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status === 200){

      for(var x = 0; x < xhr.length; x++){
              var table = document.getElementById('suggestions');
              var row = table.insertRow(x + 1);
              var cell = row.insertCell(0);
              cell.innerHTML = xhr[x];

//xhr is the array returned from rory's func
//displays the array of words
//will need to go over the array, take each element and createElement('P') in the
//dropdown menu
    }
  }
  xhr.open('GET', url , true);
  xhr.send();
}}

var text = document.getElementById('field');

var button = document.getElementById('button');
button.addEventListener('click', display);

function display() {
document.getElementById('display-content').innerHTML = text.value;
}
