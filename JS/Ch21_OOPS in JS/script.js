// const user = {
//   firstName: "Prashant",
//   lastName: "Chaudhary",
//   age: 25,
//   getAgeYear() {
//     return new Date().getFullYear() - user.age;
//   },
// };

function createUser(firstName, lastName, age) {
  const user = {
    firstName,
    lastName,
    age,
    getAgeYear() {
      return new Date().getFullYear() - user.age;
    },
  };
  return user;
}

const user1 = createUser("Aman", "Mishra", 35);
console.log(user1);
const user2 = createUser("Prashant", "Chaudhary", 24);
console.log(user2);

const arr1 = [1, 3, 4];
const arr2 = [1, 3, 5];

