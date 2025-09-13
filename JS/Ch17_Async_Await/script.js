async function makeRequest() {
  const url = "https://httpstat.us/200?sleep=5000";
  const response = await fetch(url);
  console.log(response);
  console.log("Hii");
}

function addTwoNumbers() {
  return 5 + 5;
}
 
// function hi() {
//   console.log("hello");
//   throw new Error('Error in program')
//   console.log("Hi");
// }
