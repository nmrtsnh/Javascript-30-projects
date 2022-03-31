const playDrum = function (e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add("playing");
};

// remove .playing

const removeTransition = function (e) {
  if (e.propertyName !== "transform") return;
  //   console.log(e.propertyName);
  this.classList.remove("playing");
};

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playDrum);

// Play by pressing mouse key

const mouseButtonDrumSound = function (e) {
  const keyCode = this.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  audio.currentTime = 0;
  audio.play();
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  this.classList.add("playing");
};

keys.forEach((key) => key.addEventListener("click", mouseButtonDrumSound));
