// let a
const user = {
  name: "Anurag",
  age: 37,
};

// console.log(user.address.city);

try {
  console.log(user.address.city);
} catch (err) {
  console.dir(err.message);
} finally {
  console.log('Hello World');
}

console.log(3 + 7);

