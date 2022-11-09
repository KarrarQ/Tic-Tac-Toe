// Selectors


// Global Variables
var playerOne = new Player("playerOne", "./assets/messi10.svg");
var playerTwo = new Player("playerTwo", "./assets/cr7.svg")
var currentGame = new Game(playerOne, playerTwo);


// Event Listeners 



// Functions

function triggerBoardReset() {
    setTimeout(game.resetGame(), 2000);
}