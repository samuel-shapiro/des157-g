'use strict';

console.log('reading js');

var favGenre = document.querySelector('#favGenre').value;
var firstAdj = document.querySelector('#firstAdj').value;
var favFlower = document.querySelector('#favFlower').value;
var favColor = document.querySelector('#favColor').value;
var momName = document.querySelector('#momName').value;
var firstWord = document.querySelector('#firstWord').value;

var myMsg = document.querySelector('#myMsg');

submit.addEventListener('click', processForm);

function processForm(){
  myMsg.innerHTML=favGenre[1] + firstAdj[2];

}
