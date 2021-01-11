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


const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
minNum.textContent = min;
maxNum.textContent = max;