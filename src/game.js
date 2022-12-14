class Game {
    constructor(playerOne, playerTwo) {
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
        this.isDraw = false;
        this.players = [playerOne, playerTwo];
        this.firstPlayer = "playerOne";
        this.currentTurn = "playerOne";
        this.turnCount = 1;
    }

    checkPlayerTurn() { 
        this.turnCount += 1;
        this.checkDrawCondition();
        this.checkWinCondition();
        this.changeTurn();
    }

    changeTurn() {
        if (this.currentTurn === "playerOne" && !this.gameOver) {
            this.currentTurn = "playerTwo";
        } else if (this.currentTurn === "playerTwo" && !this.gameOver) {
            this.currentTurn = "playerOne";
        }
    }

    setPlayerToken(cellId) { 
        for (var i = 0; i < this.players.length; i++) {
            if (!this.gameOver && !this.isDraw && !this.board[cellId] && this.players[i].name === this.currentTurn) {
                this.board[cellId] = this.players[i].token;
                this.checkPlayerTurn();
            }
        }
    } 

    checkWinCondition() {
        var winningToken = this.checkHorizontalWin();
        
        if (!winningToken) {
            winningToken = this.checkVerticalWin();
        } 
        if (!winningToken) {
            winningToken = this.checkDiagonalWin();
        }
        for (var i = 0; i < this.players.length; i++) {
            if (winningToken === this.players[i].token) {
                this.players[i].increaseWins();
                this.players[i].storeWins();
                this.gameOver = true;
                this.isDraw = false;
            }
        }
    }

    checkHorizontalWin() { 
        if (this.board.a1 && this.board.a1 === this.board.a2 && this.board.a2 === this.board.a3) {
            return this.board.a1;
        } else if (this.board.b1 && this.board.b1 === this.board.b2 && this.board.b2 === this.board.b3) {
            return this.board.b1;
        } else if (this.board.c1 && this.board.c1 === this.board.c2 && this.board.c2 === this.board.c3) {
            return this.board.c1;
        } else {
            return "";
        }
    }

    checkVerticalWin() {
        if (this.board.a1 && this.board.a1 === this.board.b1 && this.board.b1 === this.board.c1) {
            return this.board.a1;
        } else if (this.board.a2 && this.board.a2 === this.board.b2 && this.board.b2 === this.board.c2) {
            return this.board.a2; 
        } else if (this.board.a3 && this.board.a3 === this.board.b3 && this.board.b3 === this.board.c3) {
            return this.board.a3;
        }else {
            return "";
        }
    }

    checkDiagonalWin() {
        if (this.board.a1 && this.board.a1 === this.board.b2 && this.board.b2 === this.board.c3) {
            return this.board.a1;
        } else if (this.board.a3 && this.board.a3 === this.board.b2 && this.board.b2 === this.board.c1) {
              return this.board.a3;
        } else {
            return "";
        }
    }

    checkDrawCondition() {
        if (this.turnCount > 8) {
            this.isDraw = true;
            this.gameOver = false;
        }
    }

    resetGame() {
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
        this.isDraw = false;
        this.turnCount = 0;
        if (this.firstPlayer === "playerOne") {
            this.firstPlayer = "playerTwo";
            this.currentTurn = "playerTwo";
        } else {
            this.firstPlayer = "playerOne";
            this.currentTurn = "playerOne";
        }
    }
}