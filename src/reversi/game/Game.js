import {
    create as createBoard,
    getFlippedCellsFromCellChange,
    drawCells,
} from '../board/Board';

export function create(players) {
    return {
        board: createBoard(8, 8),
        players,
        playerIndex: 0,
    };
}

export function switchPlayer(game) {
    const newGame = Object.assign({}, game);
    newGame.playerIndex = (newGame.playerIndex === 0) ? 1 : 0;
    return newGame;
}

export function playCellChange(cellChange, game) {
    const newGame = Object.assign({}, game);
    const flippedCells = [...getFlippedCellsFromCellChange(), cellChange];
    newGame.board = drawCells(flippedCells);
    return switchPlayer(newGame);
}
