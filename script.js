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