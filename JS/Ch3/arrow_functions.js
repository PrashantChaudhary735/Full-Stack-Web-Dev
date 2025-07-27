// Arrow functions

// const sum = (a,b) =>
// {
//   console.log(a + b);
// }

// const cube = (n) =>
// {
//   return n*n*n;
// }

// sum(2,3)
// console.log(cube(3));

// const power = (a,b) =>
// {
//   return a ** b ;
// };

// const hello = () =>
// {
//   console.log("hellow world");
// };

// Implicit return statement in arrow functions:
// Below function directly return the value
// const mul = (a, b) => a * b;

// mul(2, 3);

// this with arrow functions:
const student = {
  name: "Karan",
  age: 23,
  marks: 85,
  prop: this,
  getName: function () {
    console.log(this);
    return this.name;
  },
  getMarks: () => {
    console.log(this);
    return this.marks;
  },
  getInfo: function () {
    setTimeout(() => {
      console.log("Hello World");
    }, 2000);
  },
  getInfo2: function () {
    setTimeout(function () {
       
    }, 2000);
  },
};

console.log(student.getName());
console.log(student.getMarks());
