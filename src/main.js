
// Global Variables
var playerOne = new Player("playerOne", "./assets/messi10.svg");
var playerTwo = new Player("playerTwo", "./assets/cr7.svg");
var currentGame 

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
gameBoard.addEventListener("click", clickBoard);

// Functions
function createGame(playerOne, playerTwo) {
    currentGame = new Game(playerOne, playerTwo);
    currentGame.players.push(playerOne, playerTwo);
    console.log(currentGame)
}
// createGame (new game on refresh)

// clickBoard (player token on dom)
// for loop/conditional for tile that is placed?

// function clickBoard(event) {
//     console.log(currentGame)
//     console.log(Object.values(currentGame.board))
//     var cellId = event.target.id; {
//     if (currentGame.board[cellId] === "") {
//         currentGame.setPlayerToken(cellId);
//         }
//     }
//     console.log(currentGame)
//     console.log(Object.values(currentGame.board))
//     renderBoard();
// }

// function renderBoard() {
//     gameBoard.innerHTML = "";

//     for (var i = 0; i < currentGame.players.length; i++) {
//         var playerTileToken = "./assets/messi10.svg";

//         if (currentGame.players[i].token === playerTileToken) {
//             playerTileToken = "./assets/cr7.svg";
//         }

//         gameBoard.innerHTML += 
//         `

//         <img class="player-token" src=${playerTileToken} alt="player 1 messi">`;
//     }

// }

// turnCounter (change token to indicate turn)
// swap src=${} dependent on currentTurn

// displayWinner (show the winner/invoke updateWinCount)


// updateWinCount (increase win count on page)

// displayDraw (show the Draw message)


function triggerBoardReset() {
    setTimeout(game.resetGame(), 2000);
}