const gameBoard = (() => {
    let gameboard = [];
    const gridBoard = document.getElementById('grid-board');
    

    const createGridBoard = () => {
        for (let i = 0; i < 9; i++) {
            const gridCell = document.createElement('div');
            gameboard.push(gridCell);
            gridBoard.appendChild(gridCell);
            // gridCell.addEventListener('click', function(e) {
            //     this.innerText = 'X';
            // });
        }
    }

    return {
        createGridBoard,
        gameboard
    };

})();


const playerFactory = (mark) => {
    return {
        mark,
        playerMark: function() {
            for (let i = 0; i < 9; i++) {
                gameBoard.gameboard[i].addEventListener('click', function() {
                    this.innerText = mark;
                })
            }
        }
    }
}



const displayController = (() => {
    const playerX = playerFactory('X');
    const playerO = playerFactory('O');
    const xButton = document.querySelector('.button.x');
    const oButton = document.querySelector('.button.o');

    const playerChoice = function() {
        xButton.addEventListener('click', function() {
            xButton.style.visibility = 'hidden';
            oButton.style.visibility = 'hidden';
            return playerX.playerMark();
        })
        oButton.addEventListener('click', function() {
            xButton.style.visibility = 'hidden';
            oButton.style.visibility = 'hidden';
            return playerO.playerMark();
        })
    }

    return {
        playerChoice
    }
})();




