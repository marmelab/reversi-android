import {
    ADD_GAME_TO_HISTORY,
} from '../actions/GameActions';

const initialState = [];

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case ADD_GAME_TO_HISTORY: {
            return [...state, action.game];
        }
        default: {
            return state;
        }
    }
};
