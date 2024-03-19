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
  } else {
    guess.textContent = "Invalid! Choose a number 😡";
    input.value = "";
  }
});
