// Computer's choice function
function getComputerChoice() {
    let randNum = Math.random(); // 0 to 1
    if (randNum < 0.33) {
        return "rock";
    }
    else if (randNum < 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

// Human choice via prompt (not used)
function getHumanChoice(){
    let humanChoice = prompt("Enter your choice:");
    return humanChoice.toLowerCase();
}

let divResult = document.querySelector("#results");
    
let computerScore = 0;
let humanScore = 0;
let gameEnded = false;

function playRound(humanChoice, computerChoice){
    if(gameEnded) return;

    if(humanChoice === "rock"){
        if(computerChoice === "scissors"){
            divResult.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
        else if(computerChoice === "paper"){
            divResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        else {
            divResult.textContent = "Draw! " + humanChoice + " and " + computerChoice;
        }
    }
    else if(humanChoice === "paper"){
        if(computerChoice === "rock"){
            divResult.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
        else if(computerChoice === "scissors"){
            divResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        else {
            divResult.textContent = "Draw! " + humanChoice + " and " + computerChoice;
        }
    }
    else if(humanChoice === "scissors"){
        if(computerChoice === "paper"){
            divResult.textContent = "You win! " + humanChoice + " beats " + computerChoice;
            humanScore++;
        }
        else if(computerChoice === "rock"){
            divResult.textContent = "You lose! " + computerChoice + " beats " + humanChoice;
            computerScore++;
        }
        else {
            divResult.textContent = "Draw! " + humanChoice + " and " + computerChoice;
        }
    }

    // Check if either player reached 5
    if(humanScore === 5 || computerScore === 5){
        endGame();
    }
}

let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

function rockSelected() {
    playRound("rock", getComputerChoice());
}
function paperSelected() {
    playRound("paper", getComputerChoice());
}
function scissorsSelected() {
    playRound("scissors", getComputerChoice());
}

btnRock.addEventListener("click", rockSelected);
btnPaper.addEventListener("click", paperSelected);
btnScissors.addEventListener("click", scissorsSelected);

function endGame(){
    if(humanScore > computerScore){
        divResult.innerHTML += "<br>You won the game!";
    }
    else if(computerScore > humanScore){
        divResult.innerHTML += "<br>You lost the game!";
    }
    else{
        divResult.innerHTML += "<br>Game ended as draw!";
    }
    divResult.innerHTML += "<br>Your score: " + humanScore + " Computer score: " + computerScore;
    gameEnded = true;
}