const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = function () {
  //   console.log("Hi");
  const now = new Date();

  const seconds = now.getSeconds();
  const secondDegree = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegree}deg)`;

  const minutes = now.getMinutes();
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6 + 90;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

  const hours = now.getHours();
  const hourDegree = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
};

setInterval(setDate, 1000);
