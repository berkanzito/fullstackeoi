// Base Atributes
var attack = 1;
var defense = 2;
var atribute = 1;
var dice = 20;

//Empty Arrays
var ataques = [];
var defensas = [];
var atributos = [];

// 1d20 
var cube = document.getElementById('cube');
var outcome = document.getElementById('outcome');
var outcomeText = document.getElementById('text');
var messageDelay; //timer
var fadeout; //timer
var messages = [
  'Tu Bardo fue asesinado',
  'Carisma + 10',
  '14 de Daño'
];


var showFace = function(d) {
  var face = Math.floor((Math.random() * dice) + 1);
  if (d == 1) {
    document.getElementById('gimme');
    gimme.innerHTML = face;
    
    ataques.push(face + attack);
    document.getElementById("ataques").innerHTML = ataques;
  } else if (d == 2) {
    document.getElementById('gimmed');
    gimmed.innerHTML = face;
    
    defensas.push(face + defense);
    document.getElementById("defensas").innerHTML = defensas;
  }
  else if (d == 3) {
    document.getElementById('gimmea');
    gimmea.innerHTML = face;
    
    atributos.push(face + atribute);
    document.getElementById("atributos").innerHTML = atributos;
  } 

  //if not already at this number
  if (cube.className !== 'show-' + face ) {
    cube.className = 'show-' + face;
    //delay for spin to finish
    messageDelay = setTimeout( function() {
      //show message
      outcomeText.innerHTML = messages[ face - 1 ];
      //outcome.className = 'show';
      //display message then fade out
      fadeout = setTimeout( function() {
        //hide message
        outcome.className = '';
      }, 2000);
    } , 1000);
  } else {
    //repeat number, try again
    return showFace(d);
  }
};

/* HIDDEN MESSAGE
document.querySelector('.daroll').addEventListener( 'click', function() {
  //fade message
  outcome.className = '';
  //clear timers if they are there
  if ( typeof messageDelay === "number" ) {
    clearTimeout( messageDelay );
    clearTimeout( fadeout );
  }
  showFace();
}, false);
*/

