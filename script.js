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
    } else if (inputValue > rightAnswer) {
      guess.textContent = "OOPS Sorry! Try smaller number 🤔";
      input.value = "";
    } else {
      guess.textContent = "OOPS Sorry! Try greater number 🤔";
      input.value = "";
    }
  } else {
    guess.textContent = "Invalid! Choose a number 😡";
    input.value = "";
  }
});

function playAgain() {
  window.location.reload();
}

function winnerPopUp() {
  input.value = "";
  winnerModal.style.display = "flex";
  mainSection.style.display = "none";
  //close modal
  const close = document.querySelector(".close");
  close.addEventListener("click", () => {
    winnerModal.style.display = "none";
    mainSection.style.display = "flex";
  });

  window.addEventListener("click", (event) => {
    if (event.target === winnerModal) {
      winnerModal.style.display = "none";
      mainSection.style.display = "flex";
    }
  });
}
