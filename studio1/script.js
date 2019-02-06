'use strict';

document.querySelector("form").addEventListener("submit", processForm);

var myMsg = document.querySelector("#myMsg");

function processForm(e){
  e.preventDefault()

  var favGenre = document.querySelector('#favGenre').value;
  var firstAdj = document.querySelector('#firstAdj').value;
  var favFlower = document.querySelector('#favFlower').value;
  var favColor = document.querySelector('#favColor').value;
  var momName = document.querySelector('#momName').value;
  var firstWord = document.querySelector('#firstWord').value;



  myMsg.innerHTML='The ' + favGenre.charAt(1) + favGenre.charAt(4) + 'oo'
  + firstAdj.charAt(5) + 'y ' + momName + 's' + ' and the ' + favFlower.charAt(0)
   + favFlower.charAt(3) + 'inky ' + favColor + ' ' + firstWord + 'es';

  var formSection = document.querySelector('#formSection');
  formSection.style.color = "white";
  formSection.style.backgroundColor = "black";
}
