var attack = 1;
var dice = 20;

function attackDice() {
  var numero = Math.floor((Math.random() * dice) + 1 + attack);
  document.getElementById('gimme');
  gimme.innerHTML = numero;

  localStorage.setItem('attack', numero);
  //var name = localStorage.getItem('result')
}

function defenseDice() {
  var numero = Math.floor((Math.random() * dice) + 1);
document.getElementById('gimmed');
gimmed.innerHTML = numero;
}

function atributeDice() {
  var numero = Math.floor((Math.random() * dice) + 1);
document.getElementById('gimmea');
gimmea.innerHTML = numero;
}
