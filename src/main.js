
// Global Variables
var playerOne = new Player("playerOne", "./assets/messi10.svg");
var playerTwo = new Player("playerTwo", "./assets/cr7.svg");
var currentGame;

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
    showCurrentTurn()
}

function showCurrentTurn() {
    for (var i = 0; i < currentGame.players.length; i++) {
        if (currentGame.currentTurn === currentGame.players[i].name) {
            turnCounter.innerHTML = 
            `The <img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}">'s Turn`
            }
            // if(currentGame.gameOver) {
            //     turnCounter.innerHTML = "";
            // }
        }
    }

function clickBoard(event) {
    var cellId = event.target.id;  
    if (currentGame.board[cellId] === "") {
        currentGame.setPlayerToken(cellId);
        
    }
    renderBoard();
    if (currentGame.gameOver || currentGame.isDraw) {
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
    console.log("turnCount:", currentGame.turnCount)
    console.log("firstPlayer:", currentGame.firstPlayer)
    console.log("currentTurnPlayer:", currentGame.currentTurn)
    console.log("gameOver:", currentGame.gameOver)
    console.log("isDraw:", currentGame.isDraw)
    showCurrentTurn();
    updatePlayerWins();
    displayAnnouncement();
}

function displayAnnouncement() {
    for (var i = 0; i < currentGame.players.length; i++) {
        if (currentGame.isDraw && !currentGame.gameOver) {
            announcement.innerHTML = `It's a Draw!`;
        } else if (currentGame.gameOver && currentGame.currentTurn === currentGame.players[i].name) {
            announcement.innerHTML =
            `<img class="player-token" src="${currentGame.players[i].token}" alt="${currentGame.players[i].name}"> Wins!`;
        }
    }
}

function updatePlayerWins() {
    player1Wins.innerHTML = 
    `Wins: ${currentGame.players[0].winsCount}`;

    player2Wins.innerHTML = 
    `Wins: ${currentGame.players[1].winsCount}`;
}

function triggerBoardReset() {
    currentGame.resetGame()
    announcement.innerHTML = "";
    renderBoard();
}



// swap src=${} dependent on currentTurn


