'use strict';

const randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  let userInput = Number(document.querySelector('.guess').value);

  if (!userInput) {
    document.querySelector('.message').textContent =
      "This isn't a valid number!☢";
  } else if (userInput === randomNumber) {
    document.querySelector('.message').textContent = 'Yeeey!👏 You won!🎉';
  } else if (userInput > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Keep trying!!🎆To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        "You lost the battle! Don't be sad! Win the war🎉";
    }
  } else if (userInput < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To Loooooow! 🎇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        "You lost the battle! Don't be sad! Win the war🎉";
    }
  }
  console.log(userInput);
});
