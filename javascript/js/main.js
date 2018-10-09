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
