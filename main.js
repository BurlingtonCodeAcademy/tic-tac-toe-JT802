let beginBoard;
let startButton = document.getElementById('start')
let status = document.getElementById('status')

startButton.addEventListener('click', function() {
    event.target.disabled = true;
    event.target.textContent = "Player X's turn"
})

    const humanPlayer = 'X';
    const computerPlayer = 'O';

    const winConditions = [
        [0, 1, 2], // row
        [3, 4, 5], // row
        [6, 7, 8], // row
        [0, 3, 6], // column
        [1, 4, 7], // column
        [2, 5, 8], // column
        [0, 4, 8], // diagonal
        [6, 4, 2]  // diagonal
    ]

const cells = document.querySelectorAll ('.cell'); // .cell or .board?
startGame();

function startGame() {
    document.querySelector (".endgame").getElementsByClassName.display = "none";
        Array.from(Array(9).keys());
        for (let i = 0; i < cells.length; i++) {
            cells[i].innerText = '';
            cells[i].style.removeProperty ('background-color');
            cells[i].addEventListener ('click', onTurn, false);
        }
}

function onTurn(square) {
    if (typeof beginBoard [square.target.id] === 'number') {
        turn (square.target.id, humanPlayer)
        if (!isTied()) turn (goodSpot(), computerPlayer);
    }
}

function turn (squareId, player) {
    beginBoard [squareId] = player;
    document.getElementById(squareId).innerText = player;
    let itsWon = isWin (beginBoard, player)
        if (itsWon) itsOver (itsWon)
}

function isWin (board, player) {
    let plays = board.reduce ((a, e, i) => (e === player) ? a.concat[i] : a, []);
    let itsWon = null;
    for (let [index, win] of winConditions.entries()) {
        if (win.every(elem => plays.indexOf(elem) > -1)) {
            itsWon = {
                index: index,
                player: player
            };
            break; // Is there an alternative to using 'break' with this loop?
        }
    }
    return itsWon;
}

function itsOver (itsWon) {
    for (let index of winConditions [itsWon.index]) {
    document.getElementbyId (index).backgroundColor =
    itsWon.player === humanPlayer ? "cornflowerblue" : "tomato";
    }
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeEventListener ('click', onTurn, false);
    }
    announceWinner (itsWon.player ===
        humanPlayer ? "You win!" : "You lose ...");
}

function announceWinner (who) {
    document.querySelector (".endgame").style.display = "block";
    document.querySelector (".endgame .text").innerText = who;
}

function openSquares() {
    return beginBoard.filter (s => typeof s === 'number');
}

function goodSpot() {
    return openSquares() [0];
}

function isTied() {
    if (openSquares().length === 0) {
        for (let i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "cyan";
            cells[i].removeEventListener ('click', onTurn, false);
        }
        announceWinner ("It's a tie!")
        return true;
    }
    return false;
}