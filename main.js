function playSound(e) {
     const audio = document.querySelector(`audio[data-key='${e.keyCode}']`)
     const key = document.querySelector(`div[data-key='${e.keyCode}']`);
      
     key.classList.toggle('playing');

     if(!audio) return;
     audio.currentTime = 0;
     audio.play();
     
}
 
window.addEventListener('keydown', playSound)