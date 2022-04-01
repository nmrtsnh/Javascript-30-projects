const inputs = document.querySelectorAll(".controls inout");
console.log(inputs);

inputs.forEach((input) =>
  input.addEventListener("change", function () {
    console.log(this);
  })
);
