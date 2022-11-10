
// Global Variables
var playerOne = new Player("playerOne", "./assets/messi10.svg");
var playerTwo = new Player("playerTwo", "./assets/cr7.svg");
var currentGame 

// Selectors
var gameBoard = document.querySelector("#game-board");
var boardCells = document.querySelectorAll(".grid");
var boardCells = document.querySelectorAll("button");
var turnCounter = document.querySelector("#turn-counter");
var announcement = document.querySelector("#announcements");
var player1Wins = document.querySelector("#player1-win-count");
var player2Wins = document.querySelector("#player2-win-count");
var clearPlayerWins = document.querySelector("#clear-player-wins");

// Event Listeners 
window.addEventListener("load", createGame);
gameBoard.addEventListener("click", clickBoard);

// Functions
function createGame() {
    currentGame = new Game(playerOne, playerTwo);
}

function clickBoard(event) {
    var cellId = event.target.id; {
    if (currentGame.board[cellId] === "") {
        currentGame.setPlayerToken(cellId);
        }
    }
    renderBoard();
    if (currentGame.gameOver) {
        setTimeout(triggerBoardReset, 2000);
    } 
}

function renderBoard() { 
    for (var i = 0; i < boardCells.length; i++) {
        var cellId = boardCells[i].id;
        if (!currentGame.board[cellId]) {
            boardCells[i].innerHTML = "";
        } else {
            boardCells[i].innerHTML =
            `<img class='img-pop' src=${currentGame.board[cellId]}>`;
        }
    }
}

// createGame (new game on refresh)

// clickBoard (player token on dom)
// for loop/conditional for tile that is placed?

// turnCounter (change token to indicate turn)
// swap src=${} dependent on currentTurn

// displayAnnoucement (show the winner or draw/update currentGame.players[i]winsCount = player1-win-count)

function triggerBoardReset() {
    currentGame.resetGame()
    renderBoard();
    announcement.innerText = "";
}