/*
Game Function:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify player of the correct answer if loose
- Let player choose to play again
*/


// Game values
const min = 1,
      max = 10,
      winningNum = 2;
let guessesLeft = 3;


const minNumEl = document.querySelector('.min-num');
const maxNumEl = document.querySelector('.max-num');
minNumEl.textContent = min;
maxNumEl.textContent = max;


// Guess submission
const formEl = document.querySelector('div#game form');
formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();

  const inputEl = document.querySelector('#guess-input');
  const guess = parseInt(inputEl.value);
  
  // Checks if the guess is valid
  const isValid = checkValidity(guess, min, max);
  if (!isValid) return;

  // Check if the guess is correct or wrong
  if (guess === winningNum) {
    //Game finished - you won
    gameFinished(true, winningNum, inputEl);
  } else {
    //Wrong guess
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      //Game finished - Game over
      gameFinished(false, winningNum, inputEl);

    } else {
      //Wrong guess but can still play
      //change the border color to red
      inputEl.style.borderColor = 'red';
      setMessage(`${guess} is not correct, ${guessesLeft} guess${guessesLeft > 1 ? 'es' : ''} left!`, 'red');
      //Clear the input
      inputEl.value = '';
    }
  }
};

