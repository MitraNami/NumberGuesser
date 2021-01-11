

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

