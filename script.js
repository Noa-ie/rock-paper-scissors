function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1; // returns integers 1, 2 or 3
    if (randomNumber == 1) {
        return "Rock";
    } else if (randomNumber == 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    move = prompt("What's your move: Rock, Paper or Scissors?");
    move = move.toLowerCase();
    if (move == "rock") {
        return "Rock";
    } else if (move == "paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        return `Both drew ${humanChoice}! Tie!\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;

    } else if (humanChoice == "rock" && computerChoice == "Scissors") {
        ++humanScore;
        return `Rock beats Scissors! You win!\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
    } else if (humanChoice == "paper" && computerChoice == "Rock") {
        ++humanScore;
        return `Paper beats Rock! You win!\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
    } else if (humanChoice == "scissors" && computerChoice == "Paper") {
        ++humanScore;
        return `Scissors beats Paper! You win!\nHuman score = ${humanScore}\nComputer score = ${computer}`;

    } else {
        ++computerScore;
        return `${computerChoice} beats ${humanChoice}! You lose!\nHuman score = ${humanScore}\nComputer score = ${computerScore}`
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));