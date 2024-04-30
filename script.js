"use strict";

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //   If no number input and as such no guess
  if (!guess) {
    displayMessage("No Number!!");
  }

  // When Player wins
  else if (guess === secretNumber) {
    displayMessage("Correct Number!!");
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }

  //   when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? "Too Low!!" : "Too High!!");
      document.querySelector(".score").textContent = --score;
    } else {
      document.querySelector(".score").textContent = 0;
      displayMessage(" You lose the game! ");
    }
  }


//   Using DRY removed this repeated code with a tertinary operator

  //   When the guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = " Too Low! ";
  //       document.querySelector(".score").textContent = --score;
  //     } else {
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector(".message").textContent = " You lose the game! ";
  //     }
  //   }

  //   When the guess is too High
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector(".message").textContent = " Too High! ";
  //       document.querySelector(".score").textContent = --score;
  //     } else {
  //       document.querySelector(".score").textContent = 0;
  //       document.querySelector(".message").textContent = " You lose the game! ";
  //     }
  //   }
});

// Making Reset(here 'Again') functional
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage("Start Guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
