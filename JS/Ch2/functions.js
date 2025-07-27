// function hello() {
//   console.log("Hello World!");
// }

// function printName() {
//   console.log("Prashant Chaudhary");
// }

// function print1to5() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// function isAdult() {
//   let age = 18;
//   if (age > 18) {
//     console.log("Adult");
//   } else {
//     console.log("Not adult");
//   }
// }

// hello();
// printName();
// print1to5();
// isAdult();

// Creating a function to print a quote

// function quote() {
//   console.log("He who conquers himself is the mightiest warrior");
// }

// quote();

// Create a function to roll a dice & always display the value of the dice(1 to 6)

// function rollDice(){
//   let randomValue = Math.floor(Math.random() * 6 ) + 1
//   console.log(randomValue);
// }

// rollDice();

// Functions with arguments: Values which we can pass to the function

// function printName(Name) {
//   console.log(Name);
// }

// printName("Prashant Chaudhary");

// function printInfo(name, age) {
//   console.log(name, age);
// }

// function sum(a,b)
// {
//   console.log(a + b);
// }
// sum(5,6)

// Creating a function that gives us the average of 3 numbers:

// function calcAverage(a,b,c)
// {
//  let avg = (a + b + c) / 3;
//  console.log(avg);
// }
// calcAverage(1,3,4);

// Creating a function that prints the multiplication table of a number:

// function calcTable(a) {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${a} * ${i} = ${a * i}`);
//   }
// }

// calcTable(5)

// Return keyword in functions: Return keyword is used to return some value from the function:

// function sum(a, b) {
//   let sum = a + b;
//   return sum;
//   // once the return statement is executed the function does not executes any other line, written below it.
// }

// let sum2 = sum(sum(1, 2), 3);
// console.log(sum2);

// function isAdult(age) {
//   if (age > 18) {
//     return "Adult";
//   } else {
//     return "Not adult";
//   }
// }

// console.log(isAdult(45));

// Create a function that returns the sum of numbers from 1 to 10:

// let sum = 0;
// function calcSum(num) {
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// }

// let num = parseInt(prompt("Enter the number for which you want the sum: "));
// console.log(calcSum(num));

// Create a function that returns the concatenation of all strings in an array.

// let str = ["hi", "hello", "bye"];

// function concat(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     result = result + str[i];
//   }
//   return result;
// }

// let result2 = concat(str)
// console.log(re sult2);

// Function expressions: Is other way to create a function which is nameless.

// const sum = function(a,b)
// {
//   return a + b;
// }

// let result = sum(1,2);
// // console.log(result);
// let name = "Prashant";
// let x = 5;

// let sum = function(a,b)
// {
//   return a + b;
// }

// Higher order functions:
// A function that does one or both: 1) Takes one or multiple functions as arguments
// // 2) Returns a function

// function multipleGreet(func, count)
// {
//   for(let i = 1; i <= count; i++)
//   {
//     func()
//   }
// }

// let greet = function () {
//   console.log("Hello");
// };

// multipleGreet(greet, 2)

// Higher order functions that returns a function
// let odd = function (n) {
//   console.log(!(n % 2 == 0));
// };

// let even = function (n) {
//   console.log (n % 2 == 0);
// };
// odd(5);

// even(1);

// function oddOrEvenFactory(request) {
//   if (request == "odd") {
//     let odd = function (n) {
//       console.log(!(n % 2 == 0));
//     };
//     return odd;
//   }else if (request == 'even')
//     {
//     let even = function (n) {
//       console.log((n % 2 == 0));
//     };
//     return even;
//   }
// }

// oddOrEvenFactory(5);

// let odd = function (n) {
//   console.log(!(n % 2 == 0));
// };

// let even = function (n) {
//   console.log(n % 2 == 0);
// };

// even(3);

// function oddOrEvenFactory(request) {
//   if (request == "odd") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else if (request == "even") {
//     return function (n) {
//       console.log(!(n % 2 == 0));
//     };
//   } else { 
//     console.log("Wrong request!");
//   }
// }

// oddOrEvenFactory("even");

// Methods: Actions that can be performed on an object:

const calculator = 
{
  num: 55,
  add: function(a,b)
  {
    return a + b;
  },
  sub: function(a,b)
  {
    return a - b;
  }
}  
 
console.log(calculator.add(4,3));