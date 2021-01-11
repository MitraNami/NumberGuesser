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
      winningNum = getRandomNum(min, max);
let guessesLeft = 3;


const minNumEl = document.querySelector('.min-num');
const maxNumEl = document.querySelector('.max-num');
minNumEl.textContent = min;
maxNumEl.textContent = max;

// Play again event listener
const gameWrapperEl = document.querySelector('#game');
gameWrapperEl.addEventListener('mousedown', reload);



// Guess form submission
const formEl = document.querySelector('div#game form');
formEl.addEventListener('submit', onSubmit);
