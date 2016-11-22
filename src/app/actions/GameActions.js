import {
    PLACE_CELL_CHANGE,
    PLACE_CELL_CHANGE_SUCCEEDED,
    PLACE_CELL_CHANGE_FAILED,
    START_NEW_GAME,
} from './ActionTypes';

export function placeCellChange(cellChange) {
    return {
        type: PLACE_CELL_CHANGE,
        cellChange,
    };
}

export function placeCellChangeSucceeded() {
    return {
        type: PLACE_CELL_CHANGE_SUCCEEDED,
    };
}

export function placeCellChangeFailed() {
    return {
        type: PLACE_CELL_CHANGE_FAILED,
    };
}

export function startNewGame() {
    return {
        type: START_NEW_GAME,
    };
}
