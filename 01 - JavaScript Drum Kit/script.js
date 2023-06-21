window.addEventListener("keydown", function (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);//"keyCode is deprecated"
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //stops audio from running
    audio.currentTime = 0; //rewinds to the start
    audio.play();
    key.classList.add("playing");
    console.log(key);
});

function removeTransition(e) {
    if(e.propertyName !== "transform")return; //skip if not transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));