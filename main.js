function getComputerChoice(array) {
    let random = Math.floor(Math.random() * array.length);
    return rockPaperScissors[random];
}


function checkWinner() {
    if (playersChoice == computerChoice) {
        return "Tie !"
    } else if (
        (playersChoice == "Rock" && computerChoice == "Scissors") ||
        (playersChoice == "Scissors" && computerChoice == "Paper") ||
        (playersChoice == "Paper" && computerChoice == "Rock")
    ) {
        return "Player wins!"
    } else {
        return "Computer wins!"
    }
}

function playRound(playersChoice, computerSelection) {

}



let rockPaperScissors = ["Rock", "Paper", "Scissors"];
const computerChoice = getComputerChoice(rockPaperScissors);

const playersChoice = "Rock"
const winner = console.log(checkWinner());

console.log(playersChoice);
console.log(computerChoice);
console.log(playRound(playersChoice, computerChoice));