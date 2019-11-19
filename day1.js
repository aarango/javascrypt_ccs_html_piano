function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio)

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  
  key.classList.add("playing");
}


function removeTransition(e) {
  e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown", playSound);





//Consulta de Clase Key y con AddEventListener genera un evento con Click
var classname = document.getElementsByClassName('key')
var typeAundio = document.getElementsByName('audio')

console.log("classse",classname)
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click',playClick);
}


function playClick (e) { 
  
  console.log(e.target.parentElement)
  e.target.parentElement.classList.add("playing");  
}
  



