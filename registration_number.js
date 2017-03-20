var addButton = document.getElementById('regAdd');
var input = addButton.querySelector('input');
var opt = document.getElementById('options')

// function regNum(registrations) {
//   return registrations.startsWith('EC');
//       || registrations.startsWith('CA');
//       || registrations.startsWith('GP');
//       || registrations.startsWith('ND');
// }


opt.addEventListener('change', function (evt) {
  var chosenRegs = evt.target.value;
  var regs = document.querySelectorAll('li');

  for (var i = 0; i < regs.length; i++) {
      var elem = regs[i];

    if (evt.target.value === 'Show All') {
        elem.style.display = 'block';
    }
    else if (elem.innerHTML.startsWith(evt.target.value)) {
      elem.style.display = 'block';
    }
    else {
        elem.style.display = 'none';
    }
  }

});

addButton.addEventListener('submit', (e) => {

  e.preventDefault();
var RegNumbers = input.value;
input.value = "";
var ul = document.getElementById('regList');
var li = document.createElement('li');
li.textContent = RegNumbers;
ul.appendChild(li);
});
