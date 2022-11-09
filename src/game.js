// Methods needed:
// Check for win conditions: 3 horizontally, vertically, or diagonally (checkWin) (then invoke resetGame)
// Check for draw condition (checkDraw) (then invoke resetGame)
// Reset game (resetGame)
// Track Turns

class Game {
    constructor() {
        this.board = {
            a1: "",
            a2: "",
            a3: "",
            b1: "",
            b2: "",
            b3: "",
            c1: "",
            c2: "",
            c3: ""
        };
        this.gameOver = false;
        this.players = [];
        this.currentTurn = "playerOne";
        this.turnCount = 0;
    }

    checkPlayerTurn() { // determine currentTurn
        this.turnCount += 1;
        this.checkDrawCondition();
        this.changeTurn();
    }

    changeTurn() {
        if (this.currentTurn === "playerOne") {
            this.currentTurn = "playerTwo";
        } else {
            this.currentTurn = "playerOne";
        }
    }

    setPlayerToken(cellId) { // get token from this.players
        for (var i = 0; i < this.players.length; i++) {
            if (!this.board[cellId] && this.players[i].name === this.currentTurn) {
                this.board[cellId] = this.players[i].token;
                this.checkPlayerTurn();
            }
        }
    } 

    checkWinCondition() {
        // check hor/vert/diag/draw methods
        var winningToken = "";
        this.checkHorizontalWin();
        this.checkVerticalWin();
        this.checkDiagonalWin();

        for (var i = 0; i < this.players.length; i++) {
            winningToken = this.players[i].token;
            this.players[i].winsCount += 1;
            currentGame.gameOver = true;
        }
    }

    checkHorizontalWin() { 
        if (this.board.a1 === this.board.a2 && this.board.a2 === this.board.a3) {
            return this.board.a1;
        } else if (this.board.b1 === this.board.b2 && this.board.b2 === this.board.b3) {
            return this.board.b1;
        } else if (this.board.c1 === this.board.c2 && this.board.c2 === this.board.c3) {
            return this.board.c1;
        } else {
            return "";
        }
    }

    checkVerticalWin() {
        // vertical win conditions include
        // [[0], [3], [6]]
        // [[1], [4], [7]]
        // [[2], [5], [8]]
        if (this.board.a1 === this.board.b1 && this.board.b1 === this.board.c1) {
            winningToken = this.board.a1;
        } else if (this.board.a2 === this.board.b2 && this.board.b2 === this.board.c2) {
            winningToken = this.board.a2;
        } else if (this.board.a3 === this.board.b3 && this.board.b3 === this.board.c3) {
            winningToken = this.board.a3;
        } else {
            return "";
        }
    }

    checkDiagonalWin() {
        // diagonal win conditions include
        // [[0], [4], [8]]
        // [[2], [4], [6]]
        if (this.board.a1 === this.board.b2 && this.board.b2 === this.board.c3) {
            winningToken = this.board.a1;
        } else if (this.board.a3 === this.board.b2 && this.board.b2 === this.board.c1) {
            winningToken = this.board.a3;
        } else {
            return "";
        }
    }

    checkDrawCondition() {
        if (this.turnCount > 8) {
            currentGame.gameOver = true;
        }
    }

    resetGame() {
         // currentGame.turnCount = 0;
    }
}