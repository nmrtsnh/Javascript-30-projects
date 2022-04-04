const panels = document.querySelectorAll(".panel");

const openToggle = function () {
  this.classList.toggle("open");
  console.log("open");
};

const activateToggle = function (e) {
  //   console.log(e.propertyName);

  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
};

panels.forEach((panel) => panel.addEventListener("click", openToggle));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", activateToggle)
);
