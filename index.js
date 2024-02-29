class TicTacToe {
    constructor (board) {
        // Game structure
        this.setPlayer = []
        this.boardLayout = board
        this.board = new Map()
        this.winner = ""
        this.boardHorizontal = []
        this.boardVertical = []
        this.boardDiagonal = []
        this.maxTurn = this.boardLayout ** 2
    }

    // Game methods
    initPlayer = (player, sign) => {
        this.setPlayer.push({player, sign})
    }

    initGame = () => {
        this.generateHorizontal()
        this.generateVertical()
        this.generateDiagonal()
    }

    // Player action
    playerMove = (coordinates, player) => {
        if (this.maxTurn !== this.board.size && !this.winner) {
            // Check coordinates availability
            if (!this.board.get(coordinates)) {
                this.board.set(coordinates, player)
                if (this.checkWinner(player)) {
                    console.log("The winner is " + `${this.winner}`)
                }
                return true
            }
            console.log('Not available!')
        }
    }

    // Check winner
    checkWinner = (player) => {
        let horizontalCheck = false
        let verticalCheck = false
        let diagonalCheck = false

        // check horizontal
        horizontalCheck = this.checkWinnerRow(this.boardHorizontal, player)
        verticalCheck = this.checkWinnerRow(this.boardVertical, player)
        diagonalCheck = this.checkWinnerRow(this.boardDiagonal, player)
        if (horizontalCheck || verticalCheck || diagonalCheck) {
            this.winner = player
            return true
        }
        return false
    }

    generateHorizontal = () => {
        let horizontal = []
        for (let i = 0; i < this.boardLayout; i++) {
            for (let j = 0; j < this.boardLayout; j++) {
                horizontal.push(`[${i},${j}]`)
                if (j === this.boardLayout - 1) {
                    this.boardHorizontal.push(horizontal)
                    horizontal = []
                }
            }
        }
    }

    generateVertical = () => {
        let vertical = []
        for (let i = 0; i < this.boardLayout; i++) {
            for (let j = 0; j < this.boardLayout; j++) {
                vertical.push(`[${j},${i}]`)
                if (j === this.boardLayout - 1) {
                    this.boardVertical.push(vertical)
                    vertical = []
                }
            }
        }
    }

    generateDiagonal = () => {
        let diagonal = []
        for (let i = 0; i < this.boardLayout; i++) {
            diagonal.push(`[${i},${i}]`)
            if (i === this.boardLayout - 1) {
                this.boardDiagonal.push(diagonal)
                diagonal = []
            }
        }
    }

    checkWinnerRow = (row = [], player) => {
        let count = 0
        let checkPlayerMove = []
        let match = []
        this.board.forEach((item, key) => {
            if (player === item) {
                checkPlayerMove.push(key)
            }
        })
        
        if (checkPlayerMove.length >= this.boardLayout && count !== this.boardLayout) {
            for (let j = 0; j < row.length; j++) {
                count = 0
                for (let i = 0; i < checkPlayerMove.length; i++) {
                    if (row[j].includes(checkPlayerMove[i])) {
                        count++
                    }
                }
                if (count === this.boardLayout) {
                    match = row[j]
                    break;
                }
            }
        }
        if (count === this.boardLayout) {
            return true
        }
        return false
    }
}

let ticTacToe
ticTacToe = new TicTacToe(3)
ticTacToe.initGame()
ticTacToe.initPlayer("Player1", "X")
ticTacToe.initPlayer("Player2", "O")

// Horizontal Winner
// ticTacToe.playerMove("[0,0]", "Player1")
// ticTacToe.playerMove("[1,0]", "Player2")
// ticTacToe.playerMove("[0,1]", "Player1")
// ticTacToe.playerMove("[1,1]", "Player2")
// ticTacToe.playerMove("[0,2]", "Player1")
// ticTacToe.playerMove("[1,2]", "Player2")

ticTacToe = new TicTacToe(3)
ticTacToe.initGame()
ticTacToe.initPlayer("Player1", "X")
ticTacToe.initPlayer("Player2", "O")

// Vertical Winner
// ticTacToe.playerMove("[2,1]", "Player1")
// ticTacToe.playerMove("[0,0]", "Player2")
// ticTacToe.playerMove("[1,1]", "Player1")
// ticTacToe.playerMove("[1,0]", "Player2")
// ticTacToe.playerMove("[0,2]", "Player1")
// ticTacToe.playerMove("[2,0]", "Player2")

ticTacToe = new TicTacToe(3)
ticTacToe.initGame()
ticTacToe.initPlayer("Player1", "X")
ticTacToe.initPlayer("Player2", "O")

// Diagonal Winner
// ticTacToe.playerMove("[2,1]", "Player1")
// ticTacToe.playerMove("[0,0]", "Player2")
// ticTacToe.playerMove("[0,1]", "Player1")
// ticTacToe.playerMove("[1,1]", "Player2")
// ticTacToe.playerMove("[0,2]", "Player1")
// ticTacToe.playerMove("[2,2]", "Player2")