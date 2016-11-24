export const PLACE_CELL_CHANGE = 'PLACE_CELL_CHANGE';
export const CHECK_COMPUTER_TURN = 'CHECK_COMPUTER_TURN';
export const START_NEW_GAME = 'START_NEW_GAME';

export function placeCellChange(cellChange) {
    return {
        type: PLACE_CELL_CHANGE,
        cellChange,
    };
}

export function checkComputerTurn() {
    return {
        type: CHECK_COMPUTER_TURN,
    };
}

export function startNewGame(againstComputer) {
    return {
        type: START_NEW_GAME,
        againstComputer,
    };
}
