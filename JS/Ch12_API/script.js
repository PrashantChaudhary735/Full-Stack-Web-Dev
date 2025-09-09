// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// function sayHi() {
//   console.log("Hi From JS");
// }

// const image = document.querySelector("img");
// const button = document.querySelector("button");
// const blockingBtn = document.querySelector(".blocking-btn");

// button.addEventListener("click", () => {
//   const xhr = new XMLHttpRequest();

//   xhr.addEventListener("load", () => {
//     const data = JSON.parse(xhr.responseText); // parse JSON
//     image.src = data.message; // set image source
//   });
//   xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
//   xhr.send();
// });

// // setTimeout(() => {
// //   console.log("Hii");
// // }, 4000);
// // alert("Hello");

// blockingBtn.addEventListener("click", () => {
//   const startTime = Date.now();
//   let currentTime = startTime;

//   while (startTime + 2000 > currentTime) {
//     currentTime = Date.now();
//   }
// });

const xhr = new XMLHttpRequest();
xhr.responseType = 'json'
xhr.addEventListener('load', () =>
{
  console.log(xhr);
})

xhr.open('GET', '')
xhr.send()