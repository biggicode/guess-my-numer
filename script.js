'use strict';

const randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  let userInput = Number(document.querySelector('.guess').value);

  if (!userInput) {
    if (userInput === randomNumber) {
      document.querySelector('.message').textContent = 'Yeeey!👏 You won!🎉';
    } else if (userInput > randomNumber) {
      document.querySelector('.message').textContent = 'Keep trying!!🎆To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else if (userInput < randomNumber) {
      document.querySelector('.message').textContent = 'To Loooooow! 🎇';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  console.log(userInput);
});
