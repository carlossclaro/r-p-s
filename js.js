let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 0;

const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playSingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        resultDiv.textContent = "It's a tie!";
        tieScore += 1;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        resultDiv.textContent = "Player wins!";
        playerScore += 1;
    } else {
        resultDiv.textContent = "Computer wins!";
        computerScore += 1;
    }

    round++;
    updateScores();
}

function updateScores() {
    resultDiv.textContent += ` Player: ${playerScore}, Computer: ${computerScore}, Tie: ${tieScore}`;

    if (playerScore === 5) {
        resultDiv.textContent += ">Player wins the match<";
    } else if (computerScore === 5) {
        resultDiv.textContent += ">Computer wins the match<";
    }
}

let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

rock.addEventListener('click', () => {
    playerSelection = "rock";
    playGame();
});
paper.addEventListener('click', () => {
    playerSelection = "paper";
    playGame();
});
scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    playGame();
});

function playGame() {
    if (round < 5) {
        let computerSelection = getComputerChoice();
        playSingleRound(playerSelection, computerSelection);
    }
}
