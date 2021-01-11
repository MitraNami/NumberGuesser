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
};

