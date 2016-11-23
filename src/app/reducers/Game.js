import {
    PLACE_CELL_CHANGE,
} from '../actions/ActionTypes';

import { create as createPlayer } from '../../reversi/player/Player';
import { create as createGame, playCellChange, tryPlayerSwitch } from '../../reversi/game/Game';
import { TYPE_WHITE, TYPE_BLACK } from '../../reversi/cell/Cell';

const initialGame = createGame([
    createPlayer('You', TYPE_BLACK),
    createPlayer('Computer', TYPE_WHITE),
]);

export default (game = initialGame, action = {}) => {
    switch (action.type) {
    case PLACE_CELL_CHANGE: {
        return tryPlayerSwitch(playCellChange(action.cellChange, game));
    }
    default: {
        return game;
    }
    }
};
