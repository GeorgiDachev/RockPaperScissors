const rock="Rock";
const paper="Paper";
const scissors="Scissors";
function playerPlay(){
    let playerTurn;
if(playerTurn=="r" || playerTurn=="rock"){
    playerTurn=rock;
}
else if(playerTurn=="p" || playerTurn=="paper"){
    playerTurn=paper;
}
else if(playerTurn=="s" || playerTurn=="scissors"){
    playerTurn=scissors;
}
else{
    console.log("Invalid input. Try again ...");
}
}
function computerPlay() {
    let arr = [1, 2, 3];
    let random = arr[Math.floor(Math.random() * arr.length)];
    let value;
    switch (random) {
      case 1:
        value = 'rock';
        break;
      case 2:
        value = 'paper';
        break;
      default:
        value = 'scissors';
    }
    return value;
  }
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'Draw!';
    } else if ((playerSelection == "rock") && (computerSelection == "scissors")) {
      return "Player won!";
    } else if ((playerSelection == "paper") && (computerSelection == "rock")) {
      return "Player won!";
    } else if ((playerSelection == "scissors") && (computerSelection == "paper")) {
      return "Player won!";
    } else if ((playerSelection == "paper") && (computerSelection == "scissors")) {
      return "Computer won!";
    } else if ((playerSelection == "scissors") && (computerSelection == "rock")) {
      return "Computer won!";
    } else if ((playerSelection == "rock") && (computerSelection == "paper")) {
      return "Computer won!";
    }
  }