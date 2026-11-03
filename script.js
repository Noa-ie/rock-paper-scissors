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
    if (humanSelection == computerSelection) {
        console.log("humanSelection = ", humanSelection);
        console.log("computerSelection = ", computerSelection);
        return `Tie! Both drew ${humanSelection}.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;

    } else if (humanSelection == "Rock" && computerSelection == "Scissors") {
        console.log("humanSelection = ", humanSelection);
        console.log("computerSelection = ", computerSelection);
        ++humanScore;
        return `You win! Rock beats Scissors.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
    } else if (humanSelection == "Paper" && computerSelection == "Rock") {
        console.log("humanSelection = ", humanSelection);
        console.log("computerSelection = ", computerSelection);
        ++humanScore;
        return `You win! Paper beats Rock.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
    } else if (humanSelection == "Scissors" && computerSelection == "Paper") {
        console.log("humanSelection = ", humanSelection);
        console.log("computerSelection = ", computerSelection);
        ++humanScore;
        return `You win! Scissors beats Paper.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;

    } else {
        console.log("humanSelection = ", humanSelection);
        console.log("computerSelection = ", computerSelection);
        ++computerScore;
        return `You lose! ${computerSelection} beats ${humanSelection}.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));