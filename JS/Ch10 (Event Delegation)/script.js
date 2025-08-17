let h1 = document.querySelector("h1");
// const card = document.querySelector(".card");
const container = document.querySelector(".container");
const addCardButton = document.querySelector(".card");
const input = document.querySelector("input");

// const form = document.querySelector("form");
// const input1 = document.querySelector("#txt-1");

// function sayHi() {
//   console.log("Hiii");
// }

function addCard() {
  let card = document.querySelector(".card");
  const newCard = card.createElement("div");
}

// h1.onclick = sayHi
// h1.addEventListener("click", sayHi);
let count = 1;
// card.addEventListener("mouseup", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count;
//   count++;
//   container.append(newCard);
// });

// addCardButton.addEventListener("mouseenter", (e) => {
//   console.log(e);
//   const newCard = document.createElement("div");
//   newCard.classList.add("card");
//   newCard.innerText = count;
//   count++;
//   container.append(newCard);
// });

addCardButton.addEventListener("click", (e) => {
  console.log(e);
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.innerText = count;
  count++;
  container.append(newCard);
});

// setTimeout(() => {a
//   input.focus();
//   console.log("Input Focused...");
// }, 2000);

// setTimeout(() => {
//   input.blur();
//   console.log("Input Blurred...");
// }, 4000);

//  Below code is for Event Delegation:

const cardsList = document.querySelectorAll(".card");
cardsList.forEach((card) => {
  console.log(card);
  card.addEventListener("click", () => {
    card.remove();
  });
});

container.addEventListener("click", (e) => {
  if (e.target !== container) {
    e.target.remove();
  }
});
