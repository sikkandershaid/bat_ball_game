

function myFunction(){
  let choices = ['Bat', 'Ball', 'Stump'];
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

function showResult(playerChoice){
    let choices = ['Bat', 'Ball', 'Stump'];
    let computerChoice = choices[Math.floor(Math.random() * 3)]; 
    let winnerMsg;
    if (computerChoice===playerChoice){
      winnerMsg = 'Its a tie';
      updateScore('tie');
    }else if(
      (computerChoice === 'Bat' && playerChoice === 'Ball') ||
      (computerChoice === 'Ball' && playerChoice === 'Stump') ||
      (computerChoice === 'Stump' && playerChoice === 'Bat')
    ){
      winnerMsg = 'Computer win';
      updateScore('computer')
    }else{
      winnerMsg = 'You Win';
      updateScore('player')
    }
      
     document.querySelector('#playerChoiceResult').innerText = playerChoice;
     document.querySelector('#computerChoiceResult').innerText = computerChoice;
     document.querySelector('#winnerResult').innerText = winnerMsg; 
    let resultBox = document.querySelector('#resultBox');
    resultBox.classList.add('show');

    showScore();

}


function hideResult(){
    let resultBox = document.querySelector('#resultBox');
    resultBox.classList.remove('show')
}


let scores = {
  playerWin : 0,
  computerWin : 0,
  tie : 0,
}


function updateScore(whoWinner){
  if(whoWinner==='player'){
    scores.playerWin ++;
  }else if(whoWinner === 'computer'){
    scores.computerWin ++;
  }else if('tie'){
    scores.tie ++;
  } 
}

function showScore(){
  document.querySelector('#playerScore').innerText = scores.playerWin;
  document.querySelector('#computerScore').innerText = scores.computerWin;
  document.querySelector('#tieScore').innerText = scores.tie;
}


function resetGame(){
  let isYes = confirm('Are you sure to reset this game?')
  if(isYes){
  hideResult();
  scores = {
    playerWin : 0,
    computerWin : 0,
    tie : 0,
  }
  showScore()
  }

}