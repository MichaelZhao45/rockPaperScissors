/* Rock Paper Scissors Java Script Oden Project*/

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



function playRound(playerSelection, computerSelection) {    // play single round of game
    
    if (playerSelection === computerSelection) {
        return 2;
    }
    else if (playerSelection === "rock" && computerSelection === "paper") { 
        return 1;
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
            return 1;
        }
    
    else if (playerSelection === "paper" && computerSelection === "scissors") {
            return 1;
    }
    else {
        return 0;
    }

}


function game() {               // game function, plays game best of 5               

    let computerWins = 0;
    let playerWins = 0;
    
    const buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            const playerSelection = button.id;
            const computerSelection = getComputerChoice();
            const winner = playRound(playerSelection,computerSelection);

        });
        console.log("Computer Plays...", computerSelection);
        console.log("Player Plays...", playerSelection)
    
        if (winner === 1) {         // if returns 1, computer wins
            computerWins += 1;
        }
        else if (winner === 0) {    // if returns 0, player wins
            playerWins += 1;
        }
        else {
            computerWins += 0;
            playerWins += 0;
        }
    
        console.log("Computer Wins",computerWins);
        console.log("Player Wins",playerWins);
            
        if (computerWins === 3) {
            console.log("THE COMPUTER WINS");
        }
        else if (playerWins === 3) {
            console.log("THE PLAYER WINS")
        }
    
    
    });     

}
    


game();
