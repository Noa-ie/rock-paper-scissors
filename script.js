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
    if (move == "Rock") {
        return "Rock";
    } else if (move == "Paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

let humanScore = 0;
let computerScore = 0;