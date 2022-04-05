const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("Hello");

// Interpolated
console.log("Hello, I am a string", "💥");

// Styled
// console.log("%c This is a text", "font-size:50px; background:red; color:blue");

// warning!
console.warn("This is a warning");

// Error :|
console.error("Oops!!");

// Info
console.info("An important information");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);
console.clear();

// Grouping together
dogs.forEach((dog) => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 5} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count("Namrata");
console.count("Namrata");
console.count("Namrata");
console.count("Sinha");
console.count("Namrata");
console.count("Namrata");
console.count("Sinha");
console.count("Sinha");

// timing
console.time("fetching data");
fetch("https://api.github.com/users/nmrtsnh")
  .then((data) => data.json())
  .then((data) => {
    console.timeEnd("fetching data");
    console.log(data);
  });
console.table(dogs);
