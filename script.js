'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let biggestScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  let userInput = Number(document.querySelector('.guess').value);

  //When input is invalid
  if (!userInput) {
    document.querySelector('.message').textContent =
      "This isn't a valid number!☢";

    //When user wins
  } else if (userInput === randomNumber) {
    document.querySelector('.message').textContent = 'Yeeey!👏 You won!🎉';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (score > biggestScore) {
      biggestScore = score;
      document.querySelector('.highscore').textContent = biggestScore;
    }

    //When input is high
  } else if (userInput > randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Keep trying!!🎆To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        "You lost the battle! Don't be sad! Win the war🎉";
    }
    //When input is low
  } else if (userInput < randomNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To Loooooow! 🎇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        "You lost the battle! Don't be sad! Win the war🎉";
    }
  }
});

//Again button

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
