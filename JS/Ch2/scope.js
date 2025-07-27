// Scope: Scope determines the accessibility of variables, objects and functions from different parts of the code.
// Function Scope: Variables defined inside a function are not accessible from outside the function

// let sum = 54;
// function calcSum(a, b) {
//   let sum = a + b;
// }
// console.log(calcSum(1, 2));
// console.log(sum);


// Block scope: {}

// Lexical scope: A variable defined outside a function can be accessible inside another function defined after the variable declaration
// function outerFunc()
// {
//   let x = 5;
//   let y = 6;
//   function innerFunc()
//   {
//     console.log(x);
//   }
//   innerFunc();
// }
