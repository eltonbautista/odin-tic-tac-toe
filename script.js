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
        gameboard
    };

})();
gameBoard.createGridBoard();

const playerFactory = (playerMark, botMark) => {
    return {
        playerMark,
        botMark,
        // playerPlay: function() {
        //     let random = () => Math.floor(Math.random()* 8);
        //     for (let i = 0; i < 9; i++) {
        //         gameBoard.gameboard[i].addEventListener('click', function() {
        //             if (gameBoard.gameboard[i].innerText === '') {
        //                 this.innerText = playerMark;
        //                 console.log(this.innerText)
                        //if (gameBoard.gameboard[i].innerText != 'X' || gameBoard.gameboard[i].innerText != 'O')
                        //gameBoard.gameboard[random()].innerText = botMark;

                    //     if (playerMark == 'X' && (gameBoard.gameboard[0] == 'X' && gameBoard.gameboard[1] == 'X' && gameBoard.gameboard[2] == 'X') || 
                    // (gameBoard.gameboard[0].innerText == 'X' && gameBoard.gameboard[3].innerText == 'X' && gameBoard.gameboard[6].innerText == 'X') || 
                    // (gameBoard.gameboard[0].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[8].innerText == 'X') ||
                    // (gameBoard.gameboard[2].innerText == 'X' && gameBoard.gameboard[5].innerText == 'X' && gameBoard.gameboard[8].innerText == 'X') ||
                    // (gameBoard.gameboard[2].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[6].innerText == 'X') ||
                    // (gameBoard.gameboard[6].innerText == 'X' && gameBoard.gameboard[7].innerText == 'X' && gameBoard.gameboard[8].innerText == 'X') ||
                    // (gameBoard.gameboard[1].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[7].innerText == 'X') ||
                    // (gameBoard.gameboard[3].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[5].innerText == 'X')) {
                    //     return alert('winner!')
                    // } else if (playerMark == 'O' && (gameBoard.gameboard[0].innerText == 'O' && gameBoard.gameboard[1].innerText == 'O' && gameBoard.gameboard[2].innerText == 'O') || 
                    // (gameBoard.gameboard[0].innerText == 'O' && gameBoard.gameboard[3].innerText == 'O' && gameBoard.gameboard[6].innerText == 'O') || 
                    // (gameBoard.gameboard[0].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[8].innerText == 'O') ||
                    // (gameBoard.gameboard[2].innerText == 'O' && gameBoard.gameboard[5].innerText == 'O' && gameBoard.gameboard[8].innerText == 'O') ||
                    // (gameBoard.gameboard[2].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[6].innerText == 'O') ||
                    // (gameBoard.gameboard[6].innerText == 'O' && gameBoard.gameboard[7].innerText == 'O' && gameBoard.gameboard[8].innerText == 'O') ||
                    // (gameBoard.gameboard[1].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[7].innerText == 'O') ||
                    // (gameBoard.gameboard[3].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[5].innerText == 'O')) {
                    //     return alert('winner!')
                    // } else if (playerMark == 'X' && (gameBoard.gameboard[0].innerText == 'O' && gameBoard.gameboard[1].innerText == 'O' && gameBoard.gameboard[2].innerText == 'O') || 
                    // (gameBoard.gameboard[0].innerText == 'O' && gameBoard.gameboard[3].innerText == 'O' && gameBoard.gameboard[6].innerText == 'O') || 
                    // (gameBoard.gameboard[0].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[8].innerText == 'O') ||
                    // (gameBoard.gameboard[2].innerText == 'O' && gameBoard.gameboard[5].innerText == 'O' && gameBoard.gameboard[8].innerText == 'O') ||
                    // (gameBoard.gameboard[2].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[6].innerText == 'O') ||
                    // (gameBoard.gameboard[6].innerText == 'O' && gameBoard.gameboard[7].innerText == 'O' && gameBoard.gameboard[8].innerText == 'O') ||
                    // (gameBoard.gameboard[1].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[7].innerText == 'O') ||
                    // (gameBoard.gameboard[3].innerText == 'O' && gameBoard.gameboard[4].innerText == 'O' && gameBoard.gameboard[5].innerText == 'O')) {
                    //     return alert('loser!')
                    // } else if (playerMark == 'O' && (gameBoard.gameboard[0].innerText == 'X' && gameBoard.gameboard[1].innerText == 'X' && gameBoard.gameboard[2].innerText == 'X') || 
                    // (gameBoard.gameboard[0].innerText == 'X' && gameBoard.gameboard[3].innerText == 'X' && gameBoard.gameboard[6].innerText == 'X') || 
                    // (gameBoard.gameboard[0].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[8].innerText == 'X') ||
                    // (gameBoard.gameboard[2].innerText == 'X' && gameBoard.gameboard[5].innerText == 'X' && gameBoard.gameboard[8].innerText == 'X') ||
                    // (gameBoard.gameboard[2].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[6].innerText == 'X') ||
                    // (gameBoard.gameboard[6].innerText == 'X' && gameBoard.gameboard[7].innerText == 'X' && gameBoard.gameboard[8].innerText == 'X') ||
                    // (gameBoard.gameboard[1].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[7].innerText == 'X') ||
                    // (gameBoard.gameboard[3].innerText == 'X' && gameBoard.gameboard[4].innerText == 'X' && gameBoard.gameboard[5].innerText == 'X')) {
                    //     return alert('loser!')
                    // }
        //             }
        //         })
        //     }
        // },
    }
}


const displayController = (() => {
    const playerX = playerFactory('X', 'O');
    const playerO = playerFactory('O', 'X');
    const xButton = document.querySelector('.button.x');
    const oButton = document.querySelector('.button.o');
    

    const winConOne = [ [0, 4, 8], [0, 3, 6], [2, 5, 8], [1, 4, 7], [2, 4, 6], [0, 1, 2], [6, 7, 8], [3, 4, 5] ]

    const playerChoice = function() {

        xButton.addEventListener('click', function() {
            // xButton.style.visibility = 'hidden';
            // oButton.style.visibility = 'hidden';
            return user = playerX;
        })
        oButton.addEventListener('click', function() {
            // xButton.style.visibility = 'hidden';
            // oButton.style.visibility = 'hidden';
            return user = playerO;
        })
    }

    const checker = function() {
        for (let i = 0; i < gameBoard.gameboard.length; i++) {
            gameBoard.gameboard[i].addEventListener('click', function() {
                if (!(typeof user == typeof undefined) && gameBoard.gameboard[i].innerText === '') {
                this.innerText = user.playerMark;
                for (wincon of winConOne){
                if ((user.playerMark == 'X' && gameBoard.gameboard[wincon[0]].innerText == 'X' 
                && gameBoard.gameboard[wincon[1]].innerText == 'X' 
                && gameBoard.gameboard[wincon[2]].innerText == 'X') || 
                (user.playerMark == 'O' && gameBoard.gameboard[wincon[0]].innerText == 'O' 
                && gameBoard.gameboard[wincon[1]].innerText == 'O' 
                && gameBoard.gameboard[wincon[2]].innerText == 'O')) {
                    alert ('WINNER!')
                }
            }
        }
        })
    }
}

    return {
        playerChoice,
        checker,
    }
})();


displayController.playerChoice();
displayController.checker();




