// get variables
let input = document.querySelector("input");
let guess = document.querySelector(".guess");
let tryBtn = document.querySelector(".try-btn");
let playAgainBtn = document.querySelector(".play-again-btn");
let remainChances = document.querySelector(".chances");
let winnerModal = document.querySelector(".win-modal");
let mainSection = document.querySelector("main");
let previousGuesses = document.querySelector(".last-choices");

let guessList = [];

let chances = 10;

let rightAnswer = Math.floor(Math.random() * 100 + 1);

tryBtn.addEventListener("click", () => {
  let inputValue = +input.value;
  if (
    inputValue &&
    inputValue > 0 &&
    inputValue <= 100 &&
    typeof inputValue == "number"
  ) {
    guessList.push(inputValue);
    previousGuesses.textContent = guessList;
    remainChances.textContent = --chances;

    if (chances === 0) {
      // Show game over message
      guess.textContent = "Game Over! You've run out of chances.";
      tryBtn.style.display = "none";
      playAgainBtn.style.display = "block";
      return;
    }

    if (inputValue == rightAnswer) {
      winnerPopUp();
      playAgainBtn.style.display = "block";
      tryBtn.style.display = "none";
    }
  } else {
    guess.textContent = "Invalid! Choose a number 😡";
    input.value = "";
  }
});
