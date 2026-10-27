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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == computerChoice) {
            return `Tie! Both drew ${humanChoice}.`;

        } else if (humanChoice == "rock" && computerChoice == "Scissors") {
            ++humanScore;
            return `You win! Rock beats Scissors.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
        } else if (humanChoice == "paper" && computerChoice == "Rock") {
            ++humanScore;
            return `You win! Paper beats Rock!\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
        } else if (humanChoice == "scissors" && computerChoice == "Paper") {
            ++humanScore;
            return `You win! Scissors beats Paper!\nHuman score = ${humanScore}\nComputer score = ${computer}`;

        } else {
            ++computerScore;
            return `You lose! ${computerChoice} beats ${humanChoice}.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
}