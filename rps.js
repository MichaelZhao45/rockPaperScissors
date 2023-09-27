/* Rock Paper Scissors Java Script Oden Project*/

function getComputerChoice() {                  // computer selection
    var num = Math.floor(Math.random() * 3);

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

function playRound(playerSelection, computerSelection) {    // play single round of game
    
    if (playerSelection === computerSelection) {
        return "Tie!";
    }
    else if (playerSelection == "rock") { 
        if (computerSelection == "paper") {           
            return "You Lose! Paper beats Rock";
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
       }
    }
    else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            return "You Win... Rock beats Paper";
        }
    }
    else if (playerSelection == "scissors") { 
        if (computerSelection == "paper") {
            return "You Win... Scissors beats Paper";
        }
    }
    else if (playerSelection == "paper") { 
        if (computerSelection == "rock") {
            return "You Win... Paper beats Rock";
        }
    }
    
}

const playerSelection = prompt("Enter Rock, Paper or Scissors").toLowerCase();  // make it case-insensitive
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection))