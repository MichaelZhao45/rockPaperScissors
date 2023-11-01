/* Rock Paper Scissors Java Script Oden Project*/

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {                  // computer selection
    let num = Math.floor(Math.random() * 3);

    if (num == 0) {
        return "rock";
    }
    else if (num == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateScore() {
    const scorePlayerDiv = document.getElementById("player");
    const scoreComputerDiv = document.getElementById("computer");
    scorePlayerDiv.textContent = playerScore;
    scoreComputerDiv.textContent = computerScore;

}

function getWinner() {
    const winnerDiv = document.getElementById("winner");
    if (playerScore === 5) {
        winnerDiv.textContent = "Player Wins!";
    }
    else if (computerScore === 5) {
        winnerDiv.textContent = "Computer Wins";
    }
    
}


function playRound(playerSelection) {    // play single round of game
    
    const computerSelection = getComputerChoice();      // get computer Selection
    let result;
    let computerWin = false;
    let playerWin = false;
    const computerDiv = document.getElementById("computerChoice");
    computerDiv.textContent = computerSelection;

    if (playerSelection === computerSelection) {
        result = "Tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") { 
        result = "Computer Wins";
        computerWin = true;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        result = "Computer Wins";
        computerWin = true;
    }
    
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        result = "Computer Wins";
        computerWin = true;
    }
    else {
        result = "Player Wins";
        playerWin = true;
    }

    if (playerWin) {
        playerScore += 1;
        console.log("Player won")
    }
    if (computerWin) {
        computerScore += 1;
        console.log("Computer won")
    }

    const resultDiv = document.getElementById("results");
    resultDiv.textContent = result;

    updateScore();
    getWinner();
    

}

