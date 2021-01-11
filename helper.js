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


// This function should be called when the game is finished
//either when the winning or gaveover happens
const gameFinished = function(victory, winningNum, inputEl) {
  //Disable input
  inputEl.disabled = true;
  //Change the border color to green for winning and red for gameover and set appropriate messages
  inputEl.style.borderColor = victory ? 'green' : 'red';
  victory ? 
    setMessage(`${winningNum} is correct, YOU WON!`, 'green') :
    setMessage(`Game Over! The correct number was ${winningNum}`, 'red');

  //Play again?
  playAgain();
  
};


//This function should be called when user's guess was wrong but
// there are still guesses left
const gameContinues = function(inputEl,guess, guessesLeft) {
  //change the border color to red
  inputEl.style.borderColor = 'red';
  setMessage(`${guess} is not correct, ${guessesLeft} guess${guessesLeft > 1 ? 'es' : ''} left!`, 'red');
  //Clear the input
  inputEl.value = '';
};


// Check the guess and act depending on if the guess is correct or wrong
const checkGuess = function(guess, winningNum, inputEl) {
  // Check if the guess is correct or wrong
  if (guess === winningNum) {
    //Game finished - you won
    gameFinished(true, winningNum, inputEl);
  } else {
    //Wrong guess
    guessesLeft -= 1; //global variable
    if (guessesLeft === 0) {
      //Game finished - Game over
      gameFinished(false, winningNum, inputEl);

    } else {
      //Wrong guess - but can still play
      gameContinues(inputEl,guess, guessesLeft);
    }
  }
};


const playAgain = function() {
  const guessBtnEl = document.querySelector('#guess-btn');
  guessBtnEl.value = 'Play Again';
  guessBtnEl.classList.add('play-again');
};


//Play again event handler
const reload = function(evt) {
  //we're handling the case in which the button is 'Play Again'
  if (evt.target.classList.contains('play-again')) {
    window.location.reload();
  }
  
};