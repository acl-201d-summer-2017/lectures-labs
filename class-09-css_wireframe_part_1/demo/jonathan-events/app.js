
var uno = document.getElementById('uno');
var dos = document.getElementById('dos');
var tres = document.getElementById('tres');
var sero = document.getElementById('sero');

var unoClicks = 0;
var globalClicks = 0;

function globalClicks() {
  globalClicks += 1;
}

function increaseUno() {
  console.log( 'one click' );
  unoClicks += 1;
  uno.textContent = 'click me to count: ' + unoClicks;
}

function changeColor(){
  globalClicks += 1;
  dos.classList.add('red');
  if(dos.classList.contains('green')){
    dos.classList.remove('green');
  } else {
    dos.classList.add('green');
  }
}

function globalCount(){
  console.log( 'global click' );
  if(globalClicks < 41){
    globalClicks += 1;
    sero.textContent = 'countdown: ' + ( 42 - globalClicks );
  } else {
    secret();
  }
}

document.body.addEventListener( 'click', globalCount );
uno.addEventListener( 'click', increaseUno );
dos.addEventListener( 'dblclick', changeColor);
tres.addEventListener( 'mouseover', increaseUno );
tres.addEventListener( 'mouseover', changeColor );
 

function secret(){
  sero.textContent = 'don\'t move';
  document.body.addEventListener( 'mousemove', randomColor );
}

function randomColor(){
  var allTags = document.getElementsByTagName('h1');
  for (var i = 0; i < allTags.length; i++){
    allTags[i].textContent = 'AHHHHHHHHHHHHHHHHHHHHHHH';
  }
  document.body.style.background = 'rgb(' + Math.floor(Math.random() * 255) +
      ',' + Math.floor(Math.random() * 255) +
      ',' + Math.floor(Math.random() * 255) + ')';
}
