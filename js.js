let playerScore = 0;
let computerScore = 0;

function getComputerChoice () {
    //Create array with 3 choices 
    choices = ['Rock', "Paper", "Scissors"];

    return (choices[(Math.floor(Math.random() * choices.length))]);

}

// Function that plays a single round of RPS
function playSingleRound(playerSelection, computerSelection) {

    //convert to lowercase 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log("It's a tie!")
    }
    else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
) {
    console.log("Player wins!")
    playerScore += 1;
}  else {
    console.log("Computer wins!")
    computerScore += 1;
}
}

function playGame() {

    for (i = 0; i<5; i++) {
    const playerSelection = prompt("Select: Rock, Paper or Sisscors?");
    const computerSelection = getComputerChoice();

    playSingleRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore) {
        console.log("Player wins the match");

    } else {
        console.log("Computer wins the match");
    }


}

playGame();


