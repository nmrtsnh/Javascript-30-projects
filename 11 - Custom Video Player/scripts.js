const player = document.querySelector(".player");
const playerVideo = document.querySelector(".player__video");
const videoViewer = document.querySelector(".viewer");
const playerControls = document.querySelector(".player__controls");
const progressBar = document.querySelector(".progress");
const progressFilled = document.querySelector(".progress__filled");
const playerButton = document.querySelector(".player__button");
const toggle = document.querySelector(".toggle");
const playerSlider = document.querySelector(".player__slider");
const skip = document.querySelector("[data-skip]");

function togglePlay() {
  if (videoViewer.paused) {
    videoViewer.play();
    toggle.innerHTML = "play";
  } else {
    videoViewer.pause();
    toggle.innerHTML = "pause";
  }
}

toggle.addEventListener("click", togglePlay);
