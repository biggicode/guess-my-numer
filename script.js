'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let biggestScore = 0;

const showMessage = (message) => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', () => {
  let userInput = Number(document.querySelector('.guess').value);

  //When input is invalid
  if (!userInput) {
    // document.querySelector('.message').textContent =
    //   "This isn't a valid number!β’";

    showMessage("This isn't a valid number!β’");

    //When user wins
  } else if (userInput === randomNumber) {
    // document.querySelector('.message').textContent = 'Yeeey!π You won!π';
    showMessage('Yeeey!π You won!π');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = randomNumber;

    if (score > biggestScore) {
      biggestScore = score;
      document.querySelector('.highscore').textContent = biggestScore;
    }

    //When input is high
  } else if (userInput !== randomNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   userInput > randomNumber ? 'Keep trying!!πTo high' : 'To Loooooow!π';
      showMessage(
        userInput > randomNumber ? 'Keep trying!!πTo high' : 'To Loooooow!π'
      );

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      score--;
      document.querySelector('.score').textContent = score;
      // document.querySelector('.message').textContent =
      //   "You lost the battle! Don't be sad! Win the warπ";
      showMessage("You lost the battle! Don't be sad! Win the warπ");
    }
  }
  //  else if (userInput > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Keep trying!!πTo high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent =
  //       "You lost the battle! Don't be sad! Win the warπ";
  //   }
  //   //When input is low
  // } else if (userInput < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To Loooooow! π';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent =
  //       "You lost the battle! Don't be sad! Win the warπ";
  //   }
  // }
});

//Again button

document.querySelector('.again').addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  // document.querySelector('.message').textContent = 'Start guessing...';
  showMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
