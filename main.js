function getPlayerChoice () {
    let playerSelection = prompt('Do you choose Rock, Paper or Scissors?').toUpperCase();

          if (playerSelection === "ROCK" || playerSelection === "PAPER" || playerSelection === "SCISSORS") {
              console.log("You chose " + `${playerSelection}`);
              return playerSelection;
          } else {
              console.log('Error! Pick Rock, Paper or Scissors')
              return getPlayerChoice();
          }
  }

function getComputerChoice() {
    let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
    let random = rockPaperScissors[Math.floor(Math.random() * 3)];
    return random;
}


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return ("Tie !");
    } else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK")
    ) {
        return (playerWin);
    } else {
        return (computerWin);
    }
}

const playerWin = "You won brother";
const computerWin = "You won computer";

function game() {
    for (let i = 1; i < 6; i++){
        console.log('Round ' + i)
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        console.log("Computer chose " + `${computerSelection}`);
        console.log(playRound(playerSelection, computerSelection));
    }
}
game();