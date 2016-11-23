import {
    PLACE_CELL_CHANGE,
    START_NEW_GAME,
} from './ActionTypes';

export function placeCellChange(cellChange) {
    return {
        type: PLACE_CELL_CHANGE,
        cellChange,
    };
}

export function startNewGame(againstComputer) {
    return {
        type: START_NEW_GAME,
        againstComputer,
    };
}
