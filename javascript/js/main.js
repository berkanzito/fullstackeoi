var attack = 1;
var defense = 2;
var atributo = 7;
var dice = 20;

function attackDice() {
  var numero = Math.floor((Math.random() * dice) + 1 + attack);
  document.getElementById('gimme');
  gimme.innerHTML = numero;
  
  ataques.push(numero);
  document.getElementById("ataques").innerHTML = ataques;
}
var ataques = [];
document.getElementById('ataques').innerHTML = ataques;
localStorage.setObj('ataques', JSON.stringify(ataques));

function defenseDice() {
  var numero = Math.floor((Math.random() * dice) + 1);
  document.getElementById('gimmed');
  
  localStorage.setItem('defense', JSON.stringify(numero));
  defensas.push(numero);
  document.getElementById("defensas").innerHTML = defensas;
  gimmed.innerHTML = numero;
}
var defensas = [];
document.getElementById('defensas').innerHTML = defensas;

function atributeDice() {
  var numero = Math.floor((Math.random() * dice) + 1);
  document.getElementById('gimmea');
  
  localStorage.setItem('atributos', JSON.stringify(numero));
  atributos.push(numero);
  document.getElementById("atributos").innerHTML = atributos;
  gimmea.innerHTML = numero;
}
var atributos = [];
document.getElementById('atributos').innerHTML = atributos;