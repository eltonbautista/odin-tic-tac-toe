const gameBoard = (() => {
    let gameboard = [];
    const gridBoard = document.getElementById('grid-board');
    

    const createGridBoard = () => {
        for (let i = 0; i < 9; i++) {
            const gridCell = document.createElement('div');
            gameboard.push(gridCell);
            gridBoard.appendChild(gridCell);
        }
    }

    return {
        createGridBoard,
        gameboard,
        gridBoard
    };

})();
gameBoard.createGridBoard();

const playerFactory = (playerMark, botMark) => {
    return {
        playerMark,
        botMark,
    }
}

const displayController = (() => {
    const playerX = playerFactory('X', 'O');
    const playerO = playerFactory('O', 'X');
    const playerClear = playerFactory('', '')
    const xButton = document.querySelector('.button.x');
    const oButton = document.querySelector('.button.o');
    const resetButton = document.querySelector('#play-again')
    
    const winConOne = [ [0, 4, 8], [0, 3, 6], [2, 5, 8], [1, 4, 7], [2, 4, 6], [0, 1, 2], [6, 7, 8], [3, 4, 5] ]

    const playerChoice = function() {

        xButton.addEventListener('click', function() {
            user = playerX;
            oButton.style.visibility = 'hidden'
            xButton.style.visibility = 'hidden'
        })
        oButton.addEventListener('click', function() {
            user = playerO;
            oButton.style.visibility = 'hidden'
            xButton.style.visibility = 'hidden'
        })
        resetButton.addEventListener('click', function() {
            user = playerClear;
        })
    }

    const checker = function() {
        for (let i = 0; i < gameBoard.gameboard.length; i++) {
            gameBoard.gameboard[i].addEventListener('click', function() {
                if (!(typeof user == 'undefined') && gameBoard.gameboard[i].innerText === '') {
                    if (user.playerMark == 'X') {
                        this.style.backgroundColor = 'red';
                        this.style.color = 'rgba(245, 222, 179, 0.685)';
                        this.style.textShadow = '0.5px -2px 0.3px rgb(255 255 255), 0 0 1em rgb(255 17 0)';
                    } else {
                        this.style.backgroundColor = 'blue' 
                        this.style.color = 'white';
                        this.style.textShadow = '-2px 0 8px white';
                    }
                this.innerText = user.playerMark;
                for (wincon of winConOne){
                if ((user.playerMark == 'X' && gameBoard.gameboard[wincon[0]].innerText == 'X' 
                && gameBoard.gameboard[wincon[1]].innerText == 'X' 
                && gameBoard.gameboard[wincon[2]].innerText == 'X')) {
                    alert('GG X Wins');
                    clearBoard();
                }
                else if (user.playerMark == 'O' && gameBoard.gameboard[wincon[0]].innerText == 'O' 
                && gameBoard.gameboard[wincon[1]].innerText == 'O' 
                && gameBoard.gameboard[wincon[2]].innerText == 'O') {
                    alert('GG O Wins');
                    clearBoard();
                }
            }
        }
        })
    }
}

    function clearBoard() {
        for (let i = 0; i < gameBoard.gameboard.length; i++) {
        gameBoard.gameboard[i].innerText = ''
        gameBoard.gameboard[i].backgroundColor = ''                
        }
        gameBoard.gridBoard.style.visibility = 'hidden';
        resetButton.style.visibility = 'visible';
    }

    const resetGame = resetButton.addEventListener('click', function() {
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
        checker,
        clearBoard,
    }
})();


displayController.playerChoice();
displayController.checker();




