// let arr = [1, 2, 3, 5];
// let print = function(el)
// {
//   console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function (el) {
//   console.log(el);
// });

let arr = [
  {
    name: "Karan",
    marks: 95,
  },
  {
    name: "Shradha",
    marks: 99,
  },
];

// console.log(arr);

arr.forEach((el) => {
  console.log(el.name);
});
