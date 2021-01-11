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

  // Check if the guess is correct
  if (guess === winningNum) {
    // correct guess
    //Disable input
    inputEl.disabled = true;
    //Change border color to green
    inputEl.style.borderColor = 'green';
    setMessage(`${winningNum} is correct, YOU WON!`, 'green');
  } else {
    
  }
};


// returns true if the entered number is valid :not left empty, not smaller than min,
// not greater than max; otherwise false
const checkValidity = function(val, min, max) {
  if (val < min || val > max || isNaN(val)) {
    setMessage(`Enter a number between ${min} and ${max}`, 'red');
    return false;
  }
  return true;
};


// Set message in the given color
const setMessage = function(msg, color) {
  const messageEl = document.querySelector('.message');
  messageEl.textContent = msg;
  messageEl.style.color = color;
};
