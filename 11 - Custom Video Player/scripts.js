const player = document.querySelector(".player");
const playerVideo = player.querySelector(".player__video");
const videoViewer = player.querySelector(".viewer");
const playerControls = player.querySelector(".player__controls");

const progressBar = player.querySelector(".progress");
const progressFilled = player.querySelector(".progress__filled");

const playerButton = player.querySelector(".player__button");
const toggle = player.querySelector(".toggle");

const ranges = player.querySelectorAll(".player__slider");
const skipButton = player.querySelectorAll("[data-skip]");

function togglePlay() {
  if (videoViewer.paused) {
    videoViewer.play();
  } else {
    videoViewer.pause();
  }
}

function updateButton() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}

function skipVideo() {
  // console.log(this.dataset.skip);
  videoViewer.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  videoViewer[this.name] = this.value;
  // console.log(this.name);
  // console.log(this.value);
}

function handleProgressBar() {
  const percent = (videoViewer.currentTime / videoViewer.duration) * 100;
  // console.log(percent);
  progressBar.style.flexBasis = `${percent}%`;
}

videoViewer.addEventListener("click", togglePlay);
videoViewer.addEventListener("play", updateButton);
videoViewer.addEventListener("pause", updateButton);

toggle.addEventListener("click", togglePlay);
videoViewer.addEventListener("timeupdate", handleProgressBar);

skipButton.forEach((button) => button.addEventListener("click", skipVideo));

// for (button of skipButton) {
//   button.addEventListener("click", skipVideo);
// }

ranges.forEach((range) => range.addEventListener("click", handleRange));
ranges.forEach((range) => range.addEventListener("mousemove", handleRange));
