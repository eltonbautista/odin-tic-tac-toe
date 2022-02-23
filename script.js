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
        mark
    }
}



const displayController = (() => {
    const playerX = playerFactory('X');
    const playerO = playerFactory('O');
    

    return {
        playerX,
        playerO
    }
})();




