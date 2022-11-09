
// Global Variables
var playerOne = new Player("playerOne", "./assets/messi10.svg");
var playerTwo = new Player("playerTwo", "./assets/cr7.svg")
var currentGame = new Game(playerOne, playerTwo);

// Selectors
var gameBoard = document.querySelector("#game-board");
var boardCells = document.querySelectorAll(".grid");
var turnCounter = document.querySelector("#turn-counter");
var announcement = document.querySelector("#announcements");
var player1Wins = document.querySelector("#player1-win-count");
var player2Wins = document.querySelector("#player2-win-count");
var clearPlayerWins = document.querySelector("#clear-player-wins");

// Event Listeners 
window.addEventListener("load", createGame);
// Functions
// createGame (new game on refresh)

// clickBoard (player token on dom)
// for loop/conditional for tile that is placed?

// renderBoard

// turnCounter (change token to indicate turn)
// swap src=${} dependent on currentTurn

// displayWinner (show the winner/invoke updateWinCount)


// updateWinCount (increase win count on page)

// displayDraw (show the Draw message)


function triggerBoardReset() {
    setTimeout(game.resetGame(), 2000);
}