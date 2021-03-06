const gameBoard = (() => {
    let gameboard = [];
    const gridBoard = document.getElementById('grid-board');
    

    const createGridBoard = (() => {
        for (let i = 0; i < 9; i++) {
            const gridCell = document.createElement('div');
            gridCell.dataset.cell = i;
            gameboard.push(gridCell);
            gridBoard.appendChild(gridCell);
        }
    })();

    return {
        createGridBoard,
        gameboard,
        gridBoard
    };

})();

const playerFactory = (playerMark, botMark) => {
    return {
        playerMark,
        botMark,
    }
} 


const displayController = (() => {

    const players = [playerFactory('X', 'O'), playerFactory('O', 'X'), 
    playerFactory('', '')];
    const [playerX, playerO, playerClear] = players;
    const buttons = [document.querySelector('.button.x'), document.querySelector('.button.o'),
    document.querySelector('.button.reset')];
    const [xButton, oButton, resetButton] = buttons;
    
    const winConOne = [ [0, 4, 8], [0, 3, 6], [2, 5, 8], [1, 4, 7], [2, 4, 6], [0, 1, 2], [6, 7, 8], [3, 4, 5] ]

    const playerChoice = (function() {
        for (let i = 0; i < 3; i++) {
            buttons[i].addEventListener('click', function() {
                user = players[i]
            })
        }
    })();

const checker = (() => {
    let checkArr = [];
    
    const toNine = () => {
        for (let i = 0; i < 9; i++) {
            checkArr.push('')
        }
    }
    toNine();


    gameBoard.gridBoard.addEventListener('click', function(e) {

        if (!(typeof user == 'undefined') && 
        gameBoard.gameboard[e.target.dataset.cell].innerText == '') {
            if (user.playerMark == 'X') {
                e.target.style.backgroundColor = 'red';
                e.target.style.color = 'rgba(245, 222, 179, 0.685)';
                e.target.style.textShadow = '0.5px -2px 0.3px rgb(255 255 255), 0 0 1em rgb(255 17 0)';
                e.target.innerText = user.playerMark;
            } else if (user.playerMark == 'O'){
                e.target.style.backgroundColor = 'blue' 
                e.target.style.color = 'white';
                e.target.style.textShadow = '-2px 0 8px white';
                e.target.innerText = user.playerMark;
            }
        }
        
        checkArr[e.target.dataset.cell] = e.target.innerText;
        if (checkArr.length == 9 && checkTie(checkArr, '') == false) {
            clearBoard('GG! TIE!');
        }

        function checkTie(arr, val) {
            return arr.some(function(arrVal) {
                return val === arrVal;
            })
        }
        for (wincon of winConOne){
            if ((user.playerMark == 'X' && gameBoard.gameboard[wincon[0]].innerText == 'X' 
            && gameBoard.gameboard[wincon[1]].innerText == 'X' 
            && gameBoard.gameboard[wincon[2]].innerText == 'X')) {
                clearBoard('GG PLAYER X Wins!');
            }
            else if (user.playerMark == 'O' && gameBoard.gameboard[wincon[0]].innerText == 'O' 
            && gameBoard.gameboard[wincon[1]].innerText == 'O' 
            && gameBoard.gameboard[wincon[2]].innerText == 'O') {
                clearBoard('GG PLAYER O Wins!');
            }
        }
        user = playerClear;
    })
    return {
        toNine,
        checkArr
    }
})();

function clearBoard(winner) {
    user = playerClear;
        oButton.style.visibility = 'hidden';
        xButton.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
        checker.checkArr.length = 0;
        checker.toNine();
    resetButton.innerText = winner;
    }

    resetButton.addEventListener('click', function() {
        for (let i = 0; i < gameBoard.gameboard.length; i++) {
            gameBoard.gameboard[i].innerText = ''
            gameBoard.gameboard[i].style.backgroundColor = 'white'                
            }
        resetButton.style.visibility = 'hidden'
        gameBoard.gridBoard.style.visibility = 'visible'
        oButton.style.visibility = 'visible'
        xButton.style.visibility = 'visible'
    })


    return {
        playerChoice,
    }
})();








