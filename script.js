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

console.log(getComputerChoice());

function getHumanChoice() {
    humanChoice = prompt("What's your move: Rock, Paper or Scissors?");
    if (humanChoice == "Rock") {
        return "Rock";
    } else if (humanChoice == "Paper") {
        return "Paper";
    } else {
        return "Scissors";
    }
}

console.log(getHumanChoice());