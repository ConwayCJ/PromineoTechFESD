let currentPlayer
let turnCount
const gameBoard = [
    '', '', '',
    '', '', '',
    '', '', '',
]
/*
    Board Indexes

    [0], [1], [2],
    [3], [4], [5],
    [6], [7], [8], */

function changePlayer () {
    if (currentPlayer == 'X') {
        currentPlayer = 'O'
        $('.turn').text(`Player 2's Turn!`)
    } else {
        currentPlayer = 'X'
        $('.turn').text(`Player 1's Turn!`)
    }
}

const handlePlayerMove = function(event) {
    let gameWon = false
    const box = event.target
    if (box.innerHTML == '') {
        box.innerHTML = currentPlayer
    } else {
        return
    }
    turnCount++
    let boxIndex = box.getAttribute('data-cell-index')
    gameBoard[boxIndex] = currentPlayer
    if(checkWinner()) {
        gameWon = true
        $('.turn').text(`${currentPlayer} wins!`)
        removeListeners()
        return
    }

    console.log(turnCount,gameWon)
    if (turnCount === 9 && gameWon == false) {
        $('.turn').text('Tie!')
        removeListeners()
        return
    }

    changePlayer()
}

$('.board').on('click', handlePlayerMove)

function removeListeners () {
    $('.board').off()
}

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

 function checkWinner() {
    let playerWon = false;

    winningCombinations.forEach((combination) => {
        if (playerWon) {
            return;
        }
       //For each iteration, take each value from our combination
       //and compare to see if THAT position on our gameBoard
       // is == to currentPlayer       
       playerWon = combination.every(index => gameBoard[index] === currentPlayer);
        
    })
    console.log(playerWon)
    return playerWon;
}

function startGame() {
    $('.board').on('click', handlePlayerMove)
    currentPlayer = 'X'
    $('.turn').text(`Player 1's Turn!`)
    turnCount = 0
}

$('.resetButton').on('click', function () {
    $('.box').empty()
    startGame()
    gameBoard.fill('')
})

startGame()