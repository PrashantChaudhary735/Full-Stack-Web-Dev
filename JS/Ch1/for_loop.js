// console.log("1");
// console.log("2");
// console.log("3");

// for(let i = 1; i <= 5; i++)
// {
//   console.log(i);
// }

// Dry run of for loop

// Print all odd numbers (1 to 15)

// for (let i = 0; i <= 15; i++) {
// if (i % 2 != 0)
// {
// console.log(i);
// }
// else
// {
//   console.log(i);
// }

// }

// Print multiplication table for 5
// let m = prompt("write your number: ")
// for (let i = 1; i <= 10; i++)
// {
//   // let m = 5;
//   console.log(`${m} * ${i} = ${m*i}`);
// }

// Nested for loop

// While loop
// let i = 1;
// while(i <= 5)
// {
//   console.log(i);
//   i++;
// }

// Guess your favorite movie:
// const moveieName = "Saiyaara";
// let guess = prompt("Guess the movie name: ");

// while (moveieName !== guess && guess != "quit") {
//   guess = prompt("Wrong Guess! Please try again.");
// }

// Loop with arrays
// let fruits = ['Apple', 'Banana', 'Pineapple', 'Orange'];

// for(let i = 0; i < fruits.length; i++)
// {
//   console.log(i, fruits[i]);
// }

// Loops with nested arrays
// let heroes = [
//   ["irnoman", "spiderman", "thor"],
//   ["superman", "hulk", "flash"],
// ];

// for (let i = 0; i < heroes.length; i++) {
//   console.log(`List #${i}`);

//   for (let j = 0; j < heroes[i].length; j++) {
//     console.log(heroes[i][j]);
//   }
// }

// for of loop in JS
// let fruits = ["mango", "apple", "banana", "orange"];
// for(fruit of fruits)
// {
//   console.log(fruit);
// }

// Nested for of loops in javascript
let heroes = [
  ['Superman', 'Spiderman', 'Thor'],
  ['Hulk', 'Captain America']
];

for(list of heroes)
{
  for (name of list){
    console.log(name);
  }
}

