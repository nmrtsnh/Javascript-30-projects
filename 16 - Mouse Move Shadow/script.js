const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const walk = 100;

function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  //   console.log(e.target);

  let x = e.offsetX;
  let y = e.offsetY;
  //   console.log(x, y);

  if (this != e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  //   const xWalk = Math.round((x / width) * walk - walk / 2);
  //   const yWalk = Math.round((y / height) * walk - walk / 2);

  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  //   console.log(xWalk);
  //   console.log(yWalk);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 green
    
    `;
}

hero.addEventListener("mouseover", shadow);
