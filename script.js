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
        if (humanSelection == computerSelection) {
            return `Tie! Both drew ${humanSelection}.`;

        } else if (humanSelection == "rock" && computerSelection == "Scissors") {
            ++humanScore;
            return `You win! Rock beats Scissors.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
        } else if (humanSelection == "paper" && computerSelection == "Rock") {
            ++humanScore;
            return `You win! Paper beats Rock!\nHuman score = ${humanScore}\nComputer score = ${computerScore}`;
        } else if (humanSelection == "scissors" && computerSelection == "Paper") {
            ++humanScore;
            return `You win! Scissors beats Paper!\nHuman score = ${humanScore}\nComputer score = ${computer}`;

        } else {
            ++computerScore;
            return `You lose! ${computerSelection} beats ${humanSelection}.\nHuman score = ${humanScore}\nComputer score = ${computerScore}`
        }
        
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    console.log(playRound(humanSelection, computerSelection));
}