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
<<<<<<< HEAD

var $die = $(".die"),
  sides = 20,
  initialSide = 1,
  lastFace,
  timeoutId,
  transitionDuration = 500,
  animationDuration = 3000;

$("ul > li > a").click(function() {
  reset();
  rollTo($(this).attr("href"));

  return false;
});

function randomFace() {
  var face = Math.floor(Math.random() * sides) + initialSide;
  lastFace = face == lastFace ? randomFace() : face;
  return face;
}

function rollTo(face) {
  clearTimeout(timeoutId);

  $("ul > li > a").removeClass("active");
  $("[href=" + face + "]").addClass("active");

  $die.attr("data-face", face);
}

function reset() {
  $die.attr("data-face", null).removeClass("rolling");
}

$(".randomize, .die").click(function() {
  $die.addClass("rolling");
  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    $die.removeClass("rolling");

    rollTo(randomFace());
  }, animationDuration);

  return false;
});
=======
var atributos = [];
document.getElementById('atributos').innerHTML = atributos;
>>>>>>> 3c7abfa626fe70f64ff295284e1a539e1813e971
