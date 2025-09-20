// const user = {
//   firstName: "Prashant",
//   lastName: "Chaudhary",
//   age: 25,
//   getBirthYear() {
//     return new Date().getFullYear() - user.age;
//   },
// };

// function getBirthYear() {
//   console.log(this);
//   return new Date().getFullYear() - this.age;
// }

// function createUser(firstName, lastName, age) {
//   const user = {
//     f irstName,
//     lastName,
//     age,
//   };
//   return user;
// }

// function sayHi() {
// console.log("Hii");
// return "hello";
// }

// createUser.commonMethods = {
//   getBirthYear: function () {
//     return new Date().getFullYear() - this.age;
//   },
// };

function CreateUser(firstName, lastName, age) {
  (this.firstName = firstName), (this.lastName = lastName), (this.age = age);
}

CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};

CreateUser.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const user1 = new CreateUser("Prashant", "Chaudhary", 32);
const user2 = new CreateUser("Aman", "Mishra", 45);
