// Destructuring: Storing values of array into multiple variables

// let names = ["tony","bruce", "steve", "peter"];
// // let [winner,runnerup] = names
// // console.log(winner, runnerup);
// // let secondRunnerup = names[2]
// let [winner, runnerup, secondRunnerup] = names;
// console.log();

// Destructuring objects in JS
const student = {
  name: "Karan",
  age: 14,
  class: 9,
  subjects: ["Hindi", "English", "Math"],
  username: "karan@123",
  password: "abcd",
};

// let username = student.username;
// let password = student.password;
 
let { username: user, password: secret, city = "Mumbai" } = student;
console.log(user, secret, city);
