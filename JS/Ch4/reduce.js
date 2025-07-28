// Reduces the array to a single value.

// let numbers = [1, 23, 3, 4, 4];

// let result = numbers.reduce((result2, el) => {
//   return result2 + el;
// });

// console.log(result);

// Find maximum value in an array using reduce method

// Using for loop
// let arr = [1, 2, 3, 4, 5, 5, 17, 10];
// max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (max > arr[i]) {
//     max = max;
//   } else {
//     max = arr[i];
//   }
// }
// console.log(max);

//Using reduce:
// let max = arr.reduce((max, el) => {
//   if (max < el) {
//     return el;
//   } else {
//     return max;
//   }
// });
// console.log(max);

// Practice question: Check if all numbers in our array are multiples of 10 or not
// let arr = [10, 20, 90];
// let result = arr.every((el) => {
//   return el % 10 == 0;
// });
// console.log(result);

//  Create a function to find the min number in an array.

// let arr1 = [7, 8, 9, 380, 38, 2, 45];
// let minNum = arr1.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });
// console.log(minNum);