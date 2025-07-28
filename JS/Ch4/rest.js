// Rest: Allow a function to take an indefinite number of arguments and bundle them in an array

// function sum(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(`You gave us: ${args[i]}`);
//   }
// }
// function min(a, b, c, d) {
//   console.log(arguments);
// }

// sum(5, 1, 0);
function sum(...args) {
  args.reduce((sum, el) => sum + el);
}
  