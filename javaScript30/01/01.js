window.addEventListener('keydown', function(e){

    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    // const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const border = this.document.querySelector(`.border[data-key="${e.keyCode}"]`);

    // this.console.log(border);
    if(!audio) return;  
    audio.currentTime = 0;
    audio.play();
    border.classList.add('playing');
});


function removeTransition(e){
    if(e.propertyName !== 'transform')return;
    // console.log(e.propertyName);
    this.classList.remove('playing');
    
}

const keys = document.querySelectorAll('.border');
keys.forEach(border => border.addEventListener('transitionend', removeTransition));
// console.log(keys);