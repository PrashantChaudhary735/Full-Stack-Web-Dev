const user = {
  firstName: "Prashant",
  lastName: "Chaudhary",
  age: 25,
  address: {
    city: "Mumbai",
  },
  // getFullName: function () {
  //   return user.firstName + ' '+ user.lastName;
  // },
};

// if (user.address) {
//   console.log(user.address.city);
// }

// console.log(user.address && user.address.city);

// Optional Chaining
// console.log(user.address?.city);

console.log(user.getFullName?.());
