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

        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
    }
}

startGame()