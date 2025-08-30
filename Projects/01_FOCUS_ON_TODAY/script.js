const checkBoxList = document.querySelectorAll(".custom-checkbox");
const inputFields = document.querySelectorAll(".goal-input");
const progressBar = document.querySelector(".progress-bar");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");
const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};

const allQuotes = [
  "Raise the bar by completing your goals!",
  "Well begun is half done",
  "Just a step away, keep going!",
  "Whoa! You just completed all the goals, time for child :D",
];

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;

progressValue.firstElementChild.innerText = `${completedGoalsCount}/3 completed`;

progressLabel.innerText = allQuotes[completedGoalsCount];

checkBoxList.forEach((checkbox) => {
  checkbox.addEventListener("click", (e) => {
    const allGoalsAdded = [...inputFields].every((input) => {
      return input.value;
    });
    // console.log(allGoalsAdded);

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle("completed");

      const inputID = checkbox.nextElementSibling.id;
      allGoals[inputID].completed = !allGoals[inputID].completed;

      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${(completedGoalsCount / 3) * 100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount} / 3 completed`;

      progressLabel.innerText = allQuotes[completedGoalsCount];

      localStorage.setItem("allGoals", JSON.stringify(allGoals));
    } else {
      progressBar.classList.add("show-error");
    }
  });
});

inputFields.forEach((input) => {
  // console.log(allGoals[input.id]);
  input.value = allGoals[input.id].name;

  if (allGoals[input.id].completed) {
    input.parentElement.classList.add("completed");
  }
  input.addEventListener("fo cus", () => {
    progressBar.classList.remove("show-error");
  });

  input.addEventListener("input", (e) => {
    if (allGoals[input.id].completed) {
      input.value = allGoals[input.id].name;
      return;
    }
    allGoals[input.id] = {
      name: input.value,
      completed: false,
    };
    localStorage.setItem("allGoals", JSON.stringify(allGoals));
  });
});
