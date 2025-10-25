//event listeners - when first icon is clciked 
//code executes only when page is fully loaded 

const buttons = document.getElementsByClassName("btn");
const playerIcon = document.getElementById("player-icon");
const computerIcon = document.getElementById("computer-icon");
const messages = document.getElementById("result");
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let button of buttons) {
    buttons.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        runGame(playerChoice);
    });
}

//main game function

function runGame(playerChoice) {
    playerIcon.src = `assets/images/${choices[playerChoice]}.png`
    playerIcon.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * choices.length); //mention this code snippet in credits

    computerIcon.src = `assets/images/${choices[computerChoice]}.png`;
    computerIcon.alt = choices[computerChoice];

    let result = chooseWinner(choices[playerChoice], choices[computerChoice]); //credit snippet in readme

    addScores(result);

}

//code to express which choices beat other choices

const winsAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]

};

//DETERMINE WINNER 

function chooseWinner(player, computer) {
    if (player === computer) {
        return `You've tied! ${player}.`;
    } else if (winsAgainst[player].includes(computer)){
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `You lose! ${computer} beats ${player}.`;
    }
}
    
function addScores(result) {
    if (result.includes(win)){
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (result.includes("lose")) {
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }

    messages.textContent = result;
}

const playerPoints = parseInt(playerScore.textContent);
const computerPoints = parseInt(computerScore.textContent);

if (playerPoints >= 5) {
    messages.textContent = "You Won the Game!";
    disableButtons();
} else if (computerPoints >= 5){
    messages.textContent = "You Lost the Game!";
    disableButtons();
}

document.getElementsByClassName("restart").addEventListener("click", () => {
    playerScore.textContent = "0";
    computerScore.textContent = "0";

    const buttons = document.getElementsByClassName("restart-btn");
    for (let button of buttons) {
        button.disabled = false;
    }

    playerIcon.src = "";
    computerIcon.src = "";
})




