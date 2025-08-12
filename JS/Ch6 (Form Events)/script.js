const usernameInput = document.querySelector("#username");

const paragraph = document.querySelector("p");
const form = document.querySelector("form");
// usernameInput.addEventListener("click", () => {
//   console.log("Input clicked");
// });
// usernameInput.addEventListener("dblclick", () => {
//   console.log("Double Clicked");
// });
// let inputValue;

// usernameInput.addEventListener("input", (e) => {
//   console.log(e.target.value);
//   inputValue = e.target.value;
//   paragraph.innerText = e.target.value;
// });

// usernameInput.addEventListener("focus", (e) => {
//   console.log(e.target.value);
//   inputValue = e.target.value;
//   paragraph.innerText = e.target.value;
// });

form.addEventListener("click", (e) => {
  e.preventDefault();
  const myFormData = new FormData(form);
  console.log(myFormData);

  for(const p of myFormData.entries())
  {
    console.log(p);
  }
});
