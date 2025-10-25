//event listeners - when first icon is clciked 
//code executes only when page is fully loaded 

const buttons = document.getElementsByClassName("btn");
const playerIcon = document.getElementById //add icon option to html code?
const computerIcon = document.getElementById //add icon option to html code?
const messages = document.getElementById //add space for this in html
const playerScore = document.getElementById("player-score");
const computerScore = document.getElementById("computer-score");
//const result = document.getElementById("result");
const choices = ["rock", "paper", "scissors", "lizard", "spock"];

for (let buttons of buttons) {
    buttons.addEventListener("click", function () {
        let playerChoice = this.getAttribute("data-choice");
        playGame(playerChoice);
    });
}

//main game function

function runGame(playerChoice) {
    playerIcon.src = `assets/images/${choices[playerChoice]}.png`
    playerIcon.alt - choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 4); //mention this code snippet in credits

    computerIcon.src = `assets/images/${choices[computerChoice]}.png`;
    computerIcon.alt = choices[computerChoice];

    let result = chooseWinner(choices[playerChoice], choices[computerChoice]); //credit snippet in readme

    addScores(result);

}

//DETERMINE WINNER 

function findWinner(player, computer) {
    if (player === computer) {
        return `You've tied! ${player}.`;
    } else if (winsAgainst[player].includes(computer)){
        return `You win! ${player} beats ${computer}.`;
    } else {
        return `You lose! ${computer} beats ${player}.`;
    }
}
    

//code to express which choices beat other choices

const winsAgainst = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"]

};

//if (winsAgainst[player].includes(computer)){
// return `You win! (${player} beats ${computer})`;
//} else {
   // return `You lose! (${computer} beats ${player})`;
//}
// return `You lose! ${computer} beats ${player}.`;


//code to determine winner 








function computerOption() {

}

function displayIcons() {

}

function displayWinner() {

}

function incrementScore() {

}
