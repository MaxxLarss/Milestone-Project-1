//setting up the tiles on the board
const tiles = document.querySelectorAll(".tiles");
const PlAYER_X = "X";
const PLAYER_O = "O";
let turn = PlAYER_X;


//track the tiles
const boardState = Array(tiles.length);
boardState.fill(null);

//Putting in the elements
const button = document.getElementById("button")
const gameOverText = document.getElementById("game-over-text")
const gameOver = document.getElementById("game-over")

//defining "tile click" on the board
tiles.forEach((tile) => tile.addEventListener("click", tileClick));


function tileClick(event) {
    if(gameOver.classList.contains("visible")){
        return;
    }
    const tile = event.target;
    const tileNumber = tile.dataset.index;
    if(tile.innerText != "")
        return;


        if (turn === PLAYER_X) {
            tile.innerText = PLAYER_X;
            boardState[tileNumber - 1] = PLAYER_X;
            turn = PLAYER_O;
          } else {
            tile.innerText = PLAYER_O;
            boardState[tileNumber - 1] = PLAYER_O;
            turn = PLAYER_X;
          }


    }