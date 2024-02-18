function getComputerChoice(array) {
    let random = Math.floor(Math.random() * array.length);
    return rockPaperScissors[random];
}


function checkWinner() {
    if (playersChoiceConvert == computerChoice) {
        return "Tie !"
    } else if (
        (playersChoiceConvert == "ROCK" && computerChoice == "SCISSORS") ||
        (playersChoiceConvert == "SCISSORS" && computerChoice == "PAPER") ||
        (playersChoiceConvert == "PAPER" && computerChoice == "ROCK")
    ) {
        return playerWin
    } else {
        return computerWin
    }
}

function playRound() {

}



let rockPaperScissors = ["ROCK", "PAPER", "SCISSORS"];
const computerChoice = getComputerChoice(rockPaperScissors);

let playersChoice = prompt("Rock, paper or scissors ?");
let playersChoiceConvert = playersChoice.toUpperCase();

const playerWin = "Players wins!"
const computerWin = "Computer wins!"

const winner = console.log(checkWinner());



console.log(playersChoice);
console.log(computerChoice);
console.log(playRound(playersChoice, computerChoice));