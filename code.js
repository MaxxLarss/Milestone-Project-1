// variables
let playerText = document.getElementById('playerText')
let resetBtn = document.getElementById('resetBtn')
let tiles = Array.from(document.getElementsByClassName('tile'))

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)


const startGame = () => {
    tiles.forEach(tile => tile.addEventListener('click', tileClicked))
}

// Creating a function on click the tiles & 'e' is the DOM element
function tileClicked(e) {
    const id = e.target.id

    if(!spaces[id]){
        spaces[id]= currentPlayer
        e.target.innerText = currentPlayer

        if(playerHasWon() !==false){
            playerText = '${currentPlayer} has won!'
            let winning_blocks = playerHasWon()
        }

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}


//Showing on tic tac toe board of combinations of winning
const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,4],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

// Arranging array of the winningPoint from above to a,b,c
function playerHasWon() {
    for (const condition of winningCombinations) {
        let [a, b, c] = condition

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}

//Setting up reset button function
resetBtn.addEventListener('click',reset) 

function reset() {
    spaces.fill(null)

    tiles.forEach(tile => {
        tile.innerText = ''
    })
    currentPlayer = X_TEXT
}

startGame()