const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleResults = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;

possibleResults.forEach((possibleResult) =>
  possibleResult.addEventListener('click', (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerResult();
    getResult();
  })
);

function generateComputerResult() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // instead of 3 you can write possibleResults.length

  console.log(randomNumber);
  if (randomNumber === 2) {
    computerChoice = 'rock';
  }
  if (randomNumber === 3) {
    computerChoice = 'scissors';
  }
  if (randomNumber === 1) {
    computerChoice = 'paper';
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'its a draw'; //
  } else if (
    (computerChoice === 'rock' && userChoice === 'paper') ||
    (computerChoice === 'scissors' && userChoice === 'rock') ||
    (computerChoice === 'paper' && userChoice === 'scissors')
  ) {
    result = 'you win';
  } else {
    result = 'you lost';
  }

  resultDisplay.innerHTML = result;
}


