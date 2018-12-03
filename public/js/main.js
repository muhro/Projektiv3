const yourAudio = document.getElementById('audio');
const ctrl = document.getElementById('audioControl');
document.getElementById("audio").volume = 0.2;

function audio() {

  const pause = ctrl.innerHTML === 'pause';
  ctrl.innerHTML = pause ? 'play' : 'pause';


  const method = pause ? 'pause' : 'play';
  yourAudio[method]();

  return false;
};
document.getElementById('audioControl').addEventListener('click', audio);

function move() {
  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById('sivu'));
  document.getElementById('sivuM').appendChild(fragment);
}
function moveBack() {

  const fragment = document.createDocumentFragment();
  fragment.appendChild(document.getElementById('sivu'));
  document.getElementById('alku').appendChild(fragment);
}

function mobileFontS(){


  document.getElementById("topnav").style.fontSize = "small";
  document.getElementById("ambient").style.fontSize = "small";
  document.getElementById("ambient").style.cssFloat = "right";
  document.getElementById("ambient").style.width = "80px";
  document.querySelectorAll(".someClass")[1].style.maxHeight = "16px";
  document.querySelectorAll(".someClass")[0].style.maxHeight = "16px";

 move();


}
function mobileFontL() {
  document.getElementById("topnav").style.fontSize = "x-large";
  document.getElementById("ambient").style.fontSize = "x-large";
  document.getElementById("ambient").style.width = "160px";
  document.querySelectorAll(".someClass")[1].style.maxHeight = "32px";
  document.querySelectorAll(".someClass")[0].style.maxHeight = "32px";

moveBack();


}

function resize() {
  let width = window.outerWidth;
  let height = window.outerHeight;

  if(width < height){
    mobileFontS();
    console.log('moiikkka');

  } else {
    mobileFontL();
    console.log('moiikkka2');
  }


}

