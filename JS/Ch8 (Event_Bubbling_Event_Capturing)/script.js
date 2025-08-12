const green = document.querySelector(".green");
const pink = document.querySelector(".pink");
const blue = document.querySelector(".blue");

green.addEventListener("click", (e) => {
  console.log("Green Event Listener");
});

pink.addEventListener("click", (e) => {
  console.log("Pink Event Listener");
});

blue.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Blue Event Listener");
});
