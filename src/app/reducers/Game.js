import {
    PLACE_CELL_CHANGE,
} from '../actions/ActionTypes';

import { playCellChange } from '../../reversi/game/Game';

const initialState = {
    currentGame: null,
    lastGames: [],
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
    case PLACE_CELL_CHANGE:
        return {
            ...state,
            currentGame: playCellChange(action.cellChange, state.currentGame),
        };
    default:
        return state;
    }
};
