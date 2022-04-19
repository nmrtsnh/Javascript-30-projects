const keyPressed = [];
const secretCode = "namrata";

window.addEventListener("keyup", (e) => {
  console.log(e.key);
  keyPressed.push(e.key);
  keyPressed.splice(
    -secretCode.lentgh - 1,
    keyPressed.length - secretCode.length
  );

  if (keyPressed.join("").includes(secretCode)) {
    console.log("DING DING");
    cornify_add();
  }

  console.log(keyPressed);
});
