var addButton = document.getElementById('regAdd');
var input = addButton.querySelector('input');

addButton.addEventListener('submit', (e) => {

  e.preventDefault();
var RegNumbers = input.value;
input.value = "";
var ul = document.getElementById('regList');
var li = document.createElement('li');
li.textContent = RegNumbers;
ul.appendChild(li);
});
