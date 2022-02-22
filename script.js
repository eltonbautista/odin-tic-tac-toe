const gameBoard = (() => {
    let gameboard = [];
    const gridBoard = document.getElementById('grid-board');
    

    const createGridBoard = () => {
        for (let i = 0; i < 9; i++) {
            const gridCell = document.createElement('div');
            gridCell.dataset.cellPosition = i;
            gameboard.push(gridCell);
            gridBoard.appendChild(gridCell);
        }
    }

    return {
        createGridBoard,
        gameboard
    };

})();


const displayController = (() => {
    
    
})();


const playerFactory = () => {
    return {

    }
}

