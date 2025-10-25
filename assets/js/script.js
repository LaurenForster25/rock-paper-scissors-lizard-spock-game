//event listeners - when first icon is clciked 
//code executes only when page is fully loaded 

const buttons = document.getElementsByClassName("btn");
const playerIcon = document.getElementById //add icon option to html code?
const computerIcon = document.getElementById //add icon option to html code?
const messages = document.getElementById //add space for this in html
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let buttons of buttons) {
    buttons.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

//main game function

function runGame() {

}

function computerOption() {

}

function displayIcons() {

}

function displayWinner() {

}

function incrementScore() {

}
