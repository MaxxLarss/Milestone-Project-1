export default class {
    constructor() {
        this.turn = "X";
        this.board = new Array(9).fill(null);
    }
}


window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    let board = [ '', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    const PlayerX_Won = 'Player_Won';
    const PlayerO_Won = 'PlayerO_Won';
    const TIE = 'TIE';

    // Index within the board
    
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const userAction = (tile, index) =>
        if(isValidAction(tile) && isGameActive) {
            TextTrackCueList.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }




tiles.forEach( (tile, index) => {
    tile.addEvenetListner('click', () => userAction(tile, index));
});

    resetButton.addEventListener('click', resetBoard);
);


// Have a start button

// choose between x or o

// 