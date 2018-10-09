var attack = 1;
var defense = 2;
var atributo = 7;
var dice = 20;

// Attacks
function attackDice() {
  var numero = Math.floor((Math.random() * dice) + 1 + attack);
  document.getElementById('gimme');
  gimme.innerHTML = numero;
  
  ataques.push(numero);
  document.getElementById("ataques").innerHTML = ataques;
}
var ataques = [];
document.getElementById('ataques').innerHTML = ataques;
// localStorage.setObj('ataques', JSON.stringify(ataques));

// Defenses
function defenseDice() {
  var numero = Math.floor((Math.random() * dice) + 1 + defense);
  document.getElementById('gimmed');
  gimmed.innerHTML = numero;
  
  defensas.push(numero);
  document.getElementById("defensas").innerHTML = defensas;
}
var defensas = [];
document.getElementById('defensas').innerHTML = defensas;

// Atributes
function atributeDice() {
  var numero = Math.floor((Math.random() * dice) + 1 + atributo);
  document.getElementById('gimmea');
  gimmea.innerHTML = numero;
  
  atributos.push(numero);
  document.getElementById("atributos").innerHTML = atributos;
}
