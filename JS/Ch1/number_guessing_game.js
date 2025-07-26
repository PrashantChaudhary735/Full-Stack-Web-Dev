//  Guessing Game: User enters a max number and then tries to guess a random generated number between 1 to max.
const max = prompt("Enter the max number: ");
// console.log(max);

const random = Math.floor(Math.random() * max) + 1;
console.log(random);

let guess = prompt("Guess the number: ");

while (true) {
  if (guess == "quit") {
    console.log("User quit");
    break;
  }
  if (guess == random) {
    console.log("You are right! congrats!. Random number was:", random);
    break;
  } else if (guess < random) {
    guess = prompt(
      "Random number is less than the number you guessed. Please try again"
    );
  } else {
    guess = prompt(
      "Random number is more than the number you guessed. Please try again"
    );
  }
}
