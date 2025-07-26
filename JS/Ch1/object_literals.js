// Objects Literals: Used to store keyed collection and comple entities
// Object is a collection of properties. Key-value pairs of any object
// Creating object literals
// let delhi = {
//   latitude: "23.7041 N",
// };

// let student = {
//   name: "shradha",
//   age: 23,
//   marks: 94.4,
//   city: "Delhi",
// };

// let student2 = ["shradha", 23, 94.4, "Delhi"];
// console.log(student2);

// Creating a post: Object literal for the properties of threa/twitter post which includes:
// username, content, likes, reposts, tags
// const post = {
//   username: "chaudharyprashant735@gmail.com",
//   content: "This is my #firstpost",
//   like: 150,
//   reposts: 5,
//   tags: ["apnacollege", "prashant "],
// };

// To print any values from an object
// console.log(post["username"]);
// console.log(post.username);
// console.log(post.like);

// JS automatically converts keys to strings.
// Even if we made the number as a key, the number will be converted to string

// const obj = {
//   1: "a",
//   2: "b",
//   true: "c",
//   null: "d",
//   name: "Prashant",
// };

// console.log(obj[1]);
// console.log(obj[null]);
// console.log(obj["name"]);

// To add/update value in any object:

// const student = {
//   name: "Prashant",
//   city: "Mumbai",
// };

// student.city = 'Delhi'
// student.gender = 'Male'
// console.log(student);
// student.marks = 83
// console.log(student.marks);

// Nested objects in JS:
// const classInfo = {
//   aman: {
//     grade: "A+",
//     city: "Delhi",
//   },
//   karan: {
//     grade: "B",
//   },
// };
// console.log(classInfo.karan.grade);
// classInfo.city = 'Delhi'
// console.log(classInfo.karan);

// Array of objects
// const classInfo = [
//   {
//     name: "Karan",
//     grade: "A+",
//     city: "Delhi",
//   },
//   {
//     name: "Aman",
//     grade: "B",
//     city: "Pune",
//   },
// ];
// classInfo[1].city = 'Delhi'
// console.log(classInfo[0]["city"]);

// Math object in JS

// console.log(Math.E);
// console.log(Math.abs(23/5));
// console.log(Math.floor(5.999));

// Generate random integers using Math object
// let num = Math.random();
// console.log(Math.floor(num * 10));
// step3 = step2

// Practice question on Math object:
// 1) Generate a random number between 1 and 100
// let num = Math.random();
// console.log(Math.floor(num * 100) + 1);

// 2) Generate a random number between 1 and 5
let num = Math.random();
console.log(Math.floor(num * 5) + 1);
